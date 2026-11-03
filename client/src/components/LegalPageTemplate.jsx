import React from "react";
import { Link } from "react-router-dom";
import PageHero from "./PageHero";

export default function LegalPageTemplate({ title, description, lastUpdated, sections, children }) {
  return (
    <div className="bg-background transition-colors duration-500">
      <PageHero
        label=""
        title={title}
        subtitle={description}
        media={
          <div className="premium-card rounded-[28px] border border-border bg-[var(--color-surface)]/80 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(232,64,10,0.08)]">
            <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Last Updated</div>
            <div className="mt-4 text-3xl font-black text-text-primary md:text-4xl">{lastUpdated}</div>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Official governance, privacy, and compliance disclosures for Netcradus.
            </p>
          </div>
        }
      />

      <section className="bg-background py-0">
        <div className="container mx-auto max-w-screen-xl px-4 pb-24 sm:px-6 lg:px-16 xl:px-24">
          <div className="space-y-8">
            {sections.map((section) => (
              <article key={section.heading} className="premium-card rounded-[28px] border border-border bg-[var(--color-surface)]/80 p-8 md:p-10">
                <h2 className="text-2xl font-black tracking-tight text-text-primary md:text-3xl">{section.heading}</h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-text-secondary">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
            {children}
          </div>

          <div className="mt-12 rounded-[28px] border border-border bg-[var(--color-surface)]/70 p-8 backdrop-blur-md">
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Related Legal Pages</div>
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                { label: "Privacy Policy", to: "/policy" },
                { label: "Terms of Service", to: "/terms" },
                { label: "Data Protection Policy", to: "/data-protection" },
                { label: "Cookie Policy", to: "/cookies" },
                { label: "Responsible Disclosure", to: "/responsible-disclosure" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-full border border-border bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold text-text-secondary transition hover:border-accent/40 hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
