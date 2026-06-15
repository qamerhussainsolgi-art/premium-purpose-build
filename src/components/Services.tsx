import { Layout, Code2, Target, Check } from "lucide-react";

const services = [
  {
    icon: Layout,
    eyebrow: "01 — Design",
    title: "Website Design",
    focus: "Brand perception, user trust, and visual hierarchy.",
    description:
      "A premium, conversion-aware design system tailored to how your audience actually decides — so your site earns trust the moment it loads.",
    deliverables: [
      "Brand-aligned visual system",
      "Wireframes & high-fidelity design",
      "Responsive design for every breakpoint",
      "Design QA and handoff",
    ],
    timeline: "2 – 4 weeks",
    idealFor: "Founders refining their positioning and ready to raise the bar visually.",
  },
  {
    icon: Code2,
    eyebrow: "02 — Build",
    title: "Website Development",
    focus: "Speed, scalability, and long-term performance.",
    description:
      "Production-grade development with clean architecture, fast load times, and an editing setup your team can confidently grow with.",
    deliverables: [
      "Modern React codebase",
      "Performance & Core Web Vitals tuning",
      "Tailwind CSS styling",
      "Analytics & SEO foundations",
    ],
    timeline: "3 – 6 weeks",
    idealFor: "Teams replacing dated stacks or scaling beyond a builder template.",
  },
  {
    icon: Target,
    eyebrow: "03 — Convert",
    title: "Conversion-Focused Landing Pages",
    focus: "Lead generation, sales, and user action.",
    description:
      "Single-purpose pages engineered around one outcome — qualified leads, signups, or bookings — backed by clear messaging and refined UX.",
    deliverables: [
      "Positioning & messaging strategy",
      "Conversion-optimised page design",
      "Fast, lightweight build",
      "A/B test-ready structure",
    ],
    timeline: "1 – 2 weeks",
    idealFor: "Businesses running campaigns, launches, or paid acquisition.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative">
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-40">
        {/* Section header */}
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Services
          </span>
          <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
            Built to Help Businesses Grow Online
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-muted-foreground sm:text-lg">
            From strategy and design to development and launch, every website
            is crafted to build trust, improve user experience, and generate
            business results.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative grid grid-cols-1 gap-8 overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-500 hover:border-foreground/20 hover:bg-card/80 hover:shadow-[0_0_0_1px_oklch(1_0_0_/_0.06),0_24px_60px_-24px_oklch(0_0_0_/_0.5)] sm:p-10 lg:grid-cols-[1.2fr_1fr]"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 transition-all duration-300 group-hover:border-foreground/15 group-hover:bg-surface-elevated">
                    <service.icon className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {service.eyebrow}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-foreground/80">
                  {service.focus}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  {service.description}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Typical timeline
                    </p>
                    <p className="mt-2 text-sm text-foreground">{service.timeline}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Ideal for
                    </p>
                    <p className="mt-2 text-sm text-foreground/90">{service.idealFor}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border/80 bg-surface/40 p-6 sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  What's included
                </p>
                <ul className="mt-5 space-y-3.5 text-sm text-foreground/90">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <p className="mt-20 text-center text-sm leading-relaxed text-muted-foreground">
          Focused on quality, performance, and long-term business value.
        </p>
      </div>
    </section>
  );
}
