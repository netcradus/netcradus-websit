import React, { useEffect } from "react";
import { FileText, BookOpen, ShieldCheck, ScrollText, Newspaper, ArrowUpRight, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";

const resourceSections = [
  {
    id: "intelligence-blog",
    title: "Intelligence Blog",
    description: "Threat analysis, engineering insight, and frontline security perspectives from the Netcradus team.",
    details: [
      "Technical deep-dives on modern attack paths",
      "Architecture commentary from the security team",
      "Actionable guidance for defenders and leaders",
    ],
    icon: BookOpen,
    
    action: { label: "Visit Blog", to: "/blog", icon: ExternalLink },
  },
  {
    id: "white-papers",
    title: "White Papers",
    description: "Downloadable PDF resources including the ACIS platform white paper and future solution briefs.",
    details: [
      "Platform architecture overviews",
      "Executive-ready research assets",
      "Security strategy reference documents",
    ],
    icon: FileText,
    action: { label: "Explore White Papers", to: "/white-papers", icon: ExternalLink },
  },
  {
    id: "case-studies",
    title: "Case Studies",
    description: "Illustrative client success stories showing how Netcradus helps organizations reduce risk and improve resilience.",
    details: [
      "Managed SOC transformation summaries",
      "Cloud security posture improvement snapshots",
      "Enterprise remediation and hardening outcomes",
    ],
    icon: ShieldCheck,
    action: { label: "View Contact Page", to: "/contact", icon: ExternalLink },
  },
  {
    id: "documentation",
    title: "Documentation",
    description: "Technical documentation previews for platform deployment, operations, integrations, and governance workflows.",
    details: [
      "Deployment and rollout guidance",
      "Integration and API direction",
      "Security operations reference material",
    ],
    icon: ScrollText,
    action: { label: "Explore Platform", to: "/platform", icon: ExternalLink },
  },
  {
    id: "threat-reports",
    title: "Threat Reports",
    description: "Quarterly and annual intelligence briefings focused on attacker behavior, response priorities, and trend tracking.",
    details: [
      "Emerging threat pattern summaries",
      "Executive threat landscape snapshots",
      "Operational priorities for response teams",
    ],
    icon: Newspaper,
    action: { label: "Read Intelligence Blog", to: "/blog", icon: ExternalLink },
  },
];

export default function ResourcesPage() {
  usePageMeta(SEO_META.resources.title, SEO_META.resources.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background transition-colors duration-500">
      <PageHero
        label=""
        title="Security Intelligence, On Demand"
        subtitle="Access the latest research, reports, and technical guides from the Netcradus security team."
        media={
          <div className="relative overflow-hidden rounded-[30px] border border-border bg-[linear-gradient(135deg,rgba(232,64,10,0.08),transparent_38%),var(--color-surface)] p-4 shadow-[0_18px_60px_rgba(232,64,10,0.08)]">
            <img
              src="/generated/jlk.png"
              alt="Security intelligence resources"
              className="h-[320px] w-full rounded-[24px] object-cover"
            />
          </div>
        }
      />

      <section className="py-0">
        <div className="container mx-auto max-w-screen-2xl px-4 pb-24 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(232,64,10,0.06),transparent_70%),var(--color-surface)] p-5 shadow-[0_16px_40px_rgba(232,64,10,0.06)] backdrop-blur-md">
                <div className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">Library</div>
                <nav className="space-y-2">
                  {resourceSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center justify-between rounded-full border border-transparent bg-[var(--color-surface-raised)]/60 px-4 py-3 text-sm font-semibold text-text-secondary transition hover:border-accent/25 hover:bg-accent/8 hover:text-text-primary hover:shadow-[0_0_24px_rgba(232,64,10,0.1)]"
                    >
                      <span>{section.title}</span>
                      <ArrowUpRight size={15} className="text-accent" />
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="grid gap-6 md:grid-cols-2">
              {resourceSections.map((section) => {
                const Icon = section.icon;
                const ActionIcon = section.action.icon;
                const actionClass =
                  "inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-semibold text-accent transition hover:border-accent/40 hover:shadow-[0_0_24px_rgba(232,64,10,0.16)]";

                return (
                  <article
                    id={section.id}
                    key={section.title}
                    className="premium-card group rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(232,64,10,0.05),transparent_65%),var(--color-surface)] p-8 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(232,64,10,0.12)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/15 bg-accent/8 text-accent shadow-[0_0_22px_rgba(232,64,10,0.08)]">
                        <Icon size={24} />
                      </div>
                      <div className="rounded-full border border-border bg-[var(--color-surface-raised)]/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-text-secondary">
                        Resource
                      </div>
                    </div>
                    <h2 className="mt-6 text-2xl font-black tracking-tight text-text-primary">{section.title}</h2>
                    <p className="mt-4 min-h-[72px] text-base leading-relaxed text-text-secondary">{section.description}</p>
                    <ul className="mt-5 space-y-3">
                      {section.details.map((detail) => (
                        <li key={detail} className="rounded-[18px] border border-border bg-[var(--color-surface-raised)]/60 px-4 py-3 text-sm leading-relaxed text-text-secondary">
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      {"href" in section.action ? (
                        <a href={section.action.href} download={section.action.download} className={actionClass}>
                          {section.action.label}
                          <ActionIcon size={16} />
                        </a>
                      ) : (
                        <Link to={section.action.to} className={actionClass}>
                          {section.action.label}
                          <ActionIcon size={16} />
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
