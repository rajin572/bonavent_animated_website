"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { AllImages } from "../../../public/assests/images/AllImages";
import { FaStar } from "react-icons/fa6";

/* ── same wrap helper as AnimatedMarque ──────────────────────── */
const wrap = (val: number, total: number) =>
    (((val % total) + total) % total) - total;

/* ── Generic GSAP RAF marquee for any card children ─────────── */
const MarqueeTrack = ({
    children,
    direction = 1,
    speed = 1.8,
}: {
    children: React.ReactNode;
    direction?: 1 | -1;
    speed?: number;
}) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const xRef = useRef(0);
    const lastTimeRef = useRef<number | null>(null);
    const rafRef = useRef<number | null>(null);
    const paused = useRef(false);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        // scrollWidth covers all 3 copies — one copy = 1/3 of that
        const totalWidth = track.scrollWidth / 3;

        const tick = (time: number) => {
            const delta = lastTimeRef.current ? time - lastTimeRef.current : 0;
            lastTimeRef.current = time;

            if (!paused.current) {
                const vel = direction * speed * (delta / 1000) * 60;
                xRef.current = wrap(xRef.current + vel, totalWidth);
                gsap.set(track, { x: xRef.current });
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [direction, speed]);

    return (
        <div
            className="overflow-hidden"
            onMouseEnter={() => {
                paused.current = true;
            }}
            onMouseLeave={() => {
                paused.current = false;
            }}
        >
            <div ref={trackRef} className="flex items-stretch">
                {children}
            </div>
        </div>
    );
};

/* ── Data ────────────────────────────────────────────────────── */
const testimonials = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "Frequent Traveler",
        rating: 5,
        text: "Bonavent made my road trip so easy. Found a great car in minutes and the whole return process was completely seamless.",
    },
    {
        id: 2,
        name: "James Okafor",
        role: "Business Professional",
        rating: 5,
        text: "Needed a driver urgently for a client meeting — Bonavent delivered in under 30 minutes. Incredibly reliable every time.",
    },
    {
        id: 3,
        name: "Amara Diallo",
        role: "Car Host",
        rating: 5,
        text: "Listed my car and started earning the same week. Payouts are always on time and the platform is super smooth.",
    },
    {
        id: 4,
        name: "Lena Fischer",
        role: "Weekend Explorer",
        rating: 5,
        text: "Rented an SUV for a mountain trip — everything from booking to drop-off was stress-free. Highly recommend!",
    },
    {
        id: 5,
        name: "Carlos Mendes",
        role: "Daily Commuter",
        rating: 5,
        text: "The self-drive option saves me so much compared to taxis. Cars are always clean, verified, and ready to go.",
    },
    {
        id: 6,
        name: "Priya Nair",
        role: "Event Planner",
        rating: 5,
        text: "We use Bonavent for all our client transportation. The variety of cars and professional drivers truly set them apart.",
    },
    {
        id: 7,
        name: "David Park",
        role: "UX Designer",
        rating: 5,
        text: "The app itself is top-notch — clean, fast, and intuitive. Real-time tracking gave me total peace of mind.",
    },
    {
        id: 8,
        name: "Emma Wilson",
        role: "Product Manager",
        rating: 5,
        text: "Game-changing for team travel. Verified hosts and 24/7 in-app support make Bonavent the most trustworthy option out there.",
    },
];

const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4, 8);

/* ── Card ────────────────────────────────────────────────────── */
const TestimonialCard = ({
    name,
    role,
    rating,
    text,
}: {
    name: string;
    role: string;
    rating: number;
    text: string;
}) => (
    <div className="shrink-0 w-72 sm:w-80 bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 mx-3 flex flex-col gap-4">
        <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden bg-highlight-color shrink-0">
                <Image
                    src={AllImages.profile}
                    alt={name}
                    fill
                    className="object-cover"
                    fetchPriority="high"
                    preload
                />
            </div>
            <div>
                <p className="text-sm font-semibold text-base-color">{name}</p>
                <p className="text-xs text-lighter-color">{role}</p>
            </div>
        </div>
        <div className="flex gap-0.5">
            {Array.from({ length: rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xs" />
            ))}
        </div>
        <p className="text-sm text-base-color/70 leading-relaxed flex-1">
            &ldquo;{text}&rdquo;
        </p>
    </div>
);

/* ── Section ─────────────────────────────────────────────────── */
const Testimonials = () => (
    <section id="testimonials" className="py-20 lg:py-24 overflow-hidden">
        <Container>
            <SectionHeader
                label="Testimonials"
                headingAccent="What Our"
                headingMain="Customers Say."
                description="Thousands of happy riders, hosts, and drivers trust Bonavent every day. Here's what they have to say about us."
            />
            <section className="mt-5 relative">
                <div className="flex flex-col gap-4">
                    {/* Row 1 — scrolls left */}
                    <MarqueeTrack direction={1} speed={1.2}>
                        {[...row1, ...row1, ...row1].map((item, i) => (
                            <TestimonialCard key={`r1-${item.id}-${i}`} {...item} />
                        ))}
                    </MarqueeTrack>

                    {/* Row 2 — scrolls right */}
                    <MarqueeTrack direction={-1} speed={1.2}>
                        {[...row2, ...row2, ...row2].map((item, i) => (
                            <TestimonialCard key={`r2-${item.id}-${i}`} {...item} />
                        ))}
                    </MarqueeTrack>
                </div>

                <div className="from-primary-color pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
                <div className="from-primary-color pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
            </section>
        </Container>
    </section>
);

export default Testimonials;
