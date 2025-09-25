import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';
import { sanitizeText, checkRateLimit } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const clientIp = request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(`username_check:${clientIp}`, 10, 60000)) {
      console.log(`[RATE LIMIT] Username check blocked for IP: ${clientIp}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { username } = body;
    console.log('Checking username:', username);

    if (!username || typeof username !== 'string') {
      return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }

    const sanitizedUsername = sanitizeText(username);
    if (sanitizedUsername.length < 3 || sanitizedUsername.length > 50) {
      return NextResponse.json({ error: 'Invalid username length' }, { status: 400 });
    }

    // Check if username exists
    const { data: existingUser, error } = await supabaseServer
      .from('all_users')
      .select('email')
      .eq('email', sanitizedUsername)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Database error checking username:', error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    console.log('Username exists:', !!existingUser);

    return NextResponse.json({
      success: true,
      exists: !!existingUser
    });

  } catch (error) {
    console.error('Username check error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}