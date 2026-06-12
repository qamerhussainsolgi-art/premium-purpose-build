import { Sparkles, Layers, TrendingUp, Clock } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Tailored for Your Brand",
    description:
      "No cookie-cutter templates. Every website is designed around your brand identity, audience, and business goals.",
  },
  {
    icon: Layers,
    title: "Modern Development Standards",
    description:
      "Built with clean, scalable code using the latest technologies for long-term reliability and easy maintenance.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-Ready Structure",
    description:
      "Strategic layouts and clear calls-to-action designed to turn visitors into leads, customers, and loyal clients.",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    description:
      "Clear timelines, consistent updates, and a commitment to launching on schedule without compromising quality.",
  },
];

export function WhyWorkWithMe() {
  return (
    <section id="why" className="relative">
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-40">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Heading, text, CTA */}
          <div className="flex flex-col justify-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Why Work With Me
            </span>
            <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
              Websites built to{" "}
              <span className="bg-gradient-to-r from-foreground via-accent to-accent bg-clip-text text-transparent">
                convert
              </span>
              , not just impress
            </h2>
            <p className="mt-5 max-w-md text-base leading-[1.7] text-muted-foreground sm:text-lg">
              I focus on creating digital experiences that are visually
              striking, strategically structured, and optimized to drive real
              business growth.
            </p>
            <div className="mt-10">
              <a
                href="#contact"
                className="cta-glow inline-flex items-center justify-center rounded-full bg-gradient-to-r from-foreground to-foreground/90 px-7 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:cta-glow-hover"
              >
                Book a Free Discovery Call
              </a>
            </div>
          </div>

          {/* Right — Reasons grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card/80 hover:shadow-[0_0_0_1px_oklch(1_0_0_/_0.06),0_24px_60px_-24px_oklch(0_0_0_/_0.5)] sm:p-6"
              >
                {/* Icon */}
                <div className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface/60 transition-all duration-300 group-hover:border-foreground/15 group-hover:bg-surface-elevated">
                  <reason.icon className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
                </div>

                {/* Content */}
                <h3 className="mt-4 text-sm font-semibold tracking-[-0.01em] text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
