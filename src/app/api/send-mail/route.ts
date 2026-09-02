import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, requirements, campaign_name } = body;

    // 1. Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    // 2. Forward lead data to your CRM API endpoint
    const crmApiUrl = process.env.CRM_API_URL || 'https://your-crm-domain.com/api/contact';

    const crmResponse = await fetch(crmApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Pass your API key or authorization token here if configured
        ...(process.env.CRM_API_KEY && { 'Authorization': `Bearer ${process.env.CRM_API_KEY}` })
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || null,
        company: company || null,
        requirements: requirements || null,
        campaign_name: campaign_name || 'Website Direct'
      })
    });

    if (!crmResponse.ok) {
      const errorData = await crmResponse.json();
      console.error('CRM Sync Error:', errorData);
    }

    // 3. Return success response to website client
    return NextResponse.json({ success: true, message: 'Enquiry submitted successfully.' }, { status: 200 });
  } catch (error: any) {
    console.error('Send Mail Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}