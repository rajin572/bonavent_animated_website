"use client";
import { cn } from "@/lib/utils";

type BorderCardProps = {
    children: React.ReactNode;
    className?: string;
};

const BorderCard = ({ children, className }: BorderCardProps) => (
    <div
        className={cn(
            "group rounded-2xl p-[1.5px] animate-border",
            className
        )}
        style={{
            background: `conic-gradient(
                from var(--border-angle),
                rgba(96,120,234,0.1)  80%,
                #6078ea               86%,
                #a5b4fc               90%,
                #6078ea               94%,
                rgba(96,120,234,0.1)
            )`,
        }}
    >
        {children}
    </div>
);

export default BorderCard;
