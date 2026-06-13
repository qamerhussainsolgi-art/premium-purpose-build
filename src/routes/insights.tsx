import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { FinalCTA } from "@/components/FinalCTA";
import projectSaaS from "@/assets/project-saas.jpg";
import projectFinance from "@/assets/project-finance.jpg";
import projectAgency from "@/assets/project-agency.jpg";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Web Design" | "Development" | "UX" | "Performance" | "Business";
  readTime: string;
  date: string;
  cover: string;
  feature?: boolean;
};

const articles: Article[] = [
  {
    slug: "ten-seconds-that-decide",
    title: "The ten seconds that decide your conversion rate",
    excerpt:
      "Most visitors form a judgement before they ever scroll. Here's how to design a hero that earns the next ten seconds — and the ones after that.",
    category: "Web Design",
    readTime: "6 min read",
    date: "May 28, 2026",
    cover: projectSaaS,
    feature: true,
  },
  {
    slug: "why-most-redesigns-fail",
    title: "Why most website redesigns fail before they ship",
    excerpt:
      "Redesigns rarely fail in design or code. They fail in scoping. A short guide to setting up a redesign that actually moves the business.",
    category: "Business",
    readTime: "8 min read",
    date: "May 14, 2026",
    cover: projectFinance,
  },
  {
    slug: "performance-as-a-design-decision",
    title: "Performance is a design decision, not a development one",
    excerpt:
      "Speed isn't a metric you optimise at the end. It's a constraint you design under — and the difference shows up everywhere.",
    category: "Performance",
    readTime: "5 min read",
    date: "Apr 30, 2026",
    cover: projectAgency,
  },
  {
    slug: "designing-trust-into-ux",
    title: "Designing trust into every interaction",
    excerpt:
      "Trust isn't a badge or a testimonial — it's the cumulative effect of a hundred small decisions made in the user's favour.",
    category: "UX",
    readTime: "7 min read",
    date: "Apr 12, 2026",
    cover: projectFinance,
  },
  {
    slug: "ship-less-ship-better",
    title: "Ship less. Ship better.",
    excerpt:
      "On the discipline of removing features to make the remaining ones unmistakable — and why restraint reads as confidence.",
    category: "Development",
    readTime: "4 min read",
    date: "Mar 27, 2026",
    cover: projectSaaS,
  },
  {
    slug: "writing-for-the-web",
    title: "How writing well makes everything else easier",
    excerpt:
      "Clear copy fixes interface problems you didn't know you had. A short essay on writing as the first design tool.",
    category: "UX",
    readTime: "5 min read",
    date: "Mar 9, 2026",
    cover: projectAgency,
  },
];

const categories = ["All", "Web Design", "Development", "UX", "Performance", "Business"] as const;

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Perspectives — Qamer Hussain" },
      {
        name: "description",
        content:
          "Essays on web design, development, conversion, UX, and the craft of building better digital experiences.",
      },
      { property: "og:title", content: "Insights — Qamer Hussain" },
      {
        property: "og:description",
        content:
          "Thinking on web design, development, conversion, and the craft of better digital experiences.",
      },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const feature = articles.find((a) => a.feature) ?? articles[0];
  const rest = articles.filter((a) => a.slug !== feature.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Insights"
          title={
            <>
              Insights &{" "}
              <span className="font-display italic font-normal tracking-[-0.02em] text-foreground/95">
                perspectives.
              </span>
            </>
          }
          intro="Thoughts on web design, development, conversion optimization, digital products, and the craft of building better online experiences."
        />

        {/* Category chips */}
        <section className="relative border-b border-border">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-6">
            {categories.map((c, i) => (
              <button
                key={c}
                type="button"
                className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
                  i === 0
                    ? "border-foreground/30 bg-foreground text-background"
                    : "border-border bg-surface/60 text-muted-foreground hover:border-foreground/20 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* Featured article */}
        <section className="relative mx-auto max-w-7xl px-6 pt-20 lg:pt-28">
          <article className="group grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 overflow-hidden rounded-3xl border border-border bg-card/60 lg:order-1">
              <img
                src={feature.cover}
                alt={feature.title}
                loading="eager"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                <span className="rounded-full border border-border bg-surface/60 px-3 py-1 text-foreground">
                  Featured
                </span>
                <span>{feature.category}</span>
              </div>
              <h2 className="mt-6 text-balance text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
                {feature.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-[1.75] text-muted-foreground sm:text-[17px]">
                {feature.excerpt}
              </p>
              <div className="mt-8 flex items-center gap-5 text-xs text-muted-foreground">
                <span>{feature.date}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {feature.readTime}
                </span>
              </div>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </article>
        </section>

        {/* Article grid */}
        <section className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {rest.map((a) => (
              <article key={a.slug} className="group flex flex-col">
                <div className="overflow-hidden rounded-2xl border border-border bg-card/60">
                  <img
                    src={a.cover}
                    alt={a.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  <span>{a.category}</span>
                  <span className="h-0.5 w-0.5 rounded-full bg-muted-foreground/60" />
                  <span className="inline-flex items-center gap-1.5 normal-case tracking-normal">
                    <Clock className="h-3 w-3" />
                    {a.readTime}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold leading-[1.2] tracking-[-0.02em] text-foreground transition-colors group-hover:text-foreground/80 sm:text-[1.4rem]">
                  {a.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-[1.7] text-muted-foreground">
                  {a.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{a.date}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}