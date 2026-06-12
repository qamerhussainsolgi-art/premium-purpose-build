import { Link } from "@tanstack/react-router";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Work", to: "/work" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-foreground text-[11px] font-bold text-background">
              Q
            </span>
            <span className="font-display text-base">Qamer Hussain</span>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Qamer Hussain. All rights reserved.</p>
          <p>Freelance web developer · Available worldwide</p>
        </div>
      </div>
    </footer>
  );
}
