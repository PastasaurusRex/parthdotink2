import Link from "next/link"
import { Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t border-border/40 bg-background py-8">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-8">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Evernaut. All rights reserved.
                </p>

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
