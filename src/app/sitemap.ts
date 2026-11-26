import type { MetadataRoute } from "next";
import { indexablePageUrls } from "@/lib/site-seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePageUrls.map((url) => ({ url }));
}
