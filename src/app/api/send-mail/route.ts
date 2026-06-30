import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper function to safely escape HTML to prevent XSS injections inside the email client
function escapeHtml(text: string): string {
    if (!text) return '';
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, countryCode, message } = body;

        if (!name || !email || !phone) {
            return NextResponse.json(
                { status: 'error', message: 'Validation error. Please fill out required fields.' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, 
            auth: {
                user: process.env.SMTP_USER || '4bizdeveloper@gmail.com',
                pass: process.env.SMTP_PASS || 'ruln cyfp riyf zibz'
            }
        });

        const displayCountry = countryCode ? String(countryCode).toUpperCase() : "Not Detected";

        // Sanitize values to mimic PHP's htmlspecialchars() functionality
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safePhone = escapeHtml(phone);
        const safeCountry = escapeHtml(displayCountry);
        const safeMessage = message ? escapeHtml(message) : "No briefing provided.";

        const htmlContent = `
        <html>
        <head>
            <title>New Contact Form Submission From 4Biz Website</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f4f4f7; color: #333333; padding: 20px; }
                .container { max-width: 600px; background: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #e8e8e8; }
                h2 { color: #0284c7; margin-top: 0; }
                table { width: 100%; border-collapse: collapse; margin-top: 15px; }
                th, td { text-align: left; padding: 10px; border-bottom: 1px solid #eeeeee; }
                th { background-color: #f9fafb; width: 30%; font-weight: bold; }
                .message-box { background: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 10px; white-space: pre-wrap; }
            </style>
        </head>
        <body>
            <div class='container'>
                <h2>New Contact Formulation Received</h2>
                <table>
                    <tr><th>Full Name</th><td>${safeName}</td></tr>
                    <tr><th>Email Address</th><td>${safeEmail}</td></tr>
                    <tr><th>Phone Field</th><td>${safePhone}</td></tr>
                    <tr><th>Country Code</th><td><strong>${safeCountry}</strong></td></tr>
                </table>
                <h3>Mission Brief / Message:</h3>
                <div class='message-box'>${safeMessage}</div>
            </div>
        </body>
        </html>`;

        await transporter.sendMail({
            from: '"4Biz International" <info@4bizinternational.com>',
            to: "info@4bizinternational.com",
            cc: "4bizdeveloper@gmail.com",
            replyTo: `"${safeName.replace(/"/g, '\\"')}" <${safeEmail}>`,
            subject: "New Contact Form Submission From 4biz Website",
            html: htmlContent
        });

        return NextResponse.json({ status: 'success', message: 'Transmission established seamlessly.' });
    } catch (error: any) {
        return NextResponse.json(
            { status: 'error', message: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}