import { FiFileText } from "react-icons/fi";

const LAST_UPDATED = "February 24, 2026";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-base-color mb-5 pb-3 border-b border-neutral-200">
            {title}
        </h2>
        <div className="space-y-4">{children}</div>
    </div>
);

const Item = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div className="flex gap-3">
        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary-color shrink-0" />
        <p className="text-base-color/75 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-base-color">{label}: </span>
            {children}
        </p>
    </div>
);

const Para = ({ children }: { children: React.ReactNode }) => (
    <p className="text-base-color/75 text-sm sm:text-base leading-relaxed">{children}</p>
);

export default function TermsAndConditionsPage() {
    return (
        <main className="bg-primary-color min-h-screen">

            {/* ── Hero ── */}
            <section
                className="pt-32 pb-20 px-6 md:px-12 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #111827 60%, #1a1f35 100%)" }}
            >
                <div aria-hidden className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-secondary-color/20 blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-secondary-color/10 blur-2xl" />
                </div>

                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-color/20 border border-secondary-color/30 text-secondary-color text-xs font-bold tracking-widest uppercase mb-8">
                        <FiFileText className="size-3.5" />
                        Legal Agreement
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                        Terms &amp; Conditions
                    </h1>
                    <p className="text-white/40 text-sm font-medium tracking-widest uppercase">
                        Last Updated: {LAST_UPDATED}
                    </p>
                </div>
            </section>

            {/* ── Content ── */}
            <article className="max-w-3xl mx-auto px-6 md:px-8 py-16 lg:py-20">

                <Section title="General Agreement">
                    <Para>
                        By using Bonavent&apos;s app, you agree to abide by the Terms and Conditions that define your relationship with Bonavent. Bonavent reserves the right to update and modify these Terms at any time; continuing to use our platform after these changes are implemented means that you accept the new terms. If you disagree, you must stop using Bonavent and close your account within 30 days.
                    </Para>
                </Section>

                <Section title="Driver Verification and Host Registrations">
                    <Para>
                        All drivers must meet age and eligibility requirements for driving a car in Puerto Rico, be 18 years of age or above and carry a valid driver&apos;s license.
                    </Para>
                    <Para>
                        Hosts must register with accurate information and will undergo business identity checks. Bonavent reserves the right to use third-party services for identity verifications.
                    </Para>
                </Section>

                <Section title="Payments, Fees & Taxes">
                    <Para>
                        Fees are clearly identified at checkout for guests; hosts can view earnings and deductions on the Business section of the Host Profile. Payments, refunds, and any owed charges will be processed through the app and will involve the stored banking information using a Stripe account.
                    </Para>
                    <Para>
                        Bonavent may collect and remit applicable taxes on behalf of users and may report earnings under regulatory requirements.
                    </Para>
                </Section>

                <Section title="User Responsibilities & Prohibited Activities">
                    <Para>
                        You must use Bonavent responsibly — you must keep your account confidential, pay on time, and deliver vehicles or extras as agreed.
                    </Para>
                    <Item label="Guests">
                        Must have a valid driver&apos;s license, return vehicles on time in the same condition, and report any damage or theft promptly. Misdemeanors and improper conduct can lead to police reports and/or vehicle repossession. Driving while under the influence of drugs and alcohol is a state offense; you will be charged with a misdemeanor and subjected to fines and license suspension.
                    </Item>
                    <Item label="Hosts">
                        Must sign and abide by Bonavent contract and agreements. Vehicles must be legally registered, safe, insured with commercial insurance, and accurately listed. Hosts must report vehicle damage, theft or illegal use within 24 hours and cooperate in investigations.
                    </Item>
                    <Para>
                        Bonavent strongly discourages completing deals outside the platform, any type of harassment, misuse of property, spamming, extracting data from the site, using bots to replace host and guest interactions, and undermining Bonavent systems — these actions may lead to legal ramifications.
                    </Para>
                </Section>

                <Section title="Limitations of Liability, Indemnification & Waivers">
                    <Para>
                        Bonavent provides the platform &quot;as is&quot; and does not offer warranties on vehicles, hosts, guests, or our content.
                    </Para>
                    <Para>
                        Users must indemnify Bonavent for misuse, damage, legal claims, or violations arising from their misuse of the platform.
                    </Para>
                </Section>

                <Section title="Liquidated Damages">
                    <Para>
                        For serious breaches (like gray market deals or unauthorized use of Bonavent&apos;s brand), users may owe Bonavent $10,000 per violation as a reasonable estimate of damages.
                    </Para>
                </Section>

            </article>

            {/* ── Footer strip ── */}
            <div className="bg-secondary-color py-10 px-6 text-center">
                <p className="text-white/50 text-sm">
                    Questions about these terms? Contact us at{" "}
                    <a href="mailto:admin@bonaventpr.com" className="text-white font-semibold hover:underline">
                        admin@bonaventpr.com
                    </a>
                </p>
            </div>

        </main>
    );
}
