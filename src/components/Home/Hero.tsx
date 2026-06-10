"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AllImages } from "../../../public/assests/images/AllImages";
import { BsArrowUpRight } from "react-icons/bs";
import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { gsap, useGSAP, SplitText } from "@/lib/gsap-util";
import ReusableTabs from "../ui/CustomeUi/ReusableTabs";
import BorderCard from "../ui/CustomeUi/BorderCard";
import { StoreButton } from "../ui/CustomeUi/hero/StoreButton";
import { LearnMoreBadge } from "../ui/CustomeUi/hero/LearnMoreBadge";
import { PortfolioPill } from "../ui/CustomeUi/hero/PortfolioPill";

const PAGE_BG = "#f4f4f4";
const HERO_ACCENT = "#6078ea";
const CARD_GAP = 24;
const BADGE_SIZE = 132;

const LEFT_CLIP = `shape(from 5% 0%,hline to 95%,arc to 100% 5% of 5% 5% cw small rotate 0deg,vline to 81%,arc to 96% 85% of 4% 4% cw small rotate 0deg,hline to 92%,arc to 88% 89% of 4% 4% ccw small rotate 0deg,vline to 96%,arc to 84% 100% of 4% 4% cw small rotate 0deg,hline to 5%,arc to 0% 95% of 5% 5% cw small rotate 0deg,vline to 5%,arc to 5% 0% of 5% 5% cw small rotate 0deg,close)`;
const RIGHT_CLIP = `shape(from 5% 0%,hline to 95%,arc to 100% 5% of 5% 5% cw small rotate 0deg,vline to 95%,arc to 95% 100% of 5% 5% cw small rotate 0deg,hline to 16%,arc to 12% 96% of 4% 4% cw small rotate 0deg,vline to 89%,arc to 8% 85% of 4% 4% ccw small rotate 0deg,hline to 4%,arc to 0% 81% of 4% 4% cw small rotate 0deg,vline to 5%,arc to 5% 0% of 5% 5% cw small rotate 0deg,close)`;


const tabConfig = [
    { label: "For Guests", value: "guest", content: null },
    { label: "For Hosts", value: "host", content: null },
];

interface Props {
    tab?: string;
}

const Hero = ({ tab = "guest" }: Props) => {

    const activeTab = tab === "host" ? "host" : "guest";

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
                <div className="hero-left h-full min-h-[calc(100vh-6rem)]" style={{ filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.15))" }}>
                    <div
                        className={`relative bg-white p-8 md:p-12 lg:p-14 xl:p-16 flex flex-col justify-between h-full ${!isDesktop ? "rounded-3xl" : ""}`}
                        style={{ clipPath: isDesktop ? LEFT_CLIP : undefined }}
                    >
                        <div className="flex flex-col gap-7 md:gap-9 lg:gap-10">
                            <div className="mr-auto">
                                <Suspense fallback={null}>
                                    <ReusableTabs
                                        tabs={tabConfig}
                                        activeTab={activeTab as "guest" | "host"}
                                        tabName="tab"
                                        align="center"
                                        tabContentStyle="hidden mt-0"
                                    />
                                </Suspense>
                            </div>
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
                            sizes="(max-width: 768px) 50vw, 100vw"
                        />
                    </div>
                </div>

            </div>
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
