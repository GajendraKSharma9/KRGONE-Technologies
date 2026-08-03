import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import puppeteer from "puppeteer";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Enable JSON parsing with generous limits (for dossier HTML)
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));

  // SEO & Security Headers Middleware
  app.use((req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    next();
  });

  // Explicit SEO Routes for Robots.txt and Sitemap.xml
  app.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.sendFile(path.join(process.cwd(), "public", "robots.txt"));
  });

  app.get("/sitemap.xml", (req, res) => {
    res.type("application/xml");
    res.sendFile(path.join(process.cwd(), "public", "sitemap.xml"));
  });

  // Helper to format Gmail credentials cleanly (stripping spaces if app password provided with spaces)
  const getSmtpCredentials = () => {
    const user = process.env.SMTP_USER || "enquiry.krgone@gmail.com";
    const rawPass = process.env.SMTP_PASS || "xizf aulp djxr sptv";
    const pass = rawPass.replace(/\s+/g, "");
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "enquiry.krgone@gmail.com";
    return { user, pass, notificationEmail };
  };

  // Helper to format KRGONE Technologies Gmail credentials cleanly
  const getTechSmtpCredentials = () => {
    const user = process.env.TECH_SMTP_USER || "support.krgone@gmail.com";
    const rawPass = process.env.TECH_SMTP_PASS || "mqkz tjdf vdkn xrlk";
    const pass = rawPass.replace(/\s+/g, "");
    const notificationEmail = process.env.TECH_NOTIFICATION_EMAIL || "support.krgone@gmail.com";
    return { user, pass, notificationEmail };
  };

  // Helper to construct Nodemailer Transporter for KRGONE Consulting
  const createTransporter = () => {
    const { user, pass } = getSmtpCredentials();
    return nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: false
      }
    });
  };

  // Helper to construct Nodemailer Transporter for KRGONE Technologies
  const createTechTransporter = () => {
    const { user, pass } = getTechSmtpCredentials();
    return nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: false
      }
    });
  };

  // Helper to generate PDF Buffer using Puppeteer
  const generatePdfBuffer = async (
    dossierHtml: string | undefined, 
    compName: string, 
    custName: string, 
    overallScore: number, 
    pillarScores: any[], 
    formData: any
  ): Promise<Buffer | null> => {
    let browser = null;
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
                .print-page.bg-\[\#030712\],
                .print-page.bg-\[\#030816\] {
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
              .print-page.bg-\[\#030712\],
              .print-page.bg-\[\#030816\] {
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

      browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 1600 });
      await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
      await new Promise(r => setTimeout(r, 1000));
      
      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' }
      });

      await browser.close();
      return pdfBuffer;
    } catch (err) {
      console.error("Error generating PDF with Puppeteer:", err);
      if (browser) {
        try { await browser.close(); } catch (e) {}
      }
      return null;
    }
  };

  // Server-side deduplication memory store to prevent double email dispatches
  const recentEmailDispatches = new Map<string, number>();

  // ----------------------------------------------------
  // API ROUTES
  // ----------------------------------------------------
  
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Test Email Endpoint for Diagnostics
  app.get("/api/test-email", async (req, res) => {
    try {
      const { user, notificationEmail } = getSmtpCredentials();
      const transporter = createTransporter();
      
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
  });

  // Main Endpoint: Dispatch Assessment Acknowledgment & Lead Notification
  app.post("/api/send-assessment-email", async (req, res) => {
    try {
      const { formData, scores, overallScore, pillarScores, recommendations, dossierHtml } = req.body;

      if (!formData || !formData.email) {
        return res.status(400).json({ success: false, error: "Missing required customer email or form data" });
      }

      const { user, notificationEmail } = getSmtpCredentials();
      const transporter = createTransporter();

      const compName = formData.companyName || "Your Enterprise";
      const custName = formData.fullName || "Valued Executive";
      const custEmail = formData.email.trim();

      // Check server-side deduplication cache (30-second window per email/company combination)
      const customerType = formData.customerType || "Assessment";
      const dedupeKey = `${custEmail.toLowerCase()}_${compName.toLowerCase()}_${customerType.toLowerCase()}`;
      const now = Date.now();
      const lastSent = recentEmailDispatches.get(dedupeKey);
      if (lastSent && (now - lastSent) < 30000) {
        console.log(`[DEDUPLICATION] Suppressing duplicate email request for key: ${dedupeKey}`);
        return res.json({
          success: true,
          message: "Duplicate email dispatch suppressed (already sent within last 30s)",
          deduplicated: true,
          timestamp: new Date().toISOString()
        });
      }
      recentEmailDispatches.set(dedupeKey, now);

      // Clean up stale cache items
      if (recentEmailDispatches.size > 100) {
        for (const [key, timestamp] of recentEmailDispatches.entries()) {
          if (now - timestamp > 60000) recentEmailDispatches.delete(key);
        }
      }
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

      // Generate PDF attachment buffer via Puppeteer
      console.log(`Generating PDF dossier attachment for ${compName}...`);
      const pdfBuffer = await generatePdfBuffer(dossierHtml, compName, custName, finalScore, pillarScores, formData);

      const safeCompFileName = compName.replace(/[^a-zA-Z0-9]/g, '_');
      const attachments = pdfBuffer ? [
        {
          filename: `KRG_ONE_Diagnostic_Report_${safeCompFileName}.pdf`,
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ] : [];

      // Build Pillars HTML table rows
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
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px 12px; font-weight: 600; color: #1e293b; font-size: 13px;">${pName}</td>
            <td style="padding: 10px 12px; font-weight: 800; color: #0f172a; font-size: 13px; text-align: center;">${pScore}%</td>
            <td style="padding: 10px 12px; text-align: right;">
              <span style="display: inline-block; padding: 4px 8px; border-radius: 4px; background-color: ${badgeBg}; color: ${badgeColor}; font-size: 11px; font-weight: 700;">
                ${ratingBadge}
              </span>
            </td>
          </tr>
        `;
      }).join('');

      // -----------------------------------------------------------------
      // EMAIL 1: CUSTOMER ACKNOWLEDGMENT & EXECUTIVE BRIEFING REPORT
      // -----------------------------------------------------------------
      const isBooking = customerType === 'Partner Call Reservation';

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

      const assessmentCustomerHtml = `
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

      const assessmentCustomerText = `Dear ${custName},

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

      const assessmentId = formData.assessmentId || `KRG-${Date.now().toString(36).toUpperCase()}`;

      const leadNotificationText = isBooking ? `DIAGNOSTIC STRATEGY CALL REQUEST BOOKED

Company Name: ${compName}
Executive Name: ${custName} (${role})
Email Address: ${custEmail}
Mobile Number: ${mobileNumber}
Industry Vertical: ${industry}
Annual Revenue: ${revenue}
Team Size: ${businessSize}
Location: ${location}

Key Challenges / Requested Slot: ${challengesList}
Target Growth Goals / Notes: ${goalsList}

PDF Report Attached: KRG_ONE_Diagnostic_Report_${safeCompFileName}.pdf
Received Date: ${formattedDate} IST

KRG ONE Internal Lead Engine` : `A new Business Growth Assessment™ has been submitted.

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
        text: isBooking ? bookingCustomerText : assessmentCustomerText,
        html: isBooking ? bookingCustomerHtml : assessmentCustomerHtml,
        attachments,
        headers: {
          'X-Mailer': 'KRG ONE Enterprise Advisory Dispatcher',
          'X-Priority': '3',
          'Importance': 'normal'
        }
      };

      const assessmentLeadHtml = `
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

      // -----------------------------------------------------------------
      // EMAIL 2: KRG ONE INTERNAL LEAD NOTIFICATION EMAIL
      // -----------------------------------------------------------------
      const leadMailOptions = {
        from: `"KRG ONE Lead Engine" <${user}>`,
        replyTo: custEmail,
        to: notificationEmail,
        subject: isBooking
          ? `Diagnostic Strategy Call Request: ${compName} (${custName}) - ${mobileNumber}`
          : `New Business Growth Assessment Submitted`,
        text: leadNotificationText,
        attachments,
        headers: {
          'X-Mailer': 'KRG ONE Internal Lead Engine',
          'X-Priority': '3',
          'Importance': 'normal'
        },
        html: isBooking ? `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Diagnostic Strategy Call Booked</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #0f172a; font-family: 'Segoe UI', Arial, sans-serif; color: #e2e8f0;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0f172a; padding: 24px 12px;">
              <tr>
                <td align="center">
                  <table role="presentation" width="100%" style="max-width: 650px; background-color: #1e293b; border-radius: 16px; overflow: hidden; border: 1px solid #334155; box-shadow: 0 20px 30px rgba(0,0,0,0.5);">
                    
                    <!-- ALERT HEADER -->
                    <tr>
                      <td style="background-color: #38bdf8; padding: 20px 28px; color: #0f172a;">
                        <div style="font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 2px;">
                          KRG ONE Internal Lead Alert System
                        </div>
                        <h2 style="margin: 4px 0 0 0; font-size: 20px; font-weight: 900;">
                          📅 New 1-on-1 Diagnostic Strategy Session Booked
                        </h2>
                      </td>
                    </tr>

                    <!-- LEAD OVERVIEW CARDS -->
                    <tr>
                      <td style="padding: 24px 28px;">
                        
                        <!-- HIGH VALUE BADGE -->
                        <div style="background-color: #0f172a; border: 1px solid #d4af37; border-radius: 12px; padding: 16px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between;">
                          <div>
                            <span style="font-size: 10px; font-weight: 800; color: #d4af37; text-transform: uppercase; letter-spacing: 1px; display: block;">
                              Company Name
                            </span>
                            <span style="font-size: 20px; font-weight: 900; color: #ffffff; display: block;">
                              ${compName}
                            </span>
                            <span style="font-size: 12px; color: #94a3b8;">
                              Location: ${location} | Customer Type: ${formData.customerType || 'B2B'}
                            </span>
                          </div>
                          <div style="text-align: right; background-color: rgba(212, 175, 55, 0.2); padding: 8px 16px; border-radius: 8px; border: 1px solid #d4af37;">
                            <span style="font-size: 22px; font-weight: 900; color: #fef08a; display: block;">${finalScore}%</span>
                            <span style="font-size: 9px; font-weight: 800; color: #cbd5e1; uppercase;">GROWTH INDEX</span>
                          </div>
                        </div>

                        <!-- PDF ATTACHMENT NOTICE FOR LEAD -->
                        <div style="background-color: #0f172a; border: 1px solid #38bdf8; border-radius: 8px; padding: 12px; margin-bottom: 20px; font-size: 12px; color: #38bdf8; font-weight: bold;">
                          📎 Attached File: KRG_ONE_Diagnostic_Report_${safeCompFileName}.pdf
                        </div>

                        <!-- CUSTOMER CONTACT DETAILS TABLE -->
                        <h3 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 800; color: #d4af37; text-transform: uppercase; border-bottom: 1px solid #334155; padding-bottom: 6px;">
                          👤 Executive Contact Profile
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
                            <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Mobile / Phone:</td>
                            <td style="padding: 8px 0; font-weight: 800; color: #fef08a;">
                              <a href="tel:${mobileNumber}" style="color: #fef08a; text-decoration: none;">${mobileNumber}</a>
                            </td>
                          </tr>
                          <tr style="border-bottom: 1px solid #334155;">
                            <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Role / Designation:</td>
                            <td style="padding: 8px 0; color: #e2e8f0;">${role}</td>
                          </tr>
                          <tr style="border-bottom: 1px solid #334155;">
                            <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Industry Vertical:</td>
                            <td style="padding: 8px 0; color: #e2e8f0;">${industry}</td>
                          </tr>
                          <tr style="border-bottom: 1px solid #334155;">
                            <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Annual Revenue:</td>
                            <td style="padding: 8px 0; font-weight: 800; color: #4ade80;">${revenue}</td>
                          </tr>
                          <tr style="border-bottom: 1px solid #334155;">
                            <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Team Size:</td>
                            <td style="padding: 8px 0; color: #e2e8f0;">${businessSize}</td>
                          </tr>
                        </table>

                      </td>
                    </tr>

                    <!-- FOOTER ACTION -->
                    <tr>
                      <td style="padding: 20px 28px; background-color: #0f172a; border-top: 1px solid #334155; text-align: center;">
                        <a href="mailto:${custEmail}" style="display: inline-block; background-color: #38bdf8; color: #0f172a; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 900; font-size: 12px; text-transform: uppercase; margin-right: 8px;">
                          Reply to Lead (${custEmail})
                        </a>
                        <a href="tel:${mobileNumber}" style="display: inline-block; background-color: #4ade80; color: #0f172a; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 900; font-size: 12px; text-transform: uppercase;">
                          Call Lead (${mobileNumber})
                        </a>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        ` : assessmentLeadHtml
      };

      // Check if customer email matches notification email (e.g., test email or KRG ONE inbox)
      const isSameRecipient = custEmail.toLowerCase() === notificationEmail.toLowerCase();

      let customerSent = false;
      let leadSent = false;

      if (isSameRecipient) {
        // Customer email is the KRG ONE notification email — send ONLY ONE combined Lead Alert email
        try {
          await transporter.sendMail(leadMailOptions);
          leadSent = true;
          customerSent = true;
          console.log(`[EMAIL DISPATCH] Sent single combined lead email to ${notificationEmail} (customer matches lead recipient)`);
        } catch (err) {
          console.error("Failed to send single lead email:", err);
        }
      } else {
        // Distinct recipients — send Customer Acknowledgment and Internal Lead Alert in parallel
        const results = await Promise.allSettled([
          transporter.sendMail(customerMailOptions),
          transporter.sendMail(leadMailOptions)
        ]);

        customerSent = results[0].status === 'fulfilled';
        leadSent = results[1].status === 'fulfilled';

        if (!customerSent) {
          console.error("Failed to send customer email:", (results[0] as PromiseRejectedResult).reason);
        }
        if (!leadSent) {
          console.error("Failed to send lead notification email:", (results[1] as PromiseRejectedResult).reason);
        }
      }

      res.json({
        success: true,
        message: "Assessment emails processed with PDF attachment",
        pdfAttached: !!pdfBuffer,
        customerEmailSent: customerSent,
        leadNotificationSent: leadSent,
        timestamp: new Date().toISOString()
      });

    } catch (error: any) {
      console.error("Error sending assessment emails:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to process email dispatch"
      });
    }
  });

  // ----------------------------------------------------
  // API ENDPOINT: /api/contact (Contact Us Submissions)
  // ----------------------------------------------------
  app.post("/api/contact", async (req, res) => {
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

      const { user, notificationEmail } = getSmtpCredentials();
      const transporter = createTransporter();

      // Email to Client (Auto Reply)
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

      // Email to KRG ONE Admin Desk
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
                          <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Role / Title:</td>
                          <td style="padding: 8px 0; font-weight: 800; color: #ffffff;">${userRole}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #334155;">
                          <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Company Name:</td>
                          <td style="padding: 8px 0; font-weight: 800; color: #fef08a;">${compName}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #334155;">
                          <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Industry Vertical:</td>
                          <td style="padding: 8px 0; font-weight: 700; color: #ffffff;">${ind}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #334155;">
                          <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Annual Revenue:</td>
                          <td style="padding: 8px 0; font-weight: 700; color: #ffffff;">${revBand}</td>
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
                        <tr style="border-bottom: 1px solid #334155;">
                          <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">NDA Requested:</td>
                          <td style="padding: 8px 0; font-weight: 800; color: #4ade80;">${ndaRequested}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-weight: 700; color: #94a3b8;">Client Message:</td>
                          <td style="padding: 8px 0; font-weight: 500; color: #e2e8f0; line-height: 1.5;">${msg}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding: 20px 28px; background-color: #0f172a; text-align: center;">
                      <a href="mailto:${custEmail}" style="display: inline-block; background-color: #38bdf8; color: #0f172a; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 900; font-size: 12px; text-transform: uppercase; margin-right: 8px;">
                        Reply to ${custEmail}
                      </a>
                      <a href="tel:${phone}" style="display: inline-block; background-color: #4ade80; color: #0f172a; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 900; font-size: 12px; text-transform: uppercase;">
                        Call ${phone}
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

      const leadText = `NEW CONTACT INQUIRY RECEIVED

Company: ${compName}
Name: ${custName} (${userRole})
Email: ${custEmail}
Phone: ${phone}
Industry: ${ind}
Revenue: ${revBand}
Engagement Focus: ${focus}
NDA Status: ${ndaRequested}
Message: ${msg}

Received at ${formattedDate} IST`;

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
        text: leadText,
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
  });

  // ----------------------------------------------------
  // API ENDPOINTS: KRGONE Technologies
  // ----------------------------------------------------

  // Test Email Endpoint for KRGONE Technologies Diagnostics
  app.get("/api/technologies/test-email", async (req, res) => {
    try {
      const { user, notificationEmail } = getTechSmtpCredentials();
      const transporter = createTechTransporter();

      const info = await transporter.sendMail({
        from: `"KRGONE Technologies Engine" <${user}>`,
        to: notificationEmail,
        subject: "🧪 KRGONE Technologies SMTP Diagnostic Test",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #0b1f3a; color: #ffffff; border-radius: 12px; border: 1px solid #d4af37;">
            <h2 style="color: #d4af37; margin-top: 0;">KRGONE Technologies Email Dispatcher Active</h2>
            <p style="color: #cbd5e1;">Gmail SMTP transport verified successfully for <strong>${user}</strong>.</p>
            <p style="font-size: 12px; color: #38bdf8;">Recipient Notification Desk: ${notificationEmail}</p>
            <p style="font-size: 11px; color: #94a3b8;">Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
          </div>
        `
      });

      res.json({ success: true, messageId: info.messageId, recipient: notificationEmail, sender: user });
    } catch (error: any) {
      console.error("Error in /api/technologies/test-email endpoint:", error);
      res.status(500).json({ success: false, error: error.message || "Failed to send test email" });
    }
  });

  // Main Endpoint: KRGONE Technologies Contact & Consultation Lead Alert
  app.post("/api/technologies/contact", async (req, res) => {
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

      const { user, notificationEmail } = getTechSmtpCredentials();
      const transporter = createTechTransporter();

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

        if (!customerSent) {
          console.error("Failed to send customer tech email:", (results[0] as PromiseRejectedResult).reason);
        }
        if (!leadSent) {
          console.error("Failed to send lead tech email:", (results[1] as PromiseRejectedResult).reason);
        }
      }

      res.json({
        success: true,
        message: "KRGONE Technologies inquiry processed successfully",
        customerSent,
        leadSent,
        timestamp: new Date().toISOString()
      });

    } catch (err: any) {
      console.error("Error in /api/technologies/contact:", err);
      res.status(500).json({
        success: false,
        error: err.message || "Failed to process inquiry"
      });
    }
  });

  // AI Growth Assistant Chat Endpoint
  app.post("/api/ai-chat", async (req, res) => {
    try {
      const { messages, userMessage } = req.body;

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          success: false,
          error: "Gemini API key is not configured"
        });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const systemInstruction = `You are KRGONE AI Assistant, the official virtual business advisor for KRGONE Business Transformation Group.

Your role is to help business owners, founders, startups, SMEs and enterprises understand their business challenges and recommend the right KRGONE solution.

You must behave like a knowledgeable, professional, friendly and experienced business consultant.
Never behave like a generic AI chatbot.
Always provide practical, business-oriented answers.
Always guide visitors toward booking a consultation whenever appropriate.

--------------------------------------------------------

ABOUT KRGONE

KRGONE is a Business Transformation Group with two specialized divisions.

1. KRGONE Consulting (Business Growth Intelligence Platform)
Provides:
• Business Growth Strategy
• Revenue Growth Consulting
• Business Transformation
• AI Adoption Strategy
• Sales Performance Improvement
• SOP Development
• Business Diagnostics
• Business Growth Operating System™
• Leadership Advisory

Mission: Helping businesses achieve sustainable growth through strategic consulting and measurable business outcomes.

2. KRGONE Technologies (AI-Powered Digital Solutions)
Provides:
• Business Website Development
• Corporate Websites
• E-Commerce Websites
• AI Chatbots
• AI Business Assistants
• Business Automation
• CRM Solutions
• Workflow Automation
• Mobile App Development
• Customer Portals
• Employee Portals
• Business Dashboards
• Custom Business Applications
• SEO
• Google Business Profile Optimization
• Google Ads
• Website Maintenance

Mission: Helping businesses build intelligent digital solutions that automate operations and accelerate growth.

--------------------------------------------------------

ABOUT THE FOUNDER

Founder: Gajendra Kumar Sharma
Experience: 20+ years in Sales, Distribution, Business Development, Business Growth, Business Consulting, Business Strategy, Business Transformation.
The founder has helped organizations improve revenue, optimize operations and achieve sustainable growth.

--------------------------------------------------------

COMPANY DETAILS

Company: KRGONE Technologies / KRGONE Business Transformation Group
Phone: +91 7300300330
WhatsApp: +91 7300300330
Email: support.krgone@gmail.com
Location: Jaipur, Rajasthan, India

--------------------------------------------------------

WHEN CUSTOMERS ASK ABOUT SERVICES

Explain the service clearly.
Explain its business benefits.
Suggest who should use it.
Offer to schedule a consultation.

--------------------------------------------------------

WHEN CUSTOMERS SAY

"I need a website"
Recommend: Business Website Development
Ask:
• Business Name
• Industry
• Number of Pages
• Need for SEO?
• Need for AI Chatbot?
• Need for Mobile App?
• Timeline?

"I want AI"
Recommend: AI Solutions
Ask:
• What business do you operate?
• What process do you want to automate?
• Customer Support?
• Sales?
• Internal Operations?
• Lead Generation?

"I need an app"
Ask: Android / iOS / Both, Purpose, Target Users, Budget, Timeline.

"I need automation"
Recommend: Business Automation
Explain: CRM, Lead Management, WhatsApp Automation, Workflow Automation, Appointment Booking.

"I need growth / consulting"
Recommend: KRGONE Consulting
Explain: Business Growth Operating System™, Business Diagnosis, Growth Strategy, Execution Roadmap.

--------------------------------------------------------

LEAD QUALIFICATION

Before ending a conversation politely collect:
• Name
• Company Name
• Industry
• Phone
• Email
• Requirement
• Preferred Time to Contact

--------------------------------------------------------

BOOK CONSULTATION

If the customer wants a consultation, provide:
Phone: +91 7300300330
WhatsApp: +91 7300300330
Email: support.krgone@gmail.com

--------------------------------------------------------

COMMUNICATION STYLE

Professional, Friendly, Business-Focused, Confident, Clear.
Never oversell.
Never make false promises.
Never claim guaranteed rankings, sales, or business results.
If a customer asks about pricing, explain that pricing depends on project scope and invite them to schedule a free consultation for a customized proposal.
If you don't have enough information to answer, ask relevant follow-up questions before making recommendations.
Always try to recommend the most suitable solution rather than the most expensive one.
End most conversations with an appropriate next step, such as scheduling a consultation or sharing project requirements.`;

      let contents = [];
      if (Array.isArray(messages) && messages.length > 0) {
        contents = messages.map((msg: { role: string; content: string }) => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        }));
      } else if (userMessage) {
        contents = [{ role: 'user', parts: [{ text: userMessage }] }];
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
          maxOutputTokens: 350
        }
      });

      const replyText = response.text || "I specialize in business growth and KRGONE consulting services. How can I assist you with your business goals today?";

      res.json({
        success: true,
        text: replyText
      });

    } catch (err: any) {
      console.error("Error in /api/ai-chat:", err);
      res.status(500).json({
        success: false,
        error: err.message || "AI assistant service unavailable"
      });
    }
  });

  // ----------------------------------------------------
  // VITE MIDDLEWARE & STATIC ASSET FALLBACK
  // ----------------------------------------------------
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
