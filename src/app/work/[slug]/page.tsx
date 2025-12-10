import { workHistory } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Briefcase } from "lucide-react";
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
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary-foreground bg-secondary">
                            {tag}
                        </span>
                    ))}
                </div>

                <div
                    className="prose prose-lg text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground max-w-none"
                    dangerouslySetInnerHTML={{ __html: work.content }}
                />
            </div>
        </div>
    );
}
