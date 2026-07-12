// src/routes/services.tsx
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { FinalCTA } from "@/components/FinalCTA";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most websites ship in 3–6 weeks depending on scope. Landing pages can launch in 1–2 weeks.",
  },
  {
    q: "Do you work with existing brands or build from scratch?",
    a: "Both. I can extend your existing brand's visual identity into a new build, or start entirely from scratch.",
  },
  {
    q: "What's included in a project?",
    a: "Strategy, structure, development, responsive testing, performance optimization, basic SEO, and a smooth launch.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes — optional support and iteration retainers are available after launch.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Website Development Services — Qamer Hussain" },
      {
        name: "description",
        content:
          "High-performance landing pages, premium website redesigns, and custom React builds designed for measurable business outcomes.",
      },
      { property: "og:title", content: "Website Development Services — Qamer Hussain" },
      {
        property: "og:description",
        content:
          "Custom development, redesigns, and high-converting landing pages built on modern stacks.",
      },
      {
        property: "og:url",
        content: "https://premium-purpose-build.qamarhusainsolgi.workers.dev/services",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://premium-purpose-build.qamarhusainsolgi.workers.dev/services",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Services"
          title={
            <>
              Built around{" "}
              <span className="font-display italic font-normal tracking-[-0.02em] text-foreground/95">
                outcomes
              </span>
              , not deliverables.
            </>
          }
          intro="From positioning and structure to development and launch — every engagement is built around the metrics that move your business forward."
        />

        <Services />
        <Process />

        <section className="relative mx-auto max-w-3xl px-6 py-24 lg:py-32">
          <div className="max-w-xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              FAQ
            </span>
            <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <dl className="mt-12 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <div key={f.q} className="grid gap-3 py-6 md:grid-cols-[1fr_1.4fr] md:gap-10">
                <dt className="text-base font-medium text-foreground">{f.q}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
