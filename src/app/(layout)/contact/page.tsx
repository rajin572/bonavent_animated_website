import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with the Bonavent team. We're here to help with bookings, hosting questions, and support.",
    alternates: { canonical: "https://car-rental-landing.vercel.app/contact" },
    openGraph: {
        title: "Contact Us | Bonavent",
        description: "Reach out to the Bonavent team for support, questions, or partnership inquiries.",
        url: "https://car-rental-landing.vercel.app/contact",
    },
};

import Contact from "@/components/Home/Contact";

const ContactPage = () => {
    return <div className="min-h-screen pt-16">

        <Contact />
    </div>;
};

export default ContactPage;