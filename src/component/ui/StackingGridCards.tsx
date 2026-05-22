"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";
import { CardVariantContext } from "./CardVariantContext";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const OVERLAP = 40;
const SCALE_STEP = 0.03;

const StackingGridCards = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray<HTMLElement>(".sg-card");
            if (cards.length < 2) return;

            const lastCard = cards[cards.length - 1];

            cards.forEach((card, index) => {
                if (index === cards.length - 1) return;

                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    endTrigger: lastCard,
                    end: "bottom bottom",
                    pin: true,
                    pinSpacing: false,
                });

                gsap.to(card, {
                    scale: 1 - (cards.length - 1 - index) * SCALE_STEP,
                    transformOrigin: "top center",
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        start: "top top",
                        endTrigger: lastCard,
                        end: "bottom bottom",
                        scrub: true,
                    },
                });
            });
        },
        { scope: containerRef }
    );

    const items = React.Children.toArray(children);

    return (
        <div ref={containerRef}>
            {items.map((child, index) => {
                const variant = index % 2 === 0 ? "light" : "dark";
                const bgClass = variant === "light" ? "bg-primary-color" : "bg-secondary-color";

                return (
                    <CardVariantContext.Provider key={index} value={variant}>
                        <div
                            className={`sg-card min-h-screen flex items-center py-24 ${bgClass}`}
                            style={{
                                position: "relative",
                                zIndex: index + 1,
                                marginTop: index === 0 ? 0 : -OVERLAP,
                                boxShadow: index !== 1 ? "none" : "0 -4px 8px rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            <Container>
                                {child}
                            </Container>
                        </div>
                    </CardVariantContext.Provider>
                );
            })}
        </div>
    );
};

export default StackingGridCards;
