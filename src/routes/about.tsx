import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { FinalCTA } from "@/components/FinalCTA";

const principles = [
  { title: "Clarity over decoration", desc: "Every element earns its place. If it doesn't serve the user or the business, it doesn't ship." },
  { title: "Performance is design", desc: "A slow site is a broken site. Speed, accessibility, and craft are non-negotiable." },
  { title: "Built to scale", desc: "Clean architecture and considered systems that grow with your business." },
  { title: "Honest communication", desc: "Direct updates, clear timelines, no surprises." },
];

const expertise = [
  "React & TypeScript", "Next.js / TanStack Start", "Tailwind CSS", "Framer Motion",
  "Headless CMS", "SEO & Performance", "Conversion Strategy", "Design Systems",
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Qamer Hussain, Freelance Web Developer" },
      { name: "description", content: "Freelance web developer focused on building premium, high-performance websites for startups and growing businesses." },
      { property: "og:title", content: "About — Qamer Hussain" },
      { property: "og:description", content: "A freelance web developer building premium, conversion-focused websites with a craft-first approach." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="About"
          title={
            <>
              A craft-first approach to{" "}
              <span className="font-display italic font-normal tracking-[-0.02em] text-foreground/95">
                modern websites.
              </span>
            </>
          }
          intro="I'm Qamer — a freelance web developer working with founders, startups, and online businesses to build websites that look premium and perform even better."
        />

        <section className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Story
              </span>
              <div className="mt-6 space-y-6 text-base leading-[1.8] text-muted-foreground sm:text-[17px]">
                <p>
                  I've spent the last several years building websites for companies
                  that care about how they're perceived online — from early-stage
                  SaaS startups to established service businesses.
                </p>
                <p>
                  My focus is simple: design and build websites that earn trust
                  instantly, communicate clearly, and convert visitors into
                  customers. No bloated templates, no over-engineered systems —
                  just thoughtful, modern web experiences built with intent.
                </p>
                <p>
                  I work directly with founders and decision-makers. That keeps
                  the process fast, the feedback clear, and the work honest.
                </p>
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur-sm">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Expertise
              </span>
              <ul className="mt-6 flex flex-wrap gap-2">
                {expertise.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
                <p className="text-foreground">Based remote · Working worldwide</p>
                <p className="mt-2">Currently accepting Q3 2026 projects.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="relative border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="max-w-xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Working Principles
              </span>
              <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
                How I work
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-8"
                >
                  <h3 className="text-base font-semibold tracking-[-0.01em] text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
