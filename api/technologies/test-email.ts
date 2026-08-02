import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  try {
    const user = process.env.TECH_SMTP_USER || "support.krgone@gmail.com";
    const rawPass = process.env.TECH_SMTP_PASS || "mqkz tjdf vdkn xrlk";
    const pass = rawPass.replace(/\s+/g, "");
    const notificationEmail = process.env.TECH_NOTIFICATION_EMAIL || "support.krgone@gmail.com";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: false
      }
    });

    const info = await transporter.sendMail({
      from: `"KRGONE Technologies Engine" <${user}>`,
      to: notificationEmail,
      subject: "🧪 KRGONE Technologies SMTP Diagnostic Test (Vercel Serverless)",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #0b1f3a; color: #ffffff; border-radius: 12px; border: 1px solid #d4af37;">
          <h2 style="color: #d4af37; margin-top: 0;">KRGONE Technologies Vercel Email Dispatcher Active</h2>
          <p style="color: #cbd5e1;">Gmail SMTP transport verified successfully for <strong>${user}</strong>.</p>
          <p style="font-size: 12px; color: #38bdf8;">Recipient Notification Desk: ${notificationEmail}</p>
          <p style="font-size: 11px; color: #94a3b8;">Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        </div>
      `
    });

    return res.status(200).json({ success: true, messageId: info.messageId, recipient: notificationEmail, sender: user });
  } catch (error: any) {
    console.error("Error in Vercel api/technologies/test-email:", error);
    return res.status(500).json({ success: false, error: error.message || "Failed to send test email" });
  }
}
