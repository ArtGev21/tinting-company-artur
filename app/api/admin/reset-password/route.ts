// app/api/admin/reset-password/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { accessToken, password } = body;

    if (!accessToken || !password) {
      return NextResponse.json({ error: 'Access token and password are required.' }, { status: 400 });
    }

    // Update user password using Supabase Admin API
    const { data, error } = await supabaseServer.auth.admin.updateUserById(
      // Supabase does not allow updating by access_token directly
      // You must resolve the user ID from the access_token server-side
      // For simplicity, typically you use the client-side update
      // Or decode JWT here if you store it and get user ID
      '', // <-- user ID (needs to be extracted)
      { password }
    );

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Password updated successfully.' });
  } catch (err) {
    console.error('Reset password error:', err);
    return NextResponse.json({ error: 'Failed to reset password.' }, { status: 500 });
  }
}