import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

/**
 * Singleton SMTP transporter.
 *
 * Next.js hot-reloads modules in dev, which would otherwise spin up a fresh
 * connection pool on every change. Caching on `globalThis` keeps a single
 * pooled transporter alive across reloads (and across serverless warm starts).
 */
const globalForMailer = globalThis as unknown as {
    mailer?: Transporter;
};

function requireEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}

export function getTransporter(): Transporter {
    if (globalForMailer.mailer) return globalForMailer.mailer;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST ?? "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT ?? 465),
        secure: (process.env.SMTP_SECURE ?? "true") === "true",
        auth: {
            user: requireEnv("SMTP_USER"),
            pass: requireEnv("SMTP_PASS"),
        },
        pool: true,
    });

    globalForMailer.mailer = transporter;
    return transporter;
}

export const mailConfig = {
    get from() {
        const name = process.env.MAIL_FROM_NAME ?? "Bonavent Website";
        return `"${name}" <${requireEnv("SMTP_USER")}>`;
    },
    get to() {
        return requireEnv("CONTACT_TO");
    },
};
