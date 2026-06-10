import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "Review Bonavent's Terms and Conditions — the rules and agreements that govern the use of our car rental platform.",
    alternates: { canonical: "https://car-rental-landing.vercel.app/terms-and-conditions" },
    robots: { index: true, follow: false },
    openGraph: {
        title: "Terms & Conditions | Bonavent",
        description: "The legal agreement that governs your use of the Bonavent platform.",
        url: "https://car-rental-landing.vercel.app/terms-and-conditions",
    },
};

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
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full bg-secondary-color/20 blur-3xl" />
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
                        These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;Guest,&quot; or &quot;Host&quot;) and Bonavent Inc. (&quot;Bonavent,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a peer-to-peer vehicle rental marketplace incorporated in Ontario, Canada, with its principal place of business at 200 Bay Street, Suite 1400, Toronto, ON M5J 2J4. By creating an account, accessing, or using any part of the Bonavent mobile application or website located at car-rental-landing.vercel.app/ (collectively, the &quot;Platform&quot;), you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is incorporated herein by reference.
                    </Para>
                    <Para>
                        Bonavent reserves the right to amend, modify, or replace these Terms at any time at its sole discretion. When material changes are made, we will notify registered users by email and via an in-app notification no fewer than 14 days before the changes take effect. Your continued use of the Platform after the effective date of any revision constitutes your unconditional acceptance of the updated Terms. If you do not agree with any revised Terms, you must cease using the Platform and request account closure within 30 days of the notification date by contacting legal@gmail.com.
                    </Para>
                </Section>

                <Section title="Eligibility & Account Registration">
                    <Para>
                        To register for and use the Bonavent Platform, you must meet all of the following eligibility criteria at the time of registration and throughout the duration of your account:
                    </Para>
                    <Item label="Age Requirement">
                        You must be at least 21 years of age. Guests between the ages of 21 and 24 may be subject to a Young Driver Surcharge of CAD $15 per day, applied automatically at checkout, to reflect elevated insurance risk. Users under the age of 21 are strictly prohibited from creating an account and will be suspended upon discovery.
                    </Item>
                    <Item label="Valid Driver&apos;s License">
                        All guests must hold a valid, unexpired driver&apos;s license issued by a recognised government authority. Licenses issued outside Canada or the United States must be accompanied by a certified International Driving Permit (IDP). Licenses that are suspended, revoked, or under administrative review are not accepted. It is the guest&apos;s sole responsibility to ensure their license remains valid for the entire duration of every trip.
                    </Item>
                    <Item label="Account Accuracy">
                        You agree to provide accurate, current, and complete information during registration and to keep your account details up to date at all times. Submitting false, misleading, or fraudulent information — including identity documents, payment details, or vehicle information — constitutes a material breach of these Terms and may result in immediate account termination, forfeiture of any pending payouts, and referral to law enforcement authorities.
                    </Item>
                    <Item label="One Account Per Person">
                        Each individual may maintain only one active Bonavent account. Operating multiple accounts, sharing account access with third parties, or creating an account on behalf of a person who has been previously banned is strictly prohibited and will result in permanent suspension of all associated accounts.
                    </Item>
                </Section>

                <Section title="Driver Verification & Host Registration">
                    <Para>
                        Bonavent employs a mandatory identity and eligibility verification process for all users prior to their first booking or listing. Verification is conducted through our third-party partner, Persona Identities Inc., and may include government ID document scanning, facial biometric matching, and driving record checks where legally permitted.
                    </Para>
                    <Item label="Guest Verification">
                        Guests must successfully complete identity verification, upload a clear photograph of both sides of their valid driver&apos;s license, and pass a driving record check before making their first booking. Bonavent reserves the right to require re-verification at any time, including following a reported incident, a period of account inactivity exceeding 12 months, or a change in the user&apos;s personal details.
                    </Item>
                    <Item label="Host Registration">
                        Hosts must complete all verification steps required of guests, and additionally must provide proof of ownership or legal right to list each vehicle, a valid commercial auto insurance certificate naming Bonavent as an additional insured party, a completed W-8BEN or W-9 tax form as applicable, and a signed Bonavent Host Agreement. Bonavent reserves the right to reject any host application at its sole discretion without providing a reason.
                    </Item>
                    <Item label="Ongoing Compliance">
                        Verification is an ongoing obligation. If a guest&apos;s license is suspended or a host&apos;s insurance lapses during the period in which they hold an active account, the affected user must notify Bonavent within 48 hours and must not complete any further trips until their eligibility is restored. Failure to notify Bonavent will be treated as a material breach of these Terms.
                    </Item>
                </Section>

                <Section title="Payments, Fees & Taxes">
                    <Para>
                        All payments on the Platform are processed exclusively through Stripe Inc., our PCI-DSS Level 1 certified payment processing partner. By adding a payment method to your account, you authorise Bonavent and Stripe to charge or credit that method in accordance with these Terms. Bonavent does not store full payment card details on its own servers.
                    </Para>
                    <Item label="Guest Charges">
                        The total amount due at checkout includes the nightly rental rate set by the host, the Bonavent Guest Service Fee (currently 12% of the subtotal, subject to change with 30 days&apos; notice), applicable provincial and federal taxes, optional add-ons (additional driver, child seat, GPS unit), and any applicable Young Driver Surcharge. All amounts are displayed in Canadian Dollars (CAD) unless otherwise stated. Charges are authorised at the time of booking and captured 24 hours before trip start.
                    </Item>
                    <Item label="Host Earnings & Fees">
                        Hosts receive 80% of the nightly rental rate after deduction of the Bonavent Host Service Fee (20%). Earnings are disbursed to the host&apos;s verified bank account via Stripe within 3 business days of trip completion, provided no damage claim or dispute is pending. Bonavent reserves the right to withhold earnings for up to 30 days if a claim is under investigation. Hosts can view a full breakdown of earnings, fees, and deductions in the Business section of the Host Dashboard.
                    </Item>
                    <Item label="Refunds">
                        Refunds are governed by Bonavent&apos;s Cancellation Policy (see Section 6). Approved refunds are returned to the original payment method within 5–10 business days. Bonavent Guest Service Fees are non-refundable except where a cancellation is initiated by the host or where a vehicle is materially misrepresented in the listing.
                    </Item>
                    <Item label="Taxes">
                        Bonavent may collect and remit Harmonised Sales Tax (HST), Goods and Services Tax (GST), or applicable provincial sales taxes on qualifying transactions in accordance with Canadian Revenue Agency (CRA) requirements. Hosts are solely responsible for reporting and remitting any income taxes on rental earnings in their applicable jurisdiction. Bonavent will issue annual T4A slips to hosts who receive CAD $500 or more in earnings in a calendar year, as required by CRA.
                    </Item>
                    <Item label="Disputes & Chargebacks">
                        If you believe a charge is incorrect, you must contact Bonavent Support at billing@gmail.com within 14 days of the charge date before initiating a chargeback with your card issuer. Initiating a chargeback without first contacting Bonavent may result in account suspension. Bonavent will investigate disputed charges within 10 business days and issue a resolution notice by email.
                    </Item>
                </Section>

                <Section title="User Responsibilities & Prohibited Activities">
                    <Para>
                        All users agree to use the Bonavent Platform in good faith and in compliance with these Terms, our Community Guidelines, and all applicable laws. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must notify Bonavent immediately at security@gmail.com if you suspect unauthorised access to your account.
                    </Para>
                    <Item label="Guest Obligations">
                        Guests must hold a valid driver&apos;s license throughout the trip, operate the vehicle in strict compliance with all applicable traffic laws, return the vehicle to the agreed location at the scheduled time in the same condition as received (normal wear excepted), refuel the vehicle to the level documented at pick-up, and report any damage, collision, theft, or mechanical failure to Bonavent Trust & Safety within 2 hours of occurrence via the app or by calling 1-800-462-6836. Guests are strictly prohibited from operating the vehicle outside the boundaries of the Province of Ontario without prior written approval from both the host and Bonavent; sub-leasing or allowing any unlisted driver to operate the vehicle; transporting illegal substances or using the vehicle for any criminal purpose; smoking, vaping, or carrying animals in the vehicle without host consent; towing, racing, or using the vehicle for commercial delivery purposes.
                    </Item>
                    <Item label="Host Obligations">
                        Hosts must ensure that every listed vehicle is validly registered and licensed in Ontario, mechanically fit for rental (including current safety inspection certification not older than 12 months), insured under a commercial auto insurance policy that explicitly covers peer-to-peer rental activity, accurately described in the listing with no material omissions, and clean and fuelled to the level disclosed in the listing at the time of guest pick-up. Hosts must report any vehicle damage, theft, or illegal use by a guest to Bonavent within 24 hours of discovery and must cooperate fully with Bonavent&apos;s investigations, including providing access to telematics data, dash cam footage, and maintenance records as requested.
                    </Item>
                    <Para>
                        The following activities are strictly prohibited on the Bonavent Platform and may result in immediate account suspension, legal action, and/or a demand for liquidated damages as described in Section 8: completing or soliciting rental transactions outside the Platform (&quot;off-platform deals&quot;); harassment, threats, or discriminatory conduct toward any user or Bonavent employee; scraping, crawling, or otherwise extracting data from the Platform using automated means; deploying bots, scripts, or artificial intelligence tools to simulate host or guest interactions; impersonating another person or entity; posting false or misleading reviews; and attempting to reverse-engineer, decompile, or tamper with the Platform&apos;s software.
                    </Para>
                </Section>

                <Section title="Cancellation Policy">
                    <Item label="Guest Cancellations">
                        Cancellations made more than 72 hours before the scheduled trip start time are eligible for a full refund of the rental subtotal, excluding the non-refundable Bonavent Guest Service Fee. Cancellations made between 24 and 72 hours before trip start will receive a 50% refund of the rental subtotal. Cancellations made less than 24 hours before trip start or no-shows forfeit the full rental amount. Guests who cancel more than 3 trips in any 6-month rolling period may have their booking privileges suspended.
                    </Item>
                    <Item label="Host Cancellations">
                        Hosts who cancel a confirmed booking within 72 hours of the scheduled trip start will be charged a CAD $75 cancellation fee, which will be deducted from their next payout. Hosts who accumulate more than 2 cancellations in any 90-day period may have their listing temporarily suspended pending a review by the Bonavent Trust & Safety team. Guests affected by a host cancellation will receive a full refund, including the Guest Service Fee, within 3 business days.
                    </Item>
                    <Item label="Bonavent-Initiated Cancellations">
                        Bonavent reserves the right to cancel any booking without penalty to either party where the booking involves a violation of these Terms, presents a safety risk, is subject to a legal hold, or where the listed vehicle has been reported stolen, involved in an accident, or rendered unavailable due to circumstances beyond the host&apos;s control. In such cases, the guest will receive a full refund within 3 business days.
                    </Item>
                </Section>

                <Section title="Insurance & Liability">
                    <Para>
                        Bonavent is a technology platform that facilitates peer-to-peer vehicle rentals. Bonavent itself is not an insurer, and the Platform does not replace the obligation of hosts to maintain valid commercial auto insurance. All hosts are required to carry a commercial auto insurance policy that explicitly covers peer-to-peer rental activity for the full duration of any active listing.
                    </Para>
                    <Item label="Trip Protection Coverage">
                        Bonavent offers optional Trip Protection Plans to guests at checkout, underwritten by Intact Financial Corporation (Certificate of Authority No. 4221-ON). Available plans include Standard Protection (CAD $12/day, covering collision and theft up to the vehicle&apos;s actual cash value with a CAD $2,500 deductible) and Premium Protection (CAD $22/day, same coverage with a CAD $500 deductible and roadside assistance). Guests who decline a Trip Protection Plan accept full financial liability for any damage to or theft of the vehicle during their trip.
                    </Item>
                    <Item label="Liability Limitations">
                        To the maximum extent permitted by applicable law, Bonavent&apos;s aggregate liability to any user arising out of or related to these Terms or use of the Platform — whether in contract, tort, or otherwise — shall not exceed the total fees paid by that user to Bonavent in the 12-month period immediately preceding the event giving rise to the claim. Bonavent shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, loss of data, personal injury, or property damage arising out of a rental transaction between users.
                    </Item>
                    <Item label="Indemnification">
                        You agree to defend, indemnify, and hold harmless Bonavent Inc., its directors, officers, employees, contractors, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from your use or misuse of the Platform, your violation of these Terms, your violation of any third-party right, or any incident involving a vehicle listed or rented through your account.
                    </Item>
                </Section>

                <Section title="Liquidated Damages">
                    <Para>
                        The parties acknowledge that certain breaches of these Terms would cause harm to Bonavent that is difficult to quantify precisely. Accordingly, in addition to any other remedies available at law or equity, users agree to pay Bonavent the following amounts as a reasonable pre-estimate of damages, and not as a penalty:
                    </Para>
                    <Item label="Off-Platform Transactions">
                        CAD $10,000 per occurrence for each rental transaction or payment that is solicited, negotiated, or completed outside of the Bonavent Platform in violation of these Terms.
                    </Item>
                    <Item label="Unauthorised Brand Use">
                        CAD $10,000 per occurrence for the unauthorised use of the Bonavent name, logo, trademark, or any confusingly similar mark in any commercial context, including unsanctioned marketing materials, social media profiles, or third-party listings.
                    </Item>
                    <Item label="Data Scraping & System Interference">
                        CAD $25,000 per incident for any unauthorised extraction of data from the Platform, deployment of automated bots, or any act that intentionally interferes with the Platform&apos;s infrastructure or the experience of other users.
                    </Item>
                    <Item label="Fraudulent Identity or Vehicle Misrepresentation">
                        CAD $15,000 per occurrence for submitting fraudulent identity documents, misrepresenting vehicle condition, or creating accounts under false identities. This is in addition to any criminal referral Bonavent may make to the appropriate law enforcement authority.
                    </Item>
                </Section>

                <Section title="Intellectual Property">
                    <Para>
                        All content on the Bonavent Platform — including but not limited to the name &quot;Bonavent,&quot; the logo, user interface design, software code, text, graphics, photographs, and data compilations — is the exclusive property of Bonavent Inc. or its licensors and is protected by Canadian and international copyright, trademark, and other intellectual property laws.
                    </Para>
                    <Para>
                        You are granted a limited, non-exclusive, non-transferable, revocable licence to access and use the Platform solely for its intended personal, non-commercial purpose. You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise exploit any content from the Platform without Bonavent&apos;s prior written consent. User-generated content (including listing photos, reviews, and chat messages) remains the property of the user who created it, but by submitting content to the Platform you grant Bonavent a worldwide, royalty-free, perpetual licence to use, display, and distribute that content in connection with the operation and promotion of the Platform.
                    </Para>
                </Section>

                <Section title="Dispute Resolution & Governing Law">
                    <Para>
                        These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict-of-law principles. The parties irrevocably submit to the exclusive jurisdiction of the courts of Ontario for the resolution of any dispute arising out of or related to these Terms or use of the Platform.
                    </Para>
                    <Para>
                        Before initiating any legal proceeding, users agree to attempt good-faith resolution by submitting a written description of the dispute to legal@gmail.com. Bonavent will respond within 15 business days with a proposed resolution. If the dispute is not resolved within 45 days of the initial written notice, either party may pursue available legal remedies. Nothing in this clause prevents either party from seeking emergency injunctive or other equitable relief in any court of competent jurisdiction.
                    </Para>
                </Section>

                <Section title="Termination & Suspension">
                    <Item label="Termination by User">
                        You may close your account at any time by navigating to Settings → Account → Delete Account or by emailing legal@gmail.com. Account closure does not release you from any outstanding financial obligations, active trip commitments, or pending claims at the time of closure.
                    </Item>
                    <Item label="Termination by Bonavent">
                        Bonavent may suspend or permanently terminate your account at any time, with or without notice, for any violation of these Terms, Community Guidelines, or applicable law; for engaging in conduct that poses a safety risk to other users; for prolonged account inactivity (defined as no login activity for 24 consecutive months); or where required to do so by a court order or regulatory authority.
                    </Item>
                    <Item label="Effect of Termination">
                        Upon termination, your licence to use the Platform is immediately revoked, all pending bookings in your account will be cancelled (subject to applicable refund and compensation policies), and any outstanding host payouts will be processed within 30 days after resolution of any open claims. Sections of these Terms that by their nature should survive termination — including Payments, Indemnification, Liability Limitations, Liquidated Damages, and Governing Law — shall continue in full force and effect.
                    </Item>
                </Section>

            </article>

            {/* ── Footer strip ── */}
            <div className="bg-secondary-color py-10 px-6 text-center">
                <p className="text-white/50 text-sm">
                    Questions about these terms? Contact us at{" "}
                    <a href="mailto:legal@gmail.com" className="text-white font-semibold hover:underline">
                        legal@gmail.com
                    </a>
                </p>
            </div>

        </main>
    );
}