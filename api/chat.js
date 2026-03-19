// api/chat.js — WOF Centre chatbot handler
// Powered by Claude (Anthropic) — swap ANTHROPIC_API_KEY at handover

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || 'ANTHROPIC_API_KEY_HERE';

const SYSTEM_PROMPT = `You are the helpful assistant for Waiheke WoF Centre, a mechanical workshop on Waiheke Island, Auckland, New Zealand. You've been serving the Waiheke community since 2004.

Your job is to answer questions about the workshop's services, pricing, location, and booking process. Be friendly, helpful, and concise. Keep responses short — 2-3 sentences max unless a longer answer is genuinely needed.

Key facts:
- Location: 9 Tahi Road, Waiheke Island
- Phone: 09 372 3270
- Email: officeadmin@waihekewofcentre.co.nz
- Services: WOF inspections, full servicing, repairs, diagnostics, tyres, AA towing
- NOT available: head gasket repairs, specialist auto electrical
- Lead times: WOF ~4-6 weeks, servicing/repairs ~2-3 weeks, towing same day
- Pricing (estimates): WOF ~$75, basic service from $180, full service from $350, diagnostic from $80, tyre fitting from $25/tyre
- AA towing partner across Waiheke Island
- European cars: general mechanical work yes, some specialist systems may need referral

Always encourage bookings via the booking form or a phone call. Never make up information you don't know — say "give us a call on 09 372 3270 and we'll sort you out."`;

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { message, history = [] } = req.body;
    if (!message) return res.status(400).json({ error: 'No message provided' });

    // Build messages array (last 6 turns max to keep costs down)
    const messages = [
      ...history.slice(-6),
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || 'API error');

    const reply = data.content[0].text;
    return res.status(200).json({ reply });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ reply: "Sorry, I'm having a moment. Give us a call on 09 372 3270 and we'll sort you out!" });
  }
};
