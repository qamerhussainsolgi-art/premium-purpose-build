const steps = [
  { n: "01", title: "Discovery", desc: "Understanding goals, audience, and business needs." },
  { n: "02", title: "Strategy", desc: "Creating structure, user flows, and content direction." },
  { n: "03", title: "Design", desc: "Crafting a modern experience focused on trust and clarity." },
  { n: "04", title: "Development", desc: "Building a fast, scalable, responsive website." },
  { n: "05", title: "Launch", desc: "Testing, optimization, deployment, and ongoing support." },
];

export function Process() {
  return (
    <section id="process" className="relative">
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-40">
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Process
          </span>
          <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
            A Simple Process Designed Around Results
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-muted-foreground sm:text-lg">
            A clear, collaborative workflow built to remove friction and deliver
            websites that perform from day one.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <ol className="relative mt-20 hidden lg:block">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[18px] h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />
          <div className="grid grid-cols-5 gap-6">
            {steps.map((s) => (
              <li key={s.n} className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-[11px] font-semibold tracking-wide text-foreground">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-6 text-base font-semibold tracking-[-0.01em] text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </li>
            ))}
          </div>
        </ol>

        {/* Mobile/tablet: vertical timeline */}
        <ol className="relative mt-16 lg:hidden">
          <div
            aria-hidden
            className="absolute left-[17px] top-2 bottom-2 w-px bg-gradient-to-b from-border via-border to-transparent"
          />
          <div className="space-y-10">
            {steps.map((s) => (
              <li key={s.n} className="relative pl-14">
                <span className="absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-[11px] font-semibold tracking-wide text-foreground">
                  {s.n}
                </span>
                <h3 className="text-base font-semibold tracking-[-0.01em] text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}
