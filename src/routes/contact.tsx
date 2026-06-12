import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, Clock, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { supabase } from "@/integrations/supabase/client";

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
  budget: z.string().max(50).optional().or(z.literal("")),
  timeline: z.string().max(50).optional().or(z.literal("")),
  goals: z.string().trim().max(2000).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell me a bit more").max(5000),
});

const budgets = ["< $5k", "$5k – $10k", "$10k – $25k", "$25k+"];
const timelines = ["ASAP", "1–2 months", "3+ months", "Just exploring"];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
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
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name: parsed.data.name,
        email: parsed.data.email,
        company: parsed.data.company || null,
        budget: parsed.data.budget || null,
        timeline: parsed.data.timeline || null,
        goals: parsed.data.goals || null,
        message: parsed.data.message,
      });
    setSubmitting(false);
    if (dbError) {
      setError("Something went wrong. Please try again or email directly.");
      return;
    }
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
            <aside className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.01em] text-foreground">
                  What to expect
                </h2>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    Personal response within 24 hours.
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    A short discovery call to align on goals.
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    A clear proposal with scope, timeline, and pricing.
                  </li>
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
                    <Field label="Company" name="company" />
                    <Field label="Website (optional)" name="goals_placeholder" disabled placeholderText="—" />
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <SelectField label="Budget range" name="budget" options={budgets} />
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
                      className="mt-2 w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none"
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
                      className="mt-2 w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none"
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
        className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none disabled:opacity-50"
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
        className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground focus:border-foreground/30 focus:outline-none"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
