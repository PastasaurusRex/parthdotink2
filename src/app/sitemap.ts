import { MetadataRoute } from 'next'
import { workHistory } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const workUrls = workHistory.map((work) => ({
        url: `https://parth.ink/work/${work.slug}`,
        lastModified: new Date(),
    }))

    return [
        { url: 'https://parth.ink', lastModified: new Date() },
        { url: 'https://parth.ink/work', lastModified: new Date() },
        { url: 'https://parth.ink/about', lastModified: new Date() },
        { url: 'https://parth.ink/privacy', lastModified: new Date() },
        { url: 'https://parth.ink/terms', lastModified: new Date() },
        ...workUrls,
    ]
}
