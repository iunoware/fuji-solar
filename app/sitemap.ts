import { MetadataRoute } from "next";
import { readFileSync } from "fs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  const fileContent = readFileSync("app/blogs/blogData.tsx", "utf-8");
  const urlMatches = [...fileContent.matchAll(/url:\s*"([^"]+)"/g)];
  const blogSlugs = urlMatches.map((match) => match[1]);

  const blogPages = blogSlugs.map((slug) => ({
    url: `https://fujisolar.in/blogs/${slug}`,
    lastModified: today,
  }));

  return [
    { url: "https://fujisolar.in", lastModified: today },
    { url: "https://fujisolar.in/about", lastModified: today },
    { url: "https://fujisolar.in/solar-products", lastModified: today },
    { url: "https://fujisolar.in/solar-products/hybrid-systems", lastModified: today },
    { url: "https://fujisolar.in/solar-products/on-grid-systems", lastModified: today },
    { url: "https://fujisolar.in/solar-products/off-grid-systems", lastModified: today },
    { url: "https://fujisolar.in/solar-products/solar-water-pumps", lastModified: today },
    {
      url: "https://fujisolar.in/solar-products/solar-street-lights",
      lastModified: today,
    },
    {
      url: "https://fujisolar.in/solar-products/solar-water-heaters",
      lastModified: today,
    },
    { url: "https://fujisolar.in/installation-process", lastModified: today },
    { url: "https://fujisolar.in/blogs", lastModified: today },
    { url: "https://fujisolar.in/contact", lastModified: today },
    ...blogPages,
  ];
}
