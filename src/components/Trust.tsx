import { Palette, Gauge, MessageSquare, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: Palette,
    title: "Custom Design Approach",
    description:
      "Every project is designed specifically for the business rather than relying on generic templates.",
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    description:
      "Fast loading, responsive experiences optimized across devices.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "Transparent collaboration from planning to launch.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Quality",
    description:
      "Built with scalability, maintainability, and future growth in mind.",
  },
];

const trustBarItems = [
  "Modern Design",
  "Responsive Development",
  "Clean Code",
  "Conversion Focus",
  "Business Growth",
];

export function Trust() {
  return (
    <section id="trust" className="relative">
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-40">
        {/* Section header */}
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Trust &amp; Credibility
          </span>
          <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
            Built Around Trust, Performance, and Results
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-muted-foreground sm:text-lg">
            Every project is approached with attention to detail, modern
            development standards, and a focus on helping businesses establish a
            stronger online presence.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Trust statement */}
          <div className="flex items-center">
            <blockquote className="text-xl font-medium leading-[1.5] tracking-[-0.01em] text-foreground sm:text-[1.35rem] lg:text-[1.5rem]">
              Great websites aren&apos;t just designed. They&apos;re carefully
              crafted to build confidence, communicate value, and help
              businesses grow.
            </blockquote>
          </div>

          {/* Right — Credibility cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card/80 hover:shadow-[0_0_0_1px_oklch(1_0_0_/_0.06),0_24px_60px_-24px_oklch(0_0_0_/_0.5)] sm:p-6"
              >
                {/* Icon */}
                <div className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface/60 transition-all duration-300 group-hover:border-foreground/15 group-hover:bg-surface-elevated">
                  <card.icon className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
                </div>

                {/* Content */}
                <h3 className="mt-4 text-sm font-semibold tracking-[-0.01em] text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-20">
          <div className="flex flex-wrap items-center justify-center gap-y-3">
            {trustBarItems.map((item, index) => (
              <div key={item} className="flex items-center">
                <span className="px-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground sm:px-6">
                  {item}
                </span>
                {index < trustBarItems.length - 1 && (
                  <span className="hidden h-3 w-px bg-border sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
