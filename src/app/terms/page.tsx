import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Terms of Service | parth.ink',
    description: 'Terms of Service for parth.ink',
}

export default function Terms() {
    return (
        <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-8">
            <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Terms & Conditions</h1>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                    If you require any more information or have any questions about this site&apos;s disclaimer, please feel free to contact me by email.
                </p>

                <p>
                    All the information on this website is published in good faith and for general information purpose only. I do not make any warranties about the completeness, reliability and accuracy of this information.
                </p>

                <p>
                    Any action you take upon the information you find on this website, is strictly at your own risk. I will not be liable for any losses and/or damages in connection with the use of this website. From this website, you can visit other websites by following hyperlinks to such external sites. While I strive to provide only quality links to useful and ethical websites, I have no control over the content and nature of these sites.
                </p>

                <p>
                    These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before I have the opportunity to remove a link which may have gone &apos;bad&apos;. Please be also aware that when you leave this website, other sites may have different privacy policies and terms which are beyond my control. Please be sure to check the Privacy Policies of these sites as well as their &quot;Terms of Service&quot; before engaging in any business or uploading any information.
                </p>

                <p>
                    By using our website, you hereby consent to our disclaimer and agree to its terms, which includes having read the <Link href="/privacy" className="text-foreground underline decoration-muted-foreground/30 hover:decoration-foreground transition-colors">privacy policy</Link>.
                </p>
            </div>
        </div>
    )
}
