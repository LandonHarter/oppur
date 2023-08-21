import { Metadata } from "next";

export const basicMetadata = (options: { title?: string, description?: string, localPath?: string, keywords?: string[] }): Metadata => {
    return {
        metadataBase: new URL('https://oppur.vercel.app'),
        title: options.title || 'Oppur',
        description: options.description,
        authors: [
            {
                name: "Landon Harter",
                url: 'https://landonharter.me'
            },
            {
                name: "Kevin H",
                url: 'https://github.com/random56428'
            },
            {
                name: "Steve Yang",
                url: 'https://steveyang.me'
            }
        ],
        publisher: 'oppur',
        robots: {
            index: true,
            follow: true,
        },
        keywords: options.keywords ? options.keywords.join(', ') : 'job, search, student',
        category: 'Jobs',
        classification: 'Jobs',
        creator: 'oppur',
        icons: 'https://oppur.vercel.app/oppuricon.png',
        applicationName: 'oppur',
        openGraph: {
            title: options.title,
            description: options.description,
            url: `https://oppur.vercel.app${options.localPath || ''}`,
            type: 'website',
            images: ['https://oppur.vercel.app/oppuricon.png'],
            siteName: 'Oppur',
        },
    };
};