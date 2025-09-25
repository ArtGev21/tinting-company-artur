import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { supabaseServer } from '@/lib/supabaseServer';

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop(); // get last segment
  const session = await getAdminSession();
  //if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { error } = await supabaseServer.from('sales_reps').delete().eq('id', id);
  if (error) return NextResponse.json({ error: 'Failed to delete rep' }, { status: 500 });
  return NextResponse.json({ success: true });
}