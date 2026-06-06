"use client";

import { useRef } from "react";
import Container from "../ui/Container";
import BorderCard from "../ui/BorderCard";
import {
    FaApple,
    FaAndroid,
    FaCar,
    FaShield,
    FaHeadset,
    FaStar,
    FaLaptop,
} from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import { useGSAP, gsap } from "@/lib/gsap-util";
import { ReactQRCode } from "@lglab/react-qr-code";
import { BiLogoPlayStore } from "react-icons/bi";
import DownloadModal from "../ui/DownloadModal";

const HOST_DASHBOARD_URL = "https://host.bonaventpr.com/sign-in";

const features = [
    { Icon: FaCar, text: "Browse 500+ verified cars near you" },
    { Icon: FaShield, text: "Safe, insured & fully verified hosts" },
    { Icon: FaHeadset, text: "24/7 in-app support, always on call" },
];

const stats = [
    { value: "4.9★", label: "App Store" },
    { value: "4.8★", label: "Play Store" },
    { value: "50K+", label: "Downloads" },
];

const tabConfig = [
    { label: "For Guests", value: "guest", content: null },
    { label: "For Hosts", value: "host", content: null },
];

interface Props {
    tab?: string;
}
export const AppDownload = ({ tab = "guest" }: Props) => {

    const activeTab = tab === "host" ? "host" : "guest";

    const containerRef = useRef<HTMLDivElement>(null);
    const iosCardRef = useRef<HTMLDivElement>(null);
    const androidCardRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    toggleActions: "restart none none reverse",
                },
            });

            /* ── Left column ── */
            tl.from(".app-badge", { y: 20, opacity: 0, duration: 0.5, ease: "power2.out" }, 0)
                .from(".app-heading", { y: 45, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.1 }, 0.1)
                .from(".app-desc", { y: 25, opacity: 0, duration: 0.6, ease: "power2.out" }, 0.4)
                .from(".app-feature", { y: 20, opacity: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 }, 0.55)
                .from(".app-stat", { y: 15, opacity: 0, duration: 0.45, ease: "power2.out", stagger: 0.08 }, 0.8);

            /* ── Download cards ── */
            tl.from(iosCardRef.current, { y: 70, opacity: 0, scale: 0.95, duration: 0.8, ease: "power3.out" }, 0.15)
                .from(androidCardRef.current, { y: 70, opacity: 0, scale: 0.95, duration: 0.8, ease: "power3.out" }, 0.32);

            /* ── QR codes ── */
            tl.from(".qr-code", {
                scale: 0.3,
                opacity: 0,
                duration: 0.55,
                ease: "back.out(1.7)",
                stagger: 0.15,
            }, 0.65);

            /* ── Platform icons spin in ── */
            tl.from(".platform-icon", {
                rotation: -180,
                scale: 0,
                duration: 0.65,
                ease: "back.out(1.7)",
                stagger: 0.15,
            }, 0.75);
        },
        { scope: containerRef }
    );

    return (
        <section id="app-download" ref={containerRef} className="w-full bg-secondary-color py-20 lg:py-20">
            <Container>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-10 items-end">

                    {/* ── Left content ── */}
                    <div className="flex flex-col gap-6">

                        {/* Badge */}
                        <div className="app-badge inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-primary-color/10 text-primary-color text-xs font-bold tracking-widest uppercase">
                            Available on iOS &amp; Android
                        </div>

                        {/* Heading — each line animates independently */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold space-y-5 text-shadow-sm">
                            <h4 className="app-heading text-primary-color flex items-center gap-2">
                                <span>Download </span>
                                <span className="app-heading block text-black">Bonavent,</span>
                            </h4>

                            <span className="app-heading block text-primary-color">Ride Today.</span>
                        </h2>

                        {/* Description */}
                        <p className="app-desc text-primary-color/70 text-base leading-relaxed max-w-md">
                            Book cars, hire drivers, and earn as a host — all from your smartphone.
                            Instant booking, real-time tracking, zero hassle.
                        </p>

                        {/* Feature bullets */}
                        <ul className="flex flex-col gap-3">
                            {features.map(({ Icon, text }, i) => (
                                <li key={i} className="app-feature flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-highlight-color flex items-center justify-center shrink-0">
                                        <Icon className="text-sm text-secondary-color" />
                                    </div>
                                    <span className="text-sm font-medium text-primary-color/70">{text}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Ratings / stats */}
                        <div className="flex items-center gap-5 pt-1 flex-wrap">
                            {stats.map(({ value, label }, i) => (
                                <>
                                    {i > 0 && <div key={`div-${i}`} className="w-px h-4 bg-gray-300" />}
                                    <div key={label} className="app-stat flex items-center gap-1.5">
                                        <FaStar className="text-yellow-400 text-xs" />
                                        <span className="font-bold text-primary-color text-sm">{value}</span>
                                        <span className="text-primary-color/70 text-xs">{label}</span>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>

                    {/* ── Download cards ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* iOS */}
                        <div
                            ref={iosCardRef}
                            className="bg-white rounded-3xl p-6 shadow-sm relative overflow-hidden border border-gray-100"
                        >
                            <h3 className="text-xl font-bold text-base-color mb-5">For iOS</h3>

                            <DownloadModal>
                                <BorderCard className="rounded-full w-fit mb-8">
                                    <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary-color text-white font-semibold text-sm hover:brightness-110 transition">
                                        <FaApple />
                                        Download
                                    </button>
                                </BorderCard>
                            </DownloadModal>

                            <div className="qr-code w-25 h-25 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200 mb-3 p-1.5">
                                <ReactQRCode value="https://bonavent.com/ios" />
                            </div>
                            <p className="text-[10px] font-semibold text-lighter-color tracking-widest uppercase">
                                Scan to download
                            </p>

                            {/* Floating icon */}
                            <div className="platform-icon absolute -bottom-3 -right-3 p-5 bg-secondary-color/10 rounded-full flex items-center justify-center border border-secondary-color/10">
                                <FaApple className="text-5xl text-secondary-color" />
                            </div>
                        </div>

                        {/* Android */}
                        <div
                            ref={androidCardRef}
                            className="bg-white rounded-3xl p-6 shadow-sm relative overflow-hidden border border-gray-100"
                        >
                            <h3 className="text-xl font-bold text-base-color mb-5">For Android</h3>
                            <DownloadModal>
                                <BorderCard className="rounded-full w-fit mb-8">
                                    <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary-color text-white font-semibold text-sm hover:brightness-110 transition">
                                        <FaAndroid />
                                        Download
                                    </button>
                                </BorderCard>
                            </DownloadModal>

                            <div className="qr-code w-25 h-25 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200 mb-3 p-1.5">
                                <ReactQRCode value="https://bonavent.com/android" />
                            </div>
                            <p className="text-[10px] font-semibold text-lighter-color tracking-widest uppercase">
                                Scan to download
                            </p>

                            {/* Floating icon */}
                            <div className="platform-icon absolute -bottom-3 -right-3 p-5 bg-secondary-color/10 rounded-full flex items-center justify-center border border-secondary-color/10">
                                <BiLogoPlayStore className="text-5xl text-secondary-color" />
                            </div>
                        </div>

                        {/* Host Dashboard — web app, only for hosts */}
                        {activeTab === "host" && (
                            <div className="md:col-span-2 bg-white rounded-3xl p-6 shadow-sm relative overflow-hidden border border-gray-100 flex flex-col sm:flex-row sm:items-center gap-6">
                                <div className="qr-code w-25 h-25 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200 p-1.5 shrink-0">
                                    <ReactQRCode value={HOST_DASHBOARD_URL} />
                                </div>

                                <div className="flex flex-col gap-3 sm:pr-20">
                                    <h3 className="text-xl font-bold text-base-color">Host Dashboard</h3>
                                    <p className="text-sm text-base-color/70 max-w-md leading-relaxed">
                                        Manage your fleet, bookings, and earnings from any browser.
                                        Scan the code or open the link to sign in.
                                    </p>

                                    <BorderCard className="rounded-full w-fit">
                                        <a
                                            href={HOST_DASHBOARD_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary-color text-white font-semibold text-sm hover:brightness-110 transition"
                                        >
                                            <FaLaptop />
                                            Open Dashboard
                                            <BsArrowUpRight className="size-3.5" />
                                        </a>
                                    </BorderCard>


                                </div>

                                {/* Floating icon */}
                                <div className="platform-icon absolute -bottom-3 -right-3 p-5 bg-secondary-color/10 rounded-full flex items-center justify-center border border-secondary-color/10">
                                    <FaLaptop className="text-5xl text-secondary-color" />
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default AppDownload;
