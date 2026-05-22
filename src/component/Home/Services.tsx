"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-util";
import SectionHeader from "../ui/SectionHeader";
import BorderCard from "../ui/BorderCard";
import { cn } from "@/lib/utils";
import {
    FaCar,
    FaUserTie,
    FaArrowRotateLeft,
    FaCoins,
    FaStar,
    FaApple,
} from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsArrowUpRight, BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Container from "../ui/Container";
import DownloadModal from "../ui/DownloadModal";

/* ── Service-scoped wrapper adds GSAP target + cursor ─────── */
const SCard = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <BorderCard className={cn("service-card cursor-default", className)}>
        {children}
    </BorderCard>
);

/* ── Shared inner-card base classes ───────────────────────── */
const inner =
    "h-full rounded-[14px] bg-white transition-all duration-500 overflow-hidden " +
    "group-hover:bg-secondary-color group-hover:shadow-2xl group-hover:shadow-secondary-color/25";

/* ══════════════════════════════════════════════════════════════
   Bento cards
══════════════════════════════════════════════════════════════ */

/** Col 1 · Top — CTA card with icon */
const CTACard = () => (
    <SCard>
        <div className={cn(inner, "min-h-56 p-7 flex flex-col justify-between")}>
            {/* Top row: icon left, arrow right */}
            <div className="flex items-start justify-between">
                <div
                    className="w-12 h-12 rounded-2xl bg-highlight-color flex items-center justify-center
                               transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110"
                >
                    <FaCar className="text-xl text-secondary-color transition-colors duration-500 group-hover:text-white" />
                </div>
                <div
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center
                               transition-colors duration-500 group-hover:border-white/30"
                >
                    <BsArrowUpRight className="text-base-color transition-colors duration-500 group-hover:text-white" />
                </div>
            </div>

            {/* Headline */}
            <p className="text-2xl font-bold leading-snug text-base-color transition-colors duration-500 group-hover:text-white">
                — Book Your{" "}
                <span
                    className="bg-highlight-color px-1.5 rounded transition-colors duration-500
                               group-hover:bg-white/20"
                >
                    Next Ride
                </span>{" "}
                Today!
            </p>
        </div>
    </SCard>
);

/** Col 1 · Bottom — Stats card */
const StatsCard = () => (
    <SCard>
        <div className={cn(inner, "p-6 flex flex-col gap-4")}>
            <div className="flex items-center gap-3">
                <FaStar className="text-secondary-color transition-colors duration-500 group-hover:text-white" />
                <span className="font-bold text-base-color transition-colors duration-500 group-hover:text-white">
                    500+ Cars
                </span>
                <BsArrowRight className="text-lighter-color ml-auto transition-colors duration-500 group-hover:text-white/60" />
            </div>
            <p className="text-sm text-lighter-color transition-colors duration-500 group-hover:text-white/75">
                Rental Made Easy For Everyone
            </p>
            <div className="h-2 rounded-full bg-secondary-color/15 transition-colors duration-500 group-hover:bg-white/20" />
        </div>
    </SCard>
);

/** Col 2 · Top — Big stat card */
const StatBigCard = () => (
    <SCard>
        <div className={cn(inner, "min-h-60 p-7 flex flex-col justify-between")}>
            <div className="space-y-3">
                <p className="text-6xl font-black text-base-color leading-none transition-colors duration-500 group-hover:text-white">
                    ↑ 500+
                </p>
                <p className="text-xl font-semibold leading-snug text-base-color/80 transition-colors duration-500 group-hover:text-white/90">
                    Cars Available<br />— Across 50+ Cities
                </p>
                <p className="text-sm text-lighter-color transition-colors duration-500 group-hover:text-white/70">
                    Find and book verified cars near you — instantly, any time.
                </p>
            </div>
        </div>
    </SCard>
);

/** Col 2 · Bottom — Driver card */
const DriverCard = () => (
    <SCard>
        <div className={cn(inner, "p-7 flex flex-col gap-5")}>
            <div className="flex items-center gap-3">
                <div
                    className="w-10 h-10 rounded-xl bg-highlight-color flex items-center justify-center
                               transition-colors duration-500 group-hover:bg-white/20"
                >
                    <FaUserTie className="text-secondary-color transition-colors duration-500 group-hover:text-white" />
                </div>
                <span
                    className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-lighter-color
                               transition-colors duration-500 group-hover:text-white/60"
                >
                    Pro.Driver
                </span>
            </div>
            <h3 className="text-2xl font-bold leading-snug text-base-color transition-colors duration-500 group-hover:text-white">
                Book a Driver —<br />Ride in Comfort
            </h3>
        </div>
    </SCard>
);

/** Col 3 · Top — Trust badge (permanently secondary) */
const TrustCard = () => (
    <SCard>
        <div
            className="h-full min-h-36 rounded-[14px] bg-secondary-color overflow-hidden
                       p-6 flex flex-col gap-3 transition-all duration-500
                       group-hover:brightness-110 group-hover:shadow-2xl group-hover:shadow-secondary-color/40"
        >
            <div className="flex items-center gap-2">
                <FaCar className="text-white/60 text-sm" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/60">
                    Bonavent ✓
                </span>
            </div>
            <p className="text-lg font-bold text-white leading-snug">
                &ldquo;Drive with comfort<br />— Every time.&rdquo;
            </p>
        </div>
    </SCard>
);

