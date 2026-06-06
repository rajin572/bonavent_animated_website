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
import { BsArrowRight } from "react-icons/bs";
import Container from "../ui/Container";
import DownloadModal from "../ui/DownloadModal";

/* ── Service list item (icon as bullet) ─────────────────── */
interface ServiceItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    badge?: string;
    highlight?: boolean;
}

const ServiceItem = ({
    icon,
    title,
    description,
    badge,
    highlight,
}: ServiceItemProps) => {
    const IconWrapper = highlight ? (
        <div
            className="w-11 h-11 rounded-xl bg-gradient-to-br from-highlight-color to-highlight-color/70 flex items-center justify-center flex-shrink-0 shadow-lg shadow-highlight-color/20 transition-all duration-500 group-hover:shadow-secondary-color/30 group-hover:from-secondary-color group-hover:to-secondary-color/80 group-hover:scale-110 group-hover:-rotate-3"
        >
            <span className="text-lg text-secondary-color transition-colors duration-500 group-hover:text-white">
                {icon}
            </span>
        </div>
    ) : (
        <div
            className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200 shadow-sm transition-all duration-500 group-hover:border-secondary-color/30 group-hover:from-secondary-color/5 group-hover:to-secondary-color/10 group-hover:shadow-md group-hover:scale-110"
        >
            <span className="text-lg text-secondary-color/70 transition-colors duration-500 group-hover:text-secondary-color">
                {icon}
            </span>
        </div>
    );

    return (
        <li className="group relative flex items-start gap-5 px-6 py-5 cursor-default transition-all duration-500">
            {/* Left accent line */}
            <span
                className={cn(
                    "absolute left-0 top-4 bottom-4 w-0.5 rounded-full transition-all duration-500",
                    highlight
                        ? "bg-gradient-to-b from-highlight-color to-highlight-color/40 group-hover:from-secondary-color group-hover:to-secondary-color/40"
                        : "bg-gray-200 group-hover:bg-secondary-color/30"
                )}
            />

            {IconWrapper}

            {/* Content */}
            <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-base font-bold text-base-color transition-colors duration-500 group-hover:text-secondary-color">
                        {title}
                    </h3>
                    {badge && (
                        <span
                            className={cn(
                                "text-[9px] font-extrabold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full transition-all duration-500",
                                highlight
                                    ? "bg-gradient-to-r from-highlight-color to-highlight-color/60 text-secondary-color group-hover:from-secondary-color group-hover:to-secondary-color/60 group-hover:text-white"
                                    : "bg-gray-100 text-lighter-color group-hover:bg-secondary-color/10"
                            )}
                        >
                            {badge}
                        </span>
                    )}
                </div>
                <p className="text-sm text-lighter-color/80 mt-1 leading-relaxed transition-colors duration-500 group-hover:text-lighter-color">
                    {description}
                </p>
            </div>

            {/* Arrow indicator
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1">
                <div className="w-8 h-8 rounded-full bg-secondary-color/10 flex items-center justify-center">
                    <BsArrowRight className="text-secondary-color text-sm" />
                </div>
            </div> */}
        </li>
    );
};

/* ── Section ───────────────────────────────────────────── */
const Services = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from(".service-item", {
                y: 50,
                opacity: 0,
                x: -20,
                duration: 0.7,
                ease: "power3.out",
                stagger: {
                    amount: 0.6,
                    from: "start",
                },
                scrollTrigger: {
                    trigger: ".services-list",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        },
        { scope: sectionRef }
    );

    const services: ServiceItemProps[] = [
        {
            icon: <FaCar />,
            title: "Book Your Next Ride Today!",
            description: "Browse hundreds of verified cars near you and book instantly — any time, anywhere.",
            badge: "Popular",
            highlight: true,
        },
        {
            icon: <FaStar />,
            title: "500+ Cars Available",
            description: "Choose from a wide selection of vehicles across 50+ cities. Rental made easy for everyone.",
        },
        {
            icon: <FaUserTie />,
            title: "Book a Driver — Ride in Comfort",
            description: "Need a professional driver? We've got you covered. Ride in comfort and style.",
            badge: "Pro.Driver",
        },
        {
            icon: <FaCoins />,
            title: "Host & Earn — $400+ / Month Avg.",
            description: "List your car on Bonavent and start earning passive income. #HostWithBonavent",
            badge: "Host & Earn",
        },
        {
            icon: <FaArrowRotateLeft />,
            title: "Return with Ease — Flexible Drop-off",
            description: "Drop off anywhere, anytime. No stress, no delays. Fully flexible returns.",
        },
        {
            icon: <FaApple />,
            title: "Get the Bonavent App",
            description: "Download on the App Store or Google Play Store and start your journey today.",
            badge: "↓ Get the App",
        },
    ];

    return (
        <section id="services" ref={sectionRef} className="py-16 lg:py-20 overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-highlight-color/10 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary-color/5 blur-3xl" />
            </div>

            <Container>
                <SectionHeader
                    label="What we offer"
                    headingAccent="Car Rental "
                    headingMain="Made Simple"
                    description="Browse, book, and drive — or earn by listing your car. Everything in one app."
                />

                {/* Services list card */}
                {/* Card header */}
                <div className="px-6 pt-6 pb-2">
                    <div className="flex items-center gap-3 px-5 py-2.5 rounded-lg bg-gradient-to-r from-highlight-color/20 to-transparent">
                        <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-secondary-color animate-pulse" />
                            <span className="w-2 h-2 rounded-full bg-zinc-300 animate-pulse" style={{ animationDelay: "150ms" }} />
                            <span className="w-2 h-2 rounded-full bg-secondary-color/50 animate-pulse" style={{ animationDelay: "300ms" }} />
                        </div>
                        <span className="text-xs font-bold tracking-[0.25em] uppercase text-base-color/60">
                            All Services
                        </span>
                    </div>
                </div>

                {/* List */}
                <ul className="services-list">
                    {services.map((item, idx) => (
                        <div key={idx} className={cn(
                            "transition-all duration-500",
                            idx < services.length - 1 && "border-b border-gray-100"
                        )}>
                            <ServiceItem {...item} />
                        </div>
                    ))}
                </ul>

                {/* Card footer */}
                <div className="px-6 pb-6 pt-2">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                </div>

            </Container>
        </section>
    );
};

export default Services;