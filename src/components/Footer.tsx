import Link from "next/link"
import { Instagram, Linkedin, Twitter, Radio, Sparkles, Gamepad2, BookOpen, Tv } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t border-border/40 bg-background py-8">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-8">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Evernaut. All rights reserved.
                </p>
                <div className="hidden md:flex flex-1 items-center justify-center px-8 overflow-hidden max-w-xl">
                    <div className="relative w-full overflow-hidden">
                        <div className="animate-marquee whitespace-nowrap flex items-center gap-4 text-xs font-medium text-muted-foreground/80">
                            <span className="flex items-center gap-2"><Radio size={14} /> Listening to: Purple Hat by Sofi Tucker</span>
                            <Sparkles size={10} />
                            <span className="flex items-center gap-2"><Gamepad2 size={14} /> Playing: Death Stranding Director&apos;s Cut</span>
                            <Sparkles size={10} />
                            <span className="flex items-center gap-2"><BookOpen size={14} /> Reading: The Secret of Secrets by Dan Brown</span>
                            <Sparkles size={10} />
                            <span className="flex items-center gap-2"><Tv size={14} /> Watching: The Sopranos</span>
                            <Sparkles size={10} />
                            {/* Duplicate for seamless loop */}
                            <span className="flex items-center gap-2"><Radio size={14} /> Listening to: Purple Hat by Sofi Tucker</span>
                            <Sparkles size={10} />
                            <span className="flex items-center gap-2"><Gamepad2 size={14} /> Playing: Death Stranding Director&apos;s Cut</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="https://instagram.com" target="_blank" className="text-muted-foreground transition-colors hover:text-[#E1306C]">
                        <Instagram size={20} />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="https://twitter.com" target="_blank" className="text-muted-foreground transition-colors hover:text-[#1DA1F2]">
                        <Twitter size={20} />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground transition-colors hover:text-[#0077B5]">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
