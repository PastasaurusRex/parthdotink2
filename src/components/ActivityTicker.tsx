"use client"

import * as React from "react"
import { Gamepad2, Tv, BookOpen, Headphones, Sparkle } from "lucide-react"

const activities = [
    { type: "Playing", icon: Gamepad2, label: "God of War" },
    { type: "Watching", icon: Tv, label: "The Sopranos" },
    { type: "Reading", icon: BookOpen, label: "The Left Hand of Darkness" },
    { type: "Listening", icon: Headphones, label: "Snarky Puppy - Somni" },
]

export function ActivityTicker() {
    return (
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] h-9 overflow-hidden rounded-full bg-transparent border border-muted-foreground/40 flex items-center">
            <div className="flex whitespace-nowrap animate-ticker-scroll">
                {/* First Copy */}
                <TickerItems />
                {/* Duplicate for Seamless Loop */}
                <TickerItems aria-hidden="true" />
            </div>
        </div>
    )
}

function TickerItems({ "aria-hidden": ariaHidden }: { "aria-hidden"?: "true" | "false" }) {
    return (
        <div className="flex items-center shrink-0 px-4 gap-6" aria-hidden={ariaHidden}>
            {activities.map((activity, index) => (
                <React.Fragment key={`${activity.type}-${index}`}>
                    <div className="flex items-center gap-2">
                        <activity.icon size={16} className="text-emerald-700 shrink-0" />
                        <span className="text-sm font-medium whitespace-nowrap text-[#71717a] dark:text-[#a1a1aa]">
                            <span className="text-[#09090b]/80 dark:text-[#fffbeb]/80">{activity.type}:</span> {activity.label}
                        </span>
                    </div>
                    {/* Separator - smaller sparkle with fill */}
                    <Sparkle size={10} className="text-emerald-700 fill-emerald-700 shrink-0" />
                </React.Fragment>
            ))}
        </div>
    )
}
