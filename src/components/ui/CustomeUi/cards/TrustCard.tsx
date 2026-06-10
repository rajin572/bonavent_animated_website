import { FaCar } from "react-icons/fa6";
import BorderCard from "../BorderCard";
import { cn } from "@/lib/utils";

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

export const TrustCard = () => (
    <SCard>
        <div
            className="h-full min-h-36 rounded-[14px] bg-secondary-color overflow-hidden
                       p-6 flex flex-col gap-3 transition-all duration-500
                       group-hover:brightness-110 group-hover:shadow-2xl group-hover:shadow-secondary-color/40"
        >
            <div className="flex items-center gap-2">
                <FaCar className="text-white/60 text-sm" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/60">
                    Bonavent ✓
                </span>
            </div>
            <p className="text-lg font-bold text-white leading-snug">
                &ldquo;Drive with comfort<br />— Every time.&rdquo;
            </p>
        </div>
    </SCard>
);
