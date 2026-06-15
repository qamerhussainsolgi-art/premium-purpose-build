import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Clock,
  CheckCircle2,
  MessagesSquare,
  Compass,
  Sparkles,
} from "lucide-react";
import { z } from "zod";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Start Your Project with Qamer Hussain" },
      { name: "description", content: "Tell me about your project, goals, and timeline. Responses within 24 hours." },
      { property: "og:title", content: "Contact — Qamer Hussain" },
      { property: "og:description", content: "Start a new website, redesign, or landing page project. Responses within 24 hours." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Enter a valid email").max(320),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  website: z.string().trim().max(300).optional().or(z.literal("")),
  projectType: z.string().max(80).optional().or(z.literal("")),
  budget: z.string().max(50).optional().or(z.literal("")),
  timeline: z.string().max(50).optional().or(z.literal("")),
  goals: z.string().trim().max(2000).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell me a bit more").max(5000),
});

const projectTypes = [
  "New website",
  "Website redesign",
  "Landing page",
  "Web app / product",
  "Conversion optimization",
  "Not sure yet",
];
const budgetsPKR = [
  "Under Rs 30,000",
  "Rs 30,000 – 50,000",
  "Rs 50,000 – 75,000",
  "Rs 75,000+",
];
const budgetsUSD = ["Under $100", "$100 – $300", "$300 – $1000", "$1000+"];
const timelines = ["ASAP", "1–2 months", "3+ months", "Just exploring"];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currency, setCurrency] = useState<"PKR" | "USD">("PKR");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      website: String(fd.get("website") ?? ""),
      projectType: String(fd.get("projectType") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      timeline: String(fd.get("timeline") ?? ""),
      goals: String(fd.get("goals") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    // Simulate async submission; wire up to your inbox or CRM of choice.
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Contact"
          title={
            <>
              Let's build something{" "}
              <span className="font-display italic font-normal tracking-[-0.02em] text-foreground/95">
                worth shipping.
              </span>
            </>
          }
          intro="Tell me about your project, goals, and timeline. I respond personally within 24 hours."
        />

        <section className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            {/* Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Working Together
                </span>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
                  What working with me looks like.
                </h2>
                <ul className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
                  {[
                    {
                      icon: Clock,
                      title: "Response within 24 hours",
                      desc: "Every inquiry gets a personal reply — never an automated reply.",
                    },
                    {
                      icon: MessagesSquare,
                      title: "Transparent communication",
                      desc: "Direct updates, clear timelines, honest expectations from day one.",
                    },
                    {
                      icon: Compass,
                      title: "Collaborative process",
                      desc: "Strategy, design, and development built around your business — not a template.",
                    },
                    {
                      icon: Sparkles,
                      title: "Long-term quality focus",
                      desc: "Websites built to last — fast, scalable, and easy to grow with you.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-surface/60">
                        <item.icon className="h-3.5 w-3.5 text-foreground" />
                      </span>
                      <div>
                        <p className="text-foreground">{item.title}</p>
                        <p className="mt-1 text-muted-foreground">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Currently
                </p>
                <p className="mt-3 text-sm text-foreground">
                  Available for new projects · Q3 2026
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Limited slots — early conversations preferred.
                </p>
              </div>
            </aside>

            {/* Form / success */}
            <div>
              {submitted ? (
                <div className="rounded-2xl border border-border bg-card/60 p-10 text-center backdrop-blur-sm">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-border bg-surface/60">
                    <CheckCircle2 className="h-5 w-5 text-foreground" />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-foreground">
                    Thanks — message received.
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    I'll review your project details and get back to you personally
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-10"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Your name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Business name" name="company" />
                    <Field label="Website" name="website" placeholderText="https://" />
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <SelectField label="Project type" name="projectType" options={projectTypes} />
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Budget ({currency})
                        </label>
                        <div
                          role="tablist"
                          aria-label="Budget currency"
                          className="inline-flex rounded-full border border-border bg-background/60 p-0.5 text-[11px] font-medium"
                        >
                          {(["PKR", "USD"] as const).map((c) => (
                            <button
                              key={c}
                              type="button"
                              role="tab"
                              aria-selected={currency === c}
                              onClick={() => setCurrency(c)}
                              className={`rounded-full px-2.5 py-1 transition-colors ${
                                currency === c
                                  ? "bg-foreground text-background"
                                  : "text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {c}
                            </button>
                          ))}
                        </div>
                      </div>
                      <select
                        name="budget"
                        defaultValue=""
                        key={currency}
                        className="mt-2 min-h-11 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground transition-colors focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring/40"
                      >
                        <option value="">Select…</option>
                        {(currency === "PKR" ? budgetsPKR : budgetsUSD).map((o) => (
                          <option key={o} value={`${currency} ${o}`}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <SelectField label="Timeline" name="timeline" options={timelines} />
                  </div>

                  <div className="mt-5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Business goals
                    </label>
                    <textarea
                      name="goals"
                      rows={2}
                      placeholder="E.g., increase qualified leads, launch a new product, reposition the brand…"
                      className="mt-2 w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground transition-colors focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring/40"
                    />
                  </div>

                  <div className="mt-5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Project details <span className="text-foreground">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project, audience, and what success looks like."
                      className="mt-2 w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground transition-colors focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring/40"
                    />
                  </div>

                  {error && (
                    <p className="mt-4 text-sm text-destructive">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group mt-7 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 cta-glow hover:cta-glow-hover disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Send inquiry"}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>

                  <p className="mt-4 text-xs text-muted-foreground">
                    By submitting, you agree to be contacted about your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({
  label, name, type = "text", required, disabled, placeholderText,
}: {
  label: string; name: string; type?: string; required?: boolean; disabled?: boolean; placeholderText?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-foreground">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        placeholder={placeholderText}
        className="mt-2 min-h-11 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring/40 disabled:opacity-50"
      />
    </div>
  );
}

function SelectField({
  label, name, options,
}: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="mt-2 min-h-11 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground transition-colors focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring/40"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
