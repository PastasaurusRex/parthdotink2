"use client";

import * as React from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";

export function BackToTop() {
    const [isVisible, setIsVisible] = React.useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Do not show on homepage
    if (pathname === "/") return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-border bg-background text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background cursor-pointer shadow-lg shadow-black/10 focus:outline-none"
                    aria-label="Back to top"
                >
                    <ArrowUp size={16} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
