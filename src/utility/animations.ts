import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
    const transitionElement = document.getElementById("transition-element");

    if (transitionElement) {
        const tl = gsap.timeline({
            onComplete: () => {
                ScrollTrigger.refresh();
                // Notify all listeners that the page transition has fully ended
                window.dispatchEvent(new CustomEvent("pageTransitionEnd"));
            },
        });

        tl.set(transitionElement, {
            xPercent: 0,
        })
            .to(transitionElement, {
                xPercent: 100,
                duration: 0.8,
            })
            .to(
                transitionElement,
                {
                    borderTopLeftRadius: "10vh",
                    borderBottomLeftRadius: "10vh",
                    duration: 0.4,
                },
                "<"
            );
    } else {
        ScrollTrigger.refresh();
        window.dispatchEvent(new CustomEvent("pageTransitionEnd"));
    }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
    const animationWrapper = document.getElementById("transition-element");

    if (animationWrapper) {
        const tl = gsap.timeline();

        tl.set(animationWrapper, {
            xPercent: -100,
            borderTopRightRadius: "50vh",
            borderBottomRightRadius: "50vh",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
        })
            .to(animationWrapper, {
                xPercent: 0,
                duration: 0.8,
                onComplete: () => {
                    router.push(href);
                },
            })
            .to(
                animationWrapper,
                {
                    borderTopRightRadius: "0",
                    borderBottomRightRadius: "0",
                    duration: 0.4,
                },
                "<"
            );
    }
};