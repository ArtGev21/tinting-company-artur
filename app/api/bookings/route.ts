import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      address,
      serviceType,
      vehicleType,
      package: pkg,
      serviceDate,
      salesRepId,
      message,
      avgPrice
    } = body;

    // Required fields check
    if (!name || !email || !phone || !address || !serviceType || !vehicleType || !pkg || !serviceDate || !salesRepId) {
      return NextResponse.json({ error: "All fields except message are required" }, { status: 400 });
    }

    // Insert into bookings table
    const { data: salesRep, error: repError } = await supabaseServer
      .from('sales_reps')
      .select('rep_id, name')
      .eq('rep_id', salesRepId) // repId is the text code
      .single();

    if (repError || !salesRep) {
      return NextResponse.json({ error: 'Invalid sales representative' }, { status: 400 });
    }

// Use salesRep.id (UUID) when inserting
    const { data: newBooking, error: dbError } = await supabaseServer
      .from("bookings")
      .insert([
        {
          name,
          email,
          phone,
          address,
          service_type: serviceType,
          vehicle_type: vehicleType,
          package_id: pkg,
          service_date: serviceDate,
          message: message || null,
          avg_price: avgPrice || 0,
          sales_rep_id: salesRep.rep_id, // ✅ ID here
        },
      ])
      .select()
      .single();

    if (dbError || !newBooking) {
      console.error("DB insert error:", dbError);
      return NextResponse.json({ error: "Failed to save booking" }, { status: 500 });
    }

    // Send HTML email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlContent = `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Service Type:</strong> ${serviceType}</p>
      <p><strong>Package:</strong> ${pkg}</p>
      <p><strong>Vehicle Type:</strong> ${vehicleType}</p>
      <p><strong>Preferred Date:</strong> ${serviceDate}</p>
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
      <hr/>
      <p><strong>Estimated Price:</strong> $${avgPrice || 0}</p>
    `;

    await transporter.sendMail({
      from: `"Rodeo Tint" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Booking Confirmation",
      html: htmlContent,
    });

    return NextResponse.json({ success: true, data: newBooking });
  } catch (err) {
    console.error("Booking route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}