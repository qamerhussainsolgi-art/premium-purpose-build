import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
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
  category: "Web Design" | "Small Business" | "UX" | "Trust" | "Business";
  readTime: string;
  date: string;
  cover: string;
  body: string[];
  feature?: boolean;
};

const articles: Article[] = [
  {
    slug: "website-vs-social-media",
    title: "Why your business needs a website even if you're active on social media",
    excerpt:
      "Social pages help people find you. A website is what convinces them to trust you. Here's why both matter — and why a website does work social can't.",
    category: "Small Business",
    readTime: "4 min read",
    date: "Recently published",
    cover: projectSaaS,
    feature: true,
    body: [
      "Most small businesses in Pakistan get their first customers through Instagram, Facebook, or WhatsApp. That's a great start — but a social profile is rented space. The algorithm decides who sees your posts, your old content disappears, and serious buyers often hesitate to take a business seriously when there's no website behind the brand.",
      "A website is your owned home on the internet. It works 24/7, ranks on Google, and gives potential customers one professional place to see your products, your story, and how to contact you. It's the difference between handing someone a printed catalog and showing them a folder of screenshots.",
      "If you sell to other businesses — wholesalers, distributors, B2B buyers — a website is almost non-negotiable. Buyers Google you before they reply. If they can't find a clean, professional site, you've lost trust before the conversation even starts.",
      "You don't need a huge website to begin. A simple, well-designed one-pager with your offer, a few photos, contact details, and a WhatsApp button is enough to look serious — and to start winning the customers your social accounts can't.",
    ],
  },
  {
    slug: "what-makes-a-website-trustworthy",
    title: "What makes a website trustworthy to customers",
    excerpt:
      "Trust isn't built by fancy animations. It's built by clarity, honesty, and small details that signal you're a real business that cares.",
    category: "Trust",
    readTime: "4 min read",
    date: "Recently published",
    cover: projectFinance,
    body: [
      "When someone lands on your website, they make a decision in seconds: does this feel like a real business, or not? That decision rarely comes from your logo or your colors. It comes from small signals working together.",
      "Clear messaging is the first one. If a visitor can't tell what you do and who you do it for in the first ten seconds, they leave. A trustworthy site says one thing well, instead of trying to say everything at once.",
      "Real contact information matters more than people realise. A phone number, a WhatsApp button, a business address, an email that matches your domain — these tiny details tell visitors you have nothing to hide. A generic Gmail address with no phone number quietly does the opposite.",
      "Quality of presentation is the third pillar. Sharp photos, proper spacing, no broken links, fast loading. You don't need to be flashy — you need to look cared for. A neglected website tells visitors you might neglect them too.",
    ],
  },
  {
    slug: "common-first-website-mistakes",
    title: "Common mistakes small businesses make with their first website",
    excerpt:
      "Most first websites underperform for the same handful of reasons. Avoid these and you'll already be ahead of most competitors.",
    category: "Small Business",
    readTime: "5 min read",
    date: "Recently published",
    cover: projectAgency,
    body: [
      "The most common mistake is trying to say everything at once. Owners feel they have to list every product, every service, every detail on the homepage. The result is a wall of text no one reads. A good homepage focuses on one message: who you help, what you do for them, and why they should care.",
      "The second mistake is ignoring mobile. In Pakistan, the majority of your visitors are on a phone. If your site is hard to read or tap on a small screen, you're losing most of your traffic — no matter how nice it looks on a laptop.",
      "The third is no clear next step. Every page should make it obvious what the visitor should do next: message you on WhatsApp, request a quote, view the catalog, call. If you make people guess, they leave.",
      "Finally, treating the website as a one-time project. A website is not a brochure — it's a living asset. Update your products, fix what's broken, refresh photos, and improve the parts that aren't working. Small, consistent improvements compound into a site that genuinely grows the business.",
    ],
  },
];

const categories = ["All", "Small Business", "Trust", "Web Design"] as const;

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
  const [openSlugs, setOpenSlugs] = useState<Record<string, boolean>>({});
  const toggle = (slug: string) =>
    setOpenSlugs((s) => ({ ...s, [slug]: !s[slug] }));

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
                <button
                  type="button"
                  onClick={() => toggle(feature.slug)}
                  aria-expanded={!!openSlugs[feature.slug]}
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  {openSlugs[feature.slug] ? "Hide article" : "Read article"}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openSlugs[feature.slug] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSlugs[feature.slug] && (
                  <div className="mt-8 max-w-2xl space-y-5 border-t border-border pt-8 text-[15px] leading-[1.8] text-muted-foreground">
                    {feature.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        </section>

        {/* Article grid */}
        <section className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
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
                  <button
                    type="button"
                    onClick={() => toggle(a.slug)}
                    aria-expanded={!!openSlugs[a.slug]}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
                  >
                    {openSlugs[a.slug] ? "Hide" : "Read article"}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        openSlugs[a.slug] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {openSlugs[a.slug] && (
                  <div className="mt-6 space-y-4 border-t border-border pt-6 text-sm leading-[1.8] text-muted-foreground">
                    {a.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                )}
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