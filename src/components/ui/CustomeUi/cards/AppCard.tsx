import { cn } from "@/lib/utils";
import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import BorderCard from "../BorderCard";
import DownloadModal from "../DownloadModal";

const inner =
    "h-full rounded-[14px] bg-white transition-all duration-500 overflow-hidden " +
    "group-hover:bg-secondary-color group-hover:shadow-2xl group-hover:shadow-secondary-color/25";

const SCard = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <BorderCard className={cn("service-card cursor-default", className)}>
        {children}
    </BorderCard>
);

export const AppCard = () => (
    <SCard>
        <div className={cn(inner, "min-h-48 p-7 flex flex-col justify-between")}>
            <p
                className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-lighter-color
                           transition-colors duration-500 group-hover:text-white/60"
            >
                ↓ Get the App
            </p>
            <div className="flex flex-col gap-2.5">
                <DownloadModal>
                    <div
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-highlight-color/50
                                   transition-colors duration-500 group-hover:bg-white/15 cursor-pointer"
                    >
                        <FaApple className="text-secondary-color text-lg transition-colors duration-500 group-hover:text-white" />
                        <span className="text-sm font-semibold text-base-color transition-colors duration-500 group-hover:text-white">
                            App Store
                        </span>
                    </div>
                </DownloadModal>
                <DownloadModal>
                    <div
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-highlight-color/50
                                   transition-colors duration-500 group-hover:bg-white/15 cursor-pointer"
                    >
                        <IoLogoGooglePlaystore className="text-secondary-color text-lg transition-colors duration-500 group-hover:text-white" />
                        <span className="text-sm font-semibold text-base-color transition-colors duration-500 group-hover:text-white">
                            Play Store
                        </span>
                    </div>
                </DownloadModal>
            </div>
        </div>
    </SCard>
);
