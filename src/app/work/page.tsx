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
                    <motion.a
                        whileTap={{ scale: 0.95 }}
                        href="/parth%20shahanand_resume.pdf"
                        download="parth_shahanand_resume.pdf"
                        target="_blank"
                        className="hidden sm:inline-flex shrink-0 items-center justify-center gap-2 rounded-full border-[1.5px] border-border bg-sky-950 px-6 py-3 text-sm font-medium text-amber-50 transition-all hover:bg-sky-600 hover:text-white hover:shadow-[4px_4px_0_0_var(--foreground)] hover:-translate-x-[2px] hover:-translate-y-[2px]"
                    >
                        <Download size={18} />
                        Download resume
                    </motion.a>
                </div>

                <p className="max-w-2xl text-lg text-muted-foreground">
                    A timeline of my professional experience and projects.
                </p>

                <motion.a
                    whileTap={{ scale: 0.95 }}
                    href="/parth%20shahanand_resume.pdf"
                    download="parth_shahanand_resume.pdf"
                    target="_blank"
                    className="sm:hidden inline-flex shrink-0 items-center justify-center gap-2 rounded-full border-[1.5px] border-border bg-sky-950 px-6 py-3 text-sm font-medium text-amber-50 transition-all hover:bg-sky-600 hover:text-white hover:shadow-[4px_4px_0_0_var(--foreground)] hover:-translate-x-[2px] hover:-translate-y-[2px]"
                >
                    <Download size={18} />
                    Download resume
                </motion.a>
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
                            className="group block rounded-lg border-[1.5px] border-border bg-card p-6 transition-all hover:bg-primary hover:border-foreground hover:shadow-[6px_6px_0_0_var(--foreground)] hover:-translate-x-[3px] hover:-translate-y-[3px]"
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-foreground group-hover:text-foreground transition-colors flex items-center gap-2">
                                        {work.company}
                                        <ArrowUpRight size={20} className="opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:text-foreground" />
                                    </h3>
                                    <div className="flex flex-wrap gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground/80 transition-colors">
                                        <span>{work.position}</span>
                                        <span>•</span>
                                        <span>{work.city}</span>
                                    </div>
                                    <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors">{work.description}</p>
                                    <div className="pt-2 flex flex-wrap gap-2">
                                        {work.tags.map((tag) => (
                                            <span key={tag} className="rounded-full bg-emerald-500/25 px-2.5 py-0.5 text-xs font-medium text-emerald-950 group-hover:bg-rose-900 group-hover:text-rose-300 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="shrink-0 text-sm font-medium text-muted-foreground group-hover:text-foreground/80 transition-colors whitespace-nowrap">
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
