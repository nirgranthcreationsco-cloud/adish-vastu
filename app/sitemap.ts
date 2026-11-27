import type { MetadataRoute } from "next";
import { productCatalog } from "@/app/data/productCatalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vastuacademy.com";
  const staticRoutes = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/policies/terms",
    "/policies/privacy",
    "/policies/shipping",
    "/policies/returns",
    "/policies/cancellation",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" || path === "/shop" ? 1 : 0.7,
  }));

  const products = productCatalog.slice(0, 200).map((p) => ({
    url: `${base}/product/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...products];
}
