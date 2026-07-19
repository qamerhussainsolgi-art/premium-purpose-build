import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { Services } from "@/components/Services";
import { Trust } from "@/components/Trust";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { Process } from "@/components/Process";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";

const homeFaqs = [
  {
    q: "What does this actually cost?",
    a: "Landing pages start at $250–$450 USD. Full websites (5–10 pages) run $500–$1,200 USD. E-commerce and custom builds range from $1,200–$2,500 USD. You'll get a written, fixed quote before any work begins — the number doesn't move after that, and there are no surprise line items at the end.",
  },
  {
    q: "What types of websites do you build?",
    a: "Marketing sites, SaaS product sites, e-commerce stores, landing pages, and bespoke editorial sites — typically for startups, founders, and growing teams who care about craft.",
  },
  {
    q: "How long does a typical project take?",
    a: "Landing pages ship in 1–2 weeks. Full marketing sites land in 3–6 weeks depending on scope. I share a realistic timeline before any engagement starts.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Yes — and most of my work is redesign. I treat redesigns as positioning, not paint, so we'll start by clarifying what's actually broken before touching the build.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Optional support and iteration retainers are available. Websites perform best when they keep evolving, and I'm set up to be a long-term partner — not a one-time vendor.",
  },
  {
    q: "Who do you typically work with?",
    a: "Founders, marketing leads, and small in-house teams at startups, SaaS companies, agencies, and ambitious independent brands.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qamer Hussain — Website Developer | New Zealand & Worldwide" },
      {
        name: "description",
        content:
          "Modern, fast, conversion-focused websites for startups and small businesses in New Zealand and international clients worldwide. Clean code, responsive builds, SEO-ready structure.",
      },
      { property: "og:title", content: "Qamer Hussain — Website Developer" },
      {
        property: "og:description",
        content:
          "Modern, fast websites for small businesses in New Zealand and international clients — built to build trust and grow with you.",
      },
      {
        property: "og:url",
        content: "https://premium-purpose-build.qamarhusainsolgi.workers.dev/",
      },
    ],
    links: [
      { rel: "canonical", href: "https://premium-purpose-build.qamarhusainsolgi.workers.dev/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <Services />
        <Trust />
        <WhyWorkWithMe />
        <Process />
        <FAQ
          eyebrow="FAQ"
          title="Questions, answered."
          intro="A few of the questions I hear most often. If yours isn't here, the contact form is the fastest way to ask."
          items={homeFaqs}
        />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
