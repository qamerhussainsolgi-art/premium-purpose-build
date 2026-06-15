import { Link } from "@tanstack/react-router";
import { Mail, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Work", to: "/work" as const },
  { label: "Services", to: "/services" as const },
  { label: "Insights", to: "/insights" as const },
  { label: "Resources", to: "/resources" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 lg:pt-32">
        {/* Large statement */}
        <div className="max-w-4xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Let's talk
          </span>
          <h2 className="mt-5 text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
            Let's build something{" "}
            <span className="font-display italic font-normal tracking-[-0.02em] text-foreground/95">
              worth remembering.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
            Helping businesses create modern digital experiences that inspire
            trust and drive long-term growth.
          </p>
          <Link
            to="/contact"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 cta-glow hover:cta-glow-hover"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mid block: brand + nav + contact */}
        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-border pt-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground">
              <span className="font-display text-lg">Qamer Hussain</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Independent web designer & developer crafting premium,
              conversion-focused websites for ambitious teams.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Navigate
            </p>
            <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-foreground/80">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-sm">
              <a
                href="mailto:qamerhussainsolgi@gmail.com"
                className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-foreground/70"
              >
                <Mail className="h-3.5 w-3.5" />
                qamerhussainsolgi@gmail.com
              </a>
              <p className="text-muted-foreground">
                Working remotely · Worldwide
              </p>
              <p className="text-muted-foreground">
                Response within 24 hours
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Qamer Hussain. All rights reserved.</p>
          <p>Designed & built with care.</p>
        </div>
      </div>
    </footer>
  );
}
