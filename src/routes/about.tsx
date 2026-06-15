import { createFileRoute } from "@tanstack/react-router";
import {
  Layers,
  Code2,
  TrendingUp,
  Smartphone,
  Compass,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { FinalCTA } from "@/components/FinalCTA";

const principles = [
  {
    title: "Clarity Over Complexity",
    desc: "If a section, sentence, or interaction doesn't earn its place, it doesn't ship. Clean beats clever every time.",
  },
  {
    title: "Strategy Before Design",
    desc: "Pixels follow positioning. Every project starts with the question your visitor is really trying to answer.",
  },
  {
    title: "Performance Matters",
    desc: "Speed, accessibility, and Core Web Vitals are part of design — not an afterthought handed to a developer.",
  },
  {
    title: "Details Create Trust",
    desc: "Typography, spacing, motion, micro-interactions. Trust is built in the things visitors barely notice.",
  },
  {
    title: "Quality Over Quantity",
    desc: "A small number of deeply considered projects each year, rather than a pipeline of shallow ones.",
  },
];

const experience = [
  {
    icon: Layers,
    title: "Web Design",
    desc: "Premium, brand-aligned interfaces designed around clarity, trust, and conversion.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Production-grade React builds — fast, accessible, and easy to scale.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    desc: "Page structures, messaging, and flows tuned for measurable business outcomes.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Pixel-considered experiences across every screen size — phone first, polished everywhere.",
  },
  {
    icon: Compass,
    title: "UI/UX Strategy",
    desc: "Information architecture and interaction design rooted in how real users decide.",
  },
];

const expertise = [
  "Modern React", "TypeScript", "Tailwind CSS", "Responsive UI",
  "SEO & Performance", "Conversion Strategy", "Design Systems", "Maintainable Code",
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
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="group rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card/80 sm:p-8"
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

        {/* Philosophy */}
        <section className="relative border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Philosophy
                </span>
                <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
                  Building websites with{" "}
                  <span className="font-display italic font-normal tracking-[-0.02em] text-foreground/95">
                    purpose.
                  </span>
                </h2>
              </div>
              <div className="space-y-6 text-base leading-[1.85] text-muted-foreground sm:text-[17px]">
                <p>
                  Great websites aren't measured by how much they contain —
                  they're measured by how clearly they communicate, how fast
                  they feel, and how much trust they earn in the first few
                  seconds.
                </p>
                <p>
                  I build around five non-negotiables: simplicity, trust,
                  performance, user experience, and business outcomes. Every
                  decision — from typography to motion to copy — is filtered
                  through those five.
                </p>
                <p>
                  Design isn't the surface. It's the strategy that decides what
                  visitors notice, believe, and do next. That's the work I show
                  up for every day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="relative border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="max-w-xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Experience Highlights
              </span>
              <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
                What I bring to a project.
              </h2>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
              {experience.map((e, i) => (
                <div
                  key={e.title}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/60 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card/80 ${
                    i === 0 ? "lg:col-span-3 lg:row-span-2" : "lg:col-span-3"
                  } ${i > 0 ? "lg:col-span-3" : ""}`}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 transition-all duration-300 group-hover:border-foreground/15 group-hover:bg-surface-elevated">
                      <e.icon className="h-4 w-4 text-foreground/80" />
                    </span>
                    <h3 className={`mt-6 font-semibold tracking-[-0.01em] text-foreground ${i === 0 ? "text-xl sm:text-2xl" : "text-base"}`}>
                      {e.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {e.desc}
                    </p>
                  </div>
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
