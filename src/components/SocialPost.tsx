import * as React from "react";
import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialPostProps {
    avatar: string;
    handle: string;
    isVerified?: boolean;
    socialIcon: React.ReactNode;
    caption: string;
    image: string;
    metadata: string;
    className?: string;
}

export function SocialPost({
    avatar,
    handle,
    isVerified,
    socialIcon,
    caption,
    image,
    metadata,
    className,
}: SocialPostProps) {
    const metadataParts = metadata.split(" • ");

    const renderCaption = (text: string) => {
        return text.split(/\s+/).map((word, i) => {
            if (word.startsWith("#")) {
                return (
                    <span key={i} className="text-sky-600 font-medium">
                        {word}{" "}
                    </span>
                );
            }
            return word + " ";
        });
    };

    return (
        <div
            className={cn(
                "bg-background border-[1.5px] border-border rounded-[var(--radius)] p-5",
                "flex flex-col gap-4 max-w-[480px] w-full",
                "transition-all duration-300 ease-out cursor-pointer",
                "text-foreground font-sans",
                "hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]",
                "dark:bg-[#1a1a1a]",
                className
            )}
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={avatar}
                        alt={handle}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex items-center gap-1">
                        <span className="font-semibold text-base">{handle}</span>
                        {isVerified && (
                            <BadgeCheck
                                size={15}
                                className="shrink-0 [&_path:first-child]:fill-sky-600 [&_path:first-child]:stroke-sky-600 [&_path:last-child]:stroke-white"
                                strokeWidth={2.5}
                            />
                        )}
                    </div>
                </div>
                <div className="text-muted-foreground flex items-center">
                    {socialIcon}
                </div>
            </div>

            {/* Caption */}
            <p className="text-base leading-relaxed m-0">
                {renderCaption(caption)}
            </p>

            {/* Image */}
            <div className="w-full rounded-[var(--radius)] overflow-hidden">
                <img
                    src={image}
                    alt="Post content"
                    className="w-full h-auto block object-cover"
                />
            </div>

            {/* Footer */}
            <div className="flex items-center">
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                    {metadataParts.map((part, i) => (
                        <React.Fragment key={i}>
                            <span>{part}</span>
                            {i < metadataParts.length - 1 && (
                                <span className="opacity-60">•</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
