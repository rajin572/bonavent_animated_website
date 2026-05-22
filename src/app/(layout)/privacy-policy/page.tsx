import { FiShield } from "react-icons/fi";

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

export default function PrivacyPolicyPage() {
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
                        <FiShield className="size-3.5" />
                        Your Privacy Matters
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-white/40 text-sm font-medium tracking-widest uppercase">
                        Last Updated: {LAST_UPDATED}
                    </p>
                </div>
            </section>

            {/* ── Content ── */}
            <article className="max-w-3xl mx-auto px-6 md:px-8 py-16 lg:py-20">

                <Section title="Scope">
                    <Para>
                        Bonavent&apos;s Privacy Policy outlines how the company collects, stores, uses, shares, and protects your personal information when you use the app.
                    </Para>
                </Section>

                <Section title="Storage of Personal Data">
                    <Item label="Account & Profile data">
                        Name, email, password, phone number, home address, date of birth, profile photo, driver&apos;s license details, and biography. For the exception of passwords, the information will be publicly visible in your profile.
                    </Item>
                    <Item label="Host Vehicle and Trip-related data">
                        Listing details, vehicle location, VIN, availability, trip photos, and booking information.
                    </Item>
                    <Item label="Payment Information">
                        Credit/debit card details, bank account info, and transaction records.
                    </Item>
                    <Item label="Identity Verification Data">
                        Driver&apos;s license, business license, insurance records, social insurance number (or last four of SSN), driving history at Bonavent, and photos.
                    </Item>
                    <Item label="Communications & Research Data">
                        Records from your interactions with Guest, Host or Bonavent Admin via chat, phone, email, and any survey or user research entries you submit.
                    </Item>
                </Section>

                <Section title="How We Will Use the Data">
                    <Item label="Service Delivery">
                        Operating the platform, processing bookings, payments, customer support, and optimizing communication between users.
                    </Item>
                    <Item label="Improving the Platform">
                        Personalizing your experience, making adjustments based on previous host and guest reviews and interactions.
                    </Item>
                    <Item label="Safety & Verification">
                        We run identity checks upon initial registration, we detect fraud and resolve disputes to enforce our policies.
                    </Item>
                    <Item label="Marketing & Advertising">
                        Bonavent strives to improve our services by understanding user common needs. Our marketing strategy will be optimized by the use of the collected data described above from users.
                    </Item>
                </Section>

                <Section title="Who We Share Data With">
                    <Item label="Other Users">
                        Hosts and guests involved in a booking may receive information only when necessary, such as phone numbers, photos, license details, and locations.
                    </Item>
                    <Item label="Service Providers">
                        Vendors providing analytics, payment processing and insurance.
                    </Item>
                    <Item label="Professional Advisors">
                        Lawyers, auditors, insurers engaged by Bonavent.
                    </Item>
                    <Item label="Legal & Safety Obligations">
                        In cases of subpoenas, fraud, legal claims, or safety concerns.
                    </Item>
                    <Item label="Business Changes">
                        In corporate actions like acquisitions or mergers, your data might be transferred.
                    </Item>
                </Section>

                <Section title="You Have Control Over Information Shared">
                    <Item label="Account Access & Edits">
                        Log in to review or edit your information.
                    </Item>
                    <Item label="Account Closure & Data Deletion">
                        Request account deletion via email; some info may remain for legal or safety reasons.
                    </Item>
                    <Item label="Data Access Requests">
                        Available in your account or through Help line.
                    </Item>
                    <Item label="Ad Tracking & Cookies">
                        Control cookies via browser/device settings, privacy plug-ins, or ad-industry opt-out tools.
                    </Item>
                    <Item label="Location Services">
                        You can disable mobile location access in your device settings.
                    </Item>
                </Section>

                <Section title="Additional Privacy Protections">
                    <Item label="Tracking Devices & Dashboard Cameras by Hosts">
                        Hosts must disclose the presence of any tracking devices (e.g., GPS, AirTags) or dash cams in the listing. Renters must be informed before booking.
                    </Item>
                </Section>

            </article>

            {/* ── Footer strip ── */}
            <div className="bg-secondary-color py-10 px-6 text-center">
                <p className="text-white/50 text-sm">
                    Questions about our privacy practices? Contact us at{" "}
                    <a href="mailto:admin@bonaventpr.com" className="text-white font-semibold hover:underline">
                        admin@bonaventpr.com
                    </a>
                </p>
            </div>

        </main>
    );
}
