"use client";
import { FaStar } from "react-icons/fa6";

export const PortfolioPill = () => (
    <div className="hero-pill flex flex-col gap-2">
        <div className="inline-flex items-center gap-3 bg-white/92 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl">
            <span className="relative flex size-2.5 shrink-0">
                <span className="animate-ping absolute size-full rounded-full bg-green-400 opacity-75" />
                <span className="relative flex size-2.5 rounded-full bg-green-500" />
            </span>
            <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#111]/40 leading-none mb-1">
                    Now Available
                </p>
                <p className="text-sm font-bold text-[#111] leading-none">
                    Book Your Ride Instantly
                </p>
            </div>
        </div>

        <div className="inline-flex items-center gap-2.5 bg-white/92 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg ml-3">
            <div className="flex gap-0.5 shrink-0">
                {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="size-3 text-yellow-400" />
                ))}
            </div>
            <p className="text-xs font-bold text-[#111]">
                Top Rated{" "}
                <span className="text-[#111]/45 font-medium">· Fully Insured</span>
            </p>
        </div>
    </div>
);
