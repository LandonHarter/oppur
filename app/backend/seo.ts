import { Metadata } from "next";

export const basicMetadata = (options: { title?: string, description?: string, localPath?: string, keywords?: string[] }): Metadata => {
    return {
        metadataBase: new URL('https://workage.vercel.app'),
        title: options.title || 'Workage',
        description: options.description,
        authors: [
            {
                name: "Landon Harter",
                url: 'https://landonharter.me'
            },
            {
                name: "Kevin H",
                url: 'https://github.com/random56428'
            }
        ],
        publisher: 'Workage',
        robots: {
            index: true,
            follow: true,
        },
        keywords: options.keywords ? options.keywords.join(', ') : 'job, search, student',
        category: 'Jobs',
        classification: 'Jobs',
        creator: 'Workage',
        icons: 'https://workage.vercel.app/icon.png',
        applicationName: 'Workage',
        openGraph: {
            title: options.title,
            description: options.description,
            url: `https://workage.vercel.app${options.localPath || ''}`,
            type: 'website',
            images: ['https://workage.vercel.app/icon.png'],
            siteName: 'Blitz',
        },
    };
};