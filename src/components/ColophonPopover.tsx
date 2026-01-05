"use client"

import * as React from "react"
import Link from "next/link"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function ColophonPopover() {
    const [open, setOpen] = React.useState(false)
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

    // Hover handlers for desktop
    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setOpen(true)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setOpen(false), 200)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    className="hover:text-foreground transition-colors cursor-pointer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Colophon
                </button>
            </PopoverTrigger>
            <PopoverContent
                side="top"
                align="start"
                className="w-[340px] text-sm p-5 border-border/40 bg-background/95 backdrop-blur-md shadow-2xl"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {/* Typography - Full paragraph */}
                    <p>
                        This personal portfolio is typeset in{" "}
                        <Link href="https://displaay.net/typeface/matter/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-blue-300 font-medium underline decoration-sky-600/30 dark:decoration-blue-300/30 hover:decoration-sky-600 dark:hover:decoration-blue-300 transition-colors">
                            Matter
                        </Link>{" "}
                        and{" "}
                        <Link href="https://displaay.net/typeface/serrif/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-blue-300 font-medium underline decoration-sky-600/30 dark:decoration-blue-300/30 hover:decoration-sky-600 dark:hover:decoration-blue-300 transition-colors">
                            Serrif
                        </Link>{" "}
                        by{" "}
                        <Link href="https://displaay.net/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-blue-300 font-medium underline decoration-sky-600/30 dark:decoration-blue-300/30 hover:decoration-sky-600 dark:hover:decoration-blue-300 transition-colors">
                            Displaay Type Foundry
                        </Link>.
                    </p>

                    {/* Technology Stack - Full paragraph */}
                    <p>
                        This website is built using{" "}
                        <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-blue-300 font-medium underline decoration-sky-600/30 dark:decoration-blue-300/30 hover:decoration-sky-600 dark:hover:decoration-blue-300 transition-colors">
                            Next.js
                        </Link>,{" "}
                        <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-blue-300 font-medium underline decoration-sky-600/30 dark:decoration-blue-300/30 hover:decoration-sky-600 dark:hover:decoration-blue-300 transition-colors">
                            React
                        </Link>,{" "}
                        <Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-blue-300 font-medium underline decoration-sky-600/30 dark:decoration-blue-300/30 hover:decoration-sky-600 dark:hover:decoration-blue-300 transition-colors">
                            TypeScript
                        </Link>,{" "}
                        <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-blue-300 font-medium underline decoration-sky-600/30 dark:decoration-blue-300/30 hover:decoration-sky-600 dark:hover:decoration-blue-300 transition-colors">
                            Tailwind CSS
                        </Link>,{" "}
                        <Link href="https://motion.dev/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-blue-300 font-medium underline decoration-sky-600/30 dark:decoration-blue-300/30 hover:decoration-sky-600 dark:hover:decoration-blue-300 transition-colors">
                            Framer Motion
                        </Link>, and{" "}
                        <Link href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-blue-300 font-medium underline decoration-sky-600/30 dark:decoration-blue-300/30 hover:decoration-sky-600 dark:hover:decoration-blue-300 transition-colors">
                            shadcn/ui
                        </Link>; deployed using{" "}
                        <Link href="https://github.com/PastasaurusRex/parthdotink2" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-blue-300 font-medium underline decoration-sky-600/30 dark:decoration-blue-300/30 hover:decoration-sky-600 dark:hover:decoration-blue-300 transition-colors">
                            GitHub
                        </Link>; and hosted on{" "}
                        <Link href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-blue-300 font-medium underline decoration-sky-600/30 dark:decoration-blue-300/30 hover:decoration-sky-600 dark:hover:decoration-blue-300 transition-colors">
                            Netlify
                        </Link>.
                    </p>
                </div>
            </PopoverContent>
        </Popover>
    )
}
