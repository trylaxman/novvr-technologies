import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss your Web3, AI or full-stack development project with Novvr Technologies.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Start a conversation</p>

          <h1>Tell us what you are building.</h1>

          <p>
            Share the problem, opportunity or product you have
            in mind. We will help you identify a sensible next
            step.
          </p>
        </div>
      </section>

      <section className="content-shell">
        <div className="container contact-grid">
          <div className="contact-intro">
            <h2>Good conversations start with context.</h2>

            <p>
              Share a short overview of your project, product
              or technical challenge. We will review it and
              respond with practical next steps.
            </p>

            <div className="contact-detail">
              <p className="footer-label">Email</p>

              <a href="mailto:hello@novvr.com">
                hello@novvr.com
              </a>
            </div>

            <div className="contact-detail">
              <p className="footer-label">Office</p>

              <address>
                O-652, Gaur City Centre,
                <br />
                Sector 4, Greater Noida West,
                <br />
                Uttar Pradesh – 201308, India
              </address>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}