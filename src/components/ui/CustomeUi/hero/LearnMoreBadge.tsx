"use client";
import Image from "next/image";
import { AllImages } from "../../../../../public/assests/images/AllImages";

export const LearnMoreBadge = ({ size }: { size: number }) => {
    const pathId = "bonavent-arc";
    const text = "Book Your Ride  ·  Hire a Driver  ·  Rent Instantly  ·  ";
    return (
        <div className="relative" style={{ width: size, height: size }}>
            <div
                className="absolute inset-0 rounded-full bg-white/80 backdrop-blur-md border border-white/60"
            />

            <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite] direction-[reverse]"
                aria-hidden="true"
            >
                <defs>
                    <path
                        id={pathId}
                        d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                        fill="none"
                    />
                </defs>
                <text style={{ fontSize: "8.5px", letterSpacing: "0.12em", fontWeight: 600 }}>
                    <textPath href={`#${pathId}`} startOffset="0" className="fill-[#6078ea]">
                        {text}
                    </textPath>
                </text>
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                <div className="w-auto h-auto rounded-full flex items-center justify-center p-2">
                    <Image
                        src={AllImages.logo}
                        alt="Bonavent"
                        width={100}
                        height={100}
                        className="w-full h-auto max-w-15 object-contain"
                        fetchPriority="high"
                        preload
                    />
                </div>
            </div>
        </div>
    );
};
