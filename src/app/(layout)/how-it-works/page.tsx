import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how Bonavent works in 3 simple steps — download the app, browse & book a car, then pick up and drive. It's that easy.",
  alternates: { canonical: "https://www.bonaventpr.com/how-it-works" },
  openGraph: {
    title: "How It Works | Bonavent",
    description: "From download to driving in 3 steps. See how easy it is to rent a car or earn as a host with Bonavent.",
    url: "https://www.bonaventpr.com/how-it-works",
  },
};

import HowItUse from "@/component/Home/HowItUse";
import ReusableTabs from "@/component/ui/ReusableTabs";
import { Suspense } from "react";

const tabConfig = [
    { label: "For Guests", value: "guest", content: null },
    { label: "For Hosts", value: "host", content: null },
];


const HowItWorksPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    const params = await searchParams;
    const tab = typeof params.tab === "string" ? params.tab : "guest";

    const activeTab = tab === "host" ? "host" : "guest";

    return <div className="min-h-screen py-16">
        <Suspense fallback={null}>
            <ReusableTabs
                tabs={tabConfig}
                activeTab={activeTab as "guest" | "host"}
                tabName="tab"
                align="center"
                tabContentStyle="hidden mt-0"
            />
        </Suspense>
        <HowItUse tab={tab} />;
    </div>
};

export default HowItWorksPage;