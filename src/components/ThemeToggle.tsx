"use client"

import * as React from "react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    const buttonRef = React.useRef<HTMLButtonElement>(null)

    // Prevent hydration mismatch
    React.useEffect(() => setMounted(true), [])

    const toggleTheme = async () => {
        const newTheme = resolvedTheme === "dark" ? "light" : "dark"

        // Check if View Transitions API is supported
        if (!document.startViewTransition) {
            setTheme(newTheme)
            return
        }

        // Get button position for animation origin
        const button = buttonRef.current
        const rect = button?.getBoundingClientRect()
        const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2
        const y = rect ? rect.top + rect.height / 2 : 0

        // Calculate the max radius for full-page coverage
        const maxRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        )

        // Set CSS custom properties for animation
        document.documentElement.style.setProperty("--toggle-x", `${x}px`)
        document.documentElement.style.setProperty("--toggle-y", `${y}px`)
        document.documentElement.style.setProperty("--toggle-radius", `${maxRadius}px`)

        // Start the view transition
        const transition = document.startViewTransition(() => {
            setTheme(newTheme)
        })

        await transition.ready
    }

    if (!mounted) return null

    const isDark = resolvedTheme === "dark"

    return (
        <button
            ref={buttonRef}
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full transition-all focus:outline-none shrink-0 border-[1.5px] border-border box-border"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {/* Background */}
            <div className="absolute inset-0 rounded-full bg-amber-500 dark:bg-sky-800 transition-colors duration-300" />

            {/* Icons */}
            <Sun className="absolute left-1.5 top-1/2 -translate-y-1/2 text-black dark:text-white h-3.5 w-3.5 transition-colors z-10" />
            <Moon className="absolute right-1.5 top-1/2 -translate-y-1/2 text-black dark:text-white h-3.5 w-3.5 transition-colors z-10" />

            {/* Sliding Knob */}
            <div
                className={cn(
                    "absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full shadow-sm z-20 transition-all duration-300 ease-out bg-border",
                    isDark
                        ? "right-1 left-auto"
                        : "left-1"
                )}
            />
        </button>
    )
}
