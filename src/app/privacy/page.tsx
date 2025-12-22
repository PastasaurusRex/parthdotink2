import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | parth.ink',
    description: 'Privacy Policy for parth.ink',
}

export default function Privacy() {
    return (
        <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-8">
            <h1 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Privacy Policy</h1>

            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                <section>
                    <p className="mb-4">
                        One of my main priority is the privacy of my visitors.
                    </p>
                    <p className="mb-4">
                        This Privacy Policy document contains types of information that is collected and recorded by me, and how I use it.
                    </p>
                    <p className="mb-4">
                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact me.
                    </p>
                    <p className="mb-4">
                        This Privacy Policy applies only to my online activities and is valid for visitors to this website only. This policy is not applicable to any information collected offline or via channels other than this website.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">Consent</h2>
                    <p>
                        By using this website, you hereby consent to this Privacy Policy and agree to its terms. If you contact me directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send, and any other information you may choose to provide.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">Cookies and Web Beacons</h2>
                    <p>
                        Like any other website, this website uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing web pages content based on visitors&apos; browser type and/or other information.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">Third Party Privacy Policies</h2>
                    <p className="mb-4">
                        This website&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, you should consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                    </p>
                    <p>
                        You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-foreground mb-4">GDPR Data Protection Rights</h2>
                    <p className="mb-6">
                        I would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                    </p>
                    <ul className="space-y-4 list-disc pl-5">
                        <li className="pl-2">
                            <span className="font-semibold text-foreground">The right to access</span> – You have the right to request copies of your personal data. We may charge you a small fee for this service.
                        </li>
                        <li className="pl-2">
                            <span className="font-semibold text-foreground">The right to rectification</span> – You have the right to request that we correct any information you believe is inaccurate.
                        </li>
                        <li className="pl-2">
                            <span className="font-semibold text-foreground">The right to erasure</span> – You have the right to request that I erase your personal data, under certain conditions.
                        </li>
                        <li className="pl-2">
                            <span className="font-semibold text-foreground">The right to restrict processing</span> – You have the right to request that I restrict the processing of your personal data, under certain conditions.
                        </li>
                        <li className="pl-2">
                            <span className="font-semibold text-foreground">The right to object to processing</span> – You have the right to object to the processing of your personal data, under certain conditions.
                        </li>
                        <li className="pl-2">
                            <span className="font-semibold text-foreground">The right to data portability</span> – You have the right to request that I transfer the data that I have collected to another organization, or directly to you, under certain conditions.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}
