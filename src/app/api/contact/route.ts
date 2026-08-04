import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  console.log("API Started");
  try {
    const body = await req.json();
    let { name, email, phone, city, service, message } = body;

    // Server-side validation: Trim inputs
    name = name?.trim() || "";
    email = email?.trim() || "";
    phone = phone?.trim() || "";
    city = city?.trim() || "";
    service = service?.trim() || "";
    message = message?.trim() || "N/A";

    // Reject empty values for required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { success: false, message: "Required fields are missing." },
        { status: 400 }
      );
    }

    // IP Address extraction (if available)
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "Unknown";
    const submissionDate = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    console.log("Checking Environment Variables:");
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

    if (process.env.EMAIL_PASS) {
      if (process.env.EMAIL_PASS.includes(" ")) {
        console.warn("WARNING: EMAIL_PASS contains spaces! App Passwords should not have spaces.");
      }
      if (process.env.EMAIL_PASS.length !== 16) {
        console.warn("WARNING: EMAIL_PASS is not 16 characters long. App Passwords are usually 16 characters.");
      }
    } else {
      console.error("ERROR: EMAIL_PASS is missing.");
    }

    if (!process.env.EMAIL_USER) {
      console.error("ERROR: EMAIL_USER is missing.");
    }

    console.log("Building transporter");
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS?.replace(/\s+/g, ""), // Ensure spaces are removed
      },
    });

    console.log("Verifying SMTP connection BEFORE sending mail...");
    try {
      await transporter.verify();
      console.log("SMTP Connected Successfully");
      console.log("SMTP Verified");
    } catch (verifyError: any) {
      console.error("SMTP Verification Failed!");
      console.error("error:", verifyError);
      console.error("error.message:", verifyError.message);
      console.error("error.code:", verifyError.code);
      console.error("error.response:", verifyError.response);
      console.error("error.responseCode:", verifyError.responseCode);
      console.error("error.command:", verifyError.command);
      console.error("error.stack:", verifyError.stack);

      return NextResponse.json(
        {
          success: false,
          error: verifyError.message,
          stack: verifyError.stack,
        },
        { status: 500 }
      );
    }

    console.log("Preparing email");
    // Email Body
    // Using plain text to prevent HTML injection
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Send via the authenticated user
      to: process.env.MAIL_TO || "gokulrengarajan@gmail.com",
      replyTo: email,
      subject: "New Consultation Request - NGA Website",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city || "N/A"}\nSelected Service: ${service}\nMessage: ${message}\n\nSubmission Date & Time: ${submissionDate}\nIP Address: ${ip}`,
    };

    console.log("Sending To:", mailOptions.to);
    console.log("From:", mailOptions.from);

    console.log("Sending email");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent");

    console.log(info);
    console.log("Accepted Recipients:", info.accepted);
    console.log("Rejected Recipients:", info.rejected);
    console.log("SMTP Server Response:", info.response);

    console.log("Returning Success");
    // Return success JSON
    return NextResponse.json(
      { success: true, message: "Your enquiry has been submitted successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    // Handle SMTP errors
    console.error("Failed to send email:");
    console.error("error:", error);
    console.error("error.message:", error.message);
    console.error("error.code:", error.code);
    console.error("error.response:", error.response);
    console.error("error.responseCode:", error.responseCode);
    console.error("error.command:", error.command);
    console.error("error.stack:", error.stack);

    // Return failure JSON
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
}
