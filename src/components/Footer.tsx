import Link from "next/link"
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t border-border/40 bg-background py-8">
            <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-8">
                <div className="flex flex-col gap-2 items-center sm:items-start text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} parth.ink. All rights reserved.
                    </p>
                    <div className="flex gap-2">
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
                        <span>•</span>
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="mailto:p.shahanand@gmail.com" className="text-muted-foreground transition-colors hover:text-red-600">
                        <Mail size={20} />
                        <span className="sr-only">Email</span>
                    </Link>
                    <Link href="https://instagram.com/pastasaurusrex" target="_blank" className="text-muted-foreground transition-colors hover:text-pink-600">
                        <Instagram size={20} />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="https://twitter.com/pastasaurusrex" target="_blank" className="text-muted-foreground transition-colors hover:text-sky-500">
                        <Twitter size={20} />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="https://linkedin.com/in/parthshahanand" target="_blank" className="text-muted-foreground transition-colors hover:text-blue-700">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
