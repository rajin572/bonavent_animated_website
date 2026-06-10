import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
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

export const StatsCard = () => (
    <SCard>
        <div className={cn(inner, "p-6 flex flex-col gap-4")}>
            <div className="flex items-center gap-3">
                <FaStar className="text-secondary-color transition-colors duration-500 group-hover:text-white" />
                <span className="font-bold text-base-color transition-colors duration-500 group-hover:text-white">
                    500+ Cars
                </span>
                <BsArrowRight className="text-lighter-color ml-auto transition-colors duration-500 group-hover:text-white/60" />
            </div>
            <p className="text-sm text-lighter-color transition-colors duration-500 group-hover:text-white/75">
                Rental Made Easy For Everyone
            </p>
            <div className="h-2 rounded-full bg-secondary-color/15 transition-colors duration-500 group-hover:bg-white/20" />
        </div>
    </SCard>
);
