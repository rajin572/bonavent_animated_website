"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-util";
import SectionHeader from "../ui/SectionHeader";
import { cn } from "@/lib/utils";
import {
    FaCar,
    FaUserTie,
    FaArrowRotateLeft,
    FaCoins,
    FaStar,
    FaApple,
} from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import Container from "../ui/Container";

interface ServiceItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    badge?: string;
    highlight?: boolean;
}

const services: ServiceItem[] = [
    {
        icon: <FaCar />,
        title: "Book Your Next Ride Today!",
        description: "Browse hundreds of verified cars near you and book instantly — any time, anywhere.",
        badge: "Popular",
        // highlight: true,
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
        badge: "Pro Driver",
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
    // {
    //     icon: <FaApple />,
    //     title: "Get the Bonavent App",
    //     description: "Download on the App Store or Google Play Store and start your journey today.",
    //     badge: "↓ Get the App",
    // },
];

const Services = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                ".service-item",
                { y: 28, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    stagger: { amount: 0.5, from: "start" },
                    scrollTrigger: {
                        trigger: ".services-list",
                        start: "top 85%",
                        toggleActions: "play none none none",
                        once: true,
                    },
                }
            );
        },
        { scope: sectionRef }
    );

    return (
        <section id="services" ref={sectionRef} className="py-16 lg:py-20 overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-highlight-color/10 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary-color/5 blur-3xl" />
            </div>

            <Container>
                <SectionHeader
                    label="What we offer"
                    headingAccent="Car Rental "
                    headingMain="Made Simple"
                    description="Browse, book, and drive — or earn by listing your car. Everything in one app."
                />

                {/* List card */}
                <div className="mt-10 bg-white rounded-lg overflow-hidden">

                    {/* Card header bar */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                        <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-secondary-color">
                            All Services
                        </span>
                        {/* <span className="text-[11px] font-semibold text-secondary-color/50">
                            {services.length} available
                        </span> */}
                    </div>

                    {/* List */}
                    <ul className="services-list divide-y divide-gray-100">
                        {services.map((item, idx) => (
                            <li
                                key={idx}
                                className={cn(
                                    "service-item group relative flex items-center gap-5 px-6 py-5 transition-all duration-300 cursor-default",
                                    item.highlight
                                        ? "hover:bg-secondary-color/3"
                                        : "hover:bg-white"
                                )}
                            >
                                {/* Left accent bar */}
                                <span className={cn(
                                    "absolute left-0 top-3 bottom-3 w-0.75 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100",
                                    item.highlight ? "bg-highlight-color" : "bg-secondary-color/30"
                                )} />

                                {/* Number */}
                                <span className="hidden sm:block text-[11px] font-black text-gray-200 w-6 shrink-0 text-right select-none group-hover:text-gray-300 transition-colors duration-300">
                                    {String(idx + 1).padStart(2, "0")}
                                </span>

                                {/* Icon */}
                                <div className={cn(
                                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105",
                                    item.highlight
                                        ? "bg-highlight-color/20 group-hover:bg-highlight-color/30"
                                        : "bg-gray-100 group-hover:bg-secondary-color/10"
                                )}>
                                    <span className={cn(
                                        "text-base transition-colors duration-300",
                                        item.highlight ? "text-secondary-color" : "text-secondary-color/60 group-hover:text-secondary-color"
                                    )}>
                                        {item.icon}
                                    </span>
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p className={cn(
                                        "font-semibold text-lg text-base-color transition-colors duration-300",
                                        item.highlight
                                            ? "group-hover:text-secondary-color"
                                            : "group-hover:text-secondary-color"
                                    )}>
                                        {item.title}
                                    </p>
                                    <p className="text-sm text-gray-400 mt-0.5 leading-relaxed truncate">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Badge */}
                                {item.badge && (
                                    <span className={cn(
                                        "hidden md:inline-flex shrink-0 text-[9px] font-extrabold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full transition-all duration-300",
                                        item.highlight
                                            ? "bg-highlight-color/20 text-secondary-color group-hover:bg-highlight-color/30"
                                            : "bg-gray-100 text-gray-400 group-hover:bg-secondary-color/10 group-hover:text-secondary-color"
                                    )}>
                                        {item.badge}
                                    </span>
                                )}

                                {/* Arrow */}
                                {/* <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 bg-secondary-color/8">
                                    <BsArrowUpRight className="text-xs text-secondary-color" />
                                </div> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default Services;
