"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP, gsap } from "@/lib/gsap-util";
import { AllImages } from "../../../public/assests/images/AllImages";
import Container from "../ui/CustomeUi/Container";
import SectionHeader from "../ui/CustomeUi/SectionHeader";

const featureItems = [
    { id: 1, title: "Instant Car Booking", image: AllImages.instantCarBooking },
    { id: 2, title: "Hire a Professional Driver", image: AllImages.hireProfessionalDriver },
    { id: 3, title: "Host Your Car & Earn", image: AllImages.hostYourCarEarn },
    { id: 4, title: "Real-Time Business Analytics", image: AllImages.realTimeBusinessAnalytics },
    { id: 5, title: "24/7 In-App Support", image: AllImages.inAppSupport },
    { id: 6, title: "Safe & Verified Hosts", image: AllImages.safeVerifiedHosts },
];

const Features = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const featureRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(
        () => {
            featureRef.current.forEach((item) => {
                if (!item) return;

                const imageWrapper = item.querySelector<HTMLElement>(".project-image");
                if (!imageWrapper) return;

                const xTo = gsap.quickTo(imageWrapper, "x", { duration: 0.2, ease: "power3" });
                const yTo = gsap.quickTo(imageWrapper, "y", { duration: 0.2, ease: "power3" });

                const onMove = (e: MouseEvent) => {
                    const rect = item.getBoundingClientRect();
                    xTo((e.clientX - rect.left) - 125);
                    yTo((e.clientY - rect.top) - 100);
                };
                const onEnter = () => {
                    gsap.to(imageWrapper, { autoAlpha: 1, scale: 1.5, duration: 0.4, ease: "power2.out" });
                };
                const onLeave = () => {
                    gsap.to(imageWrapper, { autoAlpha: 0, scale: 0.5, duration: 0.4, ease: "power2.out" });
                };

                item.addEventListener("mousemove", onMove);
                item.addEventListener("mouseenter", onEnter);
                item.addEventListener("mouseleave", onLeave);
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="features" ref={containerRef} className="py-16 lg:py-20">
            <Container>
                <SectionHeader
                    label="Key Features"
                    headingAccent="Everything You Need,"
                    headingMain="Right in Your Pocket."
                    description="From booking a car to hiring a driver or earning as a host — Bonavent puts the full car rental experience in the palm of your hand."
                />

                <div className="mt-10 sm:mt-16 lg:mt-20 divide-y divide-neutral-300 border-t border-neutral-300 flex-1">
                    {featureItems.map((item, index) => (
                        <div
                            key={item.id}
                            ref={(el) => { featureRef.current[index] = el; }}
                            className="relative group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-secondary-color origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out z-0" />

                            <div className="relative z-10 p-8 group-hover:pl-12 transition-[padding] duration-500">
                                <h3 className="text-3xl sm:text-4xl lg:text-3xl font-medium group-hover:text-primary-color transition-colors duration-300">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="project-image absolute top-0 left-0 pointer-events-none invisible max-w-50 w-full h-34 z-30 mt-4">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                    fetchPriority="high"
                                    preload
                                    sizes="(max-width: 768px) 50vw, 100vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Features;
