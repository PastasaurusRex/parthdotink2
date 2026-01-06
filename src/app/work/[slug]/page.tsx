import { workHistory } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Briefcase, ExternalLink, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { ClientsTicker } from "@/components/ClientsTicker";
import { WorkTag } from "@/components/WorkTag";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleCarousel } from "@/components/ArticleCarousel";

export async function generateStaticParams() {
    return workHistory.map((work) => ({
        slug: work.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const work = workHistory.find((w) => w.slug === slug);
    if (!work) return { title: "Work Not Found" };
    return {
        title: `${work.company} - ${work.position}`,
        description: work.description,
    };
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const work = workHistory.find((w) => w.slug === slug);

    if (!work) {
        notFound();
    }

    return (
        <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-8">
            <Link href="/work" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                <ArrowLeft size={16} className="mr-2" />
                Back to Work History
            </Link>

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl">{work.company}</h1>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Briefcase size={18} />
                            <span>{work.position}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span>{work.city}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{work.startDate} - {work.endDate}</span>
                        </div>
                        {work.website && (
                            <div className="flex items-center gap-2">
                                <ExternalLink size={18} />
                                <a href={work.website} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline decoration-muted-foreground/30 underline-offset-4 hover:decoration-foreground">
                                    {work.websiteLabel || work.website.replace(/^https?:\/\//, '')}
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                        <WorkTag key={tag}>
                            {tag}
                        </WorkTag>
                    ))}
                </div>

                <div
                    className="space-y-6 leading-relaxed text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground prose-a:text-foreground dark:prose-a:text-blue-300 prose-a:underline prose-a:decoration-muted-foreground/30 prose-a:underline-offset-4 hover:prose-a:decoration-foreground prose-a:transition-colors"
                    dangerouslySetInnerHTML={{ __html: work.content }}
                />

                {/* Clients Section - Only for CBC Sports */}
                {work.slug === "cbc-sports" && (
                    <div className="space-y-6 pt-4">
                        <h2 className="text-2xl font-serif font-bold tracking-tight text-foreground">
                            Clients
                        </h2>
                        <ClientsTicker />
                    </div>
                )}

                {/* Article Section - Only for Storypick */}
                {work.slug === "storypick" && (
                    <div className="space-y-6 pt-4">
                        <h2 className="text-2xl font-serif font-bold tracking-tight text-foreground">
                            Featured Articles
                        </h2>
                        <ArticleCarousel
                            articles={[
                                {
                                    thumbnail: "/assets/images/storypick/coffee_cover.jpg",
                                    url: "storypick.com/yes-ill-have-one-mazagran-please",
                                    link: "https://www.storypick.com/yes-ill-have-one-mazagran-please/",
                                    title: "22 Types Of Coffee Around The World And How They're Made",
                                    caption: "*overdoses on caffeine and spazzes out all over the place*",
                                    interactions: "4.6k",
                                    shares: "82.1k",
                                },
                                {
                                    thumbnail: "/assets/images/storypick/cartoons_cover.jpg",
                                    url: "storypick.com/oh-mama",
                                    link: "https://www.storypick.com/oh-mama/",
                                    title: "30 Cartoon Characters That No 90's Kid Can Ever Get Over",
                                    caption: "*plays batman theme on loop*",
                                    interactions: "8.5k",
                                    shares: "20k",
                                },
                                {
                                    thumbnail: "/assets/images/storypick/agnostic_cover.jpg",
                                    url: "storypick.com/confessions-of-an-agnostic",
                                    link: "https://www.storypick.com/confessions-of-an-agnostic/",
                                    title: "Confessions Of An Agnostic Child Of Religious Parents",
                                    caption: "There are no multiple Gods, but one true God",
                                    interactions: "9.4k",
                                    shares: "14.3k",
                                },
                                {
                                    thumbnail: "/assets/images/storypick/harrypotter_cover.jpg",
                                    url: "storypick.com/nitwit-blubber-oddment-tweak",
                                    link: "https://www.storypick.com/nitwit-blubber-oddment-tweak/",
                                    title: "First And Last Lines Of 20 Favourite Characters From Harry Potter",
                                    caption: "From the beginning until the very end!",
                                    interactions: "5.8k",
                                    shares: "9.2k",
                                },
                                {
                                    thumbnail: "/assets/images/storypick/mumbai_cover.jpg",
                                    url: "storypick.com/mumbai-tour-in-750",
                                    link: "https://www.storypick.com/mumbai-tour-in-750/",
                                    title: "If You Have Rs. 750 In Your Pocket, This Is The Best Way To Spend A Day In Mumbai",
                                    caption: "Ye hai Mumbai meri jaan!",
                                    interactions: "4.2k",
                                    shares: "8.4k",
                                },
                                {
                                    thumbnail: "/assets/images/storypick/asian_cover.jpg",
                                    url: "storypick.com/come-spend-some-days-in-asia",
                                    link: "https://www.storypick.com/come-spend-some-days-in-asia/",
                                    title: "8 Asian Countries You Can Visit For Your Next Vacation",
                                    caption: "The continent has innumerable wanderlust quenchers",
                                    interactions: "777",
                                    shares: "3.4k",
                                },
                                {
                                    thumbnail: "/assets/images/storypick/movies_cover.jpg",
                                    url: "storypick.com/huh-what-just-happened-huh",
                                    link: "https://www.storypick.com/huh-what-just-happened-huh/",
                                    title: "20 Movies Which Will Confuse The Hell Out Of You",
                                    caption: "I bet you can't watch just once.",
                                    interactions: "751",
                                    shares: "2.6k",
                                }
                            ]}
                        />
                    </div>
                )}

                <div className="flex gap-4 pt-8 border-t border-border/40 justify-between items-start sm:items-center">
                    {/* Next Project (Left) - usually implies newer/next in list, but user requested Next on Left */}
                    {/* Logic: If array is [Newest, ..., Oldest] */}
                    {/* Next Project usually means the one before this in the array (Newer) or the one after (Older)? */}
                    {/* Standard: Next = Newer (i-1), Previous = Older (i+1) */}
                    {/* But typically "Next Post" in a blog is the newer one. */}
                    {/* I will use: Next = index - 1 (Newer), Previous = index + 1 (Older) */}

                    {(() => {
                        const index = workHistory.findIndex((w) => w.slug === slug);
                        const nextWork = index > 0 ? workHistory[index - 1] : null; // Newer
                        const prevWork = index < workHistory.length - 1 ? workHistory[index + 1] : null; // Older

                        return (
                            <>
                                <div className="flex-1 min-w-0">
                                    {nextWork ? (
                                        <Link href={`/work/${nextWork.slug}`} className="group flex flex-col items-start gap-2 text-left">
                                            <span className="text-sm text-muted-foreground">Next</span>
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-border transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background text-foreground">
                                                    <ArrowLeft size={16} />
                                                </div>
                                                <span className="text-xl font-medium text-foreground group-hover:underline decoration-border underline-offset-4 group-hover:decoration-foreground transition-all line-clamp-1">
                                                    {nextWork.company}
                                                </span>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div />
                                    )}
                                </div>

                                <div className="flex-1 min-w-0 flex justify-end">
                                    {prevWork ? (
                                        <Link href={`/work/${prevWork.slug}`} className="group flex flex-col items-end gap-2 text-right">
                                            <span className="text-sm text-muted-foreground">Previous</span>
                                            <div className="flex items-center gap-3 flex-row-reverse">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-border transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background text-foreground">
                                                    <ArrowRight size={16} />
                                                </div>
                                                <span className="text-xl font-medium text-foreground group-hover:underline decoration-border underline-offset-4 group-hover:decoration-foreground transition-all line-clamp-1">
                                                    {prevWork.company}
                                                </span>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div />
                                    )}
                                </div>
                            </>
                        )
                    })()}
                </div>
            </div>
        </div>
    );
}
