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

    // Automatically close mobile menu on route change
    React.useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <nav className="fixed top-6 left-4 right-4 z-50 flex items-center justify-between p-1.5 rounded-full border border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-lg shadow-black/5 max-w-7xl mx-auto">
            <Link href="/" className="pl-4 pr-2 text-xl font-serif font-medium tracking-tight text-secondary transition-opacity hover:opacity-80">
                <span className="text-emerald-700 font-sans">parth</span>
                <span className="text-amber-500 font-sans">.</span>
                <span className="text-emerald-700 font-serif font-medium">INK</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href ||
                        (item.href !== "/" && pathname.startsWith(item.href))
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "relative px-4 py-2 text-base font-medium transition-colors",
                                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-secondary/10 rounded-full"
                                    transition={{ duration: 0.2 }}
                                />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </Link>
                    )
                })}
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
                whileTap={{ scale: 0.95 }}
                className="md:hidden p-2 text-foreground rounded-full hover:bg-muted transition-colors mr-1"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>

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
                            initial={{ opacity: 0, scale: 0.9, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -10 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="md:hidden fixed top-[74px] right-4 z-50 w-48 bg-background border border-border/40 rounded-2xl shadow-2xl shadow-black/20 overflow-hidden"
                        >
                            <div className="flex flex-col p-2">
                                <div className="flex flex-col gap-1">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "relative px-6 py-4 text-lg font-medium transition-colors rounded-2xl",
                                                pathname === item.href
                                                    ? "bg-secondary/10 text-foreground"
                                                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
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
        </nav>
    )
}
