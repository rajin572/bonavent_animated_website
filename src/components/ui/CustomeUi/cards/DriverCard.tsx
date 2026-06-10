import { cn } from "@/lib/utils";
import { FaUserTie } from "react-icons/fa6";
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

export const DriverCard = () => (
    <SCard>
        <div className={cn(inner, "p-7 flex flex-col gap-5")}>
            <div className="flex items-center gap-3">
                <div
                    className="w-10 h-10 rounded-xl bg-highlight-color flex items-center justify-center
                               transition-colors duration-500 group-hover:bg-white/20"
                >
                    <FaUserTie className="text-secondary-color transition-colors duration-500 group-hover:text-white" />
                </div>
                <span
                    className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-lighter-color
                               transition-colors duration-500 group-hover:text-white/60"
                >
                    Pro.Driver
                </span>
            </div>
            <h3 className="text-2xl font-bold leading-snug text-base-color transition-colors duration-500 group-hover:text-white">
                Book a Driver —<br />Ride in Comfort
            </h3>
        </div>
    </SCard>
);
