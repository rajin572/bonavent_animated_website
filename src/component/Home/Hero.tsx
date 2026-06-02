"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AllImages } from "../../../public/assests/images/AllImages";
import { BsArrowDown, BsArrowUpRight } from "react-icons/bs";
import { FaApple, FaStar } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import BorderCard from "../ui/BorderCard";
import DownloadModal from "../ui/DownloadModal";
import { gsap, useGSAP, SplitText } from "@/lib/gsap-util";

const PAGE_BG = "#f4f4f4";
const HERO_ACCENT = "#6078ea";
const CARD_GAP = 24;
const BADGE_SIZE = 132;

const LEFT_CLIP = `shape(from 5% 0%,hline to 95%,arc to 100% 5% of 5% 5% cw small rotate 0deg,vline to 81%,arc to 96% 85% of 4% 4% cw small rotate 0deg,hline to 92%,arc to 88% 89% of 4% 4% ccw small rotate 0deg,vline to 96%,arc to 84% 100% of 4% 4% cw small rotate 0deg,hline to 5%,arc to 0% 95% of 5% 5% cw small rotate 0deg,vline to 5%,arc to 5% 0% of 5% 5% cw small rotate 0deg,close)`;
const RIGHT_CLIP = `shape(from 5% 0%,hline to 95%,arc to 100% 5% of 5% 5% cw small rotate 0deg,vline to 95%,arc to 95% 100% of 5% 5% cw small rotate 0deg,hline to 16%,arc to 12% 96% of 4% 4% cw small rotate 0deg,vline to 89%,arc to 8% 85% of 4% 4% ccw small rotate 0deg,hline to 4%,arc to 0% 81% of 4% 4% cw small rotate 0deg,vline to 5%,arc to 5% 0% of 5% 5% cw small rotate 0deg,close)`;

const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useGSAP(
        () => {
            const split = SplitText.create(".hero-heading", {
                type: "chars words",
                mask: "words",
                autoSplit: true,
                smartWrap: true,
            });

            const tl = gsap.timeline({ delay: 0.15 });

            /* Left card */
            tl.from(".hero-left", {
                x: -40,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
            }, 0)
                .from(".hero-eyebrow", {
                    y: -16,
                    opacity: 0,
                    duration: 0.55,
                    ease: "power3.out",
                }, 0.15)
                .from(split.chars, {
                    yPercent: 115,
                    rotateX: -45,
                    opacity: 0,
                    transformOrigin: "0% 50% -22px",
                    duration: 0.78,
                    ease: "power3.out",
                    stagger: 0.019,
                }, 0.2)
                .from(".hero-sub-text", {
                    y: 18,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                }, 0.5)
                .from(".hero-cta", {
                    scale: 0.82,
                    opacity: 0,
                    duration: 0.5,
                    ease: "back.out(1.8)",
                }, 0.6)
                .from(".hero-store-btn", {
                    y: 20,
                    opacity: 0,
                    duration: 0.45,
                    ease: "power2.out",
                    stagger: 0.1,
                }, 0.7)

                /* Right card — no opacity so it's never hidden */
                .from(".hero-right", {
                    x: 50,
                    duration: 1,
                    ease: "power3.out",
                }, 0.05)
                .from(".hero-pill", {
                    x: -28,
                    opacity: 0,
                    scale: 0.88,
                    duration: 0.65,
                    ease: "back.out(1.6)",
                }, 0.7)
                .from(".hero-corner-text", {
                    y: 12,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                }, 0.85)

                /* Badge */
                .from(".hero-learn-badge", {
                    scale: 0,
                    opacity: 0,
                    duration: 0.7,
                    ease: "back.out(2.2)",
                }, 1.0);
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[calc(100vh-6rem)] w-full p-3 md:p-4 lg:p-5 mt-12"
            style={{ backgroundColor: PAGE_BG }}
        >
            <div
                className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-6rem)]"
                style={{ gap: CARD_GAP }}
            >
                {/* ── Left card ── */}
                <div className="hero-left h-full min-h-[calc(100vh-6rem)]" style={{ filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.15))" }}>
                    <div
                        className={`relative bg-white p-8 md:p-12 lg:p-14 xl:p-16 flex flex-col justify-between h-full ${!isDesktop ? "rounded-3xl" : ""}`}
                        style={{ clipPath: isDesktop ? LEFT_CLIP : undefined }}
                    >
                        <div className="flex flex-col gap-7 md:gap-9 lg:gap-10">
                            <p className="hero-eyebrow text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#111]/65 leading-[1.7] font-medium">
                                Book Cars · Hire Drivers · Earn as a Host
                            </p>
                            <h1 className="hero-heading text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold tracking-tight text-[#111] leading-[1.02]">
                                Your One-Stop App for
                                <br />
                                Car Rental Needs.
                            </h1>
                            <p className="hero-sub-text text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#111]/65 leading-[1.7] font-medium">
                                Available on iOS &amp; Android<br />
                                Join thousands of happy riders
                            </p>
                            <BorderCard className="hero-cta self-start rounded-full">
                                <Link
                                    href="#get-started"
                                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-medium text-white text-sm hover:brightness-110 transition"
                                    style={{ backgroundColor: HERO_ACCENT }}
                                >
                                    Get Started
                                    <BsArrowUpRight className="size-3.5" />
                                </Link>
                            </BorderCard>
                        </div>

                        <div className="flex items-center gap-3 mt-12 md:mt-16">
                            <StoreButton label="App Store" icon={<FaApple className="size-4" />} />
                            <StoreButton label="Google Play" icon={<IoLogoGooglePlaystore className="size-3.5" />} />
                        </div>
                    </div>
                </div>

                {/* ── Right card ── */}
                <div className="hero-right h-full min-h-[calc(100vh-6rem)]" style={{ filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.15))" }}>
                    <div
                        className={`relative overflow-hidden h-full ${!isDesktop ? "rounded-3xl" : ""}`}
                        style={{
                            backgroundColor: HERO_ACCENT,
                            clipPath: isDesktop ? RIGHT_CLIP : undefined,
                        }}
                    >
                        <div className="absolute top-5 left-5 md:top-7 md:left-7 z-10">
                            <PortfolioPill />
                        </div>

                        <Image
                            src={AllImages.bannerMockup}
                            alt="Bonavent app mockup"
                            className="h-[calc(90%-10rem)] w-auto absolute bottom-0 left-1/2 -translate-x-1/2"
                            width={1400}
                            height={1400}
                            fetchPriority="high"
                            preload
                        />
                    </div>
                </div>

            </div>
            {/* ── Learn-more badge — desktop only ── */}
            <div
                className="hero-learn-badge hidden lg:flex absolute items-center justify-center pointer-events-none"
                style={{
                    left: "50%",
                    bottom: "7%",
                    transform: "translate(-50%, 50%)",
                    width: BADGE_SIZE,
                    height: BADGE_SIZE,
                    zIndex: 20,
                }}
            >
                <LearnMoreBadge size={BADGE_SIZE} />
            </div>
        </section>
    );
};

