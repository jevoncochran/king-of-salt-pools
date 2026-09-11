"use server";

import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

const resend = new Resend(process.env.RESEND_API_KEY);

export type QuoteRequest = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  streetAddress: string;
  city: string;
  howHeard: string;
  poolSize: string;
  hasSaltSystem: boolean;
  poolPhoto: File | null;
  preferredDay: string;
  preferredTime: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function row(label: string, value: string) {
  if (!value) return "";
  return `<tr><td style="padding:4px 12px 4px 0;color:#666;white-space:nowrap;">${label}</td><td style="padding:4px 0;font-weight:600;">${escapeHtml(value)}</td></tr>`;
}

export async function submitQuoteRequest(data: QuoteRequest) {
  if (!data.firstName.trim() || !data.phone.trim() || !data.email.trim()) {
    throw new Error("Missing required fields");
  }

  const { poolPhoto } = data;
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ");

  const preferredContact =
    data.preferredDay && data.preferredTime
      ? `${data.preferredDay} around ${data.preferredTime}`
      : "No preference given";

  const html = `
    <div style="font-family:sans-serif;font-size:14px;color:#111;">
      <h2 style="margin:0 0 16px;">New Quote Request from ${escapeHtml(fullName)}</h2>
      <table cellpadding="0" cellspacing="0">
        ${row("Name", fullName)}
        ${row("Phone", data.phone)}
        ${row("Email", data.email)}
        ${row("Street Address", data.streetAddress)}
        ${row("City", data.city)}
        ${row("Pool Size", data.poolSize)}
        ${row("Has Existing Salt System", data.hasSaltSystem ? "Yes" : "No")}
        ${row("How They Heard About Us", data.howHeard)}
        ${row("Preferred Contact Time", preferredContact)}
      </table>
      ${poolPhoto ? "<p>A photo of their pool is attached.</p>" : ""}
    </div>
  `;

  const attachments = poolPhoto
    ? [
        {
          filename: poolPhoto.name || "pool-photo.jpg",
          content: Buffer.from(await poolPhoto.arrayBuffer()),
        },
      ]
    : undefined;

  const { error } = await resend.emails.send({
    from: `${siteConfig.name} Website <onboarding@resend.dev>`,
    to: siteConfig.email,
    replyTo: data.email,
    subject: `New Quote Request from ${fullName}`,
    html,
    attachments,
  });

  if (error) {
    console.error("Resend failed to send quote request email:", error);
    throw new Error("Failed to send quote request email");
  }

  return { success: true as const };
}
