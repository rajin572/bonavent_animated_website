"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaApple } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";
import { useGSAP, gsap, SplitText } from "@/lib/gsap-util";
import { AllImages } from "../../../public/assests/images/AllImages";
import Container from "../ui/CustomeUi/Container";
import DownloadModal from "../ui/CustomeUi/DownloadModal";
import BorderCard from "../ui/CustomeUi/BorderCard";

const DownloadApp = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mockupRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    toggleActions: "restart none none reverse",
                },
            });

            const split = SplitText.create(".dl-heading", {
                type: "chars words",
                mask: "words",
                autoSplit: true,
                smartWrap: true,
            });

            tl.from(split.chars, {
                yPercent: 110,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.02,
            }, 0)
                .from(".dl-desc", { y: 25, opacity: 0, duration: 0.6, ease: "power2.out" }, 0.35)
                .from(".dl-buttons", { y: 20, opacity: 0, duration: 0.5, ease: "power2.out" }, 0.55);

            gsap.from(mockupRef.current, {
                yPercent: 75,
                opacity: 0,
                duration: 1.6,
                delay: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "restart none none reverse",
                },
            });
        },
        { scope: containerRef }
    );

    return (
        <section
            id="download-app"
            ref={containerRef}
            className="overflow-hidden pt-16 lg:pt-20 bg-primary-color"
        >
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    <div className="flex flex-col gap-7 pb-10 ">
                        <h2 className="dl-heading text-base-color text-3xl md:text-4xl xl:text-5xl font-bold leading-tight max-w-md">
                            Safe and Reliable Transportation Made Simple.
                        </h2>

                        <p className="dl-desc text-lighter-color md:text-lg leading-relaxed max-w-md">
                            Join Bonavent today and experience convenience like never before.
                            Your trusted partner for car booking, driver hire, and earning as a host.
                        </p>

                        <div className="dl-buttons flex flex-wrap items-center gap-3">
                            <DownloadModal>
                                <BorderCard className="rounded-xl! w-fit">
                                    <button className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white/70 backdrop-blur-sm text-[#111] hover:bg-white transition cursor-pointer">
                                        <BiLogoPlayStore className="text-2xl shrink-0" />
                                        <div className="text-left">
                                            <p className="text-[10px] font-normal leading-none text-[#111]/55">
                                                Download on the
                                            </p>
                                            <p className="text-base font-bold leading-snug">Google Play</p>
                                        </div>
                                    </button>
                                </BorderCard>
                            </DownloadModal>

                            <DownloadModal>
                                <BorderCard className="rounded-xl! w-fit">
                                    <button className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white/70 backdrop-blur-sm text-[#111] hover:bg-white transition cursor-pointer">
                                        <FaApple className="text-2xl shrink-0" />
                                        <div className="text-left">
                                            <p className="text-[10px] font-normal leading-none text-[#111]/55">
                                                Download on the
                                            </p>
                                            <p className="text-base font-bold leading-snug">Apple Store</p>
                                        </div>
                                    </button>
                                </BorderCard>
                            </DownloadModal>
                        </div>
                    </div>

                    <div
                        ref={mockupRef}
                        className="justify-self-center lg:justify-self-end flex items-end"
                    >
                        <Image
                            src={AllImages.downloadApp}
                            alt="Bonavent app on smartphone"
                            width={600}
                            height={800}
                            className="w-auto h-auto object-contain drop-shadow-xl max-w-70 sm:max-w-85 lg:max-w-100"
                            fetchPriority="high"
                            preload
                            sizes="(max-width: 768px) 50vw, 100vw"
                        />
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default DownloadApp;
