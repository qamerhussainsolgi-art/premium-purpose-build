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
    q: "What types of websites do you build?",
    a: "Marketing sites, SaaS product sites, e-commerce stores, landing pages, and bespoke editorial sites — typically for startups, founders, and growing teams who care about craft.",
  },
  {
    q: "How long does a typical project take?",
    a: "Landing pages ship in 1–2 weeks. Full marketing sites land in 3–6 weeks depending on scope. I share a realistic timeline before any engagement starts.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Yes — and most of my work is redesign. I treat redesigns as positioning, not paint, so we'll start by clarifying what's actually broken before touching the design.",
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
      { title: "Qamer Hussain — Website Developer for Startups & E-commerce" },
      {
        name: "description",
        content:
          "Modern, fast, conversion-focused websites for startups and e-commerce businesses. Clean code, responsive design, and SEO-ready structure.",
      },
      { property: "og:title", content: "Qamer Hussain — Website Developer" },
      {
        property: "og:description",
        content:
          "Websites that build trust, improve conversions, and help businesses grow.",
      },
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
