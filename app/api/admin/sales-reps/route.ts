// app/api/admin/sales-reps/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';
import { sanitizeText, generateRepId } from '@/lib/utils';

// Validate admin session
async function requireAdminSession(req: NextRequest) {
  try {
    // Get session from cookies
    const sessionCookie = req.cookies.get('sb-access-token');
    if (!sessionCookie) {
      console.log('No session cookie found');
      return null;
    }

    // Verify the session with Supabase
  const { data, error } = await supabaseServer.auth.getSession();
    if (error || !data.session) {
      console.log('Invalid session:', error);
      return null;
    }

    const session = data.session;
    console.log('Valid session found for user:', session.user.email);

    // Check if user exists in all_users table
    const { data: user, error: userError } = await supabaseServer
      .from('all_users')
      .select('*')
      .eq('id', session.user.id)
      .single();

    if (userError || !user) {
      console.log('User not found in all_users table:', userError);
      return null;
    }

    console.log('User validated:', user.email);
    return user;
  } catch (err) {
    console.error('Session validation error:', err);
    return null;
  }
}

// GET /api/admin/sales-reps
export async function GET(request: NextRequest) {
  console.log('--- GET /api/admin/sales-reps START ---');
  try {
    const adminUser = await requireAdminSession(request);
    console.log('adminUser:', adminUser);

    if (!adminUser) {
      console.log('Unauthorized GET request');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.log('Fetching sales reps...');
    const { data: reps, error: repsError } = await supabaseServer
      .from('sales_reps')
      .select('*')
      .order('created_at', { ascending: false });

    if (repsError) {
      console.error('Error fetching sales reps:', repsError);
      return NextResponse.json({ error: 'Failed to fetch sales reps' }, { status: 500 });
    }

    console.log('Fetched reps:', reps?.length || 0);

    // Get counts via RPCs (if they exist)
    const { data: overallData, error: overallError } = await supabaseServer.rpc('get_sales_rep_overall_clients');
    const { data: monthlyData, error: monthlyError } = await supabaseServer.rpc('get_sales_rep_monthly_clients');

    if (overallError) console.log('Overall RPC error (non-critical):', overallError);
    if (monthlyError) console.log('Monthly RPC error (non-critical):', monthlyError);

    const repsWithCounts = (reps || []).map((rep: any) => {
      const overallRep = Array.isArray(overallData) ? overallData.find((o: any) => o.rep_id === rep.rep_id) : null;
      const monthlyRep = Array.isArray(monthlyData) ? monthlyData.find((m: any) => m.rep_id === rep.rep_id) : null;

      const merged = {
        ...rep,
        total_clients: overallRep?.total_clients ?? 0,
        monthly_clients: monthlyRep?.monthly_clients ?? 0,
      };

      return merged;
    });

    console.log('Returning repsWithCounts length:', repsWithCounts.length);
    console.log('--- GET /api/admin/sales-reps END ---');
    return NextResponse.json({ success: true, data: repsWithCounts });
  } catch (err) {
    console.error('GET /api/admin/sales-reps error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST /api/admin/sales-reps
export async function POST(request: NextRequest) {
  console.log('--- POST /api/admin/sales-reps START ---');
  try {
    const adminUser = await requireAdminSession(request);
    console.log('adminUser:', adminUser);

    if (!adminUser) {
      console.log('Unauthorized POST request');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name, email, phone } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Name, email, and phone are required' }, { status: 400 });
    }

    const repId = generateRepId();

    const { data, error } = await supabaseServer
      .from('sales_reps')
      .insert({
        name: sanitizeText(name),
        rep_id: repId,
        email: email || null,
        phone: phone || null,
      })
      .select()
      .single();
    
    if (error) {
      console.error('Error creating sales rep:', error);
      return NextResponse.json({ error: 'Failed to create rep' }, { status: 500 });
    }

    console.log('Successfully created sales rep:', data);
    console.log('--- POST /api/admin/sales-reps END ---');
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('POST /api/admin/sales-reps error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}