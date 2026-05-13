import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://fujisolar.in", lastModified: new Date() },
    { url: "https://fujisolar.in/about", lastModified: new Date() },
    { url: "https://fujisolar.in/solar-products", lastModified: new Date() },
    { url: "https://fujisolar.in/installation-process", lastModified: new Date() },
    { url: "https://fujisolar.in/contact", lastModified: new Date() },
  ];
}
