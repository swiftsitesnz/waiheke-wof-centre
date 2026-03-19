// api/book.js — Booking form email handler
// Sends two emails via Resend:
// 1. Auto-reply to customer
// 2. Booking notification to Charity at WOF Centre

const RESEND_API_KEY = process.env.RESEND_API_KEY || 'RESEND_API_KEY_HERE';
const FROM = 'Waiheke WoF Centre <noreply@swiftsites.nz>';
const NOTIFY_EMAIL = 'officeadmin@waihekewofcentre.co.nz';

async function sendEmail(to, subject, html) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ from: FROM, to, subject, html })
  });
  return res.json();
}

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name, phone, email, vehicle, service, details } = req.body;

    if (!name || !phone || !service) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // 1. Auto-reply to customer (only if they provided email)
    if (email) {
      await sendEmail(email, 'We received your booking request — Waiheke WoF Centre', `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;color:#1a1a1a;">
          <h2 style="color:#d32f2f;margin-bottom:8px;">Booking Request Received</h2>
          <p style="color:#666;margin-bottom:24px;">Waiheke WoF Centre — Your local workshop since 2004</p>
          <p>Hi ${name},</p>
          <p>Thanks for your booking request. We've received your details and will be in touch shortly to confirm your appointment.</p>
          <table style="width:100%;border-collapse:collapse;margin:24px 0;">
            <tr style="background:#f7f7f5;"><td style="padding:10px 14px;font-weight:600;">Service</td><td style="padding:10px 14px;">${service}</td></tr>
            <tr><td style="padding:10px 14px;font-weight:600;">Vehicle</td><td style="padding:10px 14px;">${vehicle || 'Not specified'}</td></tr>
            <tr style="background:#f7f7f5;"><td style="padding:10px 14px;font-weight:600;">Notes</td><td style="padding:10px 14px;">${details || 'None'}</td></tr>
          </table>
          <p><strong>Current lead times:</strong><br>WoF inspections ~4–6 weeks · Servicing &amp; repairs ~2–3 weeks · Towing same day</p>
          <p style="margin-top:24px;">If you need to reach us directly:<br>
          📞 <a href="tel:093723270" style="color:#d32f2f;">09 372 3270</a><br>
          ✉️ <a href="mailto:officeadmin@waihekewofcentre.co.nz" style="color:#d32f2f;">officeadmin@waihekewofcentre.co.nz</a></p>
          <p style="color:#999;font-size:0.85rem;margin-top:32px;border-top:1px solid #eee;padding-top:16px;">Waiheke WoF Centre · 9 Tahi Road, Waiheke Island · Website by <a href="https://swiftsites.nz" style="color:#999;">Swift Sites</a></p>
        </div>
      `);
    }

    // 2. Notification to Charity
    await sendEmail(NOTIFY_EMAIL, `New Booking Request — ${name} (${service})`, `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;color:#1a1a1a;">
        <h2 style="color:#d32f2f;margin-bottom:8px;">New Booking Request</h2>
        <p style="color:#666;margin-bottom:24px;">Submitted via waihekewofcentre website</p>
        <table style="width:100%;border-collapse:collapse;">
          <tr style="background:#f7f7f5;"><td style="padding:10px 14px;font-weight:600;width:140px;">Name</td><td style="padding:10px 14px;">${name}</td></tr>
          <tr><td style="padding:10px 14px;font-weight:600;">Phone</td><td style="padding:10px 14px;"><a href="tel:${phone}" style="color:#d32f2f;">${phone}</a></td></tr>
          <tr style="background:#f7f7f5;"><td style="padding:10px 14px;font-weight:600;">Email</td><td style="padding:10px 14px;">${email || 'Not provided'}</td></tr>
          <tr><td style="padding:10px 14px;font-weight:600;">Vehicle</td><td style="padding:10px 14px;">${vehicle || 'Not specified'}</td></tr>
          <tr style="background:#f7f7f5;"><td style="padding:10px 14px;font-weight:600;">Service</td><td style="padding:10px 14px;">${service}</td></tr>
          <tr><td style="padding:10px 14px;font-weight:600;">Notes</td><td style="padding:10px 14px;">${details || 'None'}</td></tr>
        </table>
        <p style="color:#999;font-size:0.85rem;margin-top:32px;border-top:1px solid #eee;padding-top:16px;">Sent via Swift Sites booking handler</p>
      </div>
    `);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
