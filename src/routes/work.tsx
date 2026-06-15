import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { FinalCTA } from "@/components/FinalCTA";
import projectSaaS from "@/assets/project-saas.jpg";
import projectFinance from "@/assets/project-finance.jpg";
import projectAgency from "@/assets/project-agency.jpg";

const caseStudies = [
  {
    slug: "md-industry",
    image: projectSaaS,
    name: "MD Industry",
    industry: "FMCG Manufacturing",
    challenge:
      "A growing FMCG manufacturer needed a professional digital presence to build trust with B2B buyers and distributors.",
    solution:
      "Built a clean company profile and product showcase site focused on credibility for wholesale inquiries.",
    outcome:
      "Delivered a polished digital catalog that gives the brand a stronger first impression with potential business partners.",
  },
  {
    slug: "design-fabrics",
    image: projectFinance,
    name: "Design Fabrics",
    industry: "Wholesale Clothing",
    challenge:
      "A Karachi-based wholesale clothing business had no online presence for buyers to review their catalog.",
    solution:
      "Designed a storefront-style catalog presentation paired with a trust-focused landing page for wholesale clients.",
    outcome:
      "Gave buyers a polished, credible first touchpoint before reaching out directly.",
  },
  {
    slug: "shaheen-outfitter",
    image: projectAgency,
    name: "Shaheen Outfitter",
    industry: "Apparel & Retail",
    challenge:
      "An apparel brand needed a modern, mobile-first online presence with clear product focus and brand identity.",
    solution:
      "Built a retail-focused landing experience with clean navigation and product highlight sections.",
    outcome:
      "Gave the brand a professional digital storefront optimized for mobile shoppers.",
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
                id={p.slug}
                className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                } scroll-mt-28`}
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
