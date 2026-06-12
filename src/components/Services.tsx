import { Layout, Code2, Target } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Website Design",
    description:
      "Create modern, conversion-focused website designs with clear structure, strong visual hierarchy, and premium user experience.",
  },
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Develop fast, responsive, scalable websites with clean code, smooth interactions, and excellent performance across devices.",
  },
  {
    icon: Target,
    title: "Landing Pages",
    description:
      "Design focused landing pages built specifically to generate leads, inquiries, bookings, and sales.",
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
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card/80 hover:shadow-[0_0_0_1px_oklch(1_0_0_/_0.06),0_24px_60px_-24px_oklch(0_0_0_/_0.5)] sm:p-8"
            >
              {/* Icon */}
              <div className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 transition-all duration-300 group-hover:border-foreground/15 group-hover:bg-surface-elevated">
                <service.icon className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
              </div>

              {/* Content */}
              <h3 className="mt-5 text-base font-semibold tracking-[-0.01em] text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
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
