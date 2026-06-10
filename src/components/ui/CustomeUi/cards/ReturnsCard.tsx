import { cn } from "@/lib/utils";
import { FaArrowRotateLeft } from "react-icons/fa6";
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

export const ReturnsCard = () => (
    <SCard>
        <div className={cn(inner, "p-7 flex flex-col gap-5")}>
            <div
                className="w-10 h-10 rounded-xl bg-highlight-color flex items-center justify-center
                           transition-colors duration-500 group-hover:bg-white/20"
            >
                <FaArrowRotateLeft className="text-secondary-color transition-colors duration-500 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold leading-snug text-base-color transition-colors duration-500 group-hover:text-white">
                Return with Ease —<br />Flexible Drop-off
            </h3>
            <p className="text-sm text-lighter-color transition-colors duration-500 group-hover:text-white/75">
                Drop off anywhere, anytime. No stress, no delays.
            </p>
        </div>
    </SCard>
);
