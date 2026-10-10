"use server";

import { Resend } from "resend";
import { PHONE_DISPLAY } from "@/lib/contact";
import { APP } from "@/lib/App";
import type { QuoteFieldName, QuoteFormState } from "@/lib/Quote";

const FROM_ADDRESS =
  process.env.QUOTE_FROM_EMAIL ?? `${APP.name} <onboarding@resend.dev>`;
const TO_ADDRESS = process.env.QUOTE_TO_EMAIL ?? "";

// Brand colours from the design tokens (ink, signal red).
const INK = "#0F1114";
const SIGNAL = "#C8321E";

const FAILURE_MESSAGE = `We couldn't submit the form just now. Please call or WhatsApp us on ${PHONE_DISPLAY} and we'll quote you straight away.`;

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendQuote(
  _prevState: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  // Honeypot: real visitors never fill this hidden field.
  if (clean(formData.get("company"))) {
    return { status: "success", message: "", errors: {}, values: {} };
  }

  const values: Record<QuoteFieldName, string> = {
    name: clean(formData.get("name")),
    phone: clean(formData.get("phone")),
    from: clean(formData.get("from")),
    to: clean(formData.get("to")),
    date: clean(formData.get("date")),
    message: clean(formData.get("message")),
  };

  const errors: QuoteFormState["errors"] = {};
  if (!values.name) errors.name = "Please tell us your name.";
  if (!values.phone) {
    errors.phone = "We need a number to send your quote to.";
  } else if (values.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!values.from) errors.from = "Where are you moving from?";
  if (!values.to) errors.to = "Where are you moving to?";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
      values,
    };
  }

  const failure: QuoteFormState = {
    status: "error",
    message: FAILURE_MESSAGE,
    errors: {},
    values,
  };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !TO_ADDRESS) {
    console.error(
      "[send-quote] RESEND_API_KEY or QUOTE_TO_EMAIL is not set; quote not emailed.",
    );
    return failure;
  }

  const rows: [string, string][] = [
    ["Name", values.name],
    ["Phone", values.phone],
    ["Moving from", values.from],
    ["Moving to", values.to],
    ["Moving date", values.date || "—"],
    ["Message", values.message || "—"],
  ];

  const submittedAt = new Date().toLocaleString("en-AE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Dubai",
  });

  const telHref = values.phone.replace(/[^\d+]/g, "");
  const source = escapeHtml(APP.url || APP.name);

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#EAE7E1;font-family:Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EAE7E1;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background-color:${INK};border-top:4px solid ${SIGNAL};padding:24px 32px;">
                <p style="margin:0;color:#ffffff;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;opacity:.75;">${escapeHtml(APP.name)}</p>
                <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;font-weight:700;text-transform:uppercase;letter-spacing:.02em;">New Quote Request</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 8px;">
                <p style="margin:0;color:#52525b;font-size:13px;">Submitted ${escapeHtml(submittedAt)} (Dubai time)</p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
                  ${rows
                    .map(
                      ([label, value]) =>
                        `<tr><td style="padding:10px 0;border-bottom:1px solid #e4e4e7;color:#71717a;font-weight:600;width:140px;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:10px 0;border-bottom:1px solid #e4e4e7;color:${INK};vertical-align:top;">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`,
                    )
                    .join("")}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 28px;">
                <a href="tel:${telHref}" style="display:inline-block;background-color:${SIGNAL};color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 20px;border-radius:12px;">Call ${escapeHtml(values.phone)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px;background-color:#F4F2EE;border-top:1px solid #e4e4e7;">
                <p style="margin:0;color:#71717a;font-size:12px;">This lead was submitted via the quote form on ${source}.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      subject: `Quote request — ${values.name} (${values.from} → ${values.to})`,
      html,
    });
    if (error) throw new Error(error.message);
  } catch (error) {
    console.error("[send-quote] Failed to send quote email:", error);
    return failure;
  }

  return { status: "success", message: "", errors: {}, values: {} };
}
