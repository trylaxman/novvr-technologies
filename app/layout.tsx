import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Novvr Technologies | Web3, AI & Full-Stack Development", template: "%s | Novvr Technologies" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Novvr Technologies", description: siteConfig.description, url: siteConfig.url, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image", title: "Novvr Technologies", description: siteConfig.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><Header /><main>{children}</main><Footer /></body>
    </html>
  );
}
