import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';

export async function POST() {
  try {
    await supabaseServer.auth.signOut();

    const response = NextResponse.json({ success: true });
    response.cookies.delete('sb-access-token');
    response.cookies.delete('sb-refresh-token');

    return response;
  } catch (err) {
    console.error('Logout route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}