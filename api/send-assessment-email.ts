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

    const customerHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Your KRG ONE Business Diagnostic Report</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Arial, sans-serif; color: #334155;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                
                <!-- Header -->
                <tr>
                  <td style="background-color: #0f172a; padding: 32px; text-align: center; border-bottom: 4px solid #d4af37;">
                    <div style="font-size: 28px; font-weight: 900; color: #ffffff; letter-spacing: 1px; margin-bottom: 8px;">KRG <span style="color: #d4af37;">ONE</span></div>
                    <div style="font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px;">Management Consulting & Enterprise Advisory</div>
                  </td>
                </tr>

                <!-- Greeting & Score -->
                <tr>
                  <td style="padding: 32px 32px 16px 32px;">
                    <h1 style="margin: 0 0 16px 0; font-size: 22px; font-weight: 800; color: #0f172a;">Executive Assessment Report</h1>
                    <p style="margin: 0 0 24px 0; font-size: 15px; line-height: 1.6; color: #475569;">
                      Dear <strong>${custName}</strong>,<br><br>
                      Thank you for completing the KRG ONE Business Growth Diagnostic. We have analyzed the operational metrics for <strong>${compName}</strong>. 
                      ${pdfBuffer ? 'Attached is your comprehensive advisory dossier.' : 'Your comprehensive advisory dossier results are available on your dashboard.'}
                    </p>

                    <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 32px;">
                      <div style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Overall Growth Score</div>
                      <div style="font-size: 48px; font-weight: 900; color: #0f172a; margin-bottom: 4px;">${finalScore}<span style="font-size: 24px; color: #94a3b8;">/100</span></div>
                      <div style="width: 40px; height: 3px; background-color: #d4af37; margin: 0 auto;"></div>
                    </div>
                  </td>
                </tr>

                <!-- Pillar Breakdown -->
                <tr>
                  <td style="padding: 0 32px 24px 32px;">
                    <h2 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">Core Pillar Analysis</h2>
                    <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                      <tbody>
                        ${pillarRowsHtml}
                      </tbody>
                    </table>
                  </td>
                </tr>

                <!-- Footer & CTA -->
                <tr>
                  <td style="padding: 32px; background-color: #f8fafc; text-align: center; border-top: 1px solid #e2e8f0;">
                    <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 800; color: #0f172a;">Schedule Your Advisory Briefing</h3>
                    <p style="margin: 0 0 24px 0; font-size: 14px; color: #475569; line-height: 1.5;">
                      Discuss these findings with a senior KRG ONE systems architect to map out your structural execution timeline.
                    </p>
                    <a href="mailto:enquiry.krgone@gmail.com" style="display: inline-block; background-color: #0f172a; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Request Consultation</a>
                    
                    <div style="margin-top: 32px; font-size: 12px; color: #94a3b8; line-height: 1.5;">
                      <strong>KRG ONE Advisory Team</strong><br>
                      Email: enquiry.krgone@gmail.com<br>
                      Tel: +91 7300300330<br>
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
        <title>New KRG ONE Assessment Lead</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #0f172a; font-family: 'Segoe UI', Arial, sans-serif; color: #e2e8f0;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0f172a; padding: 24px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" style="max-width: 650px; background-color: #1e293b; border-radius: 16px; overflow: hidden; border: 1px solid #334155;">
                
                <!-- Header -->
                <tr>
                  <td style="background-color: #d4af37; padding: 20px 28px; color: #0f172a;">
                    <div style="font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px;">
                      KRG ONE Lead Engine
                    </div>
                    <h2 style="margin: 4px 0 0 0; font-size: 20px; font-weight: 900;">
                      🚨 New Assessment Lead: ${compName}
                    </h2>
                  </td>
                </tr>

                <!-- Client Details -->
                <tr>
                  <td style="padding: 24px 28px;">
                    <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #334155; padding-bottom: 8px;">Client Profile</h3>
                    
                    <table width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; font-size: 13px;">
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8; width: 140px;">Company Name:</td>
                        <td style="padding: 8px 0; font-weight: 800; color: #fef08a; font-size: 15px;">${compName}</td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Executive Name:</td>
                        <td style="padding: 8px 0; font-weight: 800; color: #ffffff;">${custName}</td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Role / Title:</td>
                        <td style="padding: 8px 0; font-weight: 800; color: #ffffff;">${role}</td>
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
                          <a href="tel:${mobileNumber}" style="color: #fef08a; text-decoration: none;">${mobileNumber}</a>
                        </td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Industry:</td>
                        <td style="padding: 8px 0; font-weight: 700; color: #ffffff;">${industry}</td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Annual Revenue:</td>
                        <td style="padding: 8px 0; font-weight: 700; color: #ffffff;">${revenue}</td>
                      </tr>
                      <tr style="border-bottom: 1px solid #334155;">
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Business Size:</td>
                        <td style="padding: 8px 0; font-weight: 700; color: #ffffff;">${businessSize}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Location:</td>
                        <td style="padding: 8px 0; font-weight: 700; color: #ffffff;">${location}</td>
                      </tr>
                    </table>

                    <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #334155; padding-bottom: 8px;">Assessment Data</h3>
                    
                    <div style="background-color: #0f172a; padding: 16px; border-radius: 8px; margin-bottom: 24px; border: 1px solid #334155; display: flex; align-items: center; gap: 16px;">
                      <div style="font-size: 36px; font-weight: 900; color: ${finalScore >= 80 ? '#4ade80' : finalScore >= 60 ? '#facc15' : '#f87171'};">${finalScore}</div>
                      <div>
                        <div style="font-size: 11px; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Overall Growth Score</div>
                        <div style="font-size: 13px; font-weight: 600; color: #cbd5e1; margin-top: 4px;">Completed: ${formattedDate}</div>
                      </div>
                    </div>

                    <table width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; font-size: 13px;">
                      <tr>
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8; vertical-align: top; width: 140px;">Primary Goals:</td>
                        <td style="padding: 8px 0; font-weight: 600; color: #4ade80; line-height: 1.5;">${goalsList}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; font-weight: 700; color: #94a3b8; vertical-align: top;">Core Challenges:</td>
                        <td style="padding: 8px 0; font-weight: 600; color: #f87171; line-height: 1.5;">${challengesList}</td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Action Footer -->
                <tr>
                  <td style="padding: 20px 28px; background-color: #0f172a; text-align: center;">
                    <a href="mailto:${custEmail}" style="display: inline-block; background-color: #38bdf8; color: #0f172a; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 900; font-size: 12px; text-transform: uppercase; margin-right: 8px;">
                      Email Client
                    </a>
                    <a href="tel:${mobileNumber}" style="display: inline-block; background-color: #4ade80; color: #0f172a; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 900; font-size: 12px; text-transform: uppercase;">
                      Call Client
                    </a>
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

