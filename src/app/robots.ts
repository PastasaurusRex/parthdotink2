import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: [
                '*',
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
                'FacebookBot',
                'ImagesiftBot',
                'Kaggle',
                'PerplexityBot',
            ],
            allow: '/',
            disallow: [
                '/private/',
                '/api/',
            ],
        },
        // Explicitly disallow AI bots
        host: 'https://evernaut.com', // Replace with actual domain if different
    }
}
