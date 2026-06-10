import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore all Bonavent services — car rentals, professional drivers, host earnings, and flexible drop-off across Puerto Rico.",
  alternates: { canonical: "https://car-rental-landing.vercel.app/services" },
  openGraph: {
    title: "Our Services | Bonavent",
    description: "Car rentals, driver hire, host & earn, and more — all in the Bonavent app.",
    url: "https://car-rental-landing.vercel.app/services",
  },
};

import Services from "@/components/Home/Services";

const ServicesPage = () => {
  return <div className="min-h-screen py-16">
    <Services />
  </div>;
};

export default ServicesPage;