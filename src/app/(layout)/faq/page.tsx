import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Find answers to the most common questions about renting, hosting, payments, and the Bonavent app.",
  alternates: { canonical: "https://www.bonaventpr.com/faq" },
  openGraph: {
    title: "FAQ | Bonavent",
    description: "Common questions answered — bookings, payments, driver requirements, and more.",
    url: "https://www.bonaventpr.com/faq",
  },
};

import FAQ from "@/component/Home/FAQ";

const FAQPage = () => {
    return <div className="min-h-screen py-16">

        <FAQ />
    </div>;
};

export default FAQPage;