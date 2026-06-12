import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FinalCTA() {
  return (
    <section id="cta" className="relative">
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-40">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 px-8 py-20 backdrop-blur-sm sm:px-16 sm:py-28">
          {/* Ambient glows */}
          <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[60%] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Let's Talk
            </span>
            <h2 className="mt-5 text-balance text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-6xl">
              Ready to Build Something{" "}
              <span className="font-display italic font-normal tracking-[-0.02em] bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
                Exceptional?
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
              Whether you need a new website, a redesign, or a conversion-focused
              landing page, let's create an experience that helps your business grow.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all duration-300 cta-glow hover:cta-glow-hover"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all duration-300 hover:border-foreground/20 hover:bg-surface-elevated"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Call
              </Link>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Response within 24 hours · No commitment required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
