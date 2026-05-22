"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "./animations";

export default function TransitionLink({
    href,
    label,
    className,
    children,
}: {
    href: string;
    label?: string;
    className?: string;
    children?: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        // Clicking a link to the page we're already on would slide the cover in,
        // but router.push() to the same path doesn't change `pathname`, so the
        // page-in half never fires and the cover gets stuck mid-screen. Skip it.
        if (href === pathname) return;
        animatePageOut(href, router);
    };

    return (
        <button
            className={className ?? "border border-black p-4 rounded-xl hover:bg-black hover:text-neutral-100 cursor-pointer"}
            onClick={handleClick}
        >
            {children ?? label}
        </button>
    );
}