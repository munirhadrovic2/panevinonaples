import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return [
        {
            url: 'https://panevinonaples.com',
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://panevinonaples.com/gallery',
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://panevinonaples.com/antipasti',
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: 'https://panevinonaples.com/pasta',
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: 'https://panevinonaples.com/pollo',
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: 'https://panevinonaples.com/salad',
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: 'https://panevinonaples.com/seafood',
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: 'https://panevinonaples.com/specials',
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]
}
