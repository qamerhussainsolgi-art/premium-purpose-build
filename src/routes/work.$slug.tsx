import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Lightbulb, Wrench, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import projectSaaS from "@/assets/project-saas.jpg";
import projectFinance from "@/assets/project-finance.jpg";
import projectAgency from "@/assets/project-agency.jpg";

type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  summary: string;
  image: string;
  challenge: string;
  strategy: string;
  solution: { design: string; ux: string; dev: string; perf: string };
  outcomes: { value: string; label: string }[];
  gallery: { src: string; caption: string; tall?: boolean }[];
  meta: { role: string; timeline: string; year: string };
  before: string[];
  after: string[];
  learnings: { title: string; body: string }[];
  techStack: string[];
  resultsSummary: string;
};

const studies: Record<string, CaseStudy> = {
  flowstate: {
    slug: "flowstate",
    name: "FlowState",
    industry: "SaaS · Productivity",
    summary:
      "Rebuilding a productivity SaaS website around a single, clear value proposition — turning a confused funnel into a guided activation path.",
    image: projectSaaS,
    challenge:
      "FlowState had a strong product, but the marketing site tried to say everything to everyone. Onboarding asked for too much, too soon, and trial activation suffered. Visitors couldn't articulate what the product actually did within ten seconds of landing.",
    strategy:
      "We collapsed the messaging into one outcome the product genuinely delivered — focused, deep-work sessions — and rebuilt the visitor's first ten seconds around that promise. Every section, every CTA, every onboarding step had to either prove that promise or be removed.",
    solution: {
      design:
        "A confident, editorial visual system with a single hero statement, calm typography, and intentional whitespace replaced a busy multi-column layout.",
      ux:
        "Onboarding dropped from 7 steps to 3. Each step now has a single visible action, with progress made obvious and friction kept invisible.",
      dev:
        "Migrated the marketing site to a modern React stack with SSR, edge-cached pages, and an instant-feel client transition between hero and pricing.",
      perf:
        "Image pipeline, font loading, and JS payload all rebuilt from scratch — pushing all Core Web Vitals into the green on mobile.",
    },
    outcomes: [
      { value: "+38%", label: "Trial activation" },
      { value: "−52%", label: "Landing bounce" },
      { value: "1.9s", label: "LCP on mobile" },
      { value: "+27%", label: "Signup → paid" },
    ],
    gallery: [
      { src: projectSaaS, caption: "Hero — focused, single-promise headline." },
      { src: projectFinance, caption: "Activation flow reduced to three steps.", tall: true },
      { src: projectAgency, caption: "Pricing structured around outcomes, not features." },
    ],
    meta: { role: "Design & Development", timeline: "5 weeks", year: "2025" },
    before: [
      "Confused, multi-message hero",
      "Seven-step onboarding",
      "Mobile LCP over 4 seconds",
      "Trial-to-paid below 5%",
    ],
    after: [
      "Single-promise hero in ten seconds",
      "Three-step guided activation",
      "Mobile LCP at 1.9 seconds",
      "Trial-to-paid above 11%",
    ],
    learnings: [
      {
        title: "Onboarding length isn't the problem",
        body: "Cutting steps didn't lift activation — clarifying the next action did. Steps are cheap; ambiguity is expensive.",
      },
      {
        title: "Pricing is positioning",
        body: "Restructuring tiers around outcomes (not seats or features) closed the gap between curious visitors and paying users.",
      },
      {
        title: "Perf compounds with trust",
        body: "Faster pages didn't just help SEO — they made every other improvement feel more credible.",
      },
    ],
    techStack: ["React", "TanStack Start", "Tailwind v4", "Edge SSR", "Cloudflare"],
    resultsSummary:
      "A clearer story, a guided activation, and a measurably faster surface — together moving trial activation up 38% and signup-to-paid up 27% in the first quarter post-launch.",
  },
  "finedge-capital": {
    slug: "finedge-capital",
    name: "FinEdge Capital",
    industry: "Financial Services",
    summary:
      "Repositioning a boutique finance firm with a premium content-led site that signals trust and qualifies inbound leads before the first call.",
    image: projectFinance,
    challenge:
      "FinEdge served sophisticated clients but the site read like a directory listing. Inbound was high in volume but low in quality, and senior partners spent hours each week qualifying inquiries that should have self-selected out earlier.",
    strategy:
      "Treat the website as the first partner interaction. Use voice, evidence, and restraint to attract decision-makers and gently filter out everyone else. Lead with thinking, not features.",
    solution: {
      design:
        "An editorial layout system with serif display type, generous spacing, and credibility cues placed exactly where research-driven buyers look first.",
      ux:
        "A reworked inquiry path that asks the right qualifying questions up front, so partners only see leads worth their time.",
      dev:
        "Headless CMS integration so the team can publish market commentary without touching design — keeping the site visibly active.",
      perf:
        "Sub-second TTFB across regions via edge rendering, plus instant page navigation for a refined, app-like feel.",
    },
    outcomes: [
      { value: "+64%", label: "Qualified leads" },
      { value: "2.1×", label: "Consultations booked" },
      { value: "−41%", label: "Time to qualify" },
      { value: "98", label: "Lighthouse perf" },
    ],
    gallery: [
      { src: projectFinance, caption: "Editorial home — trust before product." },
      { src: projectAgency, caption: "Insight pages built for sharing and search.", tall: true },
      { src: projectSaaS, caption: "Inquiry flow that qualifies, not just collects." },
    ],
    meta: { role: "Strategy, Design & Build", timeline: "6 weeks", year: "2025" },
    before: [
      "Directory-style homepage",
      "Generic inquiry form",
      "Inconsistent partner inbound",
      "Hours spent qualifying weekly",
    ],
    after: [
      "Editorial, trust-led homepage",
      "Qualifying inquiry path",
      "Decision-maker inbound",
      "Time to qualify down 41%",
    ],
    learnings: [
      {
        title: "The site IS the first meeting",
        body: "Sophisticated buyers decide before they call. The bar for tone, evidence, and restraint is set by their other advisors — not other websites.",
      },
      {
        title: "Qualification is a feature",
        body: "Asking better questions up front isn't friction — it's a signal of seriousness that the right clients respect.",
      },
      {
        title: "Quiet design reads as confidence",
        body: "Restraint, whitespace, and a slower pace did more for credibility than any badge or testimonial ever could.",
      },
    ],
    techStack: ["React", "Headless CMS", "Edge Rendering", "TypeScript", "Sanity"],
    resultsSummary:
      "A repositioned, evidence-led website that turned a noisy inbound channel into a qualified pipeline — lifting qualified leads 64% and doubling booked consultations.",
  },
  "studio-meridian": {
    slug: "studio-meridian",
    name: "Studio Meridian",
    industry: "Creative Agency",
    summary:
      "Rebuilding a respected studio's portfolio as a project-first editorial experience that finally matches the caliber of the work.",
    image: projectAgency,
    challenge:
      "Meridian's work was world-class. The site wasn't. A dated grid of thumbnails buried the studio's thinking, and inbound was inconsistent — they were being judged on the site, not the projects.",
    strategy:
      "Lead with project narrative, not thumbnails. Treat each case study as a chapter, with the studio's process and rationale visible alongside the visuals. Make the navigation feel like a magazine, not a directory.",
    solution: {
      design:
        "A magazine-style layout system with large-format imagery, considered typography, and quiet motion that lets the work breathe.",
      ux:
        "Project-first information architecture. Visitors land in a story, not a grid, and exit knowing how the studio thinks.",
      dev:
        "Custom-built case study templates, lazy-loaded asset pipeline, and a CMS the team can run without designer involvement.",
      perf:
        "Heavy imagery handled gracefully — adaptive formats, blurred placeholders, and route-level preloading keep the feel premium even on weaker connections.",
    },
    outcomes: [
      { value: "3×", label: "Inbound inquiries" },
      { value: "+82%", label: "Avg. session time" },
      { value: "+44%", label: "Case study reads" },
      { value: "0.04", label: "CLS score" },
    ],
    gallery: [
      { src: projectAgency, caption: "Editorial home — chapters, not thumbnails." },
      { src: projectSaaS, caption: "Case study template with process and visuals.", tall: true },
      { src: projectFinance, caption: "Quiet navigation, designed to disappear." },
    ],
    meta: { role: "Design & Development", timeline: "7 weeks", year: "2024" },
    before: [
      "Thumbnail-grid portfolio",
      "Hidden process and rationale",
      "Inconsistent inbound quality",
      "Heavy, slow image loads",
    ],
    after: [
      "Chapter-led project narratives",
      "Visible thinking and craft",
      "Aligned, premium inbound",
      "Snappy, adaptive imagery",
    ],
    learnings: [
      {
        title: "Show the thinking, not just the output",
        body: "Clients hired the studio after reading process — not after browsing thumbnails. Narrative converted where grids didn't.",
      },
      {
        title: "A portfolio is a positioning tool",
        body: "Selecting fewer, better-told projects out-performed showing everything. Editing is a form of expertise.",
      },
      {
        title: "Performance is part of the aesthetic",
        body: "Heavy imagery doesn't have to feel heavy. Adaptive formats and route-level preloading kept the premium feel intact.",
      },
    ],
    techStack: ["React", "TanStack Router", "Sanity CMS", "Image CDN", "Motion"],
    resultsSummary:
      "An editorial, project-first portfolio that finally matches the caliber of the work — tripling inbound inquiries and lifting case study reads 44%.",
  },
};

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = studies[params.slug];
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.study;
    const title = s ? `${s.name} — Case Study` : "Case Study";
    const desc = s?.summary ?? "Case study";
    return {
      meta: [
        { title: `${title} · Qamer Hussain` },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center bg-background text-foreground px-6">
      <p className="text-sm text-muted-foreground">Couldn't load case study: {error.message}</p>
    </div>
  ),
  component: CaseStudyPage,
});

