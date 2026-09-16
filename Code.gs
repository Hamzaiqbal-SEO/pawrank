/**
 * Paw Rank - Contact Form Google Apps Script Web App
 * 
 * Features:
 * 1. Appends form submissions into Google Sheet
 * 2. Silent honeypot anti-spam check
 * 3. Sends notification email to pawrankofficial@gmail.com
 * 4. Sends branded confirmation/thank-you email to the submitter
 * 5. Returns JSON response
 */

const CONFIG = {
  // Sheet name where leads should be stored
  SHEET_NAME: "Leads",
  
  // Admin notification recipient
  ADMIN_EMAIL: "pawrankofficial@gmail.com",
  
  // From sender name for emails
  SENDER_NAME: "Paw Rank",
  
  // Calendly booking link for fast scheduling
  CALENDLY_URL: "https://pawrank.com/contact-us#calendly"
};

/**
 * Handle HTTP POST requests from the website contact form
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  // Wait for up to 30 seconds for other processes to finish
  lock.tryLock(30000);

  try {
    const params = e && e.parameter ? e.parameter : {};
    
    // 1. Silent Honeypot anti-spam verification
    // If bot filled out the hidden field, return success silently without saving or sending emails
    if (params._gotcha || params.botcheck) {
      return createJsonResponse({ status: "success", message: "Processed" });
    }

    const timestamp = new Date();
    const name = (params.name || "").trim();
    const email = (params.email || "").trim();
    const clinic = (params.clinic || "").trim();
    const website = (params.website || "").trim();
    const message = (params.message || "").trim();

    if (!email || !name) {
      return createJsonResponse({ status: "error", message: "Name and email are required" });
    }

    // 2. Append row to Google Sheet
    const sheet = getOrCreateSheet(CONFIG.SHEET_NAME);
    sheet.appendRow([
      timestamp,
      name,
      email,
      clinic,
      website,
      message
    ]);

    // 3. Send Notification Email to Admin
    sendAdminNotification({ timestamp, name, email, clinic, website, message });

    // 4. Send Confirmation / Thank You Email to Submitter
    sendSubmitterConfirmation({ name, email, clinic, website, message });

    return createJsonResponse({ 
      status: "success", 
      message: "Your message has been received! We'll get back to you shortly." 
    });

  } catch (err) {
    Logger.log("Error in doPost: " + err.toString());
    return createJsonResponse({ status: "error", message: err.toString() });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Handle HTTP GET requests (useful for verifying the endpoint is live)
 */
function doGet(e) {
  return createJsonResponse({
    status: "active",
    message: "Paw Rank Contact Form Web App is running."
  });
}

/**
 * Helper to ensure the target sheet exists and has proper headers
 */
function getOrCreateSheet(sheetName) {
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = doc.getSheetByName(sheetName);

  if (!sheet) {
    sheet = doc.insertSheet(sheetName);
  }

  // Check if headers need to be added
  if (sheet.getLastRow() === 0) {
    const headers = ["Timestamp", "Name", "Email", "Clinic Name & Location", "Website", "Message"];
    sheet.appendRow(headers);
    
    // Format header row
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#111827");
    headerRange.setFontColor("#FFFFFF");
    sheet.setFrozenRows(1);
  }

  return sheet;
}

/**
 * Send email notification to Paw Rank team
 */
