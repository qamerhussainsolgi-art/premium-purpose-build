import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  CheckSquare,
  LayoutTemplate,
  Map,
  Gauge,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { FinalCTA } from "@/components/FinalCTA";

type Resource = {
  slug: string;
  title: string;
  description: string;
  type: string;
  pages: string;
  format: string;
  icon: LucideIcon;
  featured?: boolean;
};

const resources: Resource[] = [
  {
    slug: "website-launch-checklist",
    title: "Website Launch Checklist",
    description:
      "Everything to verify before launch — performance, SEO, accessibility, analytics, and the small details that separate amateur launches from professional ones.",
    type: "Checklist",
    pages: "42 items",
    format: "PDF",
    icon: CheckSquare,
    featured: true,
  },
  {
    slug: "landing-page-framework",
    title: "Landing Page Framework",
    description:
      "A structured framework for building landing pages that convert — message hierarchy, section logic, proof placement, and CTA strategy.",
    type: "Framework",
    pages: "18 pages",
    format: "PDF",
    icon: LayoutTemplate,
  },
  {
    slug: "website-planning-guide",
    title: "Website Planning Guide",
    description:
      "The questions to answer before a single screen is designed — positioning, audience, content architecture, and success metrics.",
    type: "Guide",
    pages: "24 pages",
    format: "PDF",
    icon: Map,
  },
  {
    slug: "performance-optimization-checklist",
    title: "Performance Optimization Checklist",
    description:
      "A practical checklist for hitting elite Core Web Vitals — image strategy, font loading, JavaScript budgets, and caching done right.",
    type: "Checklist",
    pages: "36 items",
    format: "PDF",
    icon: Gauge,
  },
  {
    slug: "conversion-optimization-guide",
    title: "Conversion Optimization Guide",
    description:
      "Frameworks for diagnosing and lifting conversion — funnel analysis, friction audits, copy patterns, and testing discipline.",
    type: "Guide",
    pages: "30 pages",
    format: "PDF",
    icon: TrendingUp,
  },
];

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Checklists, Guides & Frameworks" },
      {
        name: "description",
        content:
          "Free, practical resources for building, launching, and improving modern websites — checklists, frameworks, and guides drawn from real projects.",
      },
      { property: "og:title", content: "Resources — Qamer Hussain" },
      {
        property: "og:description",
        content:
          "Checklists, frameworks, and guides for planning, launching, and optimizing modern websites.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const featured = resources.find((r) => r.featured) ?? resources[0];
  const rest = resources.filter((r) => r.slug !== featured.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Resources"
          title={
            <>
              Tools to{" "}
              <span className="font-display italic font-normal tracking-[-0.02em] text-foreground/95">
                ship better.
              </span>
            </>
          }
          intro="Practical, no-fluff checklists, frameworks, and guides drawn from real client work. Free to download — designed to be used."
        />

        {/* Featured resource */}
        <section className="relative mx-auto max-w-7xl px-6 pt-20 lg:pt-28">
          <article className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -top-32 right-0 h-80 w-[40%] rounded-full bg-accent/15 blur-3xl" />
            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
              <div>
                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  <span className="rounded-full border border-border bg-surface/60 px-3 py-1 text-foreground">
                    Featured
                  </span>
                  <span>{featured.type}</span>
                </div>
                <h2 className="mt-6 text-balance text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-[1.75] text-muted-foreground sm:text-[17px]">
                  {featured.description}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
                  <span>{featured.pages}</span>
                  <span>{featured.format}</span>
                  <span>Free download</span>
                </div>
                <div className="mt-10">
                  <button
                    type="button"
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 cta-glow hover:cta-glow-hover"
                  >
                    <Download className="h-4 w-4" />
                    Download checklist
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="grid aspect-[4/5] place-items-center rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-elevated">
                  <featured.icon className="h-20 w-20 text-foreground/80" />
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Resource grid */}
        <section className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {rest.map((r) => (
              <article
                key={r.slug}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 sm:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface text-foreground">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {r.type}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold leading-[1.2] tracking-[-0.02em] text-foreground sm:text-2xl">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">
                  {r.description}
                </p>
                <div className="mt-8 flex items-center justify-between border-t border-border pt-6 text-xs text-muted-foreground">
                  <span>
                    {r.pages} · {r.format}
                  </span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
                  >
                    Download
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}