import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { supabaseServer } from '@/lib/supabaseServer';

export async function POST(request: NextRequest) {
  const { email } = await request.json();
  if (!email) return NextResponse.json({ error: 'Email is required' }, { status: 400 });

  // Find admin
  const { data: admin } = await supabaseServer
    .from('admin_users')
    .select('id, email')
    .eq('username', email) // or store email separately
    .single();

  if (!admin) return NextResponse.json({ success: true }); // Don’t reveal existence

  // Generate token
  const token = crypto.randomBytes(32).toString('hex');
  const expires = new Date(Date.now() + 1000 * 60 * 30).toISOString(); // 30 min

  await supabaseServer
    .from('admin_users')
    .update({ reset_token: token, reset_token_expires_at: expires })
    .eq('id', admin.id);

  // Send email
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: true,
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/admin/reset?token=${token}`;

  await transporter.sendMail({
    from: `"Rodeo Tint" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Password Reset Request',
    text: `Click the link to reset your password: ${resetUrl}`,
  });

  return NextResponse.json({ success: true });
}