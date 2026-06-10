import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { AllImages } from "../../../../../public/assests/images/AllImages";

export const TestimonialCard = ({
    name,
    role,
    rating,
    text,
}: {
    name: string;
    role: string;
    rating: number;
    text: string;
}) => (
    <div className="shrink-0 w-72 sm:w-80 bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 mx-3 flex flex-col gap-4">
        <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden bg-highlight-color shrink-0">
                <Image
                    src={AllImages.profile}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 100vw"
                    fetchPriority="high"
                    preload
                />
            </div>
            <div>
                <p className="text-sm font-semibold text-base-color">{name}</p>
                <p className="text-xs text-lighter-color">{role}</p>
            </div>
        </div>
        <div className="flex gap-0.5">
            {Array.from({ length: rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xs" />
            ))}
        </div>
        <p className="text-sm text-base-color/70 leading-relaxed flex-1">
            &ldquo;{text}&rdquo;
        </p>
    </div>
);
