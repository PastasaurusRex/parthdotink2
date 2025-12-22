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
                    <div className="space-y-6 leading-relaxed text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground">
                        <p>
                            “Whatever you now find weird, ugly, uncomfortable and nasty about a new medium will surely become its signature. CD distortion, the jitteriness of digital video, the crap sound of 8-bit - all of these will be cherished and emulated as soon as they can be avoided. It’s the sound of failure: so much modern art is the sound of things going out of control, of a medium pushing to its limits and breaking apart.
                        </p>
                        <p>
                            The distorted guitar sound is the sound of something too loud for the medium supposed to carry it. The blues singer with the cracked voice is the sound of an emotional cry too powerful for the throat that releases it. The excitement of grainy film, of bleached-out black and white, is the excitement of witnessing events too momentous for the medium assigned to record them.”
                        </p>
                        <p>
                            ― Brian Eno, <em>A Year With Swollen Appendices</em>
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/40">
                    <p className="text-muted-foreground italic flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-600 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600"></span>
                        </span>
                        Construction in progress...
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
