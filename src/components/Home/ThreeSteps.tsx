"use client";

import { useRef } from "react";
import { gsap, useGSAP, SplitText } from "@/lib/gsap-util";
import {
    FaCar,
    FaTruckFast,
    FaBolt,
    FaStar,
    FaUser,
    FaUserTie,
    FaHouseChimney,
    FaArrowRotateLeft,
    FaApple,
} from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import Container from "../ui/CustomeUi/Container";
import DownloadModal from "../ui/CustomeUi/DownloadModal";
export const ThreeSteps = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 72%",
                    toggleActions: "play none none reverse",
                },
            });

            const split = SplitText.create(".ts-heading", {
                type: "chars words",
                mask: "words",
                autoSplit: true,
                smartWrap: true,
            });

            tl.from(split.chars, {
                yPercent: 120,
                rotateX: -55,
                opacity: 0,
                transformOrigin: "0% 50% -35px",
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.022,
            }, 0.1);

            tl.from(".ts-sub", {
                y: 22,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
            }, 0.5);

            tl.from(".step-card", {
                y: 90,
                rotateX: 18,
                opacity: 0,
                scale: 0.88,
                transformOrigin: "top center",
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.18,
            }, 0.3);

            tl.from(".step-number", {
                scale: 0.4,
                rotation: -40,
                opacity: 0,
                duration: 0.65,
                ease: "back.out(2.5)",
                stagger: 0.18,
            }, 0.55);

            tl.from(".step-icon-box", {
                scale: 0,
                rotation: -30,
                opacity: 0,
                duration: 0.5,
                ease: "back.out(2.2)",
                stagger: 0.15,
            }, 0.55);

            tl.from(".ts-dl-btn", {
                x: -20,
                opacity: 0,
                duration: 0.4,
                ease: "power2.out",
                stagger: 0.1,
            }, 0.85);

            tl.from(".step-grid-item", {
                scale: 0,
                opacity: 0,
                duration: 0.4,
                ease: "back.out(2)",
                stagger: 0.07,
            }, 0.75);
        },
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef} className="w-full bg-secondary-color py-20 lg:py-28 relative overflow-hidden">

            <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-175 h-87.5 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-0 -left-20 w-87.5 h-87.5 rounded-full bg-white/4 blur-2xl" />
                <div className="absolute bottom-0 -right-20 w-75 h-75 rounded-full bg-white/4 blur-2xl" />
            </div>

            <Container>

                <div className="text-center mb-14 flex flex-col items-center gap-4 relative z-10">


                    <h2 className="ts-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.05] tracking-tight max-w-2xl">
                        Up &amp; Running in{" "}
                        <span className="text-primary-color">3 Simple Steps.</span>
                    </h2>

                    <p className="ts-sub text-white/45 text-sm sm:text-base leading-relaxed max-w-sm">
                        From download to driving — Bonavent gets you on the road faster than ever.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch relative z-10">

                    <div className="step-card relative bg-white rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl">
                        <span className="step-number absolute -top-6 -right-3 text-[10rem] font-black text-secondary-color/6 leading-none select-none pointer-events-none">
                            01
                        </span>

                        <div className="relative z-10 flex flex-col gap-5">
                            <div className="step-icon-box w-13 h-13 rounded-2xl bg-secondary-color/10 flex items-center justify-center">
                                <HiDownload className="text-2xl text-secondary-color" />
                            </div>

                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary-color/40 mb-2">
                                    Step 01
                                </p>
                                <h3 className="text-2xl md:text-3xl font-bold text-secondary-color leading-snug">
                                    Download &amp; Sign Up Free
                                </h3>
                            </div>

                            <p className="text-secondary-color/55 text-base leading-relaxed">
                                Get the app, create your account, and verify your ID — all in under two minutes.
                            </p>

                            <div className="flex flex-col gap-3 mt-1">
                                <DownloadModal>
                                    <button className="ts-dl-btn flex items-center gap-3 bg-secondary-color text-white w-fit px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-lg">
                                        <FaApple className="text-base" />
                                        <span>Download on App Store</span>
                                    </button>
                                </DownloadModal>
                                <DownloadModal>
                                    <button className="ts-dl-btn flex items-center gap-3 bg-secondary-color/8 text-secondary-color border border-secondary-color/15 w-fit px-6 py-3 rounded-full font-semibold text-sm hover:bg-secondary-color/15 active:scale-95 transition-all cursor-pointer">
                                        <BiLogoPlayStore className="text-base" />
                                        <span>Get on Google Play</span>
                                    </button>
                                </DownloadModal>
                            </div>
                        </div>

                        <p className="relative z-10 text-secondary-color/30 text-[10px] mt-8 uppercase tracking-widest font-bold">
                            Available on iOS &amp; Android
                        </p>
                    </div>

                    <div className="step-card relative bg-white/10 border border-white/20 rounded-3xl p-8 md:p-10 text-white flex flex-col justify-between overflow-hidden">
                        <span className="step-number absolute -top-6 -right-3 text-[10rem] font-black text-white/6 leading-none select-none pointer-events-none">
                            02
                        </span>

                        <div className="relative z-10 flex flex-col gap-5">
                            <div className="step-icon-box w-13 h-13 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                                <FaCar className="text-2xl text-white" />
                            </div>

                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35 mb-2">
                                    Step 02
                                </p>
                                <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                                    Browse &amp; Book Instantly
                                </h3>
                            </div>

                            <p className="text-white/55 text-base leading-relaxed">
                                Filter by type, location, and budget. Instant confirmation — no waiting around.
                            </p>
                        </div>

                        <div className="relative z-10 grid grid-cols-2 gap-3 mt-8">
                            {[
                                { Icon: FaCar, label: "Sedan" },
                                { Icon: FaTruckFast, label: "SUV" },
                                { Icon: FaStar, label: "Luxury" },
                                { Icon: FaBolt, label: "Electric" },
                            ].map(({ Icon, label }) => (
                                <div
                                    key={label}
                                    className="step-grid-item bg-white/10 border border-white/15 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-white/15 transition-colors"
                                >
                                    <Icon className="text-xl text-white/70" />
                                    <span className="text-xs font-semibold text-white/60 tracking-wide">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="step-card relative bg-white/10 border border-white/20 rounded-3xl p-8 md:p-10 text-white flex flex-col justify-between overflow-hidden">
                        <span className="step-number absolute -top-6 -right-3 text-[10rem] font-black text-white/6 leading-none select-none pointer-events-none">
                            03
                        </span>

                        <div className="relative z-10 flex flex-col gap-5">
                            <div className="step-icon-box w-13 h-13 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                                <FaUserTie className="text-2xl text-white" />
                            </div>

                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35 mb-2">
                                    Step 03
                                </p>
                                <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                                    Pick Up &amp; Hit the Road
                                </h3>
                            </div>

                            <p className="text-white/55 text-base leading-relaxed">
                                Self-drive or book a professional driver — your ride, your rules.
                            </p>
                        </div>

                        <div className="relative z-10 grid grid-cols-2 gap-3 mt-8">
                            {[
                                { Icon: FaUser, label: "Self Drive" },
                                { Icon: FaUserTie, label: "With Driver" },
                                { Icon: FaHouseChimney, label: "Delivery" },
                                { Icon: FaArrowRotateLeft, label: "Easy Return" },
                            ].map(({ Icon, label }) => (
                                <div
                                    key={label}
                                    className="step-grid-item bg-white/10 border border-white/15 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-white/15 transition-colors"
                                >
                                    <Icon className="text-xl text-white/70" />
                                    <span className="text-xs font-semibold text-white/60 tracking-wide">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default ThreeSteps;
