import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name: "Novvr Technologies", short_name: "Novvr", description: "Web3, AI and full-stack product engineering.", start_url: "/", display: "standalone", background_color: "#ffffff", theme_color: "#11131a" }; }
