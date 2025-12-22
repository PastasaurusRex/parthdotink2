import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: [
                    'GPTBot',
                    'ChatGPT-User',
                    'Google-Extended',
                    'CCBot',
                    'FacebookBot',
                    'AnthropicAI',
                    'Bytespider',
                    'ClaudeBot',
                    'cohere-ai',
                    'Diffbot',
                    'ImagesiftBot',
                    'Kaggle',
                    'PerplexityBot',
                    'DuckAssistantBot',
                ],
                disallow: '/',
            },
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/'],
            },
        ],
        sitemap: 'https://parth.ink/sitemap.xml',
        host: 'https://parth.ink',
    }
}
