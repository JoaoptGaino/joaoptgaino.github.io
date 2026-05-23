import type { NextApiRequest, NextApiResponse } from "next";

type ContactBody = {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const requiredEnvMessage =
  "Email service is not configured. Set RESEND_API_KEY and CONTACT_TO_EMAIL in Vercel.";

const sanitize = (value?: string) => value?.trim().slice(0, 2000) || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const body = req.body as ContactBody;
  const name = sanitize(body.name);
  const phone = sanitize(body.phone);
  const email = sanitize(body.email);
  const subject = sanitize(body.subject);
  const message = sanitize(body.message);

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      message: "Name, email, subject, and message are required.",
    });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "joaoptgaino@hotmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!resendApiKey || !toEmail) {
    return res.status(500).json({ message: requiredEnvMessage });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Portfolio contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return res.status(502).json({
      message: "Could not send the email right now. Please try again later.",
    });
  }

  return res.status(200).json({ message: "Message sent successfully." });
}
