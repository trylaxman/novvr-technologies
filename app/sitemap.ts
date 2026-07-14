import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/services/web3-development", "/services/ai-development", "/services/full-stack-development", "/services/creative-growth", "/work", "/insights", "/contact"].map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : .8 }));
}
