import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { FinalCTA } from "@/components/FinalCTA";
import projectSaaS from "@/assets/project-saas.jpg";
import projectFinance from "@/assets/project-finance.jpg";
import projectAgency from "@/assets/project-agency.jpg";

const caseStudies = [
  {
    slug: "flowstate",
    image: projectSaaS,
    name: "FlowState",
    industry: "SaaS · Productivity",
    challenge: "A complex onboarding flow was causing high drop-off before activation.",
    solution: "Rebuilt the marketing site and onboarding around a single clear value proposition with reduced friction.",
    outcome: "+38% trial activation, -52% bounce on landing.",
  },
  {
    slug: "finedge-capital",
    image: projectFinance,
    name: "FinEdge Capital",
    industry: "Financial Services",
    challenge: "Lead quality was low and the existing site failed to communicate trust to high-value prospects.",
    solution: "Designed a premium, content-led experience with credibility cues, clear positioning, and a refined inquiry flow.",
    outcome: "+64% qualified leads, 2.1× consultation bookings.",
  },
  {
    slug: "studio-meridian",
    image: projectAgency,
    name: "Studio Meridian",
    industry: "Creative Agency",
    challenge: "Strong work, weak narrative — the site looked dated and didn't reflect the studio's caliber.",
    solution: "Editorial portfolio architecture, refined typography system, and a project-first storytelling layout.",
    outcome: "3× inbound project inquiries within 60 days.",
  },
];

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — Qamer Hussain" },
      { name: "description", content: "Case studies and websites designed for trust, conversion, and long-term business growth." },
      { property: "og:title", content: "Selected Work — Qamer Hussain" },
      { property: "og:description", content: "Case studies and websites designed for trust, conversion, and long-term business growth." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Selected Work"
          title={
            <>
              Case studies in{" "}
              <span className="font-display italic font-normal tracking-[-0.02em] text-foreground/95">
                trust
              </span>{" "}
              and conversion.
            </>
          }
          intro="A closer look at recent projects — the challenge, the approach, and the outcomes. Every project is built around a single goal: measurable business impact."
        />

        <section className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="space-y-20 lg:space-y-28">
            {caseStudies.map((p, i) => (
              <article
                key={p.name}
                className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-card/60">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.industry}`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {p.industry}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
                    {p.name}
                  </h2>
                  <dl className="mt-8 space-y-5">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Challenge</dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-foreground/90">{p.challenge}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Solution</dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-foreground/90">{p.solution}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Outcome</dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-foreground">{p.outcome}</dd>
                    </div>
                  </dl>
                  <Link
                    to="/work/$slug"
                    params={{ slug: p.slug }}
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-all duration-300 hover:border-foreground/20 hover:bg-surface-elevated"
                  >
                    Read the case study
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
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