function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto grid max-w-2xl place-items-center px-6 py-32 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Not found
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          That case study doesn't exist.
        </h1>
        <Link
          to="/work"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-foreground hover:border-foreground/20 hover:bg-surface-elevated"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to all work
        </Link>
      </main>
      <Footer />
    </div>
  );
}

function CaseStudyPage() {
  const data = Route.useLoaderData() as { study: CaseStudy };
  const s = data.study;
  const others = Object.values(studies).filter((x) => x.slug !== s.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative mx-auto max-w-7xl px-6 pt-32 pb-12 lg:pt-40 lg:pb-20">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Work
          </Link>
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20 lg:items-end">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {s.industry}
              </span>
              <h1 className="mt-4 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
                {s.name}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-[1.75] text-muted-foreground sm:text-[17px]">
                {s.summary}
              </p>
            </div>
            <dl className="grid grid-cols-3 gap-6 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm lg:p-7">
              {[
                { k: "Role", v: s.meta.role },
                { k: "Timeline", v: s.meta.timeline },
                { k: "Year", v: s.meta.year },
              ].map((m) => (
                <div key={m.k}>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {m.k}
                  </dt>
                  <dd className="mt-2 text-sm text-foreground">{m.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-card/60 lg:mt-20">
            <img
              src={s.image}
              alt={`${s.name} — hero showcase`}
              loading="eager"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </section>

        {/* Challenge / Strategy */}
        <section className="relative border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Challenge
                </span>
                <h2 className="mt-4 text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl">
                  What wasn't working.
                </h2>
                <p className="mt-6 text-base leading-[1.85] text-muted-foreground sm:text-[17px]">
                  {s.challenge}
                </p>
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Strategy
                </span>
                <h2 className="mt-4 text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl">
                  The thinking behind it.
                </h2>
                <p className="mt-6 text-base leading-[1.85] text-muted-foreground sm:text-[17px]">
                  {s.strategy}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="relative border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Solution
              </span>
              <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
                How it came together.
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
              {[
                { k: "Design Decisions", v: s.solution.design },
                { k: "UX Improvements", v: s.solution.ux },
                { k: "Development Approach", v: s.solution.dev },
                { k: "Performance", v: s.solution.perf },
              ].map((b) => (
                <div
                  key={b.k}
                  className="rounded-2xl border border-border bg-card/60 p-7 backdrop-blur-sm sm:p-8"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {b.k}
                  </p>
                  <p className="mt-4 text-sm leading-[1.8] text-foreground/90 sm:text-[15px]">
                    {b.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="relative border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Outcome
              </span>
              <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
                Results that moved the business.
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
              {s.outcomes.map((o) => (
                <div key={o.label} className="bg-card/80 p-8 sm:p-10">
                  <p className="font-display text-5xl font-normal tracking-[-0.02em] text-foreground sm:text-6xl">
                    {o.value}
                  </p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {o.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery — magazine layout */}
        <section className="relative border-t border-border">
          {/* placeholder to keep diff stable */}
          <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="max-w-xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Gallery
              </span>
              <h2 className="mt-4 text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl">
                Selected moments.
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
              <figure className="overflow-hidden rounded-2xl border border-border bg-card/60 lg:col-span-12">
                <img src={s.gallery[0].src} alt={s.gallery[0].caption} loading="lazy" className="aspect-[21/9] w-full object-cover" />
                <figcaption className="px-6 py-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.gallery[0].caption}
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-border bg-card/60 lg:col-span-5">
                <img src={s.gallery[1].src} alt={s.gallery[1].caption} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                <figcaption className="px-6 py-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.gallery[1].caption}
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-border bg-card/60 lg:col-span-7">
                <img src={s.gallery[2].src} alt={s.gallery[2].caption} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="px-6 py-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.gallery[2].caption}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Next case studies */}
        <section className="relative border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-[1.8rem] font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
                More case studies
              </h2>
              <Link to="/work" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                View all →
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to="/work/$slug"
                  params={{ slug: o.slug }}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card/60 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20"
                >
                  <div className="overflow-hidden">
                    <img src={o.image} alt={o.name} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <div className="flex items-center justify-between gap-6 p-6">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        {o.industry}
                      </p>
                      <p className="mt-2 text-lg font-semibold tracking-[-0.01em] text-foreground">
                        {o.name}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}