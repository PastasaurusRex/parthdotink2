"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

type EmblaCarouselType = NonNullable<ReturnType<typeof useEmblaCarousel>[1]>;
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ArticleCard } from "./ArticleCard";

interface Article {
    thumbnail: string;
    url: string;
    title: string;
    caption: string;
    interactions: string;
    shares: string;
    link: string;
}

interface ArticleCarouselProps {
    articles: Article[];
    className?: string;
}

export function ArticleCarousel({ articles, className }: ArticleCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const scrollPrev = React.useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    );
    const scrollNext = React.useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    );
    const scrollTo = React.useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    const onInit = React.useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    React.useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on("reInit", onInit);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    return (
        <div className={cn("relative w-full max-w-[640px] mx-auto", className)}>
            <div className="flex items-center gap-4">
                {/* Previous Button */}
                <button
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-border transition-colors hover:border-foreground hover:bg-foreground hover:text-background text-foreground"
                    onClick={scrollPrev}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={16} />
                </button>

                {/* Carousel Viewport */}
                <div className="overflow-hidden flex-1" ref={emblaRef}>
                    <div className="flex">
                        {articles.map((article, index) => (
                            <div className="flex-[0_0_100%] min-w-0 px-2 pb-1" key={index}>
                                <ArticleCard
                                    {...article}
                                    className="hover:translate-y-0 hover:shadow-none mx-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <button
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-border transition-colors hover:border-foreground hover:bg-foreground hover:text-background text-foreground"
                    onClick={scrollNext}
                    aria-label="Next slide"
                >
                    <ChevronRight size={16} />
                </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 pt-8">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            index === selectedIndex
                                ? "bg-foreground w-4"
                                : "bg-border hover:bg-muted-foreground/40"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
