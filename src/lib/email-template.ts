export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export const LOGO_CID = "bonavent-logo";

/* ── Brand tokens ─────────────────────────────────────────────────────── */

const BRAND = {
  gradientFrom: "#17223A",
  gradientMid: "#30599D",
  gradientTo: "#6078ea",
  accent: "#6078ea",
  accentDeep: "#30599D",
  ink: "#101828",
  body: "#475467",
  sub: "#98a2b3",
  line: "#eaecf5",
  soft: "#f6f8fd",
  page: "#e9edf6",
  success: "#16a249",
};


function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nl2br(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "B";
  const first = parts[0][0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] ?? "" : "";
  return (first + last).toUpperCase();
}

function formattedNow(): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(new Date()) + " UTC";
}


const FONT =
  "'Segoe UI',Roboto,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif";

function shell(innerHtml: string, preheader: string): string {
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="color-scheme" content="light only" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>Bonavent</title>
</head>
<body style="margin:0; padding:0; background-color:${BRAND.page}; -webkit-font-smoothing:antialiased; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;">
  <div style="display:none; max-height:0; overflow:hidden; opacity:0; color:transparent; font-size:1px; line-height:1px;">
    ${escapeHtml(preheader)}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.page};">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff; border-radius:20px; overflow:hidden; box-shadow:0 18px 50px rgba(16,24,40,0.14); font-family:${FONT};">

          <!-- Header -->
          <tr>
            <td style="padding:0; background:linear-gradient(135deg, ${BRAND.gradientFrom} 0%, ${BRAND.gradientMid} 55%, ${BRAND.gradientTo} 100%); background-color:${BRAND.gradientFrom};">
              <!-- top accent line -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="height:4px; line-height:4px; font-size:0; background:linear-gradient(90deg, ${BRAND.gradientTo} 0%, #9db0ff 50%, ${BRAND.gradientTo} 100%);">&nbsp;</td></tr>
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:34px 40px 32px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="left" style="vertical-align:middle;">
                          <!-- logo on a white pill so the blue mark stays crisp on the dark header -->
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="background-color:#ffffff; border-radius:14px; padding:11px 20px; box-shadow:0 6px 18px rgba(0,0,0,0.18);">
                                <img src="cid:${LOGO_CID}" alt="Bonavent" height="30" style="display:block; height:30px; width:auto; border:0; outline:none; text-decoration:none;" />
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td align="right" style="vertical-align:middle;">
                          <!-- frosted-glass tagline pill -->
                          <table role="presentation" cellpadding="0" cellspacing="0" align="right">
                            <tr>
                              <td style="background-color:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.22); border-radius:999px; padding:8px 16px;">
                                <span style="font-size:10.5px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:#ffffff;">
                                  Drive &middot; Host &middot; Earn
                                </span>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${innerHtml}

          <!-- Footer -->
          <tr>
            <td style="padding:30px 40px 34px; background-color:${BRAND.soft}; border-top:1px solid ${BRAND.line};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <img src="cid:${LOGO_CID}" alt="Bonavent" height="22" style="display:block; height:22px; width:auto; border:0; opacity:0.55; margin:0 auto 14px;" />
                    <p style="margin:0 0 4px; font-size:12px; line-height:18px; color:${BRAND.body}; font-weight:600;">
                      Car Rentalyour trusted way to book, host, and earn.
                    </p>
                    <p style="margin:0 0 12px; font-size:12px; line-height:18px; color:${BRAND.sub};">
                      This message was generated by the Bonavent website contact form.
                    </p>
                    <p style="margin:0; font-size:11px; line-height:16px; color:${BRAND.sub};">
                      &copy; ${new Date().getFullYear()} Bonavent. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>

        <!-- sub-footer -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">
          <tr>
            <td align="center" style="padding:18px 24px 4px;">
              <p style="margin:0; font-size:11px; line-height:16px; color:${BRAND.sub}; font-family:${FONT};">
                You're receiving this because the Bonavent contact form was submitted.
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildAdminEmail(data: ContactPayload): {
  subject: string;
  html: string;
  text: string;
} {
  const submittedAt = formattedNow();

  const phoneCell = data.phone?.trim()
    ? `
                <tr>
                  <td style="padding:0 0 16px;">
                    <p style="margin:0 0 3px; font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:${BRAND.sub};">Phone</p>
                    <a href="tel:${escapeHtml(data.phone)}" style="font-size:15px; line-height:22px; color:${BRAND.ink}; text-decoration:none; font-weight:500;">${escapeHtml(data.phone)}</a>
                  </td>
                </tr>`
    : "";

  const inner = `
          <!-- Status badge + title -->
          <tr>
            <td style="padding:36px 40px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#eef2fe; border:1px solid #d6e0fc; border-radius:999px; padding:6px 14px;">
                    <span style="display:inline-block; width:7px; height:7px; border-radius:50%; background-color:${BRAND.success}; vertical-align:middle; margin-right:7px;"></span>
                    <span style="font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:${BRAND.accentDeep}; vertical-align:middle;">New Lead</span>
                  </td>
                </tr>
              </table>
              <h1 style="margin:18px 0 6px; font-size:25px; line-height:32px; font-weight:700; color:${BRAND.ink}; letter-spacing:-0.02em;">
                You have a new contact request
              </h1>
              <p style="margin:0; font-size:14px; line-height:22px; color:${BRAND.body};">
                A visitor just reached out through the Bonavent website. Their details are below — reply directly to start the conversation.
              </p>
            </td>
          </tr>

          <!-- Sender card -->
          <tr>
            <td style="padding:26px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg, #f7f9fe 0%, #eef2fe 100%); background-color:${BRAND.soft}; border:1px solid ${BRAND.line}; border-radius:16px;">
                <tr>
                  <td style="padding:22px 24px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align:middle; padding-right:16px;">
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td align="center" valign="middle" width="56" height="56" style="width:56px; height:56px; border-radius:50%; background:linear-gradient(135deg, ${BRAND.gradientMid} 0%, ${BRAND.gradientTo} 100%); background-color:${BRAND.accent}; color:#ffffff; font-size:20px; font-weight:700; font-family:${FONT};">
                                ${escapeHtml(initials(data.name))}
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td style="vertical-align:middle;">
                          <p style="margin:0 0 2px; font-size:17px; line-height:24px; font-weight:700; color:${BRAND.ink};">${escapeHtml(data.name)}</p>
                          <a href="mailto:${escapeHtml(data.email)}" style="font-size:13px; line-height:20px; color:${BRAND.accentDeep}; text-decoration:none;">${escapeHtml(data.email)}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:24px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${phoneCell}
                <tr>
                  <td style="padding:0 0 8px;">
                    <p style="margin:0 0 8px; font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:${BRAND.sub};">Message</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-left:3px solid ${BRAND.accent}; background-color:${BRAND.soft}; border-radius:0 12px 12px 0;">
                      <tr>
                        <td style="padding:16px 20px;">
                          <p style="margin:0; font-size:15px; line-height:25px; color:${BRAND.ink};">${nl2br(data.message)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:26px 40px 4px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:999px; background:linear-gradient(135deg, ${BRAND.gradientMid} 0%, ${BRAND.gradientTo} 100%); background-color:${BRAND.accentDeep}; box-shadow:0 8px 20px rgba(96,120,234,0.35);">
                    <a href="mailto:${escapeHtml(data.email)}?subject=Re:%20Your%20message%20to%20Bonavent"
                       style="display:inline-block; padding:14px 32px; font-size:14px; font-weight:700; color:#ffffff; text-decoration:none; border-radius:999px; font-family:${FONT};">
                      Reply to ${escapeHtml(data.name.trim().split(/\s+/)[0] || "sender")} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Meta bar -->
          <tr>
            <td style="padding:24px 40px 30px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ${BRAND.line};">
                <tr>
                  <td style="padding:16px 0 0;">
                    <span style="font-size:12px; color:${BRAND.sub};">Received</span>
                    <span style="font-size:12px; color:${BRAND.body}; font-weight:600;"> &nbsp;${escapeHtml(submittedAt)}</span>
                    <span style="font-size:12px; color:${BRAND.line};"> &nbsp;|&nbsp; </span>
                    <span style="font-size:12px; color:${BRAND.sub};">Source</span>
                    <span style="font-size:12px; color:${BRAND.body}; font-weight:600;"> &nbsp;Website contact form</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>`;

  const text = [
    `NEW LEAD — Bonavent contact form`,
    `========================================`,
    ``,
    `Name:    ${data.name}`,
    `Email:   ${data.email}`,
    data.phone?.trim() ? `Phone:   ${data.phone}` : null,
    ``,
    `Message:`,
    data.message,
    ``,
    `----------------------------------------`,
    `Received: ${submittedAt}`,
    `Source:   Website contact form`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  return {
    subject: `New contact request from ${data.name}`,
    html: shell(inner, `New contact request from ${data.name}`),
    text,
  };
}

export function buildAutoReplyEmail(data: ContactPayload): {
  subject: string;
  html: string;
  text: string;
} {
  const firstName = data.name.trim().split(/\s+/)[0] || "there";

  const step = (n: number, title: string, desc: string, last = false) => `
                <tr>
                  <td width="40" style="vertical-align:top; padding:0 14px ${last ? "0" : "20px"} 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" valign="middle" width="34" height="34" style="width:34px; height:34px; border-radius:50%; background:linear-gradient(135deg, ${BRAND.gradientMid} 0%, ${BRAND.gradientTo} 100%); background-color:${BRAND.accent}; color:#ffffff; font-size:14px; font-weight:700; font-family:${FONT};">${n}</td>
                      </tr>
                    </table>
                  </td>
                  <td style="vertical-align:top; padding:0 0 ${last ? "0" : "20px"};">
                    <p style="margin:0 0 2px; font-size:15px; line-height:22px; font-weight:700; color:${BRAND.ink};">${title}</p>
                    <p style="margin:0; font-size:13px; line-height:21px; color:${BRAND.body};">${desc}</p>
                  </td>
                </tr>`;

  const inner = `
          <!-- Hero -->
          <tr>
            <td style="padding:40px 40px 0; text-align:center;">
              <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                <tr>
                  <td align="center" valign="middle" width="64" height="64" style="width:64px; height:64px; border-radius:50%; background:linear-gradient(135deg, #e7fff0 0%, #d6f8e3 100%); background-color:#e7fff0; font-size:30px; line-height:64px;">
                    ✓
                  </td>
                </tr>
              </table>
              <h1 style="margin:22px 0 8px; font-size:26px; line-height:34px; font-weight:700; color:${BRAND.ink}; letter-spacing:-0.02em;">
                Thanks for reaching out, ${escapeHtml(firstName)}!
              </h1>
              <p style="margin:0 auto; max-width:420px; font-size:15px; line-height:24px; color:${BRAND.body};">
                We&rsquo;ve got your message and a member of the Bonavent team will be in touch with you very soon.
              </p>
            </td>
          </tr>

          <!-- What happens next -->
          <tr>
            <td style="padding:32px 40px 0;">
              <p style="margin:0 0 16px; font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:${BRAND.sub};">What happens next</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${step(1, "We review your message", "Our team reads every request carefully to point you to the right person.")}
                ${step(2, "We get back to you", "Expect a personal reply, typically within one business day.")}
                ${step(3, "Let's get you moving", "Book a car, hire a driver, or start hosting and earning.", true)}
              </table>
            </td>
          </tr>

          <!-- Copy of message -->
          <tr>
            <td style="padding:30px 40px 0;">
              <p style="margin:0 0 8px; font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:${BRAND.sub};">Your message</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-left:3px solid ${BRAND.accent}; background-color:${BRAND.soft}; border-radius:0 12px 12px 0;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0; font-size:15px; line-height:25px; color:${BRAND.ink};">${nl2br(data.message)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sign-off -->
          <tr>
            <td style="padding:28px 40px 34px;">
              <p style="margin:0; font-size:14px; line-height:22px; color:${BRAND.body};">
                Warm regards,
              </p>
              <p style="margin:4px 0 0; font-size:15px; line-height:22px; color:${BRAND.ink}; font-weight:700;">
                The Bonavent Team
              </p>
            </td>
          </tr>`;

  const text = [
    `Thanks for reaching out, ${firstName}!`,
    ``,
    `We've got your message and a member of the Bonavent team will be in touch very soon.`,
    ``,
    `What happens next:`,
    `  1. We review your message`,
    `  2. We get back to you — typically within one business day`,
    `  3. Let's get you moving — book, drive, host, and earn`,
    ``,
    `Your message:`,
    data.message,
    ``,
    `Warm regards,`,
    `The Bonavent Team`,
  ].join("\n");

  return {
    subject: "We received your message — Bonavent",
    html: shell(inner, "Thanks for reaching out — we'll be in touch soon."),
    text,
  };
}
