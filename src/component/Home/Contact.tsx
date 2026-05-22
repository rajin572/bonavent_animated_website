"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Container from "../ui/Container";
import { useGSAP, gsap, SplitText } from "@/lib/gsap-util";
import {
    FaInstagram,
    FaFacebook,
    FaXTwitter,
    FaLinkedin,
} from "react-icons/fa6";
import { BsArrowUpRight, BsCheckCircleFill, BsX } from "react-icons/bs";

type FormValues = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

const contactInfo = [
    {
        label: "Email Us",
        lines: ["admin@bonaventpr.com"],
    },
    {
        label: "Address",
        lines: ["123 Bonavent Drive", "Lagos, Nigeria"],
    },
];

const socials = [
    { Icon: FaFacebook, href: "https://www.facebook.com/bonavent", label: "Facebook" },
    { Icon: FaInstagram, href: "https://www.instagram.com/bonavent", label: "Instagram" },
    { Icon: FaXTwitter, href: "https://x.com/bonavent", label: "X / Twitter" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/company/bonavent", label: "LinkedIn" },
];

const Contact = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const [serverError, setServerError] = useState<string | null>(null);
    const [showSuccess, setShowSuccess] = useState(false);
    // Bumped on every successful send so the auto-dismiss timer restarts even
    // when the banner is already visible from a previous submission.
    const [successKey, setSuccessKey] = useState(0);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        setServerError(null);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json().catch(() => ({}));

            if (!res.ok) {
                throw new Error(
                    result?.message ?? "Something went wrong. Please try again."
                );
            }

            reset();
            setShowSuccess(true);
            setSuccessKey((k) => k + 1);
        } catch (err) {
            setServerError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong. Please try again."
            );
        }
    };

    // Auto-dismiss the success banner after 5s. The cleanup clears the timer on
    // manual close, re-trigger, or unmount — so no stale timer ever fires.
    useEffect(() => {
        if (!showSuccess) return;
        const timer = setTimeout(() => setShowSuccess(false), 5000);
        return () => clearTimeout(timer);
    }, [showSuccess, successKey]);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 78%",
                    toggleActions: "restart none none reverse",
                },
            });

            /* ── Heading chars fly up with rotateX depth ── */
            const split = SplitText.create(".contact-heading", {
                type: "chars words",
                mask: "words",
                autoSplit: true,
                smartWrap: true,
            });

            tl.from(split.chars, {
                yPercent: 120,
                rotateX: -40,
                opacity: 0,
                transformOrigin: "0% 50% -30px",
                duration: 0.75,
                ease: "power3.out",
                stagger: 0.018,
            }, 0)
                .from(".contact-sub", {
                    y: 20,
                    opacity: 0,
                    duration: 0.55,
                    ease: "power2.out",
                }, 0.45)
                .from(".contact-info-col", {
                    y: 35,
                    opacity: 0,
                    duration: 0.55,
                    ease: "power2.out",
                    stagger: 0.12,
                }, 0.35)
                .from(".contact-divider", {
                    scaleX: 0,
                    transformOrigin: "left center",
                    duration: 0.9,
                    ease: "power3.out",
                }, 0.55)
                .from(".contact-form-head", {
                    y: 24,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                }, 0.5)
                .from(".contact-field", {
                    y: 28,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    stagger: 0.09,
                }, 0.6)
                .from(".contact-submit", {
                    scale: 0.85,
                    opacity: 0,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                }, 0.95)
                .from(".contact-social", {
                    scale: 0,
                    rotation: -90,
                    opacity: 0,
                    duration: 0.4,
                    ease: "back.out(2)",
                    stagger: 0.07,
                    // Keep icons in their natural (visible) state until the scroll
                    // plays this tween — so they can never freeze hidden if the
                    // timeline is interrupted (e.g. dev StrictMode double-mount).
                    immediateRender: false,
                    clearProps: "transform,opacity",
                }, 0.5);
        },
        { scope: sectionRef }
    );

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="bg-secondary-color py-20 lg:py-28"
        >
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20">

                    {/* ── Left ── */}
                    <div className="flex flex-col justify-between gap-12">
                        <div className="flex flex-col gap-5">
                            <h2 className="contact-heading text-[2.6rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-white leading-[1.05] tracking-tight">
                                Let&apos;s Get You on the Road.
                            </h2>
                            <p className="contact-sub text-primary-color/70 text-sm sm:text-base leading-relaxed max-w-xs">
                                Whether you want to book a car, become a host, or just say hello — we&apos;d love to hear from you.
                            </p>
                        </div>

                        {/* Socials */}
                        <div className="contact-socials flex items-center gap-3">
                            {socials.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="contact-social w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                                >
                                    <Icon className="text-base" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Right ── */}
                    <div className="flex flex-col gap-8">

                        {/* Contact info columns */}
                        <div className="contact-info-row grid grid-cols-2 gap-6">
                            {contactInfo.map(({ label, lines }) => (
                                <div key={label} className="contact-info-col flex flex-col gap-2">
                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-color/70">
                                        {label}
                                    </p>
                                    {lines.map((line) => (
                                        <p key={line} className="text-lg tracking-wider text-primary-color leading-relaxed">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="contact-divider h-px w-full bg-white/0" />

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="contact-form flex flex-col gap-0"
                            noValidate
                        >
                            {/* Form header */}
                            <div className="contact-form-head flex flex-col gap-1.5 mb-5">
                                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-primary-color/70">
                                    <span className="h-px w-6 bg-white/30" />
                                    Get in touch
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                                    Send us a message
                                </h3>
                            </div>

                            <div className="contact-field flex flex-col border-b border-white/50 py-4 gap-1">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    {...register("name", { required: "Name is required" })}
                                    className="bg-transparent text-white placeholder:text-primary-color/70 text-base outline-none w-full"
                                />
                                {errors.name && (
                                    <p className="text-xs text-red-300">{errors.name.message}</p>
                                )}
                            </div>

                            <div className="contact-field flex flex-col border-b border-white/50 py-4 gap-1">
                                <input
                                    type="email"
                                    placeholder="name@yourname.com"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Enter a valid email",
                                        },
                                    })}
                                    className="bg-transparent text-white placeholder:text-primary-color/70 text-base outline-none w-full"
                                />
                                {errors.email && (
                                    <p className="text-xs text-red-300">{errors.email.message}</p>
                                )}
                            </div>

                            <div className="contact-field flex flex-col border-b border-white/50 py-4 gap-1">
                                <input
                                    type="tel"
                                    placeholder="+(1) 234 567 000 000"
                                    {...register("phone")}
                                    className="bg-transparent text-white placeholder:text-primary-color/70 text-base outline-none w-full"
                                />
                            </div>

                            <div className="contact-field flex flex-col border-b border-white/50 py-4 gap-1">
                                <textarea
                                    rows={3}
                                    placeholder="Enter your message here..."
                                    {...register("message", { required: "Message is required" })}
                                    className="bg-transparent text-white placeholder:text-primary-color/70 text-base outline-none w-full "
                                />
                                {errors.message && (
                                    <p className="text-xs text-red-300">{errors.message.message}</p>
                                )}
                            </div>

                            <div className="contact-submit flex justify-end mt-7">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-secondary-color font-bold text-sm hover:brightness-95 active:scale-95 transition disabled:opacity-50 cursor-pointer"
                                >
                                    {isSubmitting ? "Sending…" : "Submit Form"}
                                    {!isSubmitting && <BsArrowUpRight className="text-sm" />}
                                </button>
                            </div>

                            {showSuccess && !serverError && (
                                <div
                                    role="status"
                                    aria-live="polite"
                                    className="contact-success mt-4 flex items-center gap-3 rounded-xl border border-green-400/30 bg-green-400/10 px-4 py-3 backdrop-blur-sm"
                                >
                                    <BsCheckCircleFill className="shrink-0 text-base text-green-300" />
                                    <p className="flex-1 text-sm font-medium text-green-200">
                                        Message sent — we&apos;ll be in touch soon!
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setShowSuccess(false)}
                                        aria-label="Dismiss message"
                                        className="shrink-0 grid place-items-center w-6 h-6 rounded-full text-green-200/70 hover:text-white hover:bg-white/10 transition cursor-pointer"
                                    >
                                        <BsX className="text-xl" />
                                    </button>
                                </div>
                            )}

                            {serverError && (
                                <p className="text-sm text-red-300 font-medium text-right mt-3">
                                    {serverError}
                                </p>
                            )}
                        </form>

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
