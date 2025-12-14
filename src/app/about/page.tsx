"use client"

import { motion } from "motion/react"

export default function About() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
            >
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">About Me</h1>
                    <div className="prose prose-lg text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground">
                        <p>
                            Hi, I&apos;m Evernaut. I&apos;m a digital designer and developer based in the internet&apos;s ether.
                            I have a passion for creating clean, functional, and minimal interfaces that prioritize content and usability.
                        </p>
                        <p>
                            My journey began with a curiosity for how things work on the web. Over the years, I&apos;ve honed my skills
                            in both design and engineering, allowing me to bridge the gap between aesthetics and functionality.
                        </p>
                        <p>
                            I believe in the power of simplicity. Good design shouldn&apos;t be noticed; it should just work.
                            Whether I&apos;m writing code or moving pixels, my goal is always the same: to create something that feels right.
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/40">
                    <p className="text-muted-foreground italic flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4a90e2] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4a90e2]"></span>
                        </span>
                        Construction in progress...
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
