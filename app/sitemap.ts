import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = ["top-benefits-of-switching-to-solar-energy"];

  const blogUrls = blogSlugs.map((slug) => ({
    url: `https://fujisolar.in/blogs/${slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: "https://fujisolar.in", lastModified: new Date() },
    { url: "https://fujisolar.in/about", lastModified: new Date() },
    { url: "https://fujisolar.in/solar-products", lastModified: new Date() },
    { url: "https://fujisolar.in/installation-process", lastModified: new Date() },
    { url: "https://fujisolar.in/blogs", lastModified: new Date() },
    { url: "https://fujisolar.in/contact", lastModified: new Date() },
    ...blogUrls,
  ];
}
