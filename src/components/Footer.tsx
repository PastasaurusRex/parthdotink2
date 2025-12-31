import Link from "next/link"
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react"
import { ActivityTicker } from "./ActivityTicker"

export function Footer() {
    return (
        <footer className="w-full border-t border-border/40 bg-background py-8">
            <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 sm:px-8 md:flex-row">
                <div className="flex flex-col gap-2 items-center md:items-start text-sm text-muted-foreground order-1">
                    <p>
                        © {new Date().getFullYear()} parth.ink. All rights reserved.
                    </p>
                    <div className="flex gap-2">
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
                        <span>•</span>
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                    </div>
                </div>

                <div className="flex order-2 md:order-2 w-full justify-center md:w-auto">
                    <ActivityTicker />
                </div>

                <div className="flex items-center gap-6 order-3">
                    <Link href="mailto:p.shahanand@gmail.com" className="p-2 -m-2 text-muted-foreground transition-colors hover:text-red-600">
                        <Mail size={20} />
                        <span className="sr-only">Email</span>
                    </Link>
                    <Link href="https://instagram.com/pastasaurusrex" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 text-muted-foreground transition-colors hover:text-pink-600">
                        <Instagram size={20} />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="https://twitter.com/pastasaurusrex" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 text-muted-foreground transition-colors hover:text-sky-500">
                        <Twitter size={20} />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="https://linkedin.com/in/parthshahanand" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 text-muted-foreground transition-colors hover:text-blue-700">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
