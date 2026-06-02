import { Suspense } from "react";
import {
    PiMagnifyingGlassDuotone,
    PiStarDuotone,
    PiMapPinDuotone,
    PiSlidersHorizontalDuotone,
    PiCarDuotone,
    PiCalendarCheckDuotone,
    PiClockCountdownDuotone,
    PiShieldCheckDuotone,
    PiChartLineUpDuotone,
    PiCurrencyDollarDuotone,
    PiListChecksDuotone,
    PiBroadcastDuotone,
    PiClockDuotone,
    PiChartBarDuotone,
} from "react-icons/pi";
import { AllImages } from "../../../public/assests/images/AllImages";
import type { ICardData } from "../ui/SectionGridCard";
import SectionGridCard from "../ui/SectionGridCard";
import StackingGridCards from "../ui/StackingGridCards";
import ReusableTabs from "../ui/ReusableTabs";
import SectionHeader from "../ui/SectionHeader";
import Container from "../ui/Container";

export const guestData: ICardData[] = [
    {
        id: 1,
        isFeatured: true,
        isReverse: false,
        title: "Seamless Search & Car Details",
        description:
            "Discover the perfect car with intelligent search powered by location awareness. View comprehensive vehicle profiles with photos, specs, and verified host information before you book.",
        featuredWithDescription: [
            {
                title: "Location-Based Discovery",
                description:
                    "Find available cars near you instantly with GPS-powered search. Filter by distance, pickup point, or drop-off zone for maximum convenience.",
                icon: <PiMapPinDuotone className="text-primary-color size-6" />,
            },
            {
                title: "Verified Ratings & Reviews",
                description:
                    "Read authentic reviews from real renters. Every host and vehicle is rated so you can book with total confidence.",
                icon: <PiStarDuotone className="text-primary-color size-6" />,
            },
            {
                title: "Rich Vehicle Profiles",
                description:
                    "Explore detailed car listings with high-quality photos, full specs, fuel type, seating capacity, and host response time.",
                icon: <PiMagnifyingGlassDuotone className="text-primary-color size-6" />,
            },
        ],
        image: AllImages.seamlessSearchCarDetails,
    },
    {
        id: 2,
        isFeatured: true,
        isReverse: true,
        title: "Smart Filtering & Quick Sorting",
        description:
            "Cut through the noise with powerful filters and sorting tools. Whether you need a budget sedan or a luxury SUV, find it in seconds with our intelligent filtering system.",
        featuredWithDescription: [
            {
                title: "Advanced Filter Options",
                description:
                    "Filter by car type, price range, transmission, fuel type, brand, and availability. Narrow down hundreds of options to exactly what you need.",
                icon: <PiSlidersHorizontalDuotone className="text-primary-color size-6" />,
            },
            {
                title: "Instant Booking",
                description:
                    "Book your chosen vehicle in under a minute. Select your dates, confirm your details, and get instant confirmation — no waiting, no back-and-forth.",
                icon: <PiCarDuotone className="text-primary-color size-6" />,
            },
            {
                title: "Flexible Scheduling",
                description:
                    "Pick hourly, daily, or weekly rentals that fit your plans. Modify or extend your booking anytime directly from the app.",
                icon: <PiCalendarCheckDuotone className="text-primary-color size-6" />,
            },
        ],
        image: AllImages.smartFilteringQuickSorting,
    },
    {
        id: 3,
        isFeatured: true,
        isReverse: false,
        title: "Complete Trip Management",
        description:
            "Stay in control from pickup to drop-off. Track your trip in real time, communicate with your host, and manage every detail of your rental journey in one place.",
        featuredWithDescription: [
            {
                title: "Real-Time Trip Tracking",
                description:
                    "Monitor your active rental with live GPS updates. Know exactly where your car is and when it's available for pickup.",
                icon: <PiClockCountdownDuotone className="text-primary-color size-6" />,
            },
            {
                title: "Secure In-App Payments",
                description:
                    "Pay safely with multiple payment options. Your transactions are encrypted and protected — no hidden fees, no surprises.",
                icon: <PiShieldCheckDuotone className="text-primary-color size-6" />,
            },
            {
                title: "Rental History & Reports",
                description:
                    "Review your past trips, receipts, and ratings at any time. Keep a clear record of every booking for personal or business use.",
                icon: <PiChartLineUpDuotone className="text-primary-color size-6" />,
            },
        ],
        image: AllImages.completeTripManagement,
    },
];

