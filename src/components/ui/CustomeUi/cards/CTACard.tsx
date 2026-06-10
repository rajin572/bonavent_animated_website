import { cn } from "@/lib/utils";
import { FaCar } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
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

export const CTACard = () => (
    <SCard>
        <div className={cn(inner, "min-h-56 p-7 flex flex-col justify-between")}>

            <div className="flex items-start justify-between">
                <div
                    className="w-12 h-12 rounded-2xl bg-highlight-color flex items-center justify-center
                               transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110"
                >
                    <FaCar className="text-xl text-secondary-color transition-colors duration-500 group-hover:text-white" />
                </div>
                <div
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center
                               transition-colors duration-500 group-hover:border-white/30"
                >
                    <BsArrowUpRight className="text-base-color transition-colors duration-500 group-hover:text-white" />
                </div>
            </div>


            <p className="text-2xl font-bold leading-snug text-base-color transition-colors duration-500 group-hover:text-white">
                — Book Your{" "}
                <span
                    className="bg-highlight-color px-1.5 rounded transition-colors duration-500
                               group-hover:bg-white/20"
                >
                    Next Ride
                </span>{" "}
                Today!
            </p>
        </div>
    </SCard>
);
