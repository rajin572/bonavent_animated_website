import { cn } from "@/lib/utils";
import { FaCoins } from "react-icons/fa6";
import { BsArrowLeft } from "react-icons/bs";
import BorderCard from "../BorderCard";

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

export const HostCard = () => (
    <SCard>
        <div className={cn(inner, "min-h-64 p-7 flex flex-col justify-between")}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FaCoins className="text-secondary-color transition-colors duration-500 group-hover:text-white" />
                    <span
                        className="text-[10px] font-bold tracking-widest uppercase text-lighter-color
                                   transition-colors duration-500 group-hover:text-white/60"
                    >
                        Host &amp; Earn
                    </span>
                </div>
                <BsArrowLeft className="text-base-color transition-colors duration-500 group-hover:text-white/60" />
            </div>

            <div
                className="my-3 rounded-xl bg-highlight-color/60 p-4 transition-colors duration-500
                           group-hover:bg-white/15"
            >
                <p className="text-xs text-lighter-color transition-colors duration-500 group-hover:text-white/60">
                    Monthly avg. earnings
                </p>
                <p className="text-4xl font-black text-base-color transition-colors duration-500 group-hover:text-white">
                    $400+
                </p>
            </div>

            <p className="text-sm font-bold text-lighter-color transition-colors duration-500 group-hover:text-white/70">
                #HostWithBonavent
            </p>
        </div>
    </SCard>
);
