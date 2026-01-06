import * as React from "react";
import { Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
    thumbnail: string;
    url: string;
    title: string;
    caption: string;
    interactions: string;
    shares: string;
    link: string;
    className?: string;
}

export function ArticleCard({
    thumbnail,
    url,
    title,
    caption,
    interactions,
    shares,
    link,
    className,
}: ArticleCardProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "bg-background border-[1.5px] border-border rounded-[var(--radius)] overflow-hidden",
                "flex flex-col max-w-[480px] w-full",
                "transition-all duration-300 ease-out cursor-pointer",
                "text-foreground font-sans",
                "hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]",
                "dark:bg-[#1a1a1a]",
                className
            )}
        >
            {/* Thumbnail */}
            <div className="w-full h-auto overflow-hidden">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-auto block object-cover"
                />
            </div>

            {/* Content Area */}
            <div className="flex flex-col">
                {/* URL */}
                <span className="px-5 pt-4 text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    {url}
                </span>

                {/* Title */}
                <h3 className="px-5 pt-2 text-xl font-bold leading-tight text-foreground">
                    {title}
                </h3>

                {/* Caption */}
                <p className="px-5 pt-2 pb-5 text-sm leading-relaxed text-muted-foreground italic">
                    {caption}
                </p>

                {/* Divider */}
                <div className="border-t border-border/40 mx-5" />

                {/* Metadata Row */}
                <div className="flex items-center justify-center gap-3 px-5 py-4">
                    <span className="text-sm font-medium text-muted-foreground">
                        {interactions} interactions
                    </span>
                    <Sparkle
                        size={12}
                        className="text-muted-foreground shrink-0 opacity-40 fill-current"
                    />
                    <span className="text-sm font-medium text-muted-foreground">
                        {shares} shares
                    </span>
                </div>
            </div>
        </a>
    );
}
