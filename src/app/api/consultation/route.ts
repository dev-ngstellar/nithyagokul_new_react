import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createAdminNotificationTemplate, createAutoReplyTemplate } from "@/lib/emailTemplates";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, city, service } = data;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for") || "Unknown";
    const userAgent = req.headers.get("user-agent") || "Unknown";
    const date = new Date().toLocaleString();

    const emailData = {
      Name: name,
      Email: email,
      Phone: phone,
      City: city,
      Service: service,
      Date: date,
      "IP Address": ip,
      "User Agent": userAgent,
    };

    const adminTemplate = createAdminNotificationTemplate("Consultation Request", emailData);
    const autoReplyTemplate = createAutoReplyTemplate(name, "Consultation");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send admin notification
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.MAIL_TO || "gokulrengarajan@gmail.com",
      replyTo: email,
      subject: `New Consultation Request from ${name}`,
      html: adminTemplate,
    });

    // Send auto-reply to user
    await transporter.sendMail({
      from: `"Nithya Gokul Associates" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Consultation Request - Nithya Gokul Associates",
      html: autoReplyTemplate,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Consultation Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
