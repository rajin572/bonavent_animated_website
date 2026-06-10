import { cn } from "@/lib/utils";
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

export const StatBigCard = () => (
    <SCard>
        <div className={cn(inner, "min-h-60 p-7 flex flex-col justify-between")}>
            <div className="space-y-3">
                <p className="text-6xl font-black text-base-color leading-none transition-colors duration-500 group-hover:text-white">
                    ↑ 500+
                </p>
                <p className="text-xl font-semibold leading-snug text-base-color/80 transition-colors duration-500 group-hover:text-white/90">
                    Cars Available<br />— Across 50+ Cities
                </p>
                <p className="text-sm text-lighter-color transition-colors duration-500 group-hover:text-white/70">
                    Find and book verified cars near you — instantly, any time.
                </p>
            </div>
        </div>
    </SCard>
);
