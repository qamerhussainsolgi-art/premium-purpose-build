import {
  ArrowRight,
  Zap,
  Smartphone,
  Search,
  MousePointerClick,
  Circle,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const trustSignals = [
  "Freelance Developer",
  "Fast Delivery",
  "Clean Modern Code",
  "100% Custom Design",
];

const capabilities = [
  { icon: Zap, label: "Fast Performance", meta: "Built for speed" },
  { icon: Smartphone, label: "Responsive Design", meta: "Mobile-first" },
  { icon: Search, label: "SEO Optimized", meta: "Semantic HTML" },
  { icon: MousePointerClick, label: "Conversion UI", meta: "Tested flows" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Backgrounds */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="pointer-events-none absolute inset-0 ambient-glow" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-28 pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:pb-40 lg:pt-32">
        {/* LEFT */}
        <div className="flex flex-col justify-center animate-hero-rise">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Available for new projects · Q3 2026
          </div>

          <h1 className="mt-8 text-balance text-[2.25rem] font-semibold leading-[1.06] tracking-[-0.035em] text-foreground sm:text-[2.75rem] md:text-6xl lg:text-[4.4rem] lg:leading-[1.02]">
            Websites that{" "}
            <span className="font-display italic font-normal tracking-[-0.02em] text-foreground/95">
              build trust
            </span>
            ,<br className="hidden sm:block" /> convert visitors, and{" "}
            <span className="font-display italic font-normal tracking-[-0.02em] bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              grow brands.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-[1.05rem] leading-[1.7] text-muted-foreground sm:text-lg">
            I'm Qamer — a freelance web developer building modern, fast, and
            scalable websites for startups and online businesses that need a
            stronger digital presence.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                preload="intent"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 cta-glow hover:cta-glow-hover"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(1 0 0 / 0.15), transparent 55%)",
                  }}
                />
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/work"
                preload="intent"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all duration-300 hover:border-foreground/20 hover:bg-surface-elevated"
              >
                View Work
              </Link>
            </div>
          </div>

          <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-block h-1 w-1 rounded-full bg-emerald-400" />
            Response within 24 hours · No commitment required
          </p>

          {/* Trust signals — inline, dot-separated */}
          <ul className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-muted-foreground sm:text-[13px]">
            {trustSignals.map((t, i) => (
              <li key={t} className="flex items-center gap-2">
                <span className="tracking-wide">{t}</span>
                {i < trustSignals.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-border" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — Product visual */}
        <div
          className="relative hidden min-h-[540px] animate-hero-rise sm:block lg:min-h-[620px]"
          style={{ animationDelay: "120ms" }}
        >
          {/* Soft glow behind */}
          <div className="absolute -inset-10 -z-10 rounded-full bg-accent/10 blur-3xl" />

          {/* Main browser card — floating */}
          <div className="absolute left-0 right-8 top-2 animate-float-slow rounded-xl border border-border bg-card shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <Circle className="h-2.5 w-2.5 fill-red-400/70 text-red-400/70" />
              <Circle className="h-2.5 w-2.5 fill-yellow-400/70 text-yellow-400/70" />
              <Circle className="h-2.5 w-2.5 fill-emerald-400/70 text-emerald-400/70" />
              <div className="ml-3 flex-1">
                <div className="mx-auto w-fit rounded-md bg-background/60 px-3 py-1 text-[11px] text-muted-foreground">
                  https://yourbusiness.com
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="h-2.5 w-20 rounded-full bg-foreground/80" />
                <div className="flex gap-2">
                  <div className="h-2 w-10 rounded-full bg-muted" />
                  <div className="h-2 w-10 rounded-full bg-muted" />
                  <div className="h-2 w-14 rounded-full bg-accent/70" />
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <div className="h-3 w-3/4 rounded-md bg-foreground/85" />
                <div className="h-3 w-2/3 rounded-md bg-foreground/60" />
                <div className="mt-3 h-2 w-full rounded-md bg-muted" />
                <div className="h-2 w-5/6 rounded-md bg-muted" />
              </div>
              <div className="mt-5 flex gap-2">
                <div className="h-8 w-28 rounded-full bg-foreground" />
                <div className="h-8 w-24 rounded-full border border-border" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-border bg-surface p-3"
                  >
                    <div className="h-1.5 w-8 rounded-full bg-accent/80" />
                    <div className="mt-2 h-2 w-full rounded bg-muted" />
                    <div className="mt-1.5 h-2 w-2/3 rounded bg-muted" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile preview — floating slower */}
          <div className="absolute -right-2 top-32 hidden w-[160px] animate-float-slower rounded-[1.4rem] border border-border bg-card p-2 shadow-2xl shadow-black/50 sm:block">
            <div className="rounded-[1rem] border border-border bg-background p-3">
              <div className="mx-auto h-1 w-10 rounded-full bg-muted" />
              <div className="mt-3 h-16 rounded-md bg-gradient-to-br from-accent/40 to-accent/10" />
              <div className="mt-3 space-y-1.5">
                <div className="h-2 w-3/4 rounded bg-foreground/70" />
                <div className="h-1.5 w-full rounded bg-muted" />
                <div className="h-1.5 w-5/6 rounded bg-muted" />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-1.5">
                <div className="h-10 rounded-md bg-surface" />
                <div className="h-10 rounded-md bg-surface" />
              </div>
              <div className="mt-3 h-6 rounded-full bg-foreground" />
            </div>
          </div>

          {/* Capability cards strip */}
          <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-3">
            {capabilities.map(({ icon: Icon, label, meta }) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-card/80 p-3 backdrop-blur transition-colors duration-300 hover:border-foreground/15"
              >
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-surface-elevated text-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-xs font-medium text-foreground">
                      {label}
                    </div>
                    <div className="truncate text-[11px] text-muted-foreground">
                      {meta}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
