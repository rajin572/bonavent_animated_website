import Container from "../ui/CustomeUi/Container";
import SectionHeader from "../ui/CustomeUi/SectionHeader";
import { TestimonialCard } from "../ui/CustomeUi/cards/TestimonialCard";
import { MarqueeTrack } from "../ui/CustomeUi/animation/MarqueeTrack";

const testimonials = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "Frequent Traveler",
        rating: 5,
        text: "Bonavent made my road trip so easy. Found a great car in minutes and the whole return process was completely seamless.",
    },
    {
        id: 2,
        name: "James Okafor",
        role: "Business Professional",
        rating: 5,
        text: "Needed a driver urgently for a client meeting — Bonavent delivered in under 30 minutes. Incredibly reliable every time.",
    },
    {
        id: 3,
        name: "Amara Diallo",
        role: "Car Host",
        rating: 5,
        text: "Listed my car and started earning the same week. Payouts are always on time and the platform is super smooth.",
    },
    {
        id: 4,
        name: "Lena Fischer",
        role: "Weekend Explorer",
        rating: 5,
        text: "Rented an SUV for a mountain trip — everything from booking to drop-off was stress-free. Highly recommend!",
    },
    {
        id: 5,
        name: "Carlos Mendes",
        role: "Daily Commuter",
        rating: 5,
        text: "The self-drive option saves me so much compared to taxis. Cars are always clean, verified, and ready to go.",
    },
    {
        id: 6,
        name: "Priya Nair",
        role: "Event Planner",
        rating: 5,
        text: "We use Bonavent for all our client transportation. The variety of cars and professional drivers truly set them apart.",
    },
    {
        id: 7,
        name: "David Park",
        role: "UX Designer",
        rating: 5,
        text: "The app itself is top-notch — clean, fast, and intuitive. Real-time tracking gave me total peace of mind.",
    },
    {
        id: 8,
        name: "Emma Wilson",
        role: "Product Manager",
        rating: 5,
        text: "Game-changing for team travel. Verified hosts and 24/7 in-app support make Bonavent the most trustworthy option out there.",
    },
];

const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4, 8);

const Testimonials = () => (
    <section id="testimonials" className="py-20 lg:py-24 overflow-hidden">
        <Container>
            <SectionHeader
                label="Testimonials"
                headingAccent="What Our"
                headingMain="Customers Say."
                description="Thousands of happy riders, hosts, and drivers trust Bonavent every day. Here's what they have to say about us."
            />
            <section className="mt-5 relative">
                <div className="flex flex-col gap-4">
                    <MarqueeTrack direction={1} speed={1.2}>
                        {[...row1, ...row1, ...row1].map((item, i) => (
                            <TestimonialCard key={`r1-${item.id}-${i}`} {...item} />
                        ))}
                    </MarqueeTrack>

                    <MarqueeTrack direction={-1} speed={1.2}>
                        {[...row2, ...row2, ...row2].map((item, i) => (
                            <TestimonialCard key={`r2-${item.id}-${i}`} {...item} />
                        ))}
                    </MarqueeTrack>
                </div>

                <div className="from-primary-color pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                <div className="from-primary-color pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
            </section>
        </Container>
    </section>
);

export default Testimonials;
