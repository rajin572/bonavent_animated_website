import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Find answers to the most common questions about renting, hosting, payments, and the Bonavent app.",
  alternates: { canonical: "https://car-rental-landing.vercel.app/faq" },
  openGraph: {
    title: "FAQ | Bonavent",
    description: "Common questions answered — bookings, payments, driver requirements, and more.",
    url: "https://car-rental-landing.vercel.app/faq",
  },
};

import FAQ from "@/components/Home/FAQ";

const FAQPage = () => {
  return <div className="min-h-screen py-16">

    <FAQ />
  </div>;
};

export default FAQPage;