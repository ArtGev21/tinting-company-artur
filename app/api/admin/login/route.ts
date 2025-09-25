import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    console.log('Attempting login for:', email);

    const { data, error } = await supabaseServer.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Login error:', error);
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

    if (!data.session) {
      console.error('No session returned from Supabase signInWithPassword');
      return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
    }

    console.log('Login successful for:', data.user.email);

    // Check if user exists in all_users table
    const { data: user, error: userError } = await supabaseServer
      .from('all_users')
      .select('*')
      .eq('id', data.user.id)
      .single();

    if (userError || !user) {
      console.log('User not found in all_users table:', userError);
      return NextResponse.json({ error: 'User not authorized' }, { status: 403 });
    }

    const response = NextResponse.json({ success: true, user: data.user });

    // Set Supabase session cookies
    if (data.session.access_token) {
      response.cookies.set('sb-access-token', data.session.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24, // 24 hours
      });
    }
    
    if (data.session.refresh_token) {
      response.cookies.set('sb-refresh-token', data.session.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    }

    console.log('Session cookies set for user:', data.user.email);
    return response;
  } catch (err) {
    console.error('Login route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}