import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore all Bonavent services — car rentals, professional drivers, host earnings, and flexible drop-off across Puerto Rico.",
  alternates: { canonical: "https://www.bonaventpr.com/services" },
  openGraph: {
    title: "Our Services | Bonavent",
    description: "Car rentals, driver hire, host & earn, and more — all in the Bonavent app.",
    url: "https://www.bonaventpr.com/services",
  },
};

import Services from "@/component/Home/Services";

const ServicesPage = () => {
    return <div className="min-h-screen py-16">
        <Services />
    </div>;
};

export default ServicesPage;