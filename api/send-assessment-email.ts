import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { formData, scores, overallScore, pillarScores, recommendations, dossierHtml } = req.body;

    if (!formData || !formData.email) {
      return res.status(400).json({ success: false, error: "Missing required customer email or form data" });
    }

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

    const compName = formData.companyName || "Your Enterprise";
    const custName = formData.fullName || "Valued Executive";
    const custEmail = formData.email.trim();

    const mobileNumber = formData.mobileNumber || "Not Provided";
    const role = formData.role === 'Other' && formData.roleOther ? formData.roleOther : (formData.role || "Executive");
    const industry = formData.industry === 'Other' && formData.industryOther ? formData.industryOther : (formData.industry || "Commercial Vertical");
    const revenue = formData.revenue || "Not Specified";
    const businessSize = formData.businessSize || "Not Specified";
    const location = `${formData.city || 'City'}, ${formData.state || 'State'}`;
    const challengesList = Array.isArray(formData.challenges) && formData.challenges.length > 0 
      ? formData.challenges.join(", ") 
      : "Operational & Scaling Bottlenecks";
    const goalsList = Array.isArray(formData.goals) && formData.goals.length > 0 
      ? formData.goals.join(", ") 
      : "Business Systems & Revenue Expansion";

    const finalScore = typeof overallScore === 'number' ? overallScore : 72;
    const formattedDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });

    // Generate PDF attachment buffer via Puppeteer (might fail on Vercel)
    let pdfBuffer = null;
    try {
      const fullHtml = dossierHtml && dossierHtml.trim().length > 100 ? `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>KRGONE Business Growth Diagnostic Report - ${compName}</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
              @media print {
                @page { size: A4 portrait; margin: 0; }
                body { margin: 0 !important; padding: 0 !important; background: white !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
                .print-page { 
                  width: 210mm !important; 
                  height: 297mm !important; 
                  min-height: 297mm !important; 
                  max-height: 297mm !important; 
                  box-sizing: border-box !important; 
                  page-break-after: always !important; 
                  break-after: page !important; 
                  page-break-inside: avoid !important; 
                  break-inside: avoid !important; 
                  margin: 0 auto !important; 
                  padding: 10mm 12mm 12mm 12mm !important; 
                  position: relative !important; 
                  display: flex !important; 
                  flex-direction: column !important;
                  justify-content: space-between !important;
                  background-color: #ffffff; 
                  overflow: hidden !important; 
                  -webkit-print-color-adjust: exact !important;
                  print-color-adjust: exact !important;
                }
                .print-page.dark-cover,
                .print-page.bg-\\[\\#030712\\],
                .print-page.bg-\\[\\#030816\\] {
                  background-color: #030712 !important;
                  color: #ffffff !important;
                }
                .no-print { display: none !important; }
              }
              body { font-family: system-ui, -apple-system, sans-serif; background: #ffffff; margin: 0; padding: 0; }
              .print-page { 
                  background: white; 
                  width: 210mm !important; 
                  height: 297mm !important; 
                  min-height: 297mm !important; 
                  max-height: 297mm !important; 
                  padding: 10mm 12mm 12mm 12mm !important; 
                  margin: 0 auto !important; 
                  box-sizing: border-box; 
                  position: relative; 
                  overflow: hidden !important;
                  display: flex !important;
                  flex-direction: column !important;
                  justify-content: space-between !important;
              }
              .print-page.dark-cover,
              .print-page.bg-\\[\\#030712\\],
              .print-page.bg-\\[\\#030816\\] {
                  background: #030712 !important;
                  color: #ffffff !important;
              }
            </style>
          </head>
          <body>
            ${dossierHtml}
          </body>
        </html>
      ` : `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>KRG ONE Assessment Report - ${compName}</title>
            <script src="https://cdn.tailwindcss.com"></script>
          </head>
          <body style="font-family: Arial, sans-serif; padding: 40px; background-color: #ffffff; color: #0f172a;">
            <div style="border-bottom: 3px solid #d4af37; padding-bottom: 20px; margin-bottom: 30px;">
              <h1 style="font-size: 28px; font-weight: 900; color: #0f172a; margin: 0;">KRG <span style="color: #d4af37;">ONE</span></h1>
              <p style="font-size: 13px; color: #64748b; font-weight: bold; margin-top: 4px; text-transform: uppercase; letter-spacing: 2px;">Management Consulting & Enterprise Advisory</p>
            </div>
            <h2 style="font-size: 22px; font-weight: 800; color: #0f172a; margin-bottom: 10px;">Executive Assessment Diagnostic Report</h2>
            <p style="font-size: 14px; color: #475569;"><strong>Company Name:</strong> ${compName}</p>
            <p style="font-size: 14px; color: #475569;"><strong>Executive Name:</strong> ${custName}</p>
            <p style="font-size: 14px; color: #475569;"><strong>Overall Growth Score:</strong> ${overallScore}%</p>
            <p style="font-size: 14px; color: #475569;"><strong>Industry:</strong> ${formData?.industry || 'Commercial'}</p>
            <p style="font-size: 14px; color: #475569;"><strong>Revenue Band:</strong> ${formData?.revenue || 'Not Specified'}</p>
          </body>
        </html>
      `;

      let browser;
      if (process.env.VERCEL || process.env.NODE_ENV === 'production') {
        const puppeteerCore = (await import('puppeteer-core')).default;
        const chromium = (await import('@sparticuz/chromium')).default;
        browser = await puppeteerCore.launch({
          args: chromium.args,
          defaultViewport: { width: 1200, height: 1600 },
          executablePath: await chromium.executablePath(),
          headless: true,
        });
      } else {
        const puppeteer = (await import('puppeteer')).default;
        browser = await puppeteer.launch({
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
      }

      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 1600 });
      await page.setContent(fullHtml, { waitUntil: 'load' });
      await new Promise(r => setTimeout(r, 1000));
      
      pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' }
      });
      await browser.close();
    } catch (err) {
      console.error("Skipping PDF generation due to puppeteer error (expected on Vercel):", err);
    }

    const safeCompFileName = compName.replace(/[^a-zA-Z0-9]/g, '_');
    const attachments = pdfBuffer ? [
      {
        filename: `KRG_ONE_Diagnostic_Report_${safeCompFileName}.pdf`,
        content: pdfBuffer,
        contentType: 'application/pdf'
      }
    ] : [];

    const pillarsList = [
      "Leadership & Vision",
      "Sales & Revenue",
      "Marketing & Customer Growth",
      "Operations & Process",
      "Finance & Business Performance",
      "People & Leadership",
      "Technology & Business Innovation"
    ];

    const pillarRowsHtml = pillarsList.map((pName, idx) => {
      const pScore = Array.isArray(pillarScores) && pillarScores[idx] !== undefined 
        ? pillarScores[idx] 
        : Math.min(100, Math.round(((scores?.[idx * 3] || 3) + (scores?.[idx * 3 + 1] || 3) + (scores?.[idx * 3 + 2] || 3)) / 15 * 100));
      
      let ratingBadge = "Needs Alignment";
      let badgeBg = "#fef2f2";
      let badgeColor = "#991b1b";
      if (pScore >= 80) {
        ratingBadge = "Optimal Performance";
        badgeBg = "#ecfdf5";
        badgeColor = "#065f46";
      } else if (pScore >= 60) {
        ratingBadge = "Moderate Scalability";
        badgeBg = "#fffbeb";
        badgeColor = "#92400e";
      }

      return `
        <tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #334155; font-weight: 600; font-size: 13px;">${pName}</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; text-align: center; color: #0f172a; font-weight: 800; font-size: 14px;">${pScore}%</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; text-align: right;">
            <span style="display: inline-block; padding: 4px 10px; background-color: ${badgeBg}; color: ${badgeColor}; border-radius: 999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
              ${ratingBadge}
            </span>
          </td>
        </tr>
      `;
    }).join('');

    const assessmentId = formData.assessmentId || `KRG-${Date.now().toString(36).toUpperCase()}`;
    const isBooking = formData.customerType === 'Partner Call Reservation';

    const bookingCustomerHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Diagnostic Call Request Received - KRG ONE</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Arial, sans-serif; color: #334155;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 24px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" style="max-width: 650px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
                
                <!-- BRANDING HEADER -->
                <tr>
                  <td style="background-color: #0f172a; padding: 32px 28px; text-align: center; border-bottom: 3px solid #d4af37;">
                    <div style="font-size: 24px; font-weight: 900; letter-spacing: 2px; color: #ffffff; margin-bottom: 4px;">
                      KRG <span style="color: #d4af37;">ONE</span>
                    </div>
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #94a3b8;">
                      Management Consulting & Enterprise Advisory
                    </div>
                  </td>
                </tr>

                <!-- HERO CONFIRMATION BANNER FOR DIAGNOSTIC CALL -->
                <tr>
                  <td style="padding: 28px 28px 20px 28px; background-color: #f0f9ff; border-bottom: 1px solid #bae6fd;">
                    <div style="display: inline-block; background-color: #e0f2fe; border: 1px solid #7dd3fc; padding: 4px 14px; border-radius: 20px; color: #0369a1; font-size: 11px; font-weight: 800; text-transform: uppercase; margin-bottom: 12px;">
                      📅 Diagnostic Call Request Acknowledgment
                    </div>
                    <h1 style="margin: 0 0 10px 0; font-size: 22px; font-weight: 900; color: #0f172a; line-height: 1.3;">
                      We Have Received Your Diagnostic Call Request
                    </h1>
                    <p style="margin: 0; font-size: 14px; color: #334155; line-height: 1.6;">
                      Dear <strong>${custName}</strong>, thank you for submitting your request for a 1-on-1 Diagnostic Strategy Call with KRG ONE Advisory for <strong>${compName}</strong>. Your request has been logged and assigned to our partner consulting queue.
                    </p>
                  </td>
                </tr>

                <!-- PROMISE & RESPONSE TIME BANNER -->
                <tr>
                  <td style="padding: 18px 28px 0 28px;">
                    <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 12px; padding: 18px 20px;">
                      <div style="font-size: 14px; color: #065f46; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                        ⚡ OUR TEAM WILL GET BACK TO YOU SOON
                      </div>
                      <div style="font-size: 13px; color: #047857; line-height: 1.6;">
                        A Senior Management Consultant from KRG ONE will review your business profile and contact you shortly via phone (<strong>+91 7300300330</strong>) or email to confirm your exact session time, calendar invitation, and Google Meet access link.
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- DIAGNOSTIC CALL DETAILS TABLE -->
                <tr>
                  <td style="padding: 20px 28px;">
                    <h3 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">
                      📋 Diagnostic Strategy Call Reservation Details
                    </h3>
                    <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; font-size: 13px; border-collapse: separate; border-spacing: 0;">
                      <tr>
                        <td style="padding: 10px 12px; font-weight: 700; color: #64748b; width: 150px; border-bottom: 1px solid #e2e8f0;">Customer Name:</td>
                        <td style="padding: 10px 12px; font-weight: 800; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${custName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 12px; font-weight: 700; color: #64748b;">Company Name:</td>
                        <td style="padding: 10px 12px; font-weight: 800; color: #0f172a;">${compName}</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- PDF DOSSIER ATTACHMENT NOTICE -->
                <tr>
                  <td style="padding: 0 28px 20px 28px;">
                    <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 14px 18px;">
                      <div style="font-size: 13px; color: #166534; font-weight: 700;">
                        📎 <strong>Executive PDF Dossier Attached:</strong>
                        <span style="font-weight: 500; display: block; color: #15803d; font-size: 12px; margin-top: 2px;">
                          We have attached your complete Business Growth Diagnostic Report (PDF) to this email for your preliminary review before our session.
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- KRG ONE ADVISORY CONTACT DETAILS CARD -->
                <tr>
                  <td style="padding: 0 28px 24px 28px;">
                    <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 12px; padding: 18px;">
                      <tr>
                        <td>
                          <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #b45309; margin-bottom: 4px;">
                            KRG ONE Enterprise Advisory Desk
                          </div>
                          <h4 style="margin: 0 0 10px 0; font-size: 15px; font-weight: 900; color: #0f172a;">
                            Official Advisory Contact Details
                          </h4>
                          <table width="100%" cellspacing="0" cellpadding="0" style="font-size: 13px; color: #334155;">
                            <tr>
                              <td style="padding: 4px 0; font-weight: 700; width: 130px; color: #64748b;">Official Email:</td>
                              <td style="padding: 4px 0; font-weight: 800; color: #0284c7;">
                                <a href="mailto:enquiry.krgone@gmail.com" style="color: #0284c7; text-decoration: underline;">enquiry.krgone@gmail.com</a>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 4px 0; font-weight: 700; color: #64748b;">Direct Hotline:</td>
                              <td style="padding: 4px 0; font-weight: 800; color: #0f172a;">
                                <a href="tel:+917300300330" style="color: #0f172a; text-decoration: none;">+91 7300300330</a>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 4px 0; font-weight: 700; color: #64748b;">Corporate HQ:</td>
                              <td style="padding: 4px 0; font-weight: 600; color: #334155;">Jaipur, Rajasthan, India</td>
                            </tr>
                            <tr>
                              <td style="padding: 4px 0; font-weight: 700; color: #64748b;">Advisory Portal:</td>
                              <td style="padding: 4px 0; font-weight: 600; color: #0284c7;">
                                <a href="https://krgone.vercel.app" style="color: #0284c7; text-decoration: underline;">krgone.vercel.app</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                  <td style="padding: 20px 28px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; font-size: 11px; color: #94a3b8; line-height: 1.5;">
                    <p style="margin: 0 0 4px 0; font-weight: 700; color: #64748b;">
                      KRG ONE Business Management Advisory
                    </p>
                    <p style="margin: 0 0 4px 0;">
                      Official Email: <a href="mailto:enquiry.krgone@gmail.com" style="color: #0284c7; text-decoration: none;">enquiry.krgone@gmail.com</a> • Phone: <a href="tel:+917300300330" style="color: #0284c7; text-decoration: none;">+91 7300300330</a>
                    </p>
                    <p style="margin: 0;">
                      Submitted on ${formattedDate} IST • Confidential Enterprise Advisory
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

    const bookingCustomerText = `Dear ${custName},

Thank you for requesting a Diagnostic Strategy Call with KRG ONE Advisory for ${compName}. We have received your request and logged your details.

OUR TEAM WILL GET BACK TO YOU SOON
A Senior Management Consultant from KRG ONE will review your business profile and contact you shortly via phone or email to confirm your exact session time, calendar invitation, and Google Meet access link.

Diagnostic Strategy Call Reservation Details:
- Customer Name: ${custName}
- Company Name: ${compName}

Executive PDF Dossier Attached:
We have attached your complete Business Growth Diagnostic Report (PDF) to this email for your preliminary review.

Official Advisory Contact Details:
- Official Email: enquiry.krgone@gmail.com
- Direct Hotline: +91 7300300330
- Corporate HQ: Jaipur, Rajasthan, India
- Advisory Portal: krgone.vercel.app

Submitted on ${formattedDate} IST
KRG ONE Business Management Advisory`;

    const customerHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your KRGONE Business Growth Assessment™ Report</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Arial, sans-serif; color: #334155;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 24px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" style="max-width: 650px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
                
                <!-- BRANDING HEADER -->
                <tr>
                  <td style="background-color: #0f172a; padding: 32px 28px; text-align: center; border-bottom: 3px solid #d4af37;">
                    <div style="font-size: 24px; font-weight: 900; letter-spacing: 2px; color: #ffffff; margin-bottom: 4px;">
                      KRG <span style="color: #d4af37;">ONE</span>
                    </div>
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #94a3b8;">
                      Management Consulting & Enterprise Advisory
                    </div>
                  </td>
                </tr>

                <!-- HERO CONFIRMATION BANNER FOR ASSESSMENT -->
                <tr>
                  <td style="padding: 28px 28px 20px 28px; background-color: #f0f9ff; border-bottom: 1px solid #bae6fd;">
                    <div style="display: inline-block; background-color: #e0f2fe; border: 1px solid #7dd3fc; padding: 4px 14px; border-radius: 20px; color: #0369a1; font-size: 11px; font-weight: 800; text-transform: uppercase; margin-bottom: 12px;">
                      📊 Business Growth Assessment Confirmation
                    </div>
                    <h1 style="margin: 0 0 10px 0; font-size: 22px; font-weight: 900; color: #0f172a; line-height: 1.3;">
                      Your KRGONE Business Growth Assessment™ Report
                    </h1>
                    <p style="margin: 0; font-size: 14px; color: #334155; line-height: 1.6;">
                      Dear <strong>${custName}</strong>, thank you for completing the <strong>KRGONE Business Growth Assessment™</strong> for <strong>${compName}</strong>. Your personalized assessment report has been successfully generated.
                    </p>
                  </td>
                </tr>

                <!-- PROMISE & RESPONSE TIME BANNER -->
                <tr>
                  <td style="padding: 18px 28px 0 28px;">
                    <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 12px; padding: 18px 20px;">
                      <div style="font-size: 14px; color: #065f46; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                        ⚡ OUR TEAM WILL GET BACK TO YOU SOON
                      </div>
                      <div style="font-size: 13px; color: #047857; line-height: 1.6;">
                        A Senior Management Consultant from KRG ONE will review your business profile and contact you shortly via phone (<strong>+91 7300300330</strong>) or email to discuss your report and personalized growth recommendations.
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- ASSESSMENT DETAILS TABLE -->
                <tr>
                  <td style="padding: 20px 28px;">
                    <h3 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">
                      📋 Business Growth Assessment Details
                    </h3>
                    <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; font-size: 13px; border-collapse: separate; border-spacing: 0;">
                      <tr>
                        <td style="padding: 10px 12px; font-weight: 700; color: #64748b; width: 150px; border-bottom: 1px solid #e2e8f0;">Customer Name:</td>
                        <td style="padding: 10px 12px; font-weight: 800; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${custName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 12px; font-weight: 700; color: #64748b;">Company Name:</td>
                        <td style="padding: 10px 12px; font-weight: 800; color: #0f172a;">${compName}</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- PDF DOSSIER ATTACHMENT NOTICE -->
                <tr>
                  <td style="padding: 0 28px 20px 28px;">
                    <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 14px 18px;">
                      <div style="font-size: 13px; color: #166534; font-weight: 700;">
                        📎 <strong>Executive PDF Dossier Attached:</strong>
                        <span style="font-weight: 500; display: block; color: #15803d; font-size: 12px; margin-top: 2px;">
                          We have attached your complete Business Growth Diagnostic Report (PDF) to this email for your review.
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- BOOK DIAGNOSTIC CALL CTA -->
                <tr>
                  <td style="padding: 0 28px 24px 28px; text-align: center;">
                    <a href="https://krgone.vercel.app" style="display: inline-block; background-color: #d4af37; color: #0f172a; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 800; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);">
                      Book Diagnostic Call
                    </a>
                  </td>
                </tr>

                <!-- KRG ONE ADVISORY CONTACT DETAILS CARD -->
                <tr>
                  <td style="padding: 0 28px 24px 28px;">
                    <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 12px; padding: 18px;">
                      <tr>
                        <td>
                          <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #b45309; margin-bottom: 4px;">
                            KRG ONE Enterprise Advisory Desk
                          </div>
                          <h4 style="margin: 0 0 10px 0; font-size: 15px; font-weight: 900; color: #0f172a;">
                            Official Advisory Contact Details
                          </h4>
                          <table width="100%" cellspacing="0" cellpadding="0" style="font-size: 13px; color: #334155;">
                            <tr>
                              <td style="padding: 4px 0; font-weight: 700; width: 130px; color: #64748b;">Official Email:</td>
                              <td style="padding: 4px 0; font-weight: 800; color: #0284c7;">
                                <a href="mailto:enquiry.krgone@gmail.com" style="color: #0284c7; text-decoration: underline;">enquiry.krgone@gmail.com</a>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 4px 0; font-weight: 700; color: #64748b;">Direct Hotline:</td>
                              <td style="padding: 4px 0; font-weight: 800; color: #0f172a;">
                                <a href="tel:+917300300330" style="color: #0f172a; text-decoration: none;">+91 7300300330</a>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 4px 0; font-weight: 700; color: #64748b;">Corporate HQ:</td>
                              <td style="padding: 4px 0; font-weight: 600; color: #334155;">Jaipur, Rajasthan, India</td>
                            </tr>
                            <tr>
                              <td style="padding: 4px 0; font-weight: 700; color: #64748b;">Advisory Portal:</td>
                              <td style="padding: 4px 0; font-weight: 600; color: #0284c7;">
                                <a href="https://krgone.vercel.app" style="color: #0284c7; text-decoration: underline;">krgone.vercel.app</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                  <td style="padding: 20px 28px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; font-size: 11px; color: #94a3b8; line-height: 1.5;">
                    <p style="margin: 0 0 4px 0; font-weight: 700; color: #64748b;">
                      KRG ONE Business Management Advisory
                    </p>
                    <p style="margin: 0 0 4px 0;">
                      Official Email: <a href="mailto:enquiry.krgone@gmail.com" style="color: #0284c7; text-decoration: none;">enquiry.krgone@gmail.com</a> • Phone: <a href="tel:+917300300330" style="color: #0284c7; text-decoration: none;">+91 7300300330</a>
                    </p>
                    <p style="margin: 0;">
                      Submitted on ${formattedDate} IST • Confidential Enterprise Advisory
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

    const leadHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Business Growth Assessment Submitted</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #0f172a; font-family: 'Segoe UI', Arial, sans-serif; color: #e2e8f0; line-height: 1.6;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0f172a; padding: 32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" style="max-width: 620px; background-color: #1e293b; border-radius: 16px; overflow: hidden; border: 1px solid #334155; box-shadow: 0 20px 30px rgba(0,0,0,0.5);">
                
                <!-- HEADER -->
                <tr>
                  <td style="background-color: #d4af37; padding: 22px 28px; color: #0f172a;">
                    <div style="font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px;">
                      KRGONE Internal Lead Alert
                    </div>
                    <h2 style="margin: 4px 0 0 0; font-size: 20px; font-weight: 900;">
                      New Business Growth Assessment Submitted
                    </h2>
                  </td>
                </tr>

                <!-- BODY -->
                <tr>
                  <td style="padding: 28px 28px 24px 28px;">
                    <p style="margin: 0 0 20px 0; font-size: 15px; color: #cbd5e1;">
                      A new <strong>Business Growth Assessment™</strong> has been submitted.
                    </p>

                    <!-- CUSTOMER DETAILS CARD -->
                    <h3 style="margin: 0 0 14px 0; font-size: 14px; font-weight: 800; color: #d4af37; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #334155; padding-bottom: 8px;">
                      Customer Details
                    </h3>

                    <table width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; font-size: 13px;">
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8; width: 140px;">Name:</td>
                        <td style="padding: 8px 0; font-weight: 800; color: #ffffff;">${custName}</td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Company:</td>
                        <td style="padding: 8px 0; font-weight: 800; color: #fef08a;">${compName}</td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Email:</td>
                        <td style="padding: 8px 0; font-weight: 800; color: #38bdf8;">
                          <a href="mailto:${custEmail}" style="color: #38bdf8; text-decoration: underline;">${custEmail}</a>
                        </td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Phone:</td>
                        <td style="padding: 8px 0; font-weight: 800; color: #fef08a;">
                          <a href="tel:${mobileNumber}" style="color: #fef08a; text-decoration: none;">${mobileNumber}</a>
                        </td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Industry:</td>
                        <td style="padding: 8px 0; color: #ffffff;">${industry}</td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Revenue Range:</td>
                        <td style="padding: 8px 0; color: #4ade80; font-weight: 700;">${revenue}</td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Location:</td>
                        <td style="padding: 8px 0; color: #ffffff;">${location}</td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Assessment Date:</td>
                        <td style="padding: 8px 0; color: #ffffff;">${formattedDate}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Assessment ID:</td>
                        <td style="padding: 8px 0; font-weight: 800; color: #38bdf8; font-family: monospace;">${assessmentId}</td>
                      </tr>
                    </table>

                    <!-- NOTICE -->
                    <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 14px; margin-bottom: 20px;">
                      <p style="margin: 0 0 6px 0; font-size: 13px; color: #e2e8f0; font-weight: 600;">
                        The complete Business Growth Assessment Report is attached for review.
                      </p>
                      <p style="margin: 0; font-size: 13px; color: #94a3b8;">
                        Please use the attached report for analysis before contacting the client.
                      </p>
                    </div>

                    <p style="margin: 20px 0 0 0; font-size: 14px; color: #cbd5e1;">
                      Regards,<br>
                      <strong>KRGONE Business Growth System™</strong>
                    </p>
                  </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                  <td style="padding: 16px 28px; background-color: #0f172a; border-top: 1px solid #334155; text-align: center; font-size: 11px; color: #64748b;">
                    KRGONE Internal Lead Alert System • Confidential
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const customerText = `Dear ${custName},

Thank you for completing the KRGONE Business Growth Assessment™ for ${compName}.

OUR TEAM WILL GET BACK TO YOU SOON
A Senior Management Consultant from KRG ONE will review your business profile and contact you shortly via phone (+91 7300300330) or email to discuss your report and personalized growth recommendations.

Business Growth Assessment Details:
- Customer Name: ${custName}
- Company Name: ${compName}

Executive PDF Dossier Attached:
We have attached your complete Business Growth Diagnostic Report (PDF) to this email for your review.

If you would like a detailed discussion of your report and personalized growth recommendations, you can schedule a Business Growth Diagnostic Call with KRGONE:
https://krgone.vercel.app

Official Advisory Contact Details:
- Official Email: enquiry.krgone@gmail.com
- Direct Hotline: +91 7300300330
- Corporate HQ: Jaipur, Rajasthan, India
- Advisory Portal: krgone.vercel.app

Submitted on ${formattedDate} IST
KRG ONE Business Management Advisory`;

    const leadText = `A new Business Growth Assessment™ has been submitted.

Customer Details:
• Name: ${custName}
• Company: ${compName}
• Email: ${custEmail}
• Phone: ${mobileNumber}
• Industry: ${industry}
• Revenue Range: ${revenue}
• Location: ${location}
• Assessment Date: ${formattedDate}
• Assessment ID: ${assessmentId}

The complete Business Growth Assessment Report is attached for review.

Please use the attached report for analysis before contacting the client.

Regards,
KRGONE Business Growth System™`;

    const customerMailOptions = {
      from: `"KRG ONE Advisory" <${user}>`,
      replyTo: `enquiry.krgone@gmail.com`,
      to: custEmail,
      subject: isBooking
        ? `Diagnostic Strategy Call Request Confirmation - ${compName} | KRG ONE Advisory`
        : `Your KRGONE Business Growth Assessment™ Report`,
      text: isBooking ? bookingCustomerText : customerText,
      html: isBooking ? bookingCustomerHtml : customerHtml,
      attachments,
      headers: {
        'X-Mailer': 'KRG ONE Engine v2.0',
        'X-Auto-Response-Suppress': 'OOF, AutoReply'
      }
    };

    const leadMailOptions = {
      from: `"KRG ONE Lead Engine" <${user}>`,
      replyTo: custEmail,
      to: notificationEmail,
      subject: `New Business Growth Assessment Submitted`,
      text: leadText,
      html: leadHtml,
      attachments,
      headers: {
        'X-Mailer': 'KRG ONE Engine v2.0',
        'X-Auto-Response-Suppress': 'OOF, AutoReply'
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
      message: "Assessment report processed and emailed successfully",
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error("Error in send-assessment-email:", error);
    res.status(500).json({ success: false, error: error.message || "Failed to dispatch emails" });
  }
}
