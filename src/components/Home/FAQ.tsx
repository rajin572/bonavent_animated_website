"use client";
import { useState } from "react";
import Container from "../ui/CustomeUi/Container";
import SectionHeader from "../ui/CustomeUi/SectionHeader";
import Accordion from "../ui/CustomeUi/Accordion";
type Tab = "guest" | "host";

const faqData: Record<Tab, { title: string; content: string }[]> = {
    guest: [
        {
            title: "How do I book a car on Bonavent?",
            content: "Download the app, create a free account, browse available cars near you, select your dates, and confirm your booking instantly. You'll receive a confirmation with pickup details right away.",
        },
        {
            title: "What documents do I need to rent a car?",
            content: "You'll need a valid driver's license, a government-issued ID or passport, and a payment method. All verification is done directly through the app — quick and paperless.",
        },
        {
            title: "Can I book a professional driver along with the car?",
            content: "Yes! When booking any car you can add a professional driver option. All Bonavent drivers are background-checked, licensed, and rated by the community.",
        },
        {
            title: "Can I schedule a ride in advance?",
            content: "Absolutely. You can book a car or driver up to 30 days in advance. Just choose your pickup date and time during checkout and the reservation is locked in.",
        },
        {
            title: "What payment methods are accepted?",
            content: "We accept all major credit and debit cards, mobile money, and in-app wallet payments. All transactions are encrypted and processed securely.",
        },
        {
            title: "What safety measures are in place for guests?",
            content: "Every car on Bonavent is inspected and insured. Hosts are identity-verified, and all trips include real-time GPS tracking and 24/7 in-app support for guests.",
        },
    ],
    host: [
        {
            title: "How do I list my car on Bonavent?",
            content: "Sign up as a host, upload your car details and photos, set your pricing and availability calendar, and go live — the entire process takes under 10 minutes.",
        },
        {
            title: "How and when do I get paid?",
            content: "Payouts are processed automatically after each completed trip. Funds are transferred to your linked bank account or mobile wallet within 1–3 business days.",
        },
        {
            title: "What happens if a guest damages my car?",
            content: "All bookings include damage protection. If a guest causes damage, you file a report through the app and our support team handles the claim — you're covered up to the insured limit.",
        },
        {
            title: "Can I set my own pricing and availability?",
            content: "Yes, full control is yours. Set your daily rate, block dates for personal use, and update availability anytime from the host dashboard in the app.",
        },
        {
            title: "How are guests verified before renting my car?",
            content: "Every guest goes through ID verification, driver's license validation, and community ratings review before they can book. You also have the option to approve bookings manually.",
        },
        {
            title: "What insurance coverage is provided for hosts?",
            content: "Every trip booked through Bonavent is covered by our partner insurance policy. Coverage details are shown in the app before you list your vehicle.",
        },
    ],
};

const FAQ = () => {
    const [activeTab, setActiveTab] = useState<Tab>("guest");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleTabChange = (tab: Tab) => {
        setActiveTab(tab);
        setOpenIndex(0);
    };

    const handleToggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section id="faq" className="py-20 lg:py-24 bg-primary-color">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">

                    <div className="flex flex-col gap-10 lg:sticky lg:top-28">
                        <SectionHeader
                            label="FAQ"
                            headingAccent="Got"
                            headingMain="Questions?"
                            description="Everything you need to know about booking, hosting, and using Bonavent. Can't find the answer? Chat to our friendly support team."
                        />

                        <div className="flex flex-col gap-1">
                            {(["guest", "host"] as Tab[]).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => handleTabChange(tab)}
                                    className={`flex items-center gap-3 text-left py-2 group transition-colors duration-300 cursor-pointer ${activeTab === tab ? "text-base-color" : "text-lighter-color hover:text-base-color"}`}
                                >
                                    <span
                                        className={`block h-0.5 transition-all duration-300 rounded-full ${activeTab === tab ? "w-8 bg-secondary-color" : "w-4 bg-lighter-color group-hover:w-6 group-hover:bg-secondary-color"}`}
                                    />
                                    <span className="text-sm font-bold uppercase tracking-[0.2em]">
                                        {tab === "guest" ? "I'm a Guest" : "I'm a Host"}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        {faqData[activeTab].map((faq, index) => (
                            <Accordion
                                key={`${activeTab}-${index}`}
                                title={faq.title}
                                index={index}
                                content={faq.content}
                                isOpen={openIndex === index}
                                onToggle={() => handleToggle(index)}
                            />
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default FAQ;
