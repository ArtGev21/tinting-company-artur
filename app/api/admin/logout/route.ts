import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = NextResponse.json({ success: true });
    
    // Clear all session cookies
    response.cookies.delete('sb-access-token');
    response.cookies.delete('sb-refresh-token');
    response.cookies.delete('admin_session');

    return response;
  } catch (err) {
    console.error('Logout route error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}