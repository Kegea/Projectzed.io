import { Resend } from 'resend';
import { supabaseAdmin } from '@/lib/supabase';
import OpenAI from 'openai';

console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('Service key exists:', !!process.env.SUPABASE_SERVICE_ROLE_KEY);

const resend = new Resend(process.env.RESEND_API_KEY!);

const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) 
  : null;

export async function POST(request: Request) {
  try {
    const { name, business, email, service, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    // AI Validation
    if (openai) {
      try {
        const aiResponse = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `You are a strict validation bot for a web agency contact form. The user must answer three specific questions in their message:
1. What does their business do?
2. Who are their customers?
3. What is the problem they are trying to solve?

Evaluate the user's message. If it answers ALL three questions adequately (even if brief), respond with exactly "VALID". 
If it misses ANY of these questions, respond with a short, polite, direct sentence (under 15 words) asking them to include the missing information. For example: "Please let us know who your target customers are."`
            },
            {
              role: 'user',
              content: message,
            }
          ],
          temperature: 0.1,
          max_tokens: 50,
        });

        const validation = aiResponse.choices[0].message.content?.trim() || 'VALID';
        if (validation !== 'VALID') {
          return Response.json({ error: validation }, { status: 400 });
        }
      } catch (e) {
        console.error('OpenAI validation error:', e);
        // Fallthrough on error to prevent blocking legitimate leads
      }
    }

    const serviceLabels: Record<string, string> = {
      'new-website': 'A new website',
      'fix-website': 'Fix / rebuild my existing website',
      'landing-page': 'Landing page',
      'ecommerce': 'E-commerce store',
      'whatsapp-ai': 'WhatsApp AI automation',
      'telegram-bot': 'Telegram capture bot',
      'email-autoresponder': 'Email auto-responder',
      'customer-support': 'Customer support agent',
      'single-page': 'Single page portfolio',
      'not-sure': 'Not sure — I need advice',
    };
    const friendlyService = service ? (serviceLabels[service] || service) : 'your project';

    const { data, error } = await resend.emails.send({
      from: `ProjectZed Contact <${process.env.RESEND_FROM_EMAIL || 'hello@projectzed.io'}>`,
      to: process.env.RESEND_TO_EMAIL || 'hello@projectzed.io',
      replyTo: email,
      subject: `New inquiry from ${name}${business ? ` — ${business}` : ''}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:600;color:#555;">Name</td><td style="padding:8px;">${name}</td></tr>
          ${business ? `<tr><td style="padding:8px;font-weight:600;color:#555;">Business</td><td style="padding:8px;">${business}</td></tr>` : ''}
          <tr><td style="padding:8px;font-weight:600;color:#555;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
          ${service ? `<tr><td style="padding:8px;font-weight:600;color:#555;">Service</td><td style="padding:8px;">${friendlyService}</td></tr>` : ''}
          <tr><td style="padding:8px;font-weight:600;color:#555;">Message</td><td style="padding:8px;white-space:pre-wrap;">${message}</td></tr>
        </table>
      `,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    // Auto-reply to the person who submitted
    await resend.emails.send({
      from: `ProjectZed <${process.env.RESEND_FROM_EMAIL || 'hello@projectzed.io'}>`,
      to: email,
      subject: `Got it, ${name.split(' ')[0]} — we'll be in touch`,
      html: `
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f0ece2;font-family:Helvetica,Arial,sans-serif;">
          <tr><td align="center" style="padding:32px 16px;">
            <table cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;background:#013220;border-radius:8px;">
              <tr>
<td align="center" style="padding:2px 8px 2px;">
  <img src="https://res.cloudinary.com/dfg8brrmm/image/upload/c_fit,w_600,h_600/v1779976921/zed_design_uvlqs7.png" alt="ProjectZed" height="120" style="display:block;margin:0 auto 2px;max-width:100%;" />
  <p style="margin:0 0 12px;font-size:10px;color:#a09888;letter-spacing:1.2px;text-transform:uppercase;">Efficient business, less burnout</p>
</td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;background:#ffffff;border-radius:8px;margin-top:24px;">
              <tr>
                <td style="padding:32px;">
                  <h2 style="margin:0 0 16px;font-size:20px;color:#1a1a18;letter-spacing:-0.3px;">We got your message, ${name.split(' ')[0]}.</h2>
                  <p style="margin:0 0 16px;font-size:15px;color:#555550;line-height:1.7;font-weight:300;">Thanks for reaching out. We've received your enquiry about <strong style="color:#1a1a18;font-weight:500;">${friendlyService}</strong> and we'll get back to you within 24 hours.</p>
                  <p style="margin:0 0 24px;font-size:15px;color:#555550;line-height:1.7;font-weight:300;">No pitch, no pressure. Just an honest conversation about what your business needs.</p>
                  <table cellpadding="0" cellspacing="0" border="0" style="background:#f5f0e6;border-left:3px solid #4A5D23;border-radius:0 6px 6px 0;width:100%;">
                    <tr><td style="padding:16px 20px;font-size:13px;color:#555550;line-height:1.6;font-weight:300;">If you have anything to add or a question before we get back to you, just reply to this email or message us on WhatsApp.</td></tr>
                  </table>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;margin-top:24px;">
              <tr>
                <td align="center" style="padding:0;">
                  <a href="https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}" style="display:inline-block;background:#25D366;color:#ffffff;font-weight:600;padding:12px 24px;border-radius:4px;text-decoration:none;font-size:14px;">Chat on WhatsApp</a>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;margin-top:24px;border-top:1px solid #d5d0c8;">
              <tr>
                <td align="center" style="padding:16px 0 0;">
                  <p style="margin:0 0 2px;font-size:13px;color:#013220;font-weight:600;">ProjectZed.io</p>
                  <p style="margin:0;font-size:11px;color:#888880;">Kampala, Uganda &#183; Remote Globally</p>
                </td>
              </tr>
            </table>
          </td></tr>
        </table>
      `,
    });

    // ── SAVE LEAD TO SUPABASE ──────────────────
    const { error: dbError } = await supabaseAdmin
      .from('leads')
      .insert({
        name,
        business,
        email,
        service,
        message,
        source: 'contact_form',
        status: 'new',
        locale: request.headers.get('accept-language')?.split(',')[0] || 'en',
        ip_address: request.headers.get('x-forwarded-for') ||
                    request.headers.get('x-real-ip') ||
                    'unknown',
      });

    if (dbError) {
      console.error('Supabase insert error:', dbError);
    }

    return Response.json({ success: true, id: data?.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Something went wrong';
    console.error('[Contact API]', message);
    return Response.json({ error: message }, { status: 500 });
  }
}
