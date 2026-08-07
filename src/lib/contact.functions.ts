import { createServerFn } from "@tanstack/react-start";
import { google } from "googleapis";
import { z } from "zod";

const ContactInput = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(5).max(4000),
});

function sanitizeField(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactInput.parse(input))
  .handler(async ({ data }) => {
    const serviceAccountKey = process.env["GOOGLE_SERVICE_ACCOUNT_KEY"];
    const sheetId = process.env["GOOGLE_SHEET_ID"];
    if (!serviceAccountKey || !sheetId) {
      return { ok: false as const, error: "Sheet is not configured yet." };
    }

    const name = sanitizeField(data.name);
    const email = sanitizeField(data.email);
    const message = sanitizeField(data.message);

    try {
      const credentials = JSON.parse(serviceAccountKey.trim());
      const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: "Sheet1!A:D",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[new Date().toISOString(), name, email, message]],
        },
      });

      return { ok: true as const, error: null };
    } catch (err: any) {
      const detail = err?.response?.data?.error?.message ?? err?.message ?? String(err);
      console.error("Sheets error:", detail);
      return { ok: false as const, error: "Couldn't save the message right now." };
    }
  });
