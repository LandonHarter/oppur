import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://oppur.vercel.app/",
            lastModified: new Date()
        },
    ];
}