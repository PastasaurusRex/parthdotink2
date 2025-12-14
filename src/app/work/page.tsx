"use client"

import { motion } from "motion/react"
import { workHistory } from "@/lib/data"
import Link from "next/link"
import { ArrowUpRight, Download } from "lucide-react"

export default function Work() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12 space-y-6"
            >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Work History</h1>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="hidden sm:inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#173448] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#173448]/90"
                    >
                        <Download size={18} />
                        Download Resume
                    </a>
                </div>

                <p className="max-w-2xl text-lg text-muted-foreground">
                    A timeline of my professional experience and projects.
                </p>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    className="sm:hidden inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#173448] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#173448]/90"
                >
                    <Download size={18} />
                    Download Resume
                </a>
            </motion.div>

            <div className="space-y-8">
                {workHistory.map((work, index) => (
                    <motion.div
                        key={work.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link
                            href={`/work/${work.slug}`}
                            className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                                        {work.company}
                                        <ArrowUpRight size={20} className="opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                                    </h3>
                                    <div className="flex flex-wrap gap-2 text-sm font-medium text-muted-foreground">
                                        <span>{work.position}</span>
                                        <span>•</span>
                                        <span>{work.city}</span>
                                    </div>
                                    <p className="text-muted-foreground">{work.description}</p>
                                    <div className="pt-2 flex flex-wrap gap-2">
                                        {work.tags.map((tag) => (
                                            <span key={tag} className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground bg-secondary">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="shrink-0 text-sm font-medium text-muted-foreground whitespace-nowrap">
                                    {work.startDate} - {work.endDate}
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>


        </div>
    )
}
