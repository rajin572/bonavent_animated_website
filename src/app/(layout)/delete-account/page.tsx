import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description: "Step-by-step guide to permanently deleting your Bonavent account and all associated data from the app.",
  alternates: { canonical: "https://www.bonaventpr.com/delete-account" },
  robots: { index: true, follow: false },
  openGraph: {
    title: "Delete Your Account | Bonavent",
    description: "Follow these steps to permanently delete your Bonavent account.",
    url: "https://www.bonaventpr.com/delete-account",
  },
};

import Image from "next/image";
import { AllImages } from "../../../../public/assests/images/AllImages";
import { IoWarningOutline } from "react-icons/io5";
import { FiAlertTriangle, FiCheckCircle } from "react-icons/fi";

const steps = [
    {
        number: "01",
        title: "Navigate to Profile",
        description:
            "Open the Bonavent app. From the main home screen, tap the Profile tab located in the bottom right corner of the navigation bar.",
        image: AllImages.deleteAccountStep1,
    },
    {
        number: "02",
        title: "Select Settings",
        description:
            "From the Profile menu, locate and tap on Settings from the list of options.",
        image: AllImages.deleteAccountStep2,
    },
    {
        number: "03",
        title: "Select Delete Account",
        description:
            "Inside Settings, locate and tap on the \"Delete Account\" option at the bottom of the list.",
        image: AllImages.deleteAccountStep3,
    },
    {
        number: "04",
        title: "Confirm Deletion",
        description:
            "A warning dialog will appear. Enter your password to confirm. This action is irreversible — all your data will be permanently lost. Tap the red \"Delete\" button to proceed.",
        image: AllImages.deleteAccountStep4,
    },
    {
        number: "05",
        title: "Done",
        description:
            "Your account has been successfully deleted. You will be signed out and redirected to the Sign In screen. Thank you for using Bonavent.",
        image: AllImages.deleteAccountStep5,
    },
];

const DeleteAccountPage = () => {
    return (
        <main className="bg-primary-color min-h-screen">

            {/* ── Hero ── */}
            <section className="pt-32 pb-20 px-6 md:px-12 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #111827 60%, #1a1f35 100%)" }}>
                {/* Background blobs */}
                <div aria-hidden className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-secondary-color/20 blur-3xl" />
                    <div className="absolute bottom-0 -left-16 w-[280px] h-[280px] rounded-full bg-secondary-color/10 blur-2xl" />
                    <div className="absolute top-1/2 right-0 w-50 h-50 rounded-full bg-red-500/8 blur-2xl" />
                </div>

                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-400/30 text-red-300 text-xs font-bold tracking-widest uppercase mb-8">
                        <IoWarningOutline className="size-3.5" />
                        Irreversible Action
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                        Delete Your<br />
                        <span className="text-red-400">Bonavent Account</span>
                    </h1>

                    <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
                        Follow the steps below to permanently remove your account and all associated data from Bonavent.
                    </p>
                </div>
            </section>

            {/* ── Important Note ── */}
            <section className="max-w-4xl mx-auto px-6 md:px-8 -mt-6 relative z-10">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-amber-100 flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center mt-0.5">
                        <FiAlertTriangle className="size-5 text-amber-500" />
                    </div>
                    <div>
                        <p className="font-bold text-base-color text-sm sm:text-base mb-1">Note for All Users</p>
                        <p className="text-base-color/65 text-sm sm:text-base leading-relaxed">
                            The account deletion process is identical for both <strong className="text-base-color">Guest</strong> and <strong className="text-base-color">Host</strong> accounts. The screenshots below show the Guest profile view, but every step is exactly the same for Host profiles.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Steps ── */}
            <section className="max-w-4xl mx-auto px-6 md:px-8 py-20 space-y-24">
                {steps.map((step, index) => {
                    const isLast = index === steps.length - 1;
                    const isEven = index % 2 === 0;

                    return (
                        <div key={step.number} className={`flex flex-col gap-10 lg:gap-16 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

                            {/* Phone mockup */}
                            <div className="w-full lg:w-auto lg:shrink-0 flex justify-center">
                                <div className="relative">
                                    {/* Glow */}
                                    <div className="absolute inset-0 rounded-[2.5rem] bg-secondary-color/20 blur-2xl scale-90 -z-10" />
                                    {/* Phone frame */}
                                    <div className="relative bg-[#1a1a2e] rounded-[2.5rem] p-2 shadow-2xl border border-white/10 w-[200px] sm:w-[220px]">
                                        <div className="relative rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                                            <Image
                                                src={step.image}
                                                alt={step.title}
                                                fill
                                                className="object-cover object-top"
                                                sizes="(max-width: 768px) 50vw, 100vw"
                                                fetchPriority="high"
                                                preload
                                            />
                                        </div>
                                        {/* Notch */}
                                        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-14 h-5 bg-[#1a1a2e] rounded-full z-10" />
                                    </div>
                                </div>
                            </div>

                            {/* Text content */}
                            <div className="flex-1">
                                <div className="flex items-start gap-4 mb-5">
                                    <span className="text-[4rem] sm:text-[5rem] font-black leading-none text-secondary-color/10 select-none">
                                        {step.number}
                                    </span>
                                    <div className="pt-2">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary-color/50 mb-1.5">
                                            Step {step.number}
                                        </p>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-color leading-tight">
                                            {step.title}
                                        </h2>
                                    </div>
                                </div>

                                <p className="text-base-color/65 text-base sm:text-lg leading-relaxed">
                                    {step.description}
                                </p>

                                {isLast && (
                                    <div className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-semibold">
                                        <FiCheckCircle className="size-4" />
                                        Account successfully deleted
                                    </div>
                                )}

                                {step.number === "04" && (
                                    <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-100">
                                        <p className="text-red-600 text-sm font-semibold flex items-center gap-2">
                                            <IoWarningOutline className="size-4 shrink-0" />
                                            This action cannot be undone. All trips, listings, and personal data will be permanently erased.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Connector line between steps (not after last) */}
                        </div>
                    );
                })}
            </section>

            {/* ── Footer note ── */}
            <section className="bg-secondary-color py-16 px-6 text-center">
                <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed">
                    Need help? Reach us at{" "}
                    <a href="mailto:admin@bonaventpr.com" className="text-white font-semibold hover:underline">
                        admin@bonaventpr.com
                    </a>{" "}
                    before deleting your account.
                </p>
            </section>

        </main>
    );
};

export default DeleteAccountPage;
