export const createAdminNotificationTemplate = (title: string, data: Record<string, string>) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border-top: 4px solid #1e3a8a; }
    .header { background-color: #1e3a8a; color: #ffffff; padding: 20px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; font-weight: bold; }
    .content { padding: 30px; }
    .content h2 { color: #1e3a8a; font-size: 20px; margin-top: 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
    .field { margin-bottom: 15px; }
    .field-label { font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; display: block; }
    .field-value { font-size: 16px; color: #0f172a; margin: 0; padding: 12px; background-color: #f1f5f9; border-radius: 6px; }
    .footer { background-color: #f8fafc; color: #64748b; padding: 20px; text-align: center; font-size: 12px; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New ${title}</h1>
    </div>
    <div class="content">
      <h2>Submission Details</h2>
      ${Object.entries(data).map(([key, value]) => `
        <div class="field">
          <span class="field-label">${key}</span>
          <div class="field-value">${value || 'Not provided'}</div>
        </div>
      `).join('')}
    </div>
    <div class="footer">
      <p>This is an automated message from your website.</p>
    </div>
  </div>
</body>
</html>
`;

export const createAutoReplyTemplate = (name: string, title: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border-top: 4px solid #b78628; }
    .header { background-color: #ffffff; padding: 30px 20px 20px; text-align: center; border-bottom: 1px solid #e2e8f0; }
    .header h1 { margin: 0; color: #1e3a8a; font-size: 24px; }
    .content { padding: 30px; line-height: 1.6; }
    .content p { margin-bottom: 16px; }
    .footer { background-color: #f8fafc; color: #64748b; padding: 20px; text-align: center; font-size: 12px; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nithya Gokul Associates</h1>
    </div>
    <div class="content">
      <p>Dear ${name},</p>
      <p>Thank you for submitting your ${title} request. We have successfully received your details.</p>
      <p>One of our corporate secretary specialists will review your submission and get back to you within 24 hours.</p>
      <p>If you have any urgent queries, you can reply directly to this email or contact us via phone.</p>
      <p>Best regards,<br><strong>Nithya Gokul Associates Team</strong></p>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} Nithya Gokul Associates. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;
