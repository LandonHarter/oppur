import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://workage.vercel.app/",
            lastModified: new Date()
        },
        {
            url: "https://workage.vercel.app/login",
            lastModified: new Date()
        }
    ];
}