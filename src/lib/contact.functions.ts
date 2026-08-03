import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { profile } from "@/data/portfolio";

const ContactInput = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(5).max(4000),
});

function base64Url(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactInput.parse(input))
  .handler(async ({ data }) => {
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const gmailKey = process.env["GOOGLE_MAIL_API_KEY"];
    if (!lovableKey || !gmailKey) {
      return { ok: false as const, error: "Email is not configured yet." };
    }

    const name = sanitizeHeader(data.name);
    const from = sanitizeHeader(data.email);

    const raw = [
      `To: ${profile.email}`,
      `Reply-To: ${from}`,
      `Subject: Portfolio message from ${name}`,
      'Content-Type: text/plain; charset="UTF-8"',
      "",
      `Name: ${name}`,
      `Email: ${from}`,
      "",
      data.message,
    ].join("\r\n");

    try {
      const response = await fetch(
        "https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${lovableKey}`,
            "X-Connection-Api-Key": gmailKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ raw: base64Url(raw) }),
        },
      );

      if (!response.ok) {
        const body = await response.text();
        console.error(`Gmail send failed [${response.status}]: ${body}`);
        return { ok: false as const, error: "Couldn't send the message right now." };
      }

      return { ok: true as const, error: null };
    } catch (err) {
      console.error("Gmail send error:", err instanceof Error ? err.message : err);
      return { ok: false as const, error: "Couldn't send the message right now." };
    }
  });
