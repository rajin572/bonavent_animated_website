"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AllImages } from "../../../public/assests/images/AllImages";
import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import BorderCard from "../ui/BorderCard";
import DownloadModal from "../ui/DownloadModal";
import TransitionLink from "@/utility/TransitionLink";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NAV_ITEMS = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Download", href: "#app-download" },
    { label: "Contact", href: "#contact" },
] as const;

const socials = [
    { label: "instagram", href: "#" },
    { label: "facebook", href: "#" },
    { label: "twitter", href: "#" },
    { label: "linkedin", href: "#" },
] as const;
const NavbarOne = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const navWrapperRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<(HTMLDivElement | null)[]>([]);
    const contactRef = useRef<HTMLDivElement>(null);
    const topLineRef = useRef<HTMLSpanElement>(null);
    const bottomLineRef = useRef<HTMLSpanElement>(null);

    const navTl = useRef<gsap.core.Timeline | null>(null);
    const iconTl = useRef<gsap.core.Timeline | null>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [scrollHidden, setScrollHidden] = useState(false);

    useGSAP(
        () => {
            gsap.set(navRef.current, { xPercent: 100 });
            gsap.set([linksRef.current, contactRef.current], {
                autoAlpha: 0,
                x: -20,
            });

            navTl.current = gsap
                .timeline({ paused: true })
                .to(navRef.current, {
                    xPercent: 0,
                    duration: 1,
                    ease: "power3.out",
                })
                .to(
                    linksRef.current,
                    {
                        autoAlpha: 1,
                        x: 0,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "power2.out",
                    },
                    "<"
                )
                .to(
                    contactRef.current,
                    {
                        autoAlpha: 1,
                        x: 0,
                        duration: 0.5,
                        ease: "power2.out",
                    },
                    "<+0.2"
                );

            iconTl.current = gsap
                .timeline({ paused: true })
                .to(topLineRef.current, {
                    rotate: 45,
                    y: 3.3,
                    duration: 0.3,
                    ease: "power3.inOut",
                })
                .to(
                    bottomLineRef.current,
                    {
                        rotate: -45,
                        y: -3.3,
                        duration: 0.3,
                        ease: "power3.inOut",
                    },
                    "<"
                );

            ScrollTrigger.create({
                start: "top top",
                end: "max",
                onUpdate: (self) => {
                    if (self.scroll() < 10) { setScrollHidden(false); return; }
                    setScrollHidden(self.direction === 1);
                },
            });
        },
        { scope: containerRef }
    );

    const toggleMenu = () => {
        if (!navTl.current || !iconTl.current) return;

        if (isOpen) {
            navTl.current.reverse();
            iconTl.current.reverse();
        } else {
            navTl.current.play();
            iconTl.current.play();
        }
        setIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        if (!isOpen) return;
        navTl.current?.reverse();
        iconTl.current?.reverse();
        setIsOpen(false);
    };


    useEffect(() => {
        if (!isOpen) return;

        const handlePointerDown = (event: PointerEvent) => {
            const target = event.target as Node;
            if (navRef.current?.contains(target)) return;
            if (navWrapperRef.current?.contains(target)) return;

            navTl.current?.reverse();
            iconTl.current?.reverse();
            setIsOpen(false);
        };

        document.addEventListener("pointerdown", handlePointerDown);
        return () => document.removeEventListener("pointerdown", handlePointerDown);
    }, [isOpen]);


    const showBurger = isOpen || !scrollHidden;
    const clipPath = showBurger
        ? "circle(100% at 50% 50%)"
        : "circle(0% at 50% 50%)";

    return (
        <div ref={containerRef} >
            <nav
                ref={navRef}
                className=" fixed z-50 flex flex-col justify-between w-full h-full px-6 md:px-10 uppercase bg-secondary-color text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2"
            >
                <div className="flex flex-col text-4xl gap-y-2 md:text-5xl">
                    {NAV_ITEMS.map(({ label, href }, index) => (
                        <div
                            key={label}
                            ref={(el) => {
                                linksRef.current[index] = el;
                            }}
                        >
                            <Link
                                href={href}
                                onClick={closeMenu}
                                className="transition-all duration-700 cursor-pointer hover:text-white hover:tracking-[0.5rem] ease-in-out"
                            >
                                {label}
                            </Link>
                        </div>
                    ))}
                </div>

                <div
                    ref={contactRef}
                    className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
                >
                    <div className="font-light">
                        <p className="tracking-wider text-white/50">E-mail</p>
                        <p className="text-xl tracking-widest lowercase text-pretty">
                            admin@bonaventpr.com
                        </p>
                    </div>

                    <div className="font-light">
                        <p className="tracking-wider text-white/50">Social Media</p>
                        <div className="flex flex-wrap gap-x-3">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300"
                                >
                                    {`[${social.label}]`}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            <div
                ref={navWrapperRef}
                className={`w-full fixed z-50 flex flex-row items-center justify-between px-4 md:px-10 py-1 ${!showBurger && "pointer-events-none"}`}
            >
                <div
                    className="transition-[clip-path] duration-500 ease-in-out pt-0.5"
                    style={{ clipPath }}
                >
                    <TransitionLink
                        href="/"
                        label=""
                        className="block cursor-pointer bg-transparent border-0 p-0"
                    >
                        <Image
                            width={1000}
                            height={1000}
                            src={AllImages?.logoText}
                            alt="Logo"
                            className="w-40 lg:w-55"
                        />
                    </TransitionLink>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                    <div
                        className="hidden sm:flex items-center gap-2 transition-[clip-path] duration-500 ease-in-out"
                        style={{ clipPath }}
                    >
                        <DownloadModal>
                            <BorderCard className="!rounded-full">
                                <span
                                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium text-[#111] hover:bg-white transition cursor-pointer"
                                >
                                    <FaApple className="size-4.5" />
                                    App Store
                                </span>
                            </BorderCard>
                        </DownloadModal>
                        <DownloadModal>
                            <BorderCard className="!rounded-full">
                                <span
                                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium text-[#111] hover:bg-white transition cursor-pointer"
                                >
                                    <IoLogoGooglePlaystore className="size-4.5" />
                                    Play Store
                                </span>
                            </BorderCard>
                        </DownloadModal>
                    </div>

                    <button
                        type="button"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        onClick={toggleMenu}
                        className="flex flex-col items-center justify-center gap-1 transition-[clip-path] duration-500 ease-in-out bg-secondary-color rounded-full cursor-pointer w-9 h-9 md:w-11 md:h-11"
                        style={{ clipPath }}
                    >
                        <span
                            ref={topLineRef}
                            className="block w-5 md:w-7 h-0.5 bg-white rounded-full origin-center"
                        />
                        <span
                            ref={bottomLineRef}
                            className="block w-5 md:w-7 h-0.5 bg-white rounded-full origin-center"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavbarOne;
