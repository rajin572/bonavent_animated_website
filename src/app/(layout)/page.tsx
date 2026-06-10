import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Rental | Rent Cars & Hire Drivers in Puerto Rico",
  description:
    "Bonavent is Puerto Rico's #1 car rental app. Browse 500+ verified cars near you, book instantly, hire professional drivers, or earn passive income by listing your vehicle.",
  alternates: { canonical: "https://car-rental-landing.vercel.app/" },
  openGraph: {
    title: "Car Rental | Rent Cars & Hire Drivers in Puerto Rico",
    description: "Browse 500+ verified cars, book instantly, or earn as a host. Download the Bonavent app today.",
    url: "https://car-rental-landing.vercel.app/",
  },
};

import AppDownload from "@/components/Home/AppDownload";
import DownloadApp from "@/components/Home/DownloadApp";
import Brands from "@/components/Home/Brands";
import Hero from "@/components/Home/Hero";
import HowItUse from "@/components/Home/HowItUse";
import Features from "@/components/Home/Features";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import FAQ from "@/components/Home/FAQ";
import Contact from "@/components/Home/Contact";
import ThreeSteps from "@/components/Home/ThreeSteps";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const tab = typeof params.tab === "string" ? params.tab : "guest";

  return (
    <div>
      <Hero tab={tab} />
      <Brands />
      <Services />
      <AppDownload tab={tab} />
      <HowItUse tab={tab} />
      <Features />
      <ThreeSteps />
      <Testimonials />
      <FAQ />
      <Contact />
      <DownloadApp />
    </div>
  );
};

export default page;
