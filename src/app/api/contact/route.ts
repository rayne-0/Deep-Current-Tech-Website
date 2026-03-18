import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configure Nodemailer transporter.
    // NOTE: The user needs to add SMTP credentials to their .env.local file.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"DCT Website Form" <${process.env.SMTP_USER || "no-reply@deepcurrenttech.org"}>`,
      to: "sales@deepcurrenttech.org", // Forward directly to sales
      replyTo: email,
      subject: `New Lead: ${name} from ${company || "Unknown Company"} (${service || "No service selected"})`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Interested In: ${service || "Not specified"}

Message:
${message}
      `,
      html: `
        <h3 style="color:#00f2ff;background:#050505;padding:10px;">New Application Form Submission</h3>
        <div style="font-family:sans-serif;background:#fafafa;padding:20px;border-radius:8px;color:#111;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Interested In:</strong> ${service || "Not specified"}</p>
          <hr style="border:1px solid #ddd;margin:20px 0;"/>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("API Contact Error:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
