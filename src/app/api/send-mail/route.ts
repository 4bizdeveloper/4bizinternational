import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // 1. Basic Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { status: 'error', message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 2. Transporter setup using existing environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com', 
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE !== 'false', 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD || process.env.SMTP_PASS,
      },
    });

    const brandColor = '#0d1b4d';

    // 3. Email Body 1: Internal Notification to Company
    const internalEmailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e4e4e7; border-radius: 8px; overflow: hidden;">
        <div style="background-color: ${brandColor}; padding: 24px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 1px;">NEW WEBSITE CONTACT FORM LEAD</h2>
        </div>
        <div style="padding: 24px; color: #18181b; background-color: #ffffff;">
          <p style="font-size: 14px; margin-top: 0;">You have received a new contact form submission from the 4Biz website:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px; font-size: 14px; vertical-align: top;">Name:</td>
              <td style="padding: 8px 0; font-size: 14px; color: #4b5563;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; font-size: 14px; vertical-align: top;">Email:</td>
              <td style="padding: 8px 0; font-size: 14px; color: #4b5563;"><a href="mailto:${email}" style="color: ${brandColor};">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; font-size: 14px; vertical-align: top;">Phone:</td>
              <td style="padding: 8px 0; font-size: 14px; color: #4b5563;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; font-size: 14px; vertical-align: top;">Message:</td>
              <td style="padding: 8px 0; font-size: 14px; color: #4b5563; white-space: pre-wrap;">${message || 'N/A'}</td>
            </tr>
          </table>
        </div>
        <div style="background-color: #f4f4f5; padding: 16px; text-align: center; font-size: 12px; color: #71717a; border-top: 1px solid #e4e4e7;">
          © 2026 4Biz International LLC. All Rights Reserved.
        </div>
      </div>
    `;

    // 4. Email Body 2: Auto-Response to User (Updated with all 3 branches)
    const autoRespondHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e4e4e7; border-radius: 8px; overflow: hidden;">
        <div style="background-color: ${brandColor}; padding: 24px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 1px;">THANK YOU FOR CONTACTING US</h2>
        </div>
        <div style="padding: 24px; color: #18181b; background-color: #ffffff; line-height: 1.6;">
          <p style="font-size: 15px; margin-top: 0; font-weight: bold;">Hello ${name},</p>
          <p style="font-size: 14px; color: #3f3f46;">
            Thank you for reaching out to <strong>4Biz International LLC</strong>! We have successfully received your inquiry submitted through our website. Our technical consultation team is reviewing your requirements and will get back to you within 24 business hours.
          </p>
          
          <hr style="border: 0; border-top: 1px solid #e4e4e7; margin: 20px 0;" />
          
          <h3 style="color: ${brandColor}; font-size: 16px; margin-top: 0; margin-bottom: 12px;">Our Global Offices</h3>
          
          <!-- Branch 1: Dubai -->
          <div style="margin-bottom: 14px;">
            <p style="font-size: 13px; color: #3f3f46; margin: 0 0 2px 0;"><strong>DUBAI CORPORATE HUB (UAE)</strong></p>
            <p style="font-size: 13px; color: #71717a; margin: 0 0 4px 0; line-height: 1.4;">Crystal Building - Office # 104 - 2C St - near ADCB Metro Station - Al Karama - Dubai, UAE</p>
            <p style="font-size: 12px; color: #3f3f46; margin: 0;"><strong>Phone:</strong> +971 52 792 5100 | <strong>Email:</strong> info@4bizinternational.com</p>
          </div>

          <!-- Branch 2: HiLITE Business Park -->
          <div style="margin-bottom: 14px;">
            <p style="font-size: 13px; color: #3f3f46; margin: 0 0 2px 0;"><strong>INDIA HiLITE BUSINESS PARK</strong></p>
            <p style="font-size: 13px; color: #71717a; margin: 0 0 4px 0; line-height: 1.4;">Tower 2, HiLITE Business Park, Office 2723, 7th Floor, near HiLITE Mall, Poovangal, Pantheeramkavu, Kozhikode, Kerala 673014, India</p>
            <p style="font-size: 12px; color: #3f3f46; margin: 0;"><strong>Phone:</strong> +91 93880 01524 | <strong>Email:</strong> info@4bizinternational.com</p>
          </div>

          <!-- Branch 3: Nadakkave Office -->
          <div style="margin-bottom: 14px;">
            <p style="font-size: 13px; color: #3f3f46; margin: 0 0 2px 0;"><strong>INDIA NADAKKAVE OFFICE</strong></p>
            <p style="font-size: 13px; color: #71717a; margin: 0 0 4px 0; line-height: 1.4;">5th Floor, C. M. Mathew Brothers Arcade, Kannur Rd, near Hotel Westway, Vikas Nagar Housing Colony, West Nadakkave, Chakkorathukulam, Kozhikode, Kerala 673006, India</p>
            <p style="font-size: 12px; color: #3f3f46; margin: 0;"><strong>Phone:</strong> +91 93880 01524 | <strong>Email:</strong> info@4bizinternational.com</p>
          </div>
          
          <div style="margin-top: 24px; text-align: center;">
            <a href="https://www.4bizinternational.com" style="background-color: ${brandColor}; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-size: 13px; font-weight: bold; display: inline-block;">
              Visit Our Website
            </a>
          </div>
        </div>
        <div style="background-color: #f4f4f5; padding: 16px; text-align: center; font-size: 11px; color: #71717a; border-top: 1px solid #e4e4e7;">
          This is an automated delivery confirmation response. Please do not reply directly to this mail.
        </div>
      </div>
    `;

    // 5. Fire both email dispatches concurrently via Promise.all
    await Promise.all([
      // A. Main delivery email targeting Company hierarchy
      transporter.sendMail({
        from: `"4Biz Web Desk" <${process.env.SMTP_USER}>`,
        to: "ibrahim@4bizinternational.com",
        cc: "info@4bizinternational.com, 4bizdeveloper@gmail.com",
        subject: `New Contact Form Lead From 4Biz Website: ${name}`,
        html: internalEmailHtml,
      }),
      // B. Dynamic Autoresponse Email reaching the input user
      transporter.sendMail({
        from: `"4Biz International LLC" <${process.env.SMTP_USER}>`,
        to: email,
        subject: `Thank you for choosing 4Biz International, ${name}!`,
        html: autoRespondHtml,
      })
    ]);

    return NextResponse.json({ status: 'success', message: 'Emails processed successfully' });
  } catch (error: any) {
    console.error('Nodemailer Error:', error);
    return NextResponse.json(
      { status: 'error', message: error.message || 'Failed to dispatch notification' },
      { status: 500 }
    );
  }
}