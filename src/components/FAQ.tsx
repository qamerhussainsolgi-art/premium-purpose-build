import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FAQItem = { q: string; a: string };

export function FAQ({
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  intro,
  items,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  items: FAQItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-24 lg:py-32">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-5 max-w-md text-base leading-[1.7] text-muted-foreground">
              {intro}
            </p>
          )}
        </div>
        <dl className="divide-y divide-border border-y border-border">
          {items.map((f, i) => {
            const active = open === i;
            return (
              <div key={f.q}>
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpen(active ? null : i)}
                    aria-expanded={active}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-medium text-foreground transition-colors hover:text-foreground/80 sm:text-lg"
                  >
                    <span className="tracking-[-0.01em]">{f.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-surface/60 text-foreground transition-colors">
                      {active ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                </dt>
                <dd
                  className={`grid overflow-hidden text-sm leading-[1.75] text-muted-foreground transition-all duration-300 sm:text-[15px] ${
                    active ? "grid-rows-[1fr] opacity-100 pb-6 pr-12" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">{f.a}</div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}