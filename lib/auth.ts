// lib/auth.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { supabaseServer } from './supabaseServer';
import bcrypt from 'bcryptjs';
import { randomBytes } from 'crypto';

export interface AdminSession {
  userId?: string;
  username?: string;
  email?: string;
  csrfToken?: string;
  expiresAt?: number;
}

// Login admin using Supabase helper (optional)
export async function loginAdmin(email: string, password: string) {
  const { data, error } = await supabaseServer.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('Login error:', error.message);
    return null;
  }

  // data.session contains access_token, refresh_token, and user info
  return data.session;
}

// Minimal cookie getter interface compatible with Next cookie stores
type CookieGetter = {
  get(name: string): { value: string } | undefined;
};

// Create a server-side admin session cookie
export function createSession(response: NextResponse, session: AdminSession, rememberMe: boolean = false) {
  const maxAge = rememberMe ? 30 * 24 * 60 * 60 : 24 * 60 * 60; // seconds
  response.cookies.set('admin_session', JSON.stringify(session), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge,
    path: '/',
  });
}

// Read admin session from cookies — accepts a cookie getter (request.cookies) or falls back to cookies()
export function getSession(requestCookies?: CookieGetter): AdminSession | null {
  try {
    let sessionCookie;
    if (requestCookies) {
      sessionCookie = requestCookies.get('admin_session');
    } else {
      const cookieStore = cookies();
      // cookieStore has a get method at runtime; TS may complain depending on Next version
      // @ts-ignore
      sessionCookie = cookieStore.get('admin_session');
    }

    if (!sessionCookie) {
      // Fallback: try to read Supabase access token cookie (sb-access-token)
      let accessTokenCookie;
      if (requestCookies) {
        accessTokenCookie = requestCookies.get('sb-access-token');
      } else {
        // @ts-ignore
        const cookieStore = cookies();
        // @ts-ignore
        accessTokenCookie = cookieStore.get('sb-access-token');
      }

      if (accessTokenCookie && accessTokenCookie.value) {
        try {
          const token = accessTokenCookie.value;
          // JWTs are three parts: header.payload.signature
          const parts = token.split('.');
          if (parts.length >= 2) {
            const payload = parts[1];
            const decoded = JSON.parse(Buffer.from(payload, 'base64').toString('utf8'));
            const sessionFromToken: AdminSession = {
              userId: decoded.sub,
              email: decoded.email,
              expiresAt: decoded.exp ? decoded.exp * 1000 : undefined,
            };
            if (sessionFromToken.expiresAt && Date.now() > sessionFromToken.expiresAt) return null;
            return sessionFromToken;
          }
        } catch (err) {
          console.warn('Failed to parse sb-access-token payload:', err);
        }
      }

      return null;
    }

    const session: AdminSession = JSON.parse(sessionCookie.value);
    if (session.expiresAt && Date.now() > session.expiresAt) return null;

    return session;
  } catch (err) {
    console.error('Session parsing error:', err);
    return null;
  }
}

export function clearSession(response: NextResponse) {
  response.cookies.delete('admin_session');
}

export function verifyCsrfToken(token?: string, requestCookies?: CookieGetter): boolean {
  if (!token) return false;
  const session = getSession(requestCookies);
  return session?.csrfToken === token;
}

// Optional helper to get Supabase auth session (if you need to talk to Supabase auth directly)
export async function getAdminSession() {
  const { data: { session }, error } = await supabaseServer.auth.getSession();
  if (error || !session) return null;
  return session.user;
}

// Logout admin (Supabase signOut)
export async function logoutAdmin() {
  const { error } = await supabaseServer.auth.signOut();
  if (error) console.error('Logout error:', error.message);
}