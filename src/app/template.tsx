"use client";

import { animatePageIn } from "@/utility/animations";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { AllImages } from "../../public/assests/images/AllImages";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        animatePageIn();
    }, [pathname]);

    return (
        <div>
            <div
                id="transition-element"
                className="w-screen h-screen bg-secondary-color z-200 fixed top-0 left-0"
            >
                <Image
                    src={AllImages.logo}
                    alt="logo"
                    className="w-auto lg-30 lg:h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    width={1000}
                    height={1000}
                    style={{
                        filter: "brightness(0) invert(1)",
                    }}
                    fetchPriority="high"
                    preload
                />
            </div>
            {children}
        </div>
    );
}
