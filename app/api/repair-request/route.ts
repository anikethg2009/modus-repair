import { Resend } from "resend";
import { site } from "@/content/site";
import { HONEYPOT_FIELD, validateRepairRequest } from "@/lib/repairRequest";

// Until you verify your own domain in Resend, the shared onboarding sender can
// only deliver to the email address your Resend account was created with.
// TODO: After verifying a domain, set RESEND_FROM (e.g. "Modus Repair <requests@yourdomain.com>").
const FROM = process.env.RESEND_FROM || "Modus Repair <onboarding@resend.dev>";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: "Invalid submission." }, { status: 400 });
  }

  // Honeypot filled in: almost certainly a bot. Pretend it worked and send nothing.
  const trap = form.get(HONEYPOT_FIELD);
  if (typeof trap === "string" && trap.trim() !== "") {
    return Response.json({ ok: true });
  }

  const result = validateRepairRequest(form);
  if (!result.ok) {
    return Response.json({ error: "Please fix the highlighted fields.", fields: result.errors }, { status: 422 });
  }
  const r = result.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[repair-request] RESEND_API_KEY is not set");
    return Response.json({ error: "The form isn't set up yet. Please call or email instead." }, { status: 500 });
  }

  const rows: [string, string][] = [
    ["Name", r.name],
    ["Email", r.email],
    ["Phone", r.phone],
    ["Device", r.device],
    ["Preferred contact", r.contactMethod],
    ["Photo", r.photo ? `Attached (${r.photo.name})` : "None"],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nIssue:\n${r.issue}\n`;
  const html = `<h2 style="margin:0 0 12px">New repair request</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="color:#5e594f">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`)
    .join("")}</table>
<p style="color:#5e594f;margin:16px 0 4px">Issue</p>
<p style="white-space:pre-wrap;margin:0">${escapeHtml(r.issue)}</p>`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: site.contact.email,
    replyTo: r.email,
    subject: `Repair request: ${r.device} from ${r.name}`,
    text,
    html,
    attachments: r.photo
      ? [
          {
            filename: r.photo.name || "photo",
            content: Buffer.from(await r.photo.arrayBuffer()),
            contentType: r.photo.type,
          },
        ]
      : undefined,
  });

  if (error) {
    console.error(`[repair-request] Resend error: ${error.name}: ${error.message}`);
    return Response.json({ error: "Something went wrong sending your request. Please try again or call." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