function sendAdminNotification(data) {
  const subject = `🐾 New Contact Inquiry from ${data.name} ${data.clinic ? `(${data.clinic})` : ""}`;
  
  const formattedDate = Utilities.formatDate(data.timestamp, "GMT", "yyyy-MM-dd HH:mm:ss 'GMT'");

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px; background-color: #ffffff;">
      <h2 style="color: #111827; margin-top: 0; border-bottom: 2px solid #325ce8; padding-bottom: 12px;">New Contact Form Submission</h2>
      <p style="color: #4b5563; font-size: 14px;">Received on ${formattedDate}</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151; width: 140px;">Name:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${escapeHtml(data.name)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Email:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${escapeHtml(data.email)}" style="color: #325ce8; text-decoration: none;">${escapeHtml(data.email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Clinic & Location:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${escapeHtml(data.clinic || "Not provided")}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Website:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">
            ${data.website ? `<a href="${escapeHtml(data.website)}" target="_blank" style="color: #325ce8;">${escapeHtml(data.website)}</a>` : "Not provided"}
          </td>
        </tr>
      </table>
      
      <div style="margin-top: 20px;">
        <h4 style="color: #374151; margin-bottom: 8px;">Message / Practice Details:</h4>
        <div style="background-color: #f9fafb; padding: 14px 16px; border-radius: 6px; border-left: 4px solid #325ce8; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(data.message)}</div>
      </div>
      
      <div style="margin-top: 28px; text-align: center;">
        <a href="mailto:${escapeHtml(data.email)}?subject=Re:%20Your%20Inquiry%20to%20Paw%20Rank" style="display: inline-block; background-color: #325ce8; color: #ffffff; text-decoration: none; padding: 12px 24px; font-weight: 600; border-radius: 6px;">Reply to ${escapeHtml(data.name)}</a>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: CONFIG.ADMIN_EMAIL,
    replyTo: data.email,
    name: CONFIG.SENDER_NAME,
    subject: subject,
    htmlBody: htmlBody
  });
}

/**
 * Send confirmation / thank you email to submitter
 */
function sendSubmitterConfirmation(data) {
  const subject = "Thank you for contacting Paw Rank – We received your message";

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px; background-color: #ffffff;">
      <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #f3f4f6;">
        <h1 style="color: #111827; font-size: 22px; margin: 0;">Paw Rank</h1>
        <p style="color: #6b7280; font-size: 13px; margin: 4px 0 0 0;">Veterinary SEO & Local Practice Growth</p>
      </div>

      <div style="padding: 24px 0;">
        <p style="color: #1f2937; font-size: 16px; line-height: 1.6;">Hi ${escapeHtml(data.name)},</p>
        
        <p style="color: #4b5563; font-size: 15px; line-height: 1.6;">
          Thank you for reaching out to Paw Rank! We have safely received your inquiry regarding <strong>${escapeHtml(data.clinic || "your veterinary practice")}</strong>.
        </p>

        <p style="color: #4b5563; font-size: 15px; line-height: 1.6;">
          Our team is reviewing your details, website, and local area. We typically respond within <strong>24 business hours</strong> with initial thoughts and next steps.
        </p>

        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin: 24px 0;">
          <h4 style="margin: 0 0 10px 0; color: #0f172a; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Want to talk right away?</h4>
          <p style="margin: 0 0 14px 0; color: #475569; font-size: 14px; line-height: 1.5;">
            If you prefer to lock in a time directly on our calendar, feel free to book a free 30-minute Strategy Call:
          </p>
          <a href="${CONFIG.CALENDLY_URL}" style="display: inline-block; background-color: #325ce8; color: #ffffff; text-decoration: none; padding: 10px 20px; font-weight: 600; font-size: 14px; border-radius: 6px;">
            Book Strategy Call &rarr;
          </a>
        </div>

        <p style="color: #4b5563; font-size: 14px; line-height: 1.6; margin-top: 24px;">
          Best regards,<br/>
          <strong>The Paw Rank Team</strong><br/>
          <a href="https://pawrank.com" style="color: #325ce8; text-decoration: none;">pawrank.com</a> | <a href="mailto:${CONFIG.ADMIN_EMAIL}" style="color: #325ce8; text-decoration: none;">${CONFIG.ADMIN_EMAIL}</a>
        </p>
      </div>

      <div style="border-top: 1px solid #f3f4f6; padding-top: 16px; text-align: center;">
        <p style="color: #9ca3af; font-size: 12px; margin: 0;">
          You received this email because you submitted a contact inquiry on pawrank.com.
        </p>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: data.email,
    replyTo: CONFIG.ADMIN_EMAIL,
    name: CONFIG.SENDER_NAME,
    subject: subject,
    htmlBody: htmlBody
  });
}

/**
 * Helper to build CORS-enabled JSON output
 */
function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Basic HTML sanitization helper
 */
function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
