import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';
import { randomBytes } from 'crypto';


export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    const { data, error } = await supabaseServer.auth.signInWithPassword({
      email,
      password,
    });

    console.log('Supabase signInWithPassword data:', data);

    if (error) {
      console.error('Login error:', error);
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

    // Use the session returned from signInWithPassword directly
    if (!data.session) {
      console.error('No session returned from Supabase signInWithPassword');
      return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
    }

    // Create an admin session cookie (server-side session) containing minimal info + CSRF token
    const csrfToken = randomBytes(32).toString('hex');
    const expiresAt = Date.now() + 1000 * 60 * 60 * 2; // 2 hours
    const adminSession = {
      userId: data.user?.id,
      email: data.user?.email,
      csrfToken,
      expiresAt,
    };

    const response = NextResponse.json({ success: true, user: data.user, csrfToken });
    console.log('Creating admin session cookie for user:', data.user);

    // Persist server session cookie so other server routes can read it via cookies()
    response.cookies.set('admin_session', JSON.stringify(adminSession), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 2, // seconds
    });

    // Optionally also set Supabase tokens (if you rely on them elsewhere)
    if (data.session.access_token) {
      response.cookies.set('sb-access-token', data.session.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
      });
    }
    if (data.session.refresh_token) {
      response.cookies.set('sb-refresh-token', data.session.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
      });
    }

    return response;
  } catch (err) {
    console.error('Login route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}