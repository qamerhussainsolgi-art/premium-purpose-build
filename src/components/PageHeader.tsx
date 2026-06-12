import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-0 ambient-glow" />
      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:pb-28 lg:pt-32">
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-balance text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
