"use client";
import DownloadModal from "../DownloadModal";
import BorderCard from "../BorderCard";

export const StoreButton = ({ label, icon }: { label: string; icon: React.ReactNode }) => (
    <DownloadModal>
        <BorderCard className="hero-store-btn rounded-full">
            <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-[#111] bg-white hover:bg-gray-50 transition"
            >
                {label}
                {icon}
            </button>
        </BorderCard>
    </DownloadModal>
);
