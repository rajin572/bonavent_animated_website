"use client";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useTransition } from "react";
import { gsap } from "gsap";
import BorderCard from "./BorderCard";

type Tab<T extends string> = {
  label: string;
  value: T;
  disabled?: boolean;
  content: React.ReactNode;
};

type ReusableTabsProps<T extends string> = {
  tabs: Tab<T>[];
  activeTab: T;
  align?: "left" | "center" | "right";
  resetPage?: boolean;
  tabContentStyle?: string;
  tabName?: string;
  variant?: "default" | "bordered";
};

const ReusableTabs = <T extends string>({
  tabs,
  activeTab,
  align = "center",
  resetPage = false,
  tabContentStyle = "",
  tabName = "tab",
  variant = "default",
}: ReusableTabsProps<T>) => {
  const tabRowRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();

  const updateIndicator = (target: HTMLElement) => {
    const tabBounds = target.getBoundingClientRect();
    const rowBounds = tabRowRef.current?.getBoundingClientRect();

    if (rowBounds && indicatorRef.current && tabRowRef.current) {
      const offset = tabBounds.left - rowBounds.left + tabRowRef.current.scrollLeft;
      const width = tabBounds.width;

      if (isFirstRender.current) {
        gsap.set(indicatorRef.current, {
          x: offset - 4,
          width,
        });
        isFirstRender.current = false;
      } else {
        gsap.to(indicatorRef.current, {
          x: offset - 4,
          width,
          duration: 1,
          ease: "power2.inOut",
        });
      }

    }
  };

  useEffect(() => {
    const activeTabElement = document.querySelector(
      `button[tab-value="${activeTab}"]`
    );
    if (activeTabElement) {
      updateIndicator(activeTabElement as HTMLElement);
    }

    const handleResize = () => {
      const activeTabElement = document.querySelector(
        `button[tab-value="${activeTab}"]`
      );
      if (activeTabElement) {
        updateIndicator(activeTabElement as HTMLElement);
      }
    };

    const handleScroll = () => {
      const activeTabElement = document.querySelector(
        `button[tab-value="${activeTab}"]`
      );
      if (activeTabElement) {
        updateIndicator(activeTabElement as HTMLElement);
      }
    };

    const tabRowElement = tabRowRef.current;

    window.addEventListener("resize", handleResize);
    tabRowElement?.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      tabRowElement?.removeEventListener("scroll", handleScroll);
    };
  }, [activeTab]);

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const { replace } = router;

  const justifyClass =
    align === "left"
      ? "justify-start"
      : align === "right"
        ? "justify-end"
        : "justify-center";

  const handleTabChange = (value: string) => {
    const text = value;
    const params = new URLSearchParams(searchParams);
    if (text) {
      params.set(tabName, text);
      if (resetPage) {
        params.delete("page");
        params.delete("search");
      }
    } else {
      params.delete(tabName);
    }

    startTransition(() => {
      replace(`${pathName}?${params.toString()}`, { scroll: false });
    });
    const activeTabElement = document.querySelector(
      `button[tab-value="${value}"]`
    );
    if (activeTabElement) {
      updateIndicator(activeTabElement as HTMLElement);
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <div className={`w-full flex ${justifyClass}`}>
        <BorderCard>
          <div
            ref={tabRowRef}
            className={`scrollbar-thin scrollbar-thumb-secondary-color scrollbar-track-gray-200 hover:scrollbar-thumb-secondary-color ${variant === "bordered" ? "p-1 rounded-xl flex gap-2 relative overflow-x-auto" : "bg-white/70 backdrop-blur-sm p-1 rounded-xl flex gap-2 relative overflow-x-auto"}`}
          >
            {tabs.map((tab) => (
              <button
                key={tab.value}
                tab-value={tab.value}
                disabled={tab.disabled || false}
                onClick={() => handleTabChange(tab.value)}
                className={`px-4 z-10 py-1.5 rounded-md bg-transparent font-medium text-sm sm:text-base transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer text-nowrap
                ${activeTab === tab.value ? (variant !== "bordered" ? "text-white" : "text-secondary-color") : (variant !== "bordered" ? "text-secondary-color" : "text-[#707070]")}
              `}
              >
                {tab.label}
              </button>
            ))}
            <div
              ref={indicatorRef}
              className={`${variant === "bordered" ? "indicator absolute bottom-1 top-1 border-b-2 border-secondary-color z-0" : "indicator absolute bottom-1 top-1 rounded-md bg-secondary-color z-0"}`}
            />
          </div>
        </BorderCard>
      </div>

      <div className={cn("mt-10", tabContentStyle)}>
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
};

export default ReusableTabs;