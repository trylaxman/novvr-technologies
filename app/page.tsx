import Link from "next/link";
import { ArrowRight, Check, MoveRight } from "lucide-react";
import { AnimatedHeroHeading } from "@/components/animated-hero-heading";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";

const services = [
  {
    number: "01",
    title: "Web3 development",
    copy: "Build secure, usable blockchain products, payments, wallets and smart-contract integrations.",
    href: "/services/web3-development",
    tags: ["EVM", "Solana", "Smart contracts", "Payments"],
  },
  {
    number: "02",
    title: "AI development",
    copy: "Turn practical AI use cases into dependable products, agents, automations and integrations.",
    href: "/services/ai-development",
    tags: ["LLMs", "RAG", "Agents", "Automation"],
  },
  {
    number: "03",
    title: "Full-stack development",
    copy: "Design, build and scale robust SaaS platforms, web applications, APIs and internal systems.",
    href: "/services/full-stack-development",
    tags: ["Next.js", "Node.js", "SaaS", "Cloud"],
  },
];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Novvr Technologies",
    url: "https://novvr.com",
    description: "Web3, AI and full-stack product engineering company.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="hero section-pad">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              AI-Accelerated Product Engineering
            </p>

            <AnimatedHeroHeading />

            <p className="hero-lede">
              From MVPs to production-ready platforms, we help startups and businesses ship AI, Web3 and SaaS products in weeks—not months.
            </p>

            <div className="hero-actions">
              <Link className="button" href="/contact">
                Discuss your project
                <ArrowRight size={18} />
              </Link>

              <Link className="text-link" href="/work">
                Explore Projects
                <MoveRight size={18} />
              </Link>
            </div>

            <div className="hero-proof">
              <span>15+ years in technology</span>
              <span>Founder-led delivery</span>
              <span>Global product experience</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orb orb-one" />
            <div className="orb orb-two" />

            <div className="system-card card-a">
              <span>AI</span>
              <strong>AI Products</strong>
              <small>Agents · LLMs · Automation</small>
            </div>

            <div className="system-card card-b">
              <span>FULL STACK</span>
              <strong>SaaS Platforms</strong>
              <small>Next.js · APIs · Cloud</small>
            </div>

            <div className="system-card card-c">
              <span>WEB3</span>
              <strong>Web3 Apps</strong>
              <small>Contracts · Wallets · Payments</small>
            </div>

            <svg viewBox="0 0 600 560" className="connection-lines">
              <path d="M100 150 C220 140 240 260 360 260" />
              <path d="M355 260 C430 270 430 405 520 410" />
              <path d="M190 430 C260 430 300 315 355 265" />
            </svg>
          </div>
        </div>
      </section>

      <section className="trust-band">
        <div className="container trust-grid">
          <p>Built for real-world complexity</p>
          <span>Fintech</span>
          <span>SaaS</span>
          <span>Healthcare</span>
          <span>Commerce</span>
          <span>Blockchain</span>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="Core expertise"
            title="Deep engineering across the technologies shaping what comes next."
            copy="Senior product thinking, practical architecture and disciplined execution—from the first technical decision to production and scale."
          />

          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container split-grid">
          <div>
            <p className="eyebrow light">More than development</p>
            <h2>One partner from product idea to market impact.</h2>
          </div>

          <div className="capability-list">
            <div>
              <span>01</span>
              <h3>Strategy & architecture</h3>
              <p>
                Clarify the opportunity, de-risk key decisions and create a
                practical roadmap.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Design & engineering</h3>
              <p>
                Build responsive, reliable and maintainable products around the
                user and business.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Creative & growth</h3>
              <p>
                Support launches with content, campaigns and social media that
                help products get noticed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading
            className="why-heading"
            eyebrow="Why Novvr"
            title={
              <>
                Senior <span className="t-accent">ownership.</span>
                <br />
                Clear <span className="t-accent">communication.</span>
                <br />
                Technology built to <span className="t-accent">last.</span>
              </>
            }
          />

          <div className="benefit-grid">
            {[
              "Founder-led technical direction",
              "Business-first product thinking",
              "Scalable architecture from day one",
              "Transparent delivery and decisions",
            ].map((item) => (
              <div className="benefit" key={item}>
                <Check size={20} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad work-preview">
        <div className="container">
          <div className="section-row">
            <SectionHeading
              eyebrow="Selected work"
              title="Products built around meaningful business outcomes."
            />

            <Link className="text-link" href="/work">
              View all work
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="project-grid">
            <article className="project-card project-featured">
              <div className="project-art">
                <div className="mock-window">
                  <span />
                  <span />
                  <span />
                  <div className="mock-dashboard" />
                </div>
              </div>

              <p className="project-type">Fintech · Web3 infrastructure</p>

              <h3>
                Crypto payments built for everyday merchant adoption.
              </h3>

              <p>
                Product strategy, platform engineering, wallet infrastructure
                and merchant operations.
              </p>
            </article>

            <article className="project-card">
              <div className="project-art art-ai">
                <div className="ai-core">AI</div>
              </div>

              <p className="project-type">AI · Product engineering</p>

              <h3>
                Intelligent workflows that turn complex data into decisions.
              </h3>

              <p>
                AI integration, platform architecture and full-stack product
                delivery.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container process">
          <SectionHeading
            eyebrow="Our process"
            title="A straightforward path from uncertainty to a product you can grow."
          />

          <div className="process-grid">
            {[
              [
                "01",
                "Discover",
                "Goals, users, constraints and the real business problem.",
              ],
              [
                "02",
                "Plan",
                "Scope, architecture, milestones and a practical delivery roadmap.",
              ],
              [
                "03",
                "Build",
                "Iterative engineering with visible progress and continuous feedback.",
              ],
              [
                "04",
                "Launch & scale",
                "Production readiness, measurement and ongoing improvement.",
              ],
            ].map(([number, title, copy]) => (
              <div key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container cta-panel">
          <p className="eyebrow light">
            Have something ambitious in mind?
          </p>

          <h2>
            Let’s turn it into a product people can trust and use.
          </h2>

          <p>
            Tell us what you are building, improving or integrating. We will
            help you find the clearest technical path forward.
          </p>

          <Link className="button button-light" href="/contact">
            Discuss your project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}