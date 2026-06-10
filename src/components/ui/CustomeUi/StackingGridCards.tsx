"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./Container";
import { CardVariantContext } from "./CardVariantContext";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const OVERLAP = 40;
const SCALE_STEP = 0.03;

const FIT_TOLERANCE = 4;

const StackingGridCards = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [isStacked, setIsStacked] = useState(true);


    const evaluateFit = useCallback(() => {
        const root = containerRef.current;
        if (!root) return;

        const cards = Array.from(root.querySelectorAll<HTMLElement>(".sg-card"));
        if (cards.length < 2) {
            setIsStacked(false);
            return;
        }

        const everyCardFits = cards.every(
            (card) => card.offsetHeight <= window.innerHeight + FIT_TOLERANCE
        );
        setIsStacked(everyCardFits);
    }, []);
    useEffect(() => {

        const raf = requestAnimationFrame(evaluateFit);

        let pending = 0;
        const observer = new ResizeObserver(() => {
            cancelAnimationFrame(pending);
            pending = requestAnimationFrame(evaluateFit);
        });
        if (containerRef.current) observer.observe(containerRef.current);

        const onResize = () => requestAnimationFrame(evaluateFit);
        window.addEventListener("resize", onResize);
        window.addEventListener("load", evaluateFit);
        return () => {
            cancelAnimationFrame(raf);
            cancelAnimationFrame(pending);
            observer.disconnect();
            window.removeEventListener("resize", onResize);
            window.removeEventListener("load", evaluateFit);
        };
    }, [evaluateFit]);

    useGSAP(
        () => {

            if (!isStacked) return;

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

        { scope: containerRef, dependencies: [isStacked], revertOnUpdate: true }
    );

    const items = React.Children.toArray(children);

    return (
        <div ref={containerRef}>
            {items.map((child, index) => {
                const variant = index % 2 === 0 ? "light" : "dark";
                const bgClass = variant === "light" ? "bg-primary-color" : "bg-secondary-color";

                const sizeClass = isStacked
                    ? "min-h-screen flex items-center py-12 md:py-16 lg:py-24"
                    : "flex items-center py-12 md:py-16 lg:py-24";

                return (
                    <CardVariantContext.Provider key={index} value={variant}>
                        <div
                            className={`sg-card ${sizeClass} ${bgClass}`}
                            style={{
                                position: "relative",
                                zIndex: index + 1,
                                marginTop: !isStacked || index === 0 ? 0 : -OVERLAP,
                                boxShadow:
                                    isStacked && index === 1
                                        ? "0 -4px 8px rgba(0, 0, 0, 0.5)"
                                        : "none",
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
