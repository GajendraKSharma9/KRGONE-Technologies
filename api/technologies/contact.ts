import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      serviceNeeded,
      message,
      formType
    } = req.body || {};

    if (!name || !email) {
      return res.status(400).json({ success: false, error: "Name and email are required." });
    }

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

    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short"
    });

    const isConsultation = formType === 'consultation' || formType === 'Book Free Consultation' || formType === 'Free Consultation';
    const formTitle = isConsultation ? "Free Consultation Request" : "Direct Inquiry";

    const custName = name.trim();
    const custEmail = email.trim();
    const custPhone = phone ? phone.trim() : "Not specified";
    const custCompany = company ? company.trim() : "Not specified";
    const service = serviceNeeded ? serviceNeeded.trim() : "AI Solutions & Digital Services";
    const userMessage = message ? message.trim() : "No message provided.";

    // 1. Customer Acknowledgment Email
    const customerHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>KRGONE Technologies - Request Received</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Arial, sans-serif; color: #334155;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 36px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
                
                <!-- BRANDING HEADER -->
                <tr>
                  <td style="background-color: #0b1f3a; padding: 32px 28px; text-align: center; border-bottom: 4px solid #d4af37;">
                    <div style="font-size: 26px; font-weight: 900; letter-spacing: 2px; color: #ffffff; margin-bottom: 4px;">
                      KRG<span style="color: #d4af37;">ONE</span> Technologies
                    </div>
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #38bdf8;">
                      AI-Powered Digital Solutions & Business Automation
                    </div>
                  </td>
                </tr>

                <!-- BODY CONTENT -->
                <tr>
                  <td style="padding: 36px 32px 28px 32px; font-size: 15px; line-height: 1.7; color: #334155;">
                    <p style="margin: 0 0 16px 0; font-size: 16px; color: #0b1f3a;">Dear <strong>${custName}</strong>,</p>
                    
                    <p style="margin: 0 0 16px 0;">Thank you for reaching out to <strong>KRGONE Technologies</strong>.</p>
                    
                    <p style="margin: 0 0 16px 0;">We have received your <strong>${formTitle}</strong> successfully. Our enterprise technology specialists are reviewing your requirement and will contact you within 24 hours.</p>

                    <!-- SUBMITTED SUMMARY BOX -->
                    <div style="background-color: #f1f5f9; border-left: 4px solid #2563eb; border-radius: 8px; padding: 18px; margin: 24px 0;">
                      <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: #2563eb; letter-spacing: 1px; margin-bottom: 12px;">
                        📋 Your Request Summary
                      </div>
                      <table width="100%" cellspacing="0" cellpadding="0" style="font-size: 13px; color: #334155;">
                        <tr>
                          <td style="padding: 4px 0; font-weight: 700; width: 130px; color: #64748b;">Full Name:</td>
                          <td style="padding: 4px 0; font-weight: 800; color: #0b1f3a;">${custName}</td>
                        </tr>
                        <tr>
                          <td style="padding: 4px 0; font-weight: 700; color: #64748b;">Email Address:</td>
                          <td style="padding: 4px 0; font-weight: 800; color: #2563eb;">${custEmail}</td>
                        </tr>
                        <tr>
                          <td style="padding: 4px 0; font-weight: 700; color: #64748b;">Phone / WhatsApp:</td>
                          <td style="padding: 4px 0; font-weight: 800; color: #0b1f3a;">${custPhone}</td>
                        </tr>
                        <tr>
                          <td style="padding: 4px 0; font-weight: 700; color: #64748b;">Company Name:</td>
                          <td style="padding: 4px 0; font-weight: 800; color: #0b1f3a;">${custCompany}</td>
                        </tr>
                        <tr>
                          <td style="padding: 4px 0; font-weight: 700; color: #64748b;">Service Required:</td>
                          <td style="padding: 4px 0; font-weight: 800; color: #d4af37;">${service}</td>
                        </tr>
                        ${userMessage ? `
                        <tr>
                          <td style="padding: 4px 0; font-weight: 700; color: #64748b; vertical-align: top;">Project Details:</td>
                          <td style="padding: 4px 0; color: #334155;">${userMessage}</td>
                        </tr>
                        ` : ''}
                      </table>
                    </div>
                    
                    <p style="margin: 0 0 16px 0;">If your requirement is urgent, feel free to call or WhatsApp us at <strong>+91 7300300330</strong> or reply directly to this email.</p>
                    
                    <p style="margin: 0 0 24px 0;">We look forward to transforming your business with AI and modern software.</p>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #0b1f3a; font-size: 14px; line-height: 1.6;">
                      <strong style="color: #0b1f3a; font-size: 15px;">KRGONE Technologies Desk</strong><br>
                      <span style="font-size: 12px; color: #64748b;">Technology Division of KRGONE Business Transformation Group</span><br>
                      Email: <a href="mailto:support.krgone@gmail.com" style="color: #2563eb; text-decoration: none;">support.krgone@gmail.com</a><br>
                      Phone / WhatsApp: <a href="tel:+917300300330" style="color: #0b1f3a; text-decoration: none;">+91 7300300330</a><br>
                      Jaipur, Rajasthan, India
                    </div>
                  </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                  <td style="padding: 20px 28px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; font-size: 11px; color: #94a3b8;">
                    Submitted on ${formattedDate} IST • KRGONE Technologies
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // 2. Internal Lead Alert Email to support.krgone@gmail.com
    const leadHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Lead Alert - KRGONE Technologies</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #0b1f3a; font-family: 'Segoe UI', Arial, sans-serif; color: #e2e8f0;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0b1f3a; padding: 30px 15px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" style="max-width: 620px; background-color: #1e293b; border-radius: 16px; overflow: hidden; border: 1px solid #334155; box-shadow: 0 20px 30px rgba(0,0,0,0.5);">
                
                <!-- HEADER ALERT -->
                <tr>
                  <td style="background-color: #2563eb; padding: 20px 28px; color: #ffffff;">
                    <div style="font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; color: #93c5fd;">
                      🚨 KRGONE Technologies Lead System
                    </div>
                    <h2 style="margin: 4px 0 0 0; font-size: 20px; font-weight: 900; color: #ffffff;">
                      New ${formTitle}: ${custName} (${custCompany})
                    </h2>
                  </td>
                </tr>

                <!-- CONTENT -->
                <tr>
                  <td style="padding: 24px 28px;">
                    
                    <div style="background-color: #0f172a; border: 1px solid #3b82f6; border-radius: 12px; padding: 16px; margin-bottom: 20px;">
                      <div style="font-size: 11px; font-weight: 800; color: #d4af37; text-transform: uppercase; letter-spacing: 1px;">
                        Requested Service
                      </div>
                      <div style="font-size: 18px; font-weight: 900; color: #ffffff; margin-top: 2px;">
                        ${service}
                      </div>
                    </div>

                    <h3 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 800; color: #38bdf8; text-transform: uppercase; border-bottom: 1px solid #334155; padding-bottom: 6px;">
                      👤 Prospect Details
                    </h3>

                    <table width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 20px; font-size: 13px;">
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8; width: 140px;">Full Name:</td>
                        <td style="padding: 8px 0; font-weight: 800; color: #ffffff;">${custName}</td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Email Address:</td>
                        <td style="padding: 8px 0; font-weight: 800; color: #38bdf8;">
                          <a href="mailto:${custEmail}" style="color: #38bdf8; text-decoration: underline;">${custEmail}</a>
                        </td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Phone / WhatsApp:</td>
                        <td style="padding: 8px 0; font-weight: 800; color: #fef08a;">
                          <a href="tel:${custPhone}" style="color: #fef08a; text-decoration: none;">${custPhone}</a>
                        </td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Company Name:</td>
                        <td style="padding: 8px 0; color: #e2e8f0;">${custCompany}</td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Form Type:</td>
                        <td style="padding: 8px 0; font-weight: 800; color: #d4af37;">${formTitle}</td>
                      </tr>
                    </table>

                    ${userMessage ? `
                    <h3 style="margin: 0 0 10px 0; font-size: 14px; font-weight: 800; color: #38bdf8; text-transform: uppercase; border-bottom: 1px solid #334155; padding-bottom: 6px;">
                      💬 Project Message / Requirements
                    </h3>
                    <div style="background-color: #0f172a; padding: 14px; border-radius: 8px; border: 1px solid #334155; font-size: 13px; color: #cbd5e1; line-height: 1.6; margin-bottom: 20px;">
                      ${userMessage}
                    </div>
                    ` : ''}

                  </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                  <td style="padding: 20px 28px; background-color: #0f172a; border-top: 1px solid #334155; text-align: center;">
                    <a href="mailto:${custEmail}" style="display: inline-block; background-color: #38bdf8; color: #0f172a; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 900; font-size: 12px; text-transform: uppercase; margin-right: 8px;">
                      Reply to ${custEmail}
                    </a>
                    ${custPhone !== 'Not specified' ? `
                    <a href="tel:${custPhone}" style="display: inline-block; background-color: #4ade80; color: #0f172a; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 900; font-size: 12px; text-transform: uppercase;">
                      Call ${custPhone}
                    </a>
                    ` : ''}
                    <p style="font-size: 11px; color: #64748b; margin-top: 12px;">
                      Received at ${formattedDate} IST • KRGONE Technologies
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const customerMailOptions = {
      from: `"KRGONE Technologies" <${user}>`,
      replyTo: `support.krgone@gmail.com`,
      to: custEmail,
      subject: `Inquiry Received - KRGONE Technologies | ${service}`,
      html: customerHtml,
      text: `Dear ${custName},\n\nThank you for reaching out to KRGONE Technologies regarding ${service}. We have received your request and will contact you within 24 hours.\n\nBest Regards,\nKRGONE Technologies\nEmail: support.krgone@gmail.com\nPhone: +91 7300300330`
    };

    const leadMailOptions = {
      from: `"KRGONE Tech Lead Engine" <${user}>`,
      replyTo: custEmail,
      to: notificationEmail,
      subject: `🚨 KRGONE Tech Lead: ${custName} (${custCompany}) - ${service}`,
      html: leadHtml,
      text: `NEW LEAD ALERT - KRGONE TECHNOLOGIES\n\nName: ${custName}\nEmail: ${custEmail}\nPhone: ${custPhone}\nCompany: ${custCompany}\nService: ${service}\nMessage: ${userMessage}\nDate: ${formattedDate}`
    };

    const isSameRecipient = custEmail.toLowerCase() === notificationEmail.toLowerCase();

    let customerSent = false;
    let leadSent = false;

    if (isSameRecipient) {
      try {
        await transporter.sendMail(leadMailOptions);
        customerSent = true;
        leadSent = true;
      } catch (err) {
        console.error("Error sending single lead alert for Tech:", err);
      }
    } else {
      const results = await Promise.allSettled([
        transporter.sendMail(customerMailOptions),
        transporter.sendMail(leadMailOptions)
      ]);

      customerSent = results[0].status === 'fulfilled';
      leadSent = results[1].status === 'fulfilled';
    }

    return res.status(200).json({
      success: true,
      message: "KRGONE Technologies inquiry processed successfully",
      customerSent,
      leadSent,
      timestamp: new Date().toISOString()
    });

  } catch (err: any) {
    console.error("Error in Vercel api/technologies/contact function:", err);
    return res.status(500).json({
      success: false,
      error: err.message || "Failed to process inquiry"
    });
  }
}
