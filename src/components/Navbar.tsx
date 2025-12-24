"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
                <Link href="/" className="text-xl font-serif font-medium tracking-tight text-secondary">
                    <span className="text-emerald-700 font-sans">parth</span>
                    <span className="text-amber-500 font-sans">.</span>
                    <span className="text-emerald-700 font-serif">INK</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.href ? "text-foreground" : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="md:hidden p-2 text-foreground rounded-full"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </div>

            {/* Mobile Nav - Flyout */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="md:hidden fixed inset-0 bg-transparent z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        {/* Flyout Panel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, originX: "right", originY: "top" }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.8 }}
                            style={{ transformOrigin: "top right" }}
                            className="md:hidden fixed top-3 right-4 z-50 w-48 bg-background border-[1.5px] border-border rounded-2xl shadow-2xl shadow-black/25 overflow-hidden"
                        >
                            <div className="flex flex-col p-4 pt-2">
                                <div className="flex items-center justify-end mb-1">
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 -mr-2 text-foreground rounded-full"
                                    >
                                        <X size={20} />
                                    </motion.button>
                                </div>
                                <div className="flex flex-col">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "text-lg font-medium transition-colors hover:text-primary py-1.5",
                                                pathname === item.href ? "text-foreground" : "text-muted-foreground"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav >
    )
}