export default Hero;

/* ── Sub-components ── */

const StoreButton = ({ label, icon }: { label: string; icon: React.ReactNode }) => (
    <DownloadModal>
        <BorderCard className="hero-store-btn rounded-full">
            <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-[#111] bg-white hover:bg-gray-50 transition"
            >
                {label}
                {icon}
            </button>
        </BorderCard>
    </DownloadModal>
);

const LearnMoreBadge = ({ size }: { size: number }) => {
    const pathId = "bonavent-arc";
    const text = "Book Your Ride  ·  Hire a Driver  ·  Rent Instantly  ·  ";
    return (
        <div className="relative" style={{ width: size, height: size }}>
            {/* Frosted glass background */}
            <div
                className="absolute inset-0 rounded-full bg-white/80 backdrop-blur-md border border-white/60"
            // style={{ boxShadow: "0 8px 32px rgba(96,120,234,0.18), 0 2px 8px rgba(0,0,0,0.08)" }}
            />

            {/* Spinning text ring */}
            <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite] [animation-direction:reverse]"
                aria-hidden="true"
            >
                <defs>
                    <path
                        id={pathId}
                        d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                        fill="none"
                    />
                </defs>
                <text style={{ fontSize: "8.5px", letterSpacing: "0.12em", fontWeight: 600 }}>
                    <textPath href={`#${pathId}`} startOffset="0" className="fill-[#6078ea]">
                        {text}
                    </textPath>
                </text>
            </svg>

            {/* Center icon stack */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                <div className="w-auto h-auto rounded-full flex items-center justify-center p-2">
                    <Image
                        src={AllImages.logo}
                        alt="Bonavent"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                        fetchPriority="high"
                        preload
                    />
                </div>
            </div>
        </div>
    );
};

const PortfolioPill = () => (
    <div className="hero-pill flex flex-col gap-2">
        {/* Live indicator card */}
        <div className="inline-flex items-center gap-3 bg-white/92 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl">
            <span className="relative flex size-2.5 shrink-0">
                <span className="animate-ping absolute size-full rounded-full bg-green-400 opacity-75" />
                <span className="relative flex size-2.5 rounded-full bg-green-500" />
            </span>
            <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#111]/40 leading-none mb-1">
                    Now Available
                </p>
                <p className="text-sm font-bold text-[#111] leading-none">
                    Book Your Ride Instantly
                </p>
            </div>
        </div>

        {/* Trust card */}
        <div className="inline-flex items-center gap-2.5 bg-white/92 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg ml-3">
            <div className="flex gap-0.5 shrink-0">
                {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="size-3 text-yellow-400" />
                ))}
            </div>
            <p className="text-xs font-bold text-[#111]">
                Top Rated{" "}
                <span className="text-[#111]/45 font-medium">· Fully Insured</span>
            </p>
        </div>
    </div>
);
