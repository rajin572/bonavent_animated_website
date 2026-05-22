"use client";
import { useRef } from "react";
import Container from "../ui/Container";
import { useGSAP, gsap, SplitText } from "@/lib/gsap-util";

const Benefits = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const textSplit = SplitText.create(".benefits-heading", {
                type: "words",
                mask: "words",
                autoSplit: true,
                smartWrap: true,
            });

            gsap.from(textSplit.words, {
                yPercent: 100,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.08,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    toggleActions: "restart pause restart pause",
                },
            });

            gsap.from([".benefits-label", ".benefits-desc"], {
                opacity: 0,
                y: 24,
                duration: 0.9,
                ease: "power2.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    toggleActions: "restart pause restart pause",
                },
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-16 lg:py-24">
            <Container>
                <div ref={containerRef} className="flex flex-col gap-10 lg:gap-16">

                    {/* Label row */}
                    <div className="benefits-label flex items-center gap-3">
                        <span className="block w-5 h-[2px] bg-yellow-400" />
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
                            Benefits of Car Rental App
                        </p>
                    </div>

                    {/* Heading + Description row */}
                    <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">

                        {/* Left — large heading */}
                        <div className="lg:w-1/2">
                            <h2 className="benefits-heading text-[2.5rem] sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-[#6078ea]">
                                Exclusive Benefits of
                            </h2>
                            <h2 className="benefits-heading text-[2.5rem] sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-[#111]">
                                Car Rental App
                            </h2>
                        </div>

                        {/* Right — description with accent border */}
                        <div className="benefits-desc lg:w-1/2">
                            <div className="border-l-2 border-yellow-400 pl-5">
                                <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Benefits;
