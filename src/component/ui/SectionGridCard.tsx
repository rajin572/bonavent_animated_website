"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RiBox2Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { useGSAP, gsap, SplitText } from "@/lib/gsap-util";
import { useCardVariant } from "./CardVariantContext";

interface IFeaturedItem {
  icon?: React.ReactNode;
  title: string;
  description?: string;
}

export interface ICardData {
  id: number;
  isFeatured: boolean;
  isReverse: boolean;
  subtitle?: string;
  title: string;
  description: string;
  featuredWithDescription?: IFeaturedItem[];
  featuredText?: IFeaturedItem[];
  subDescription?: string;
  buttonText?: string;
  url?: string;
  image: string | StaticImageData;
}

const SectionGridCard = ({ id, cardData }: { id: number; cardData: ICardData }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const variant = useCardVariant();
  const isDark = variant === "dark";

  const c = {
    watermark: isDark ? "text-white/[0.04]" : "text-secondary-color/[0.04]",
    subtitle: isDark ? "text-white/50" : "text-secondary-color",
    title: isDark ? "text-white" : "text-secondary-color",
    desc: isDark ? "text-white/60" : "text-base-color",
    featTitle: isDark ? "text-white" : "text-base-color",
    featDesc: isDark ? "text-white/50" : "text-[#606060]",
    iconBox: isDark ? "bg-white/15" : "bg-secondary-color",
    listItem: isDark ? "text-white/80" : "text-base-color",
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
          toggleActions: "restart none none reverse",
        },
      });

      /* ── Watermark number ── */
      tl.from(".sgc-watermark", {
        scale: 1.5,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }, 0);

      /* ── Image reveal from its side ── */
      tl.from(".sgc-image", {
        x: cardData.isReverse ? -100 : 100,
        opacity: 0,
        scale: 0.88,
        duration: 1,
        ease: "power3.out",
      }, 0);

      /* ── Subtitle ── */
      if (cardData.subtitle) {
        tl.from(".sgc-subtitle", {
          y: 14,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        }, 0.15);
      }

      /* ── Title — SplitText depth chars ── */
      const split = SplitText.create(".sgc-title", {
        type: "chars words",
        mask: "words",
        autoSplit: true,
        smartWrap: true,
      });

      tl.from(split.chars, {
        yPercent: 115,
        rotateX: -50,
        opacity: 0,
        transformOrigin: "0% 50% -25px",
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.02,
      }, 0.12);

      /* ── Description ── */
      tl.from(".sgc-desc", {
        y: 22,
        opacity: 0,
        duration: 0.55,
        ease: "power2.out",
      }, 0.45);

      /* ── Feature items + icon boxes (only rendered with featuredWithDescription) ── */
      if (cardData.isFeatured && cardData.featuredWithDescription) {
        tl.from(".sgc-feature", {
          y: 32,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
        }, 0.55);

        tl.from(".sgc-icon-box", {
          scale: 0,
          rotation: -25,
          opacity: 0,
          duration: 0.45,
          ease: "back.out(2.2)",
          stagger: 0.1,
        }, 0.6);
      }

      /* ── featuredText list items (only rendered without featuredWithDescription) ── */
      if (cardData.isFeatured && !cardData.featuredWithDescription && cardData.featuredText) {
        tl.from(".sgc-feat-text-item", {
          x: -20,
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",
          stagger: 0.08,
        }, 0.55);
      }

      /* ── Button ── */
      if (cardData.buttonText) {
        tl.from(".sgc-btn", {
          y: 16,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        }, 0.75);
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-6 md:py-10">

      {/* Watermark number */}
      <span
        aria-hidden
        className={`sgc-watermark absolute -top-4 right-0 lg:-right-4 text-[10rem] md:text-[14rem] font-black ${c.watermark} leading-none select-none pointer-events-none`}
      >
        {String(id).padStart(2, "0")}
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">

        {/* ── Text side ── */}
        <div className={cardData.isReverse ? "order-2 lg:order-2" : "order-2 lg:order-1"}>

          {cardData.subtitle && (
            <p className={`sgc-subtitle ${c.subtitle} font-semibold text-xs md:text-sm uppercase tracking-widest mb-3`}>
              {cardData.subtitle}
            </p>
          )}

          <h2 className={`sgc-title text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] ${c.title} font-bold leading-[1.05] tracking-tight mb-3 md:mb-5`}>
            {cardData.title}
          </h2>

          <p className={`sgc-desc text-sm sm:text-base lg:text-lg ${c.desc} leading-relaxed mb-4 md:mb-6`}>
            {cardData.description}
          </p>

          {cardData.isFeatured ? (
            cardData.featuredWithDescription ? (
              <div className="space-y-3 md:space-y-5 mt-2">
                {cardData.featuredWithDescription.map((feature, index) => (
                  <div key={index} className="sgc-feature flex items-start gap-4">
                    <div className={`sgc-icon-box ${c.iconBox} p-2.5 rounded-xl mt-0.5 shrink-0`}>
                      {feature.icon ?? (
                        <IoCheckmarkCircleOutline className="text-white size-5" />
                      )}
                    </div>
                    <div>
                      <p className={`font-semibold ${c.featTitle} text-sm sm:text-base mb-1`}>
                        {feature.title}
                      </p>
                      {feature.description && (
                        <p className={`${c.featDesc} text-xs sm:text-sm leading-relaxed`}>
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="mt-5 space-y-2">
                {cardData.featuredText?.map((feature, index) => (
                  <li
                    key={index}
                    className={`sgc-feat-text-item text-sm sm:text-base lg:text-lg flex items-center gap-2 ${c.listItem}`}
                  >
                    {feature.icon ?? <RiBox2Line />}
                    {feature.title}
                  </li>
                ))}
              </ul>
            )
          ) : null}

          {cardData.subDescription && (
            <p className={`sgc-desc text-sm sm:text-base lg:text-lg ${c.desc} leading-relaxed mt-6`}>
              {cardData.subDescription}
            </p>
          )}

          {cardData.buttonText && (
            <Button className="sgc-btn mt-8 w-fit">
              {cardData.buttonText}
            </Button>
          )}
        </div>

        {/* ── Image side ── */}
        <div className={cardData.isReverse ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
          <div className="sgc-image rounded-2xl overflow-hidden">
            <Image
              src={cardData.image}
              alt={cardData.title}
              width={600}
              height={600}
              className="w-auto h-auto max-h-72 md:max-h-87.5 lg:max-h-105 mx-auto object-cover"
              fetchPriority="high"
              preload
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SectionGridCard;
