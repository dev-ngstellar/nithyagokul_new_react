import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createAdminNotificationTemplate, createAutoReplyTemplate } from "@/lib/emailTemplates";

export async function POST(req: Request) {
  console.log("API Started");
  try {
    const formData = await req.formData();
    const name = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const bio = formData.get("bio") as string;
    const resume = formData.get("resume") as File;
    const jobTitle = formData.get("jobTitle") as string;

    if (!name || !email || !phone || !resume) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for") || "Unknown";
    const userAgent = req.headers.get("user-agent") || "Unknown";
    const date = new Date().toLocaleString();

    const emailData = {
      Name: name,
      Email: email,
      Phone: phone,
      "Job Title": jobTitle || "General Application",
      Bio: bio || "Not provided",
      Date: date,
      "IP Address": ip,
      "User Agent": userAgent,
    };

    const adminTemplate = createAdminNotificationTemplate("Job Application", emailData);
    const autoReplyTemplate = createAutoReplyTemplate(name, "Job Application");

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

    console.log("Validating attachment");
    let buffer: Buffer;
    try {
      const arrayBuffer = await resume.arrayBuffer();
      buffer = Buffer.from(arrayBuffer);
      if (!buffer || buffer.length === 0) {
        throw new Error("Attachment buffer is empty or invalid.");
      }
      console.log("Attachment buffer validated successfully. Size:", buffer.length);
    } catch (bufferError: any) {
      console.error("Attachment Error:", bufferError);
      return NextResponse.json(
        {
          success: false,
          error: bufferError.message,
          stack: bufferError.stack,
        },
        { status: 500 }
      );
    }

    console.log("Building transporter");
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
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

    console.log("Preparing email (Admin Notification)");
    const adminMailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.MAIL_TO || "gokulrengarajan@gmail.com",
      replyTo: email,
      subject: `New Job Application from ${name} - ${jobTitle || "General"}`,
      html: adminTemplate,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    };

    console.log("Sending To:", adminMailOptions.to);
    console.log("From:", adminMailOptions.from);

    console.log("Sending email (Admin Notification)");
    const adminInfo = await transporter.sendMail(adminMailOptions);
    console.log("Email Sent (Admin)");

    console.log(adminInfo);
    console.log("Accepted Recipients:", adminInfo.accepted);
    console.log("Rejected Recipients:", adminInfo.rejected);
    console.log("SMTP Server Response:", adminInfo.response);

    console.log("Preparing email (Auto-Reply)");
    const autoReplyMailOptions = {
      from: `"Nithya Gokul Associates" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your job application - Nithya Gokul Associates",
      html: autoReplyTemplate,
    };

    console.log("Sending email (Auto-Reply)");
    const autoReplyInfo = await transporter.sendMail(autoReplyMailOptions);
    console.log("Email Sent (Auto-Reply)");
    console.log(autoReplyInfo);

    console.log("Returning Success");
    return NextResponse.json({ success: true, message: "Application sent successfully" });
  } catch (error: any) {
    console.error("Failed to send email:");
    console.error("error:", error);
    console.error("error.message:", error.message);
    console.error("error.code:", error.code);
    console.error("error.response:", error.response);
    console.error("error.responseCode:", error.responseCode);
    console.error("error.command:", error.command);
    console.error("error.stack:", error.stack);

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
