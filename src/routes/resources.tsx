import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronDown, CheckSquare, Compass } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { FinalCTA } from "@/components/FinalCTA";

const checklist = [
  "Clear, one-line answer to 'what do you do?' on the homepage",
  "Mobile-first layout that reads well on a phone",
  "Working contact options — WhatsApp, email, phone",
  "Real business email (not a generic free address)",
  "Sharp, well-lit product or service photos",
  "Fast load time — under 3 seconds on mobile data",
  "No broken links or empty pages",
  "Clear call-to-action on every page",
  "About page that explains who's behind the business",
  "Trust signals — reviews, testimonials, or client logos",
  "Basic SEO — page titles, meta descriptions, image alt text",
  "Favicon and social share preview set up properly",
  "Privacy and contact details easy to find",
  "Analytics installed so you can see what's working",
];

const expectations = [
  {
    title: "A short discovery conversation",
    body: "We start with a call or message exchange to understand your business, your customers, and what success looks like — before any design or code is written.",
  },
  {
    title: "A clear scope and timeline",
    body: "You get a written summary of what's included, what isn't, how long it will take, and what's expected from your side. No surprises later.",
  },
  {
    title: "Regular previews, not surprises",
    body: "You see the work as it takes shape, with chances to give feedback at the right moments — instead of one big reveal at the end.",
  },
  {
    title: "Honest, direct communication",
    body: "If something needs more time, I'll tell you. If you're asking for something that won't help your business, I'll say so. You're hiring a partner, not an order-taker.",
  },
  {
    title: "A handover you can actually use",
    body: "After launch you get the basics you need — access, simple editing instructions, and answers to your questions — so the site keeps serving you long after the project ends.",
  },
];

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Website Readiness Checklist & Working Guide" },
      {
        name: "description",
        content:
          "A practical Website Readiness Checklist and a short guide to what to expect when working with Qamer Hussain.",
      },
      { property: "og:title", content: "Resources — Qamer Hussain" },
      {
        property: "og:description",
        content:
          "A Website Readiness Checklist and a short guide to working together.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const [openChecklist, setOpenChecklist] = useState(true);
  const [openExpectations, setOpenExpectations] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Resources"
          title={
            <>
              Useful, no-nonsense{" "}
              <span className="font-display italic font-normal tracking-[-0.02em] text-foreground/95">
                resources.
              </span>
            </>
          }
          intro="A short, practical checklist and a clear guide to working together — read inline, no downloads required."
        />

        <section className="relative mx-auto max-w-5xl space-y-10 px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
          {/* Checklist */}
          <article className="overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm sm:p-12">
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-foreground">
                  <CheckSquare className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Checklist
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
                    Website Readiness Checklist
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpenChecklist((v) => !v)}
                aria-expanded={openChecklist}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/20"
              >
                {openChecklist ? "Hide" : "View checklist"}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${
                    openChecklist ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-[1.75] text-muted-foreground sm:text-[15px]">
              A short list to sanity-check your website before launch — or to
              audit the one you already have.
            </p>
            {openChecklist && (
              <ul className="mt-8 grid grid-cols-1 gap-3 border-t border-border pt-8 sm:grid-cols-2">
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>

          {/* Working together */}
          <article className="overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm sm:p-12">
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-foreground">
                  <Compass className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Guide
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
                    What to expect when working with me
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpenExpectations((v) => !v)}
                aria-expanded={openExpectations}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/20"
              >
                {openExpectations ? "Hide" : "View guide"}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${
                    openExpectations ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-[1.75] text-muted-foreground sm:text-[15px]">
              A short, honest summary of how I work — so you know exactly what
              the experience looks like before you reach out.
            </p>
            {openExpectations && (
              <ol className="mt-8 space-y-6 border-t border-border pt-8">
                {expectations.map((item, i) => (
                  <li key={item.title} className="flex gap-5">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-surface text-[11px] font-semibold text-foreground">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold tracking-[-0.01em] text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-[1.75] text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </article>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}