import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> } // 👈 params is a Promise
) {
  try {
    const { id: repId } = await context.params; // ✅ await it
    console.log('Fetching monthly clients for repId:', repId);

    const { data, error } = await supabaseServer.rpc('get_sales_rep_monthly_clients');
    if (error) throw error;

    // Find the correct rep
    const rep = data.find((r: any) => r.rep_id === repId);
    console.log('Returning monthly rep data:', rep);

    return NextResponse.json({
      success: true,
      data: rep || { rep_id: repId, monthly_clients: 0 }
    });

  } catch (err) {
    //console.error('Monthly clients API error:', err);
    return NextResponse.json({ error: 'Failed to fetch monthly clients' }, { status: 500 });
  }
}