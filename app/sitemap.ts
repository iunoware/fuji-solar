import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://yoursite.com", lastModified: new Date() },
    { url: "https://yoursite.com/about", lastModified: new Date() },
    { url: "https://yoursite.com/solar-products", lastModified: new Date() },
    { url: "https://yoursite.com/installation-process", lastModified: new Date() },
    { url: "https://yoursite.com/contact", lastModified: new Date() },
  ];
}
