import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const user = process.env.SMTP_USER || "enquiry.krgone@gmail.com";
    const rawPass = process.env.SMTP_PASS || "xizf aulp djxr sptv";
    const pass = rawPass.replace(/\s+/g, "");
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "enquiry.krgone@gmail.com";

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
      from: `"KRG ONE Engine" <${user}>`,
      to: notificationEmail,
      subject: "🧪 KRG ONE SMTP Diagnostic Test",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #0f172a; color: #ffffff; border-radius: 8px;">
          <h2 style="color: #d4af37; margin-top: 0;">KRG ONE Email Dispatcher Active</h2>
          <p style="color: #cbd5e1;">SMTP transport verified successfully for <strong>${user}</strong>.</p>
          <p style="font-size: 12px; color: #94a3b8;">Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        </div>
      `
    });

    res.json({ success: true, messageId: info.messageId, recipient: notificationEmail });
  } catch (error: any) {
    console.error("Error in test-email endpoint:", error);
    res.status(500).json({ success: false, error: error.message || "Failed to send test email" });
  }
}
