import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Features",
  description: "Discover Bonavent's powerful features — real-time tracking, instant booking, in-app support, verified hosts, and more.",
  alternates: { canonical: "https://car-rental-landing.vercel.app/features" },
  openGraph: {
    title: "App Features | Bonavent",
    description: "Real-time tracking, instant booking, 24/7 support, and more. See what makes Bonavent different.",
    url: "https://car-rental-landing.vercel.app/features",
  },
};

import Features from "@/components/Home/Features";

const FeaturesPage = () => {
  return <div className="min-h-screen py-16">

    <Features />
  </div>;
};

export default FeaturesPage;