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
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
