export const siteConfig = {
  name: "Novvr Technologies",
  shortName: "Novvr",
  description:
    "Novvr Technologies builds and integrates scalable products across Web3, AI and full-stack technologies, supported by creative and growth expertise.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://novvr.com",
  email: "hello@novvr.com",
  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
  ],
} as const;
