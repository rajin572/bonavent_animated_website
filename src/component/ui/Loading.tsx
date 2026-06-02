"use client";
import { useRef, useState } from "react";
import { useGSAP, gsap } from "@/lib/gsap-util";
import Image from "next/image";
import { AllImages } from "../../../public/assests/images/AllImages";

const Loading = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const [percent, setPercent] = useState(0);
    const [hidden, setHidden] = useState(false);

    useGSAP(
        () => {
            const counter = { value: 0 };

            const tl = gsap.timeline({
                onComplete: () => setHidden(true),
            });

            tl.to(
                counter,
                {
                    value: 100,
                    duration: 1.5,
                    ease: "power2.out",
                    onUpdate: () => setPercent(Math.round(counter.value)),
                },
                0,
            );

            tl.to(
                barRef.current,
                {
                    width: "100%",
                    duration: 1.5,
                    ease: "power2.out",
                },
                0,
            );

            tl.to(containerRef.current, {
                autoAlpha: 0,
                duration: 0.5,
                ease: "power2.inOut",
            });
        },
        { scope: containerRef },
    );

    if (hidden) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-secondary-color text-white font-light"
        >
            <div className="flex flex-col justify-center items-center gap-5">
                <Image
                    width={1000}
                    height={1000}
                    src={AllImages?.logo}
                    alt="Logo"
                    className="w-20 md:w-28 lg:w-40"
                    style={{
                        filter: "brightness(0) invert(1)"
                    }}
                    fetchPriority="high"
                    sizes="(max-width: 768px) 50vw, 100vw"
                    preload
                />
                <p className="text-white text-xs">{percent}%</p>
                <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
                    <div
                        ref={barRef}
                        style={{ width: "0%" }}
                        className="absolute top-0 left-0 h-full bg-white"
                    />
                </div>
            </div>
        </div>
    );
};

export default Loading;
