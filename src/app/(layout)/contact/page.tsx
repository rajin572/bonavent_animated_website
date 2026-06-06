import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Bonavent team. We're here to help with bookings, hosting questions, and support.",
  alternates: { canonical: "https://www.bonaventpr.com/contact" },
  openGraph: {
    title: "Contact Us | Bonavent",
    description: "Reach out to the Bonavent team for support, questions, or partnership inquiries.",
    url: "https://www.bonaventpr.com/contact",
  },
};

import Contact from "@/component/Home/Contact";

const ContactPage = () => {
    return <div className="min-h-screen py-16">

        <Contact />
    </div>;
};

export default ContactPage;