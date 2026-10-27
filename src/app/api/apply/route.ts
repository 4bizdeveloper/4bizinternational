import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_CV_BYTES = 5 * 1024 * 1024; // 5MB
const ALLOWED_MIME = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export async function POST(req: Request) {
  try {
    /* ---------- Parse multipart form ---------- */
    const form = await req.formData();

    const fullName = (form.get('fullName') as string | null)?.trim() || '';
    const email = (form.get('email') as string | null)?.trim() || '';
    const phone = (form.get('phone') as string | null)?.trim() || '';
    // FIX: Match the field name sent from the frontend
    const location = (form.get('currentLocation') as string | null)?.trim() || '';
    const linkedin = (form.get('linkedin') as string | null)?.trim() || '';
    const experience = (form.get('experience') as string | null)?.trim() || '';
    const message = (form.get('message') as string | null)?.trim() || '';
    const cv = form.get('cv');

    /* ---------- Validation ---------- */
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { status: 'error', error: 'Missing required fields: fullName, email, phone.' },
        { status: 400 }
      );
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json(
        { status: 'error', error: 'Invalid email address.' },
        { status: 400 }
      );
    }
    if (!(cv instanceof File) || cv.size === 0) {
      return NextResponse.json(
        { status: 'error', error: 'CV file is required.' },
        { status: 400 }
      );
    }
    if (cv.size > MAX_CV_BYTES) {
      return NextResponse.json(
        { status: 'error', error: 'CV exceeds 5MB limit.' },
        { status: 400 }
      );
    }
    if (!ALLOWED_MIME.includes(cv.type)) {
      return NextResponse.json(
        { status: 'error', error: 'CV must be PDF, DOC, or DOCX.' },
        { status: 400 }
      );
    }

    /* ---------- Read env (job-specific first, fallback to contact form) ---------- */
    const smtpUser = process.env.JOB_SMTP_USER || process.env.SMTP_USER;
    const smtpPass = process.env.JOB_SMTP_PASS || process.env.SMTP_PASS;
    const toEmail = process.env.JOB_NOTIFICATION_EMAIL || '4bizdeveloper@gmail.com';

    if (!smtpUser || !smtpPass) {
      console.error('SMTP credentials missing');
      return NextResponse.json(
        { status: 'error', error: 'Mail server not configured.' },
        { status: 500 }
      );
    }

    /* ---------- Convert CV to Buffer ---------- */
    const arrayBuffer = await cv.arrayBuffer();
    const cvBuffer = Buffer.from(arrayBuffer);

    /* ---------- Build email ---------- */
    const subject = `New Job Application: ${fullName} — Senior SOC Analyst`;

    const textBody = [
      `New job application received via 4bizinternational.com/careers/apply`,
      ``,
      `Position:   Senior Analyst — SOC Monitoring`,
      `Full Name:  ${fullName}`,
      `Email:      ${email}`,
      `Phone:      ${phone}`,
      `Location:   ${location || '—'}`,
      `LinkedIn:   ${linkedin || '—'}`,
      `Experience: ${experience || '—'} years SOC`,
      ``,
      `Cover Note:`,
      message || '—',
      ``,
      `CV attached: ${cv.name} (${(cv.size / 1024).toFixed(1)} KB)`,
      `Submitted:   ${new Date().toISOString()}`,
    ].join('\n');

    const htmlBody = `
      <div style="font-family: -apple-system, Segoe UI, Roboto, Arial, sans-serif; max-width:600px; margin:0 auto; background:#f8fafc; padding:24px;">
        <div style="background:linear-gradient(135deg,#0f2054,#061033); padding:24px; border-radius:12px 12px 0 0;">
          <h1 style="color:#00D3F2; margin:0 0 4px; font-size:20px;">New Job Application</h1>
          <p style="color:#cbd5e1; margin:0; font-size:13px;">Senior Analyst — SOC Monitoring · 4Biz International</p>
        </div>
        <div style="background:#ffffff; padding:24px; border-radius:0 0 12px 12px; border:1px solid #e2e8f0; border-top:0;">
          <table style="width:100%; border-collapse:collapse; font-size:14px; color:#0f172a;">
            <tr><td style="padding:8px 0; font-weight:600; width:130px; color:#475569;">Full Name</td><td>${escapeHtml(fullName)}</td></tr>
            <tr><td style="padding:8px 0; font-weight:600; color:#475569;">Email</td><td><a href="mailto:${escapeHtml(email)}" style="color:#0c9d7d;">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:8px 0; font-weight:600; color:#475569;">Phone</td><td><a href="tel:${escapeHtml(phone)}" style="color:#0c9d7d;">${escapeHtml(phone)}</a></td></tr>
            <tr><td style="padding:8px 0; font-weight:600; color:#475569;">Location</td><td>${escapeHtml(location) || '—'}</td></tr>
            <tr><td style="padding:8px 0; font-weight:600; color:#475569;">LinkedIn</td><td>${linkedin ? `<a href="${escapeHtml(linkedin)}" style="color:#0c9d7d;">${escapeHtml(linkedin)}</a>` : '—'}</td></tr>
            <tr><td style="padding:8px 0; font-weight:600; color:#475569;">Experience</td><td>${escapeHtml(experience) || '—'} years SOC</td></tr>
          </table>
          <div style="margin-top:20px; padding:16px; background:#f1f5f9; border-radius:8px; border-left:4px solid #0c9d7d;">
            <p style="margin:0 0 6px; font-weight:600; color:#0f172a;">Cover Note:</p>
            <p style="margin:0; color:#334155; white-space:pre-wrap; font-size:14px; line-height:1.6;">${escapeHtml(message) || '—'}</p>
          </div>
          <p style="margin:20px 0 0; font-size:12px; color:#64748b;">
            CV attached: <strong>${escapeHtml(cv.name)}</strong> (${(cv.size / 1024).toFixed(1)} KB)<br>
            Submitted: ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })} (Dubai)
          </p>
        </div>
      </div>
    `;

    /* ---------- Send via SMTP ---------- */
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"4Biz Careers" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
      attachments: [
        {
          filename: cv.name,
          content: cvBuffer,
          contentType: cv.type,
        },
      ],
    });

    return NextResponse.json(
      { status: 'success', message: 'Application submitted successfully.' },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('Job Application API error:', err);
    
    return NextResponse.json(
      { 
        status: 'error', 
        error: err?.message || 'Internal server error. Failed to deliver email.' 
      },
      { status: 500 } 
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}