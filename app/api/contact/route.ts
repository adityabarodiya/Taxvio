import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, message } = await req.json();

    const payload = {
      messaging_product: "whatsapp",
      to: process.env.OWNER_WHATSAPP_NUMBER,
      type: "text",
      text: {
        body: `📩 New Website Inquiry\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n📝 Message: ${message}`,
      },
    };

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send WhatsApp message" },
      { status: 500 }
    );
  }
}
