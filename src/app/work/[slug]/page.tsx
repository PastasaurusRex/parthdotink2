import { workHistory } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Briefcase, ExternalLink, ArrowRight as ArrowArrowRight } from "lucide-react";
import { Metadata } from "next";

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
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{work.company}</h1>
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
                        <span key={tag} className="rounded-full bg-emerald-500/25 px-3 py-1 text-sm font-medium text-emerald-950">
                            {tag}
                        </span>
                    ))}
                </div>

                <div
                    className="space-y-6 leading-relaxed text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground prose-a:text-foreground prose-a:underline prose-a:decoration-muted-foreground/30 prose-a:underline-offset-4 hover:prose-a:decoration-foreground prose-a:transition-colors"
                    dangerouslySetInnerHTML={{ __html: work.content }}
                />

                <div className="flex flex-col gap-8 pt-8 border-t border-border/40 sm:flex-row sm:justify-between sm:items-center">
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
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background text-foreground">
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
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background text-foreground">
                                                    <ArrowArrowRight size={16} />
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
