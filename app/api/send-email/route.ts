import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, ...formData } = body;

    // Create a transporter using your email service
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const emailContent = `
      New Collaboration Form Submission
      ================================
      
      Form Type: ${formType}
      
      Form Data:
      ${Object.entries(formData)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n')}
      
      Submitted on: ${new Date().toLocaleString()}
    `;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 20px; border-radius: 8px; }
            .content { background: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #374151; }
            .value { color: #1f2937; padding: 5px 0; }
            .divider { border-top: 2px solid #e5e7eb; margin: 25px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Collaboration Request</h1>
              <p>Form Type: <strong>${formType}</strong></p>
            </div>
            <div class="content">
              <h2>Form Details:</h2>
              ${Object.entries(formData)
                .map(
                  ([key, value]) => `
                  <div class="field">
                    <div class="label">${key.replace(/_/g, ' ').toUpperCase()}:</div>
                    <div class="value">${value}</div>
                  </div>
                `
                )
                .join('')}
              <div class="divider"></div>
              <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email options
    const mailOptions = {
      from: `"Africa's Blockchain Club" <info@africasblockchainclub.com>`,
      to: process.env.MAIL_TO,
      replyTo: formData.email || process.env.SMTP_USER,
      subject: `New ${formType} Collaboration Request`,
      text: emailContent,
      html: htmlContent,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}