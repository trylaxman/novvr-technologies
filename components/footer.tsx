import Link from "next/link";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-copy">Engineering modern digital products across Web3, AI and full-stack technologies.</p>
          <address className="footer-address not-italic">
            <strong>Novvr Technologies</strong>
            <br />
            O-652, Gaur City Centre,
            <br />
            Sector 4, Greater Noida West,
            <br />
            Uttar Pradesh - 201308,
            <br />
            India
          </address>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          {siteConfig.nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <p className="footer-label">Core expertise</p>
          <Link href="/services/web3-development">Web3</Link>
          <Link href="/services/ai-development">AI</Link>
          <Link href="/services/full-stack-development">Full-stack</Link>
        </div>
        <div>
          <p className="footer-label">Start a conversation</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <Link href="/contact">Project enquiry</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Novvr Technologies.</span>
        <span>Built for clarity, performance and growth.</span>
      </div>
    </footer>
  );
}
