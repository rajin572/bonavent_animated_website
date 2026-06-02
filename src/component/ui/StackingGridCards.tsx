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
// Small tolerance (px) for sub-pixel rounding and the 100vh-vs-innerHeight quirk,
// so a card that exactly fills the viewport still counts as "fits".
const FIT_TOLERANCE = 4;

const StackingGridCards = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    // true  -> every card fits the viewport: use the pinned stacking effect.
    // false -> a card is taller than the viewport: fall back to normal scroll so
    //          its content can't get clipped behind the pin.
    // Default true so the server render matches the common (tall) desktop case.
    const [isStacked, setIsStacked] = useState(true);

    // Compare each card's real rendered height to the viewport height. In stacked
    // mode `min-h-screen` makes a card exactly viewport-tall when its content
    // fits, and taller only when the content overflows — so `offsetHeight >
    // innerHeight` is a precise "this card is bigger than the screen" signal.
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
        // console.log("evaluateFit", { everyCardFits, cardHeights: cards.map((c) => c.offsetHeight) })
        setIsStacked(everyCardFits);
    }, []);
    useEffect(() => {
        // Initial measure after first paint (deferred so it isn't a synchronous
        // setState in the effect body).
        const raf = requestAnimationFrame(evaluateFit);

        // A card's real height isn't known until its image/fonts have loaded, so
        // re-measure when content size changes. The rAF wrapper defers the work
        // out of the observer callback, which prevents the noisy
        // "ResizeObserver loop completed with undelivered notifications" error.
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
            // Only build the pin/scale timeline in stacked mode. In fallback mode
            // there are no ScrollTriggers, so the cards just scroll normally.
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
        // revertOnUpdate is essential: by default useGSAP only reverts on
        // unmount, so without it the pins created while stacked would persist
        // even after isStacked flips to false. This makes it tear them down.
        { scope: containerRef, dependencies: [isStacked], revertOnUpdate: true }
    );

    const items = React.Children.toArray(children);

    return (
        <div ref={containerRef}>
            {items.map((child, index) => {
                const variant = index % 2 === 0 ? "light" : "dark";
                const bgClass = variant === "light" ? "bg-primary-color" : "bg-secondary-color";

                // Padding MUST be identical in both modes — only min-h-screen may
                // differ. If padding changed between modes, the measured card
                // height would jump across the fit threshold, flipping isStacked
                // back and forth forever (an infinite measure→restyle→measure loop).
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
