"use client";
import { useRef } from "react";
import { useGSAP, gsap, SplitText } from "@/lib/gsap-util";

interface SectionHeaderProps {
    label: string;
    headingAccent: string;
    headingMain: string;
    description: string;
    accentColor?: string;
}

const SectionHeader = ({
    label,
    headingAccent,
    headingMain,
    description,
    accentColor = "#6078ea",
}: SectionHeaderProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Heading: chars slide in from left behind a per-char mask
            const headingSplit = SplitText.create(".sh-heading", {
                type: "chars",
                mask: "words",
                autoSplit: true,
                smartWrap: true,
            });

            gsap.from(headingSplit.chars, {
                opacity: 0,
                xPercent: -100,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.025,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 85%",
                    toggleActions: "restart none none none",
                },
            });

            // Label + description: words reveal upward behind a per-word mask
            const labelSplit = SplitText.create(".sh-label-text", {
                type: "words",
                mask: "words",
                autoSplit: true,
                smartWrap: true,
            });

            const descSplit = SplitText.create(".sh-desc-text", {
                type: "words",
                mask: "words",
                autoSplit: true,
                smartWrap: true,
            });

            gsap.from([...labelSplit.words, ...descSplit.words], {
                yPercent: 100,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.06,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 85%",
                    toggleActions: "restart none none none",
                },
            });
        },
        { scope: ref },
    );

    return (
        <div ref={ref} className="flex flex-col gap-3 mb-10 lg:mb-16">

            {/* Label */}
            <div className="sh-label flex items-center gap-3">
                <span className="block w-5 h-0.5 bg-secondary-color" />
                <p className="sh-label-text text-xs uppercase tracking-[0.2em] text-base-color font-bold">
                    {label}
                </p>
            </div>

            {/* Heading + Description */}
            <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20">
                <div className="lg:w-1/2">
                    <h2
                        className="sh-heading text-[2.5rem] sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight"
                        style={{ color: accentColor }}
                    >
                        {headingAccent}
                    </h2>
                    <h2 className="sh-heading text-[2.5rem] sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-[#111]">
                        {headingMain}
                    </h2>
                </div>

                <div className="sh-desc lg:w-1/2">
                    <div className="border-l-2 border-secondary-color pl-5">
                        <p className="sh-desc-text text-sm sm:text-base text-base-color leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SectionHeader;
