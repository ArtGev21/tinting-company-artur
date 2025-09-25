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
      message,
      avgPrice,
    } = body;

    // ✅ Insert into bookings table
    const { error: dbError } = await supabaseServer.from("bookings").insert([
      {
        name,
        email,
        phone,
        address,
        service_type: serviceType,
        vehicle_type: vehicleType,
        package_id: pkg,
        service_date: serviceDate,
        message,
        avg_price: avgPrice,
      },
    ]);

    if (dbError) {
      console.error("DB insert error:", dbError);
      return NextResponse.json({ error: "Failed to save booking" }, { status: 500 });
    }

    // ✅ Send Email (HTML format)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true = SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
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
      <p><strong>Message:</strong> ${message}</p>
      <hr/>
      <p><strong>Estimated Price:</strong> $${avgPrice}</p>
    `;

    await transporter.sendMail({
      from: `"Rodeo Tint" <${process.env.SMTP_USER}>`,
      to: email, // your client email
      subject: "New Booking Request",
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error in contact route:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}