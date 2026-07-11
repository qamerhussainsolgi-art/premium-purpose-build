// src/routes/work.tsx
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { FinalCTA } from "@/components/FinalCTA";
import gulkariNew from "@/assets/gulkari-new.jpg";
import gulkariOld from "@/assets/gulkari-old.jpg";

const caseStudies = [
  {
    slug: "eshaals-gulkari-redesign",
    image: gulkariNew,
    name: "Eshaal's Gulkari — Redesign",
    industry: "Luxury E-commerce",
    challenge:
      "A premium handcrafted apparel brand required a modern, conversion-focused online shop to replace their existing non-transactional web catalog.",
    solution:
      "Designed and developed a custom React application integrated with Supabase for data management. Implemented a tailored gold and royal dark visual system, custom shopping cart logic, a multi-step product discovery questionnaire, and client-side performance enhancements.",
    outcome:
      "Delivered a fast, responsive e-commerce experience featuring clear path-to-purchase flows and a unified inventory presentation.",
  },
  {
    slug: "eshaals-gulkari-original",
    image: gulkariOld,
    name: "Eshaal's Gulkari — Original",
    industry: "Web Catalog",
    challenge:
      "A handcrafted apparel and textile business needed a simple, professional digital directory to display collections to wholesale and retail buyers without complex shopping carts.",
    solution:
      "Created a fast, structured portfolio-style catalog using clean image layouts and direct WhatsApp contact routing for individual product inquiries.",
    outcome:
      "Established the brand's first professional online interface, paving the way for their subsequent transactional upgrade.",
  },
];

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected E-commerce Work — Qamer Hussain" },
      { name: "description", content: "Case studies detailing the custom React and Supabase rebuild of Eshaal's Gulkari luxury e-commerce catalog." },
      { property: "og:title", content: "Selected E-commerce Work — Qamer Hussain" },
      { property: "og:description", content: "Explore e-commerce design and development case studies focused on clear conversion paths." },
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
          intro="An in-depth look at recent custom projects — the specific challenges, solutions, and concrete outcomes built with performance-focused React and design system practices."
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
                    alt={`${p.name} — ${p.industry} website preview`}
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