Thank you for completing the KRG ONE Business Growth Diagnostic for ${compName}.

Overall Growth Score: ${finalScore}/100

${pdfBuffer ? 'Attached is your comprehensive advisory dossier report.' : 'Your comprehensive advisory dossier results are available in your portal.'}

To schedule an executive briefing with a KRG ONE senior systems architect, please reply to this email or contact us at:
Email: enquiry.krgone@gmail.com
Tel: +91 7300300330
Jaipur, India

Warm Regards,
KRG ONE Advisory Team`;

    const leadText = `New Assessment Lead: ${compName}
Executive Name: ${custName}
Role: ${role}
Email: ${custEmail}
Mobile: ${mobileNumber}
Industry: ${industry}
Revenue Band: ${revenue}
Business Size: ${businessSize}
Location: ${location}
Overall Score: ${finalScore}/100
Goals: ${goalsList}
Challenges: ${challengesList}
Submitted: ${formattedDate} IST`;

    const customerMailOptions = {
      from: `"KRG ONE Advisory" <${user}>`,
      replyTo: `enquiry.krgone@gmail.com`,
      to: custEmail,
      subject: `Your Executive Assessment Results - ${compName} | KRG ONE Advisory`,
      text: customerText,
      html: customerHtml,
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
      subject: `New Lead: ${compName} (${finalScore}/100) - ${custName}`,
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
