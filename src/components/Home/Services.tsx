"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-util";
import Container from "../ui/CustomeUi/Container";
import SectionHeader from "../ui/CustomeUi/SectionHeader";
import {
    CTACard,
    StatsCard,
    StatBigCard,
    DriverCard,
    TrustCard,
    HostCard,
    ReturnsCard,
    AppCard,
} from "../ui/CustomeUi/cards";


const Services = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from(".service-card", {
                y: 70,
                opacity: 0,
                scale: 0.93,
                duration: 0.75,
                ease: "power3.out",
                stagger: {
                    amount: 0.4,
                    from: "start",
                },
                scrollTrigger: {
                    trigger: ".services-grid",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        },
        { scope: sectionRef }
    );

    return (

        <section id="services" ref={sectionRef} className="py-16 lg:py-20 overflow-hidden">
            <Container>
                <SectionHeader
                    label="What we offer"
                    headingAccent="Car Rental "
                    headingMain="Made Simple"
                    description="Browse, book, and drive — or earn by listing your car. Everything in one app."
                />

                <div className="services-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-start">

                    <div className="flex flex-col gap-5">
                        <CTACard />
                        <StatsCard />
                    </div>

                    <div className="flex flex-col gap-5">
                        <StatBigCard />
                        <DriverCard />
                    </div>

                    <div className="flex flex-col gap-5">
                        <TrustCard />
                        <HostCard />
                    </div>

                    <div className="flex flex-col gap-5">
                        <ReturnsCard />
                        <AppCard />
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Services;