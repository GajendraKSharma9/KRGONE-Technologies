import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const {
      fullName,
      email,
      mobileNumber,
      companyName,
      role,
      industry,
      revenue,
      engagementFocus,
      message,
      requestNda
    } = req.body || {};

    const custName = fullName || "Valued Leader";
    const custEmail = email || "";
    const phone = mobileNumber || "Not specified";
    const compName = companyName || "Enterprise Client";
    const userRole = role || "Executive";
    const ind = industry || "General Business";
    const revBand = revenue || "Not specified";
    const focus = engagementFocus || "General Strategic Inquiry";
    const msg = message || "No additional notes provided.";
    const ndaRequested = requestNda ? "YES - Mutual NDA Requested Prior to Call" : "Standard Confidentiality Agreement";

    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short"
    });

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

    const customerText = `Dear ${custName},

Thank you for reaching out to KRGONE.

We have received your enquiry successfully.

Our consulting team is reviewing your request and will respond within one business day.

If your enquiry requires immediate attention, please contact us directly.

Thank you for choosing KRGONE.

We look forward to speaking with you.

Warm Regards,

KRG ONE Advisory Team
Email: enquiry.krgone@gmail.com
Tel: +91 7300300330
Jaipur, India`;

    const customerHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>KRGONE Enquiry Acknowledgment</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Arial, sans-serif; color: #334155;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e2e8f0;">
                
                <!-- BRANDING HEADER -->
                <tr>
                  <td style="background-color: #0f172a; padding: 32px 28px; text-align: center; border-bottom: 4px solid #c29d2f;">
                    <div style="font-size: 26px; font-weight: 900; letter-spacing: 2px; color: #ffffff; margin-bottom: 4px;">
                      KRG <span style="color: #c29d2f;">ONE</span>
                    </div>
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #94a3b8;">
                      Management Consulting & Enterprise Advisory
                    </div>
                  </td>
                </tr>

                <!-- BODY CONTENT -->
                <tr>
                  <td style="padding: 36px 32px 32px 32px; font-size: 15px; line-height: 1.7; color: #334155;">
                    <p style="margin: 0 0 16px 0; font-size: 16px; color: #0f172a;">Dear <strong>${custName}</strong>,</p>
                    
                    <p style="margin: 0 0 16px 0;">Thank you for reaching out to KRGONE.</p>
                    
                    <p style="margin: 0 0 16px 0;">We have received your enquiry successfully.</p>
                    
                    <p style="margin: 0 0 16px 0;">Our consulting team is reviewing your request and will respond within one business day.</p>
                    
                    <p style="margin: 0 0 16px 0;">If your enquiry requires immediate attention, please contact us directly.</p>
                    
                    <p style="margin: 0 0 16px 0;">Thank you for choosing KRGONE.</p>
                    
                    <p style="margin: 0 0 28px 0;">We look forward to speaking with you.</p>
                    
                    <p style="margin: 0 0 6px 0;">Warm Regards,</p>
                    
                    <div style="margin-top: 8px; padding-top: 16px; border-top: 1px solid #e2e8f0; color: #0f172a; font-size: 14px; line-height: 1.6;">
                      <strong style="color: #0f172a; font-size: 15px;">KRG ONE Advisory Team</strong><br>
                      Email: <a href="mailto:enquiry.krgone@gmail.com" style="color: #0284c7; text-decoration: none;">enquiry.krgone@gmail.com</a><br>
                      Tel: <a href="tel:+917300300330" style="color: #0f172a; text-decoration: none;">+91 7300300330</a><br>
                      Jaipur, India
                    </div>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const leadHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Us Advisory Inquiry</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #0f172a; font-family: 'Segoe UI', Arial, sans-serif; color: #e2e8f0;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0f172a; padding: 24px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" style="max-width: 650px; background-color: #1e293b; border-radius: 16px; overflow: hidden; border: 1px solid #334155;">
                <tr>
                  <td style="background-color: #d4af37; padding: 20px 28px; color: #0f172a;">
                    <div style="font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px;">
                      KRG ONE Contact Desk Alert
                    </div>
                    <h2 style="margin: 4px 0 0 0; font-size: 20px; font-weight: 900;">
                      📬 New Executive Contact Inquiry: ${compName}
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 24px 28px;">
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
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Mobile / Phone:</td>
                        <td style="padding: 8px 0; font-weight: 800; color: #fef08a;">
                          <a href="tel:${phone}" style="color: #fef08a; text-decoration: none;">${phone}</a>
                        </td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Engagement Focus:</td>
                        <td style="padding: 8px 0; font-weight: 800; color: #d4af37;">${focus}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Client Message:</td>
                        <td style="padding: 8px 0; font-weight: 500; color: #e2e8f0; line-height: 1.5;">${msg}</td>
                      </tr>
                    </table>
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
      from: `"KRG ONE Advisory" <${user}>`,
      replyTo: `enquiry.krgone@gmail.com`,
      to: custEmail,
      subject: `Enquiry Acknowledgment - KRGONE Advisory`,
      text: customerText,
      html: customerHtml,
      headers: {
        'X-Mailer': 'KRG ONE Contact Dispatcher',
        'X-Priority': '3',
        'Importance': 'normal'
      }
    };

    const leadMailOptions = {
      from: `"KRG ONE Contact Desk" <${user}>`,
      replyTo: custEmail,
      to: notificationEmail,
      subject: `New Contact Us Inquiry: ${compName} (${custName}) - ${phone}`,
      html: leadHtml,
      headers: {
        'X-Mailer': 'KRG ONE Internal Desk',
        'X-Priority': '3',
        'Importance': 'normal'
      }
    };

    if (custEmail.toLowerCase() === notificationEmail.toLowerCase()) {
      await transporter.sendMail(leadMailOptions);
    } else {
      await Promise.allSettled([
        transporter.sendMail(customerMailOptions),
        transporter.sendMail(leadMailOptions)
      ]);
    }

    res.json({
      success: true,
      message: "Contact request submitted successfully",
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error("Error in /api/contact:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Failed to submit contact request"
    });
  }
}