export const hostData: ICardData[] = [
    {
        id: 1,
        isFeatured: true,
        isReverse: false,
        title: "Smart Booking & Trip Tracking",
        description:
            "Never miss a booking or a renter update. Manage your entire fleet's schedule in real time and stay on top of every trip from request to return.",
        featuredWithDescription: [
            {
                title: "Instant Booking Alerts",
                description:
                    "Receive immediate push notifications for new booking requests, confirmations, cancellations, and trip updates — so you're always in the loop.",
                icon: <PiBroadcastDuotone className="text-primary-color size-6" />,
            },
            {
                title: "Live Trip Monitoring",
                description:
                    "Track your vehicle's active rental in real time. See trip start, duration, and estimated return so you can plan your fleet schedule with confidence.",
                icon: <PiClockDuotone className="text-primary-color size-6" />,
            },
            {
                title: "Booking History & Logs",
                description:
                    "Access a full record of every completed trip, including renter details, dates, earnings, and ratings, all stored in your host dashboard.",
                icon: <PiListChecksDuotone className="text-primary-color size-6" />,
            },
        ],
        image: AllImages.tripTracking,
    },
    {
        id: 2,
        isFeatured: true,
        isReverse: true,
        title: "Smart Vehicle Listing",
        description:
            "List your car in minutes and start earning. Our guided listing flow helps you create an attractive, trustworthy profile that gets your vehicle booked faster.",
        featuredWithDescription: [
            {
                title: "Easy Multi-Photo Upload",
                description:
                    "Showcase your car with up to 10 high-quality photos. A great visual profile increases booking rates and builds renter trust from the first glance.",
                icon: <PiCarDuotone className="text-primary-color size-6" />,
            },
            {
                title: "Flexible Pricing Control",
                description:
                    "Set your own daily, weekly, and hourly rates. Apply seasonal pricing, promotional discounts, or surge rates during peak demand periods.",
                icon: <PiCurrencyDollarDuotone className="text-primary-color size-6" />,
            },
            {
                title: "Availability Calendar",
                description:
                    "Block dates, set availability windows, and sync your schedule effortlessly. Full control over when your car is rentable and when it's off-limits.",
                icon: <PiCalendarCheckDuotone className="text-primary-color size-6" />,
            },
        ],
        image: AllImages.smartVehicleListing,
    },
    {
        id: 3,
        isFeatured: true,
        isReverse: false,
        title: "Business Analytics & Earnings",
        description:
            "Turn your car into a high-performing asset. Access powerful insights that help you optimize pricing, maximize occupancy, and grow your rental income month over month.",
        featuredWithDescription: [
            {
                title: "Revenue & Earnings Dashboard",
                description:
                    "Track daily, weekly, and monthly earnings in real time. See total payouts, pending amounts, and projected income all in one clear overview.",
                icon: <PiCurrencyDollarDuotone className="text-primary-color size-6" />,
            },
            {
                title: "Performance Analytics",
                description:
                    "Understand how your listings perform with detailed metrics on views, booking conversion rates, and renter satisfaction scores.",
                icon: <PiChartBarDuotone className="text-primary-color size-6" />,
            },
            {
                title: "Growth Insights",
                description:
                    "Receive smart suggestions based on market trends, local demand, and competitor pricing to keep your fleet competitive and profitable.",
                icon: <PiChartLineUpDuotone className="text-primary-color size-6" />,
            },
        ],
        image: AllImages.businessAnalytics,
    },
];

const tabConfig = [
    { label: "For Guests", value: "guest", content: null },
    { label: "For Hosts", value: "host", content: null },
];

interface Props {
    tab?: string;
}

const HowItUse = ({ tab = "guest" }: Props) => {
    const activeTab = tab === "host" ? "host" : "guest";
    const activeData = activeTab === "host" ? hostData : guestData;

    return (
        <section id="how-it-works">
            {/* Header + tab pills */}
            <div className="pt-16 lg:pt-20 pb-10">
                <Container>
                    <SectionHeader
                        label="How It Works"
                        headingAccent="Simple Steps,"
                        headingMain="Big Experience."
                        description="Whether you're renting a car or listing your own — Bonavent makes every step fast, safe, and straightforward."
                    />
                    <div className="mt-12">
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
                </Container>
            </div>

            {/* Stacking cards — outside Container so they can pin full-width */}
            <StackingGridCards>
                {activeData.map((card) => (
                    <SectionGridCard key={card.id} id={card.id} cardData={card} />
                ))}
            </StackingGridCards>
        </section>
    );
};

export default HowItUse;
