import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import projectSaaS from "@/assets/project-saas.jpg";
import projectFinance from "@/assets/project-finance.jpg";
import projectAgency from "@/assets/project-agency.jpg";

const projects = [
  {
    slug: "md-industry",
    image: projectSaaS,
    name: "MD Industry",
    category: "FMCG Manufacturing",
    outcome:
      "A polished digital catalog that builds trust with B2B buyers and distributors.",
  },
  {
    slug: "design-fabrics",
    image: projectFinance,
    name: "Design Fabrics",
    category: "Wholesale Clothing",
    outcome:
      "A storefront-style catalog and landing page giving wholesale buyers a credible first touchpoint.",
  },
  {
    slug: "shaheen-outfitter",
    image: projectAgency,
    name: "Shaheen Outfitter",
    category: "Apparel & Retail",
    outcome:
      "A modern, mobile-first storefront with clear product focus and brand identity.",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="relative">
      {/* Soft top gradient for seamless transition from hero */}
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-32 bg-gradient-to-b from-background to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-40">
        {/* Section header */}
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Featured Projects
          </span>
          <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
            Selected Work
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-muted-foreground sm:text-lg">
            A curated collection of websites focused on trust, conversion, and
            exceptional user experience.
          </p>
        </div>

        {/* Project cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <Link
              key={project.name}
              to="/work"
              hash={project.slug}
              preload="intent"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card/80 hover:shadow-[0_0_0_1px_oklch(1_0_0_/_0.06),0_24px_60px_-24px_oklch(0_0_0_/_0.5)]"
            >
              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} — ${project.category} website preview`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                {/* Subtle overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold tracking-[-0.01em] text-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {project.category}
                    </p>
                  </div>
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-surface/60 transition-all duration-300 group-hover:border-foreground/15 group-hover:bg-surface-elevated">
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-all duration-300 group-hover:translate-x-px group-hover:-translate-y-px group-hover:text-foreground" />
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.outcome}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
