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
    q: "Do you work with existing brands or design from scratch?",
    a: "Both. I can extend your existing brand system or build a tailored visual direction from the ground up.",
  },
  {
    q: "What's included in a project?",
    a: "Strategy, design, development, responsive testing, performance optimization, basic SEO, and a smooth launch.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes — optional support and iteration retainers are available after launch.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web Design, Development & Landing Pages" },
      { name: "description", content: "Conversion-focused websites, web development, and high-performance landing pages for startups and growing businesses." },
      { property: "og:title", content: "Services — Qamer Hussain" },
      { property: "og:description", content: "Web design, development, and landing pages built for trust, performance, and measurable business growth." },
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
          intro="From positioning and design to development and launch — every engagement is built around the metrics that move your business forward."
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
