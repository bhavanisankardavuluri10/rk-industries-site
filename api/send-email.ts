import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Parse request body
    const { name, email, phone, requirements } = req.body;

    // Validate required fields
    if (!name || !email || !requirements) {
      return res.status(400).json({
        message: 'Missing required fields: name, email, or requirements'
      });
    }

    // Create transporter using Mailtrap credentials from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST || 'sandbox.smtp.mailtrap.io',
      port: parseInt(process.env.MAILTRAP_PORT || '2525'),
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: '"RK Industries Contact Form" <noreply@rkindustries.com>',
      to: process.env.RECIPIENT_EMAIL || 'rkindustriespdp@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #2c5f4f 0%, #4a8b7a 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #2c5f4f; display: block; margin-bottom: 5px; }
              .value { background: white; padding: 12px; border-radius: 5px; border-left: 3px solid #4a8b7a; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🌿 New Contact Form Submission</h1>
                <p>RK Industries Website</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                ${phone ? `
                <div class="field">
                  <span class="label">Phone:</span>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                ` : ''}
                <div class="field">
                  <span class="label">Requirements:</span>
                  <div class="value">${requirements.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the RK Industries contact form.</p>
                <p>Reply directly to this email to respond to ${name}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission from RK Industries Website

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Requirements:
${requirements}

---
This email was sent from the RK Industries contact form.
Reply directly to respond to ${name}.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      message: "Your message has been sent successfully! We'll get back to you soon.",
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      message: 'Failed to send email. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
