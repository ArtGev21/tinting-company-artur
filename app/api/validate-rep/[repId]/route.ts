import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';

export async function GET(request: NextRequest, context: any) {
  try {
    const repId = context.params.repId;

    // Validate rep ID format (8 alphanumeric characters)
    const repIdRegex = /^[A-Z0-9]{8}$/;
    if (!repIdRegex.test(repId)) {
      return NextResponse.json({ error: 'Invalid rep ID format' }, { status: 400 });
    }

    // Fetch sales rep by rep_id
    const { data: salesRep, error } = await supabaseServer
      .from('sales_reps')
      .select('id, name, rep_id')
      .eq('rep_id', repId)
      .single();

    if (error || !salesRep) {
      return NextResponse.json({ error: 'Sales representative not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: {
        id: salesRep.id,
        name: salesRep.name,
        repId: salesRep.rep_id
      }
    });
  } catch (error) {
    console.error('Rep validation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}