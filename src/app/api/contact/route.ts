import { NextResponse } from "next/server";
import path from "node:path";
import fs from "node:fs/promises";
import { getTransporter, mailConfig } from "@/lib/mailer";
import {
    buildAdminEmail,
    buildAutoReplyEmail,
    LOGO_CID,
    type ContactPayload,
} from "@/lib/email-template";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<keyof ContactPayload, string>>;

function validate(body: unknown): { data?: ContactPayload; errors?: Errors } {
    if (typeof body !== "object" || body === null) {
        return { errors: { name: "Invalid request body" } };
    }

    const { name, email, phone, message } = body as Record<string, unknown>;
    const errors: Errors = {};

    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanEmail = typeof email === "string" ? email.trim() : "";
    const cleanPhone = typeof phone === "string" ? phone.trim() : "";
    const cleanMessage = typeof message === "string" ? message.trim() : "";

    if (!cleanName) errors.name = "Name is required";
    if (!cleanEmail) errors.email = "Email is required";
    else if (!EMAIL_RE.test(cleanEmail)) errors.email = "Enter a valid email";
    if (!cleanMessage) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) return { errors };

    return {
        data: {
            name: cleanName,
            email: cleanEmail,
            phone: cleanPhone || undefined,
            message: cleanMessage,
        },
    };
}

/** Read the brand logo once and reuse it across requests as an inline attachment. */
let logoBufferPromise: Promise<Buffer> | null = null;
function loadLogo(): Promise<Buffer> {
    if (!logoBufferPromise) {
        const logoPath = path.join(
            process.cwd(),
            "public",
            "assests",
            "images",
            "logo.png"
        );
        logoBufferPromise = fs.readFile(logoPath);
    }
    return logoBufferPromise;
}

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { ok: false, message: "Invalid JSON payload." },
            { status: 400 }
        );
    }

    const { data, errors } = validate(body);
    if (!data) {
        return NextResponse.json(
            { ok: false, message: "Please check the form fields.", errors },
            { status: 422 }
        );
    }

    try {
        const transporter = getTransporter();
        const logo = await loadLogo();

        const attachments = [
            {
                filename: "logo.png",
                content: logo,
                cid: LOGO_CID,
            },
        ];

        const admin = buildAdminEmail(data);
        const reply = buildAutoReplyEmail(data);

        // Notify the team. Setting replyTo lets a one-click reply reach the sender.
        await transporter.sendMail({
            from: mailConfig.from,
            to: mailConfig.to,
            replyTo: `"${data.name}" <${data.email}>`,
            subject: admin.subject,
            html: admin.html,
            text: admin.text,
            attachments,
        });

        // Confirmation to the person who wrote in. Don't fail the request if
        // this secondary message bounces — the team has already been notified.
        try {
            await transporter.sendMail({
                from: mailConfig.from,
                to: data.email,
                subject: reply.subject,
                html: reply.html,
                text: reply.text,
                attachments,
            });
        } catch (replyError) {
            console.error("[contact] auto-reply failed:", replyError);
        }

        return NextResponse.json({
            ok: true,
            message: "Thanks! Your message has been sent.",
        });
    } catch (error) {
        return NextResponse.json(
            {
                ok: false,
                message:
                    "Something went wrong sending your message. Please try again later.",
            },
            { status: 502 }
        );
    }
}
