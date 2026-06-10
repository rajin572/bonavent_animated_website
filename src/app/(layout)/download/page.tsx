import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Download the App",
    description: "Download the Bonavent app on iOS and Android. Book cars, hire drivers, or start earning as a host — all from your smartphone.",
    alternates: { canonical: "https://car-rental-landing.vercel.app/download" },
    openGraph: {
        title: "Download the Bonavent App | iOS & Android",
        description: "Get the Bonavent app on the App Store or Google Play. Instant booking, real-time tracking, zero hassle.",
        url: "https://car-rental-landing.vercel.app/download",
    },
};

import AppDownload from "@/components/Home/AppDownload";
import DownloadApp from "@/components/Home/DownloadApp";
import { Suspense } from "react";
import ReusableTabs from "@/components/ui/CustomeUi/ReusableTabs";

const tabConfig = [
    { label: "For Guests", value: "guest", content: null },
    { label: "For Hosts", value: "host", content: null },
];


const DownloadPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    const params = await searchParams;
    const tab = typeof params.tab === "string" ? params.tab : "guest";

    const activeTab = tab === "host" ? "host" : "guest";
    return (
        <div className="min-h-screen py-16">
            <div className="mb-12">
                <Suspense fallback={null}>
                    <ReusableTabs
                        tabs={tabConfig}
                        activeTab={activeTab as "guest" | "host"}
                        tabName="tab"
                        align="center"
                        tabContentStyle="hidden mt-0"
                    />
                </Suspense>
            </div>

            <AppDownload tab={tab} />
            <DownloadApp />
        </div>
    );
};

export default DownloadPage;