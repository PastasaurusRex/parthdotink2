"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight, ArrowUpRight as ArrowArrowUpRight } from "lucide-react"
import { workHistory } from "@/lib/data"
import { useState, useEffect } from "react"

const roles = [
  "storyteller",
  "media consumer",
  "brand strategist",
  "analyst",
  "production lead",
  "project manager",
  "creative director",
  "jack of many trades",
]

export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 1250)
    return () => clearInterval(timer)
  }, [])

  const article = roles[index].match(/^[aeiou]/i) ? "an" : "a"

  return (
    <div className="flex-1 flex flex-col justify-center px-4 sm:px-8">
      <div className="container mx-auto max-w-4xl space-y-6 md:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2 md:space-y-4"
        >
          <div className="flex items-center sm:block sm:relative">
            <img
              src="/salute.png"
              alt="Salute"
              className="w-10 h-10 mr-3 sm:mr-0 sm:absolute sm:left-0 sm:-translate-x-full sm:-ml-4 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 sm:top-1/2 sm:-translate-y-1/2 object-contain"
            />
            <h1 className="text-4xl font-bold text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              Hello, there!
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2 text-xl text-muted-foreground sm:text-2xl md:text-3xl min-h-[2rem]"
          >
            <span className="relative">
              I&apos;m{" "}
              <span className="relative ml-1">
                Parth
                <img src="/squiggle.svg" alt="" className="absolute -bottom-2 left-0 w-full h-[0.3em]" />
              </span>
              , {article}
            </span>
            <div className="relative inline-block min-w-[10px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="font-medium text-muted-foreground italic inline-block"
                >
                  {roles[index]}.
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {/* Teaser Cards */}
            {[workHistory[0], workHistory[1], workHistory[4]].map((work) => (
              <Link
                key={work.slug}
                href={`/work/${work.slug}`}
                className="group block rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    {work.company}
                    <ArrowArrowUpRight size={16} className="opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{work.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/work"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/65 hover:text-[#16161d] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View all work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#123524] bg-background px-8 text-sm font-medium text-[#123524] transition-colors hover:bg-[#D6E6DE] hover:text-[#123524] hover:border-[#D6E6DE] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Contact me
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
