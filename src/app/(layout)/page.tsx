import AppDownload from "@/component/Home/AppDownload";
import DownloadApp from "@/component/Home/DownloadApp";
import Brands from "@/component/Home/Brands";
import Hero from "@/component/Home/Hero";
import HowItUse from "@/component/Home/HowItUse";
import Features from "@/component/Home/Features";
import Services from "@/component/Home/Services";
import Testimonials from "@/component/Home/Testimonials";
import FAQ from "@/component/Home/FAQ";
import Contact from "@/component/Home/Contact";
import ThreeSteps from "@/component/Home/ThreeSteps";

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
