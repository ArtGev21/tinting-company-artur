import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 });
    }

    // Create user in Supabase Auth
    const { data, error } = await supabaseServer.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // mark email confirmed if you don’t want to require verification
    });

    if (error) {
      console.error('Signup error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Grant admin role to the new user
    if (data.user) {
      const { error: roleError } = await supabaseServer
        .from('admin_roles')
        .insert({
          user_id: data.user.id,
          role: 'admin'
        });

      if (roleError) {
        console.error('Error granting admin role:', roleError);
        // Note: User is created but role assignment failed
        // You might want to handle this case differently
      }
    }

    return NextResponse.json({ success: true, user: data.user });
  } catch (err) {
    console.error('Signup route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}