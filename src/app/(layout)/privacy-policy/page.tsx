import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Read Bonavent's Privacy Policy to understand how we collect, store, use, and protect your personal information.",
    alternates: { canonical: "https://car-rental-landing.vercel.app/privacy-policy" },
    robots: { index: true, follow: false },
    openGraph: {
        title: "Privacy Policy | Bonavent",
        description: "Understand how Bonavent handles your personal data and privacy.",
        url: "https://car-rental-landing.vercel.app/privacy-policy",
    },
};

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
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full bg-secondary-color/20 blur-3xl" />
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
                        This Privacy Policy applies to Bonavent Inc. (&quot;Bonavent,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a peer-to-peer vehicle rental platform incorporated in Ontario, Canada. It governs the collection, storage, use, disclosure, and protection of personal information when you access or use our mobile application, website at car-rental-landing.vercel.app/, and any related services (collectively, the &quot;Platform&quot;). By creating an account or using the Platform, you acknowledge you have read and agree to the practices described herein. If you do not agree, please discontinue use immediately and contact us to delete your account.
                    </Para>
                    <Para>
                        This policy complies with applicable Canadian privacy legislation, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and provincial equivalents, as well as relevant provisions of the General Data Protection Regulation (GDPR) for users accessing the Platform from the European Economic Area.
                    </Para>
                </Section>

                <Section title="Storage of Personal Data">
                    <Item label="Account & Profile Data">
                        Full legal name, email address, hashed password, primary phone number, residential address, date of birth, profile photograph, driver&apos;s license number and expiry date, and an optional short biography. With the exception of your password and date of birth, profile information is visible to other verified users on the Platform.
                    </Item>
                    <Item label="Host Vehicle and Trip-Related Data">
                        Vehicle make, model, year, colour, and license plate; VIN (Vehicle Identification Number); listed price per day; availability calendar; photos uploaded to the listing; pick-up and drop-off location coordinates; and complete booking history including trip duration, mileage at handoff, and post-trip condition photos submitted by either party.
                    </Item>
                    <Item label="Payment Information">
                        Credit and debit card details (card number, expiry, CVV) are tokenised and stored by our PCI-DSS Level 1 certified payment processor, Stripe Inc. Bonavent retains only the last four digits of your card, card brand, billing postal code, and a transaction reference ID for dispute resolution and accounting purposes. Direct bank account details provided for host payouts are encrypted and stored by Stripe and never accessed directly by Bonavent staff.
                    </Item>
                    <Item label="Identity Verification Data">
                        Government-issued driver&apos;s license (front and back scan), selfie photograph taken during onboarding, social insurance number (last four digits only for Canadian residents) or the last four digits of your Social Security Number for U.S.-based users, business license where applicable, proof of personal auto insurance, and your driving history as recorded within the Bonavent Platform (trips completed, incidents reported, and ratings received).
                    </Item>
                    <Item label="Communications & Support Data">
                        All in-app chat messages exchanged between guests and hosts, support tickets submitted via email or the in-app help centre, call recordings where you have consented to recording, and any responses submitted through Bonavent satisfaction surveys or user research sessions. Retention period for communications data is 36 months from the date of last interaction.
                    </Item>
                    <Item label="Device & Usage Data">
                        IP address, device type, operating system version, app version, browser type, pages or screens visited, feature interactions, session timestamps, crash logs, and general geographic region derived from IP. This data is collected automatically via our analytics infrastructure and is used in aggregate, non-identifiable form wherever possible.
                    </Item>
                </Section>

                <Section title="How We Will Use the Data">
                    <Item label="Service Delivery">
                        Facilitating vehicle listings and bookings, processing and disbursing payments between guests and hosts, providing real-time support through our Help Centre (available Monday to Friday, 9 AM – 6 PM ET), sending transactional notifications (booking confirmations, payment receipts, trip reminders), and coordinating communication between verified users throughout the rental period.
                    </Item>
                    <Item label="Safety & Verification">
                        Conducting identity verification checks at registration and upon request using our third-party verification partner, Persona Identities Inc. Running background and driving record checks where permitted by applicable law. Detecting and investigating fraudulent activity, policy violations, or suspicious account behaviour. Mediating disputes between guests and hosts and enforcing Bonavent&apos;s Community Guidelines and Terms of Service.
                    </Item>
                    <Item label="Platform Improvement">
                        Analysing aggregate usage patterns to identify and fix bugs, improve navigation and feature usability, and develop new features. Personalising your experience based on prior booking history, search preferences, and host and guest review scores. Conducting A/B testing on interface elements to determine the most effective design approaches.
                    </Item>
                    <Item label="Marketing & Advertising">
                        Sending promotional emails, push notifications, and in-app messages about new features, promotions, and relevant vehicle listings in your area — but only where you have opted in to marketing communications. Measuring the effectiveness of our advertising campaigns on third-party platforms (e.g., Meta, Google) using anonymised conversion data. You may withdraw marketing consent at any time via your account notification settings or by clicking &quot;Unsubscribe&quot; in any marketing email.
                    </Item>
                    <Item label="Legal & Regulatory Compliance">
                        Retaining records as required by Canadian federal and provincial law, responding to lawful requests from regulatory authorities, satisfying tax reporting obligations to the Canada Revenue Agency (CRA), and maintaining audit trails for insurance and liability purposes.
                    </Item>
                </Section>

                <Section title="Who We Share Data With">
                    <Item label="Other Users on the Platform">
                        When a booking is confirmed, guests receive the host&apos;s first name, vehicle location (precise pick-up address), and contact phone number. Hosts receive the guest&apos;s first name, profile photo, driver&apos;s license class, and Bonavent-verified rating. Full legal names and license numbers are only exchanged where required for insurance documentation.
                    </Item>
                    <Item label="Payment & Financial Service Providers">
                        Stripe Inc. for payment processing and host payouts; Plaid Technologies for optional bank account verification; and our insurance underwriting partner, Intact Financial Corporation, who receives booking details and driver verification data solely for the purpose of issuing and managing trip insurance coverage.
                    </Item>
                    <Item label="Identity Verification Partners">
                        Persona Identities Inc. processes government ID scans and selfie photographs during the onboarding verification flow. Data shared with Persona is subject to their own privacy policy and is deleted from their systems within 90 days of verification completion.
                    </Item>
                    <Item label="Analytics & Infrastructure Providers">
                        Mixpanel Inc. for product analytics (pseudonymised event data only); Amazon Web Services (AWS) for cloud hosting and data storage in Canadian and U.S. data centres; and Twilio Inc. for SMS and voice communications. All third-party processors are bound by data processing agreements that restrict use to the stated purpose.
                    </Item>
                    <Item label="Professional Advisors">
                        External legal counsel, auditors (currently Grant Thornton LLP), and insurance brokers engaged by Bonavent in the ordinary course of business. These parties access only the minimum data necessary for the professional service being rendered.
                    </Item>
                    <Item label="Legal & Safety Obligations">
                        We may disclose personal information in response to a court order, subpoena, or lawful request from a government authority; to prevent imminent physical harm to any person; or to investigate a suspected breach of our Terms of Service or applicable law. Where legally permitted, we will notify you before disclosing your data.
                    </Item>
                    <Item label="Corporate Transactions">
                        In the event of a merger, acquisition, asset sale, or restructuring involving Bonavent, your personal information may be transferred to the acquiring entity. We will notify affected users by email and in-app notification at least 30 days prior to any such transfer, and you will retain the right to request deletion before the transfer is completed.
                    </Item>
                </Section>

                <Section title="You Have Control Over Information Shared">
                    <Item label="Account Access & Edits">
                        Log in to your Bonavent account and navigate to Settings → Personal Information to review, correct, or update your profile data at any time. Changes to your legal name or driver&apos;s license details may require re-verification before taking effect.
                    </Item>
                    <Item label="Account Closure & Data Deletion">
                        You may request permanent account deletion by emailing privacy@gmail.com or through Settings → Account → Delete Account. Upon confirmed deletion, your active profile and listing data will be removed within 14 business days. Certain records (transaction logs, booking histories, identity verification records) may be retained for up to 7 years as required by Canadian tax and financial regulations.
                    </Item>
                    <Item label="Data Access & Portability Requests">
                        You may request a copy of all personal data we hold about you in a structured, machine-readable format (JSON or CSV) by submitting a request through the Help Centre or emailing privacy@gmail.com. We will respond within 30 days in accordance with PIPEDA requirements.
                    </Item>
                    <Item label="Marketing Communications">
                        Opt out of promotional emails by clicking the &quot;Unsubscribe&quot; link in any marketing message, or toggle off marketing notifications in Settings → Notifications. Note that transactional and safety-related messages (booking confirmations, trip alerts, account security notices) cannot be disabled while your account is active.
                    </Item>
                    <Item label="Ad Tracking & Cookies">
                        Control cookie preferences via our in-app Cookie Settings panel (accessible from the footer of the web app). You may also manage tracking through your browser&apos;s built-in privacy settings, privacy-focused browser extensions, or the Digital Advertising Alliance&apos;s opt-out portal at youradchoices.ca.
                    </Item>
                    <Item label="Location Services">
                        Bonavent requests access to your device&apos;s precise location only while using the app and only to display nearby listings and facilitate pick-up coordination. You may revoke location permission at any time via your device&apos;s operating system settings. Revoking location access will not affect your ability to book vehicles but may limit search accuracy.
                    </Item>
                </Section>

                <Section title="Data Retention">
                    <Para>
                        Bonavent retains personal data only as long as necessary to fulfil the purpose for which it was collected, to comply with our legal obligations, and to resolve disputes. The following general retention periods apply: active account data is retained for the lifetime of your account; booking and transaction records are retained for 7 years from the date of the transaction; identity verification records are retained for 5 years from the date of last completed trip; in-app communications are retained for 36 months; and device and usage data is retained for 18 months in identifiable form, after which it is anonymised or deleted.
                    </Para>
                    <Para>
                        You may request early deletion of specific data categories where doing so does not conflict with our legal retention obligations. Requests should be submitted to privacy@gmail.com with the subject line &quot;Data Retention Request.&quot;
                    </Para>
                </Section>

                <Section title="Additional Privacy Protections">
                    <Item label="Tracking Devices & Dashboard Cameras by Hosts">
                        Hosts are required to disclose in their listing the presence of any tracking devices (including GPS units, Apple AirTags, or equivalent), hardwired or battery-powered dashboard cameras, or exterior parking cameras. Guests must be informed of all surveillance devices before confirming a booking. Hosts found to operate undisclosed tracking or recording equipment will have their accounts permanently suspended. Guests may report suspected violations directly to Bonavent Trust & Safety at safety@gmail.com.
                    </Item>
                    <Item label="Children's Privacy">
                        The Bonavent Platform is intended solely for users who are 21 years of age or older and hold a valid driver&apos;s license. We do not knowingly collect personal information from individuals under the age of 21. If we become aware that a minor has created an account, we will immediately suspend the account and delete all associated data within 72 hours. If you believe a minor has accessed the Platform, please notify us at privacy@gmail.com.
                    </Item>
                    <Item label="Data Security">
                        All data transmitted between your device and Bonavent servers is encrypted in transit using TLS 1.3. Sensitive data at rest, including identity documents and payment tokens, is encrypted using AES-256. Access to personal data within Bonavent is restricted on a strict need-to-know basis, and all internal access events are logged and audited quarterly. In the event of a data breach affecting your personal information, we will notify affected users and relevant regulatory authorities within 72 hours of confirmed discovery, as required by PIPEDA.
                    </Item>
                    <Item label="International Data Transfers">
                        Your personal data may be processed or stored in Canada, the United States, or Ireland (for European users) depending on the infrastructure provider. Transfers outside of Canada are made in accordance with PIPEDA Schedule 1 and, where applicable, the GDPR Standard Contractual Clauses. A list of countries where your data may be processed is available upon request.
                    </Item>
                </Section>

                <Section title="Changes to This Policy">
                    <Para>
                        Bonavent reserves the right to update this Privacy Policy at any time. When material changes are made, we will notify you via email to your registered address and via an in-app notification at least 14 days before the changes take effect. Your continued use of the Platform after the effective date of any update constitutes your acceptance of the revised policy. We maintain an archive of previous policy versions, which is available upon request.
                    </Para>
                </Section>

            </article>

            {/* ── Footer strip ── */}
            <div className="bg-secondary-color py-10 px-6 text-center">
                <p className="text-white/50 text-sm">
                    Questions about our privacy practices? Contact us at{" "}
                    <a href="mailto:privacy@gmail.com" className="text-white font-semibold hover:underline">
                        privacy@gmail.com
                    </a>
                </p>
            </div>

        </main>
    );
}