/** Col 3 · Bottom — Host & Earn card */
const HostCard = () => (
    <SCard>
        <div className={cn(inner, "min-h-64 p-7 flex flex-col justify-between")}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FaCoins className="text-secondary-color transition-colors duration-500 group-hover:text-white" />
                    <span
                        className="text-[10px] font-bold tracking-widest uppercase text-lighter-color
                                   transition-colors duration-500 group-hover:text-white/60"
                    >
                        Host &amp; Earn
                    </span>
                </div>
                <BsArrowLeft className="text-base-color transition-colors duration-500 group-hover:text-white/60" />
            </div>

            <div
                className="my-3 rounded-xl bg-highlight-color/60 p-4 transition-colors duration-500
                           group-hover:bg-white/15"
            >
                <p className="text-xs text-lighter-color transition-colors duration-500 group-hover:text-white/60">
                    Monthly avg. earnings
                </p>
                <p className="text-4xl font-black text-base-color transition-colors duration-500 group-hover:text-white">
                    $400+
                </p>
            </div>

            <p className="text-sm font-bold text-lighter-color transition-colors duration-500 group-hover:text-white/70">
                #HostWithBonavent
            </p>
        </div>
    </SCard>
);

/** Col 4 · Top — Easy Returns card */
const ReturnsCard = () => (
    <SCard>
        <div className={cn(inner, "p-7 flex flex-col gap-5")}>
            <div
                className="w-10 h-10 rounded-xl bg-highlight-color flex items-center justify-center
                           transition-colors duration-500 group-hover:bg-white/20"
            >
                <FaArrowRotateLeft className="text-secondary-color transition-colors duration-500 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold leading-snug text-base-color transition-colors duration-500 group-hover:text-white">
                Return with Ease —<br />Flexible Drop-off
            </h3>
            <p className="text-sm text-lighter-color transition-colors duration-500 group-hover:text-white/75">
                Drop off anywhere, anytime. No stress, no delays.
            </p>
        </div>
    </SCard>
);

/** Col 4 · Bottom — App download card */
const AppCard = () => (
    <SCard>
        <div className={cn(inner, "min-h-48 p-7 flex flex-col justify-between")}>
            <p
                className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-lighter-color
                           transition-colors duration-500 group-hover:text-white/60"
            >
                ↓ Get the App
            </p>
            <div className="flex flex-col gap-2.5">
                <DownloadModal>
                    <div
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-highlight-color/50
                                   transition-colors duration-500 group-hover:bg-white/15 cursor-pointer"
                    >
                        <FaApple className="text-secondary-color text-lg transition-colors duration-500 group-hover:text-white" />
                        <span className="text-sm font-semibold text-base-color transition-colors duration-500 group-hover:text-white">
                            App Store
                        </span>
                    </div>
                </DownloadModal>
                <DownloadModal>
                    <div
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-highlight-color/50
                                   transition-colors duration-500 group-hover:bg-white/15 cursor-pointer"
                    >
                        <IoLogoGooglePlaystore className="text-secondary-color text-lg transition-colors duration-500 group-hover:text-white" />
                        <span className="text-sm font-semibold text-base-color transition-colors duration-500 group-hover:text-white">
                            Play Store
                        </span>
                    </div>
                </DownloadModal>
            </div>
        </div>
    </SCard>
);

/* ══════════════════════════════════════════════════════════════
   Section
══════════════════════════════════════════════════════════════ */
const Services = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from(".service-card", {
                y: 70,
                opacity: 0,
                scale: 0.93,
                duration: 0.75,
                ease: "power3.out",
                stagger: {
                    amount: 0.4,
                    from: "start",
                },
                scrollTrigger: {
                    trigger: ".services-grid",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        },
        { scope: sectionRef }
    );

    return (

        <section id="services" ref={sectionRef} className="py-16 lg:py-20 overflow-hidden">
            <Container>
                <SectionHeader
                    label="What we offer"
                    headingAccent="Car Rental "
                    headingMain="Made Simple"
                    description="Browse, book, and drive — or earn by listing your car. Everything in one app."
                />

                {/* Bento grid — 4 independent columns */}
                <div className="services-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-start">

                    {/* ── Column 1 ── */}
                    <div className="flex flex-col gap-5">
                        <CTACard />
                        <StatsCard />
                    </div>

                    {/* ── Column 2 ── */}
                    <div className="flex flex-col gap-5">
                        <StatBigCard />
                        <DriverCard />
                    </div>

                    {/* ── Column 3 ── */}
                    <div className="flex flex-col gap-5">
                        <TrustCard />
                        <HostCard />
                    </div>

                    {/* ── Column 4 ── */}
                    <div className="flex flex-col gap-5">
                        <ReturnsCard />
                        <AppCard />
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Services;
