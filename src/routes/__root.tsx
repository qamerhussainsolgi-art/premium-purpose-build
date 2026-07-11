// src/routes/__root.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { name: "google-site-verification", content: "qlB8HDAvC2JwcCF7V4bSV1BgVFraWk2mkjKJ8wjKx2Q" },
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Qamer Hussain — Web Design & Development" },
      {
        name: "description",
        content:
          "Conversion-focused web design & development for startups and e-commerce. Clean, high-performance assets tailored to win customer trust.",
      },
      { name: "author", content: "Qamer Hussain" },
      { name: "theme-color", content: "#1a1a24" },
      { property: "og:site_name", content: "Qamer Hussain" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Qamer Hussain — Premium Web Design & Development" },
      {
        property: "og:description",
        content:
          "Strategy-led web developer creating custom websites and high-converting landing pages.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Qamer Hussain — Premium Web Design & Development" },
      {
        name: "twitter:description",
        content: "High-performance web assets designed to improve credibility and conversions.",
      },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/71df5746-2fad-413b-b870-8df6b39858db/id-preview-9d52debc--dbdec541-f302-4f1e-8f50-4284def43411.lovable.app-1781676534595.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/71df5746-2fad-413b-b870-8df6b39858db/id-preview-9d52debc--dbdec541-f302-4f1e-8f50-4284def43411.lovable.app-1781676534595.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://qamer-elevate-engine.qamarhusainsolgi.workers.dev/#person",
              "name": "Qamer Hussain",
              "jobTitle": "Website Designer & Developer",
              "url": "https://qamer-elevate-engine.qamarhusainsolgi.workers.dev/",
              "knowsAbout": [
                "Web Design",
                "Web Development",
                "Conversion Optimization",
                "UX Design",
                "Performance Optimization"
              ],
              "sameAs": [
                "https://twitter.com/REPLACE_ME",
                "https://linkedin.com/in/REPLACE_ME",
                "https://instagram.com/REPLACE_ME"
              ]
            },
            {
              "@type": "ProfessionalService",
              "@id": "https://qamer-elevate-engine.qamarhusainsolgi.workers.dev/#service",
              "name": "Qamer Hussain — Web Design & Development",
              "description": "Premium, conversion-focused websites for startups, SaaS, and e-commerce.",
              "url": "https://qamer-elevate-engine.qamarhusainsolgi.workers.dev/",
              "priceRange": "$$",
              "image": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/71df5746-2fad-413b-b870-8df6b39858db/id-preview-9d52debc--dbdec541-f302-4f1e-8f50-4284def43411.lovable.app-1781676534595.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PK"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Pakistan"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Worldwide"
                }
              ]
            }
          ]
        }),
      },
      {
        type: "text/javascript",
        src: "https://www.googletagmanager.com/gtag/js?id=G-MQ3Z7R9GXB",
      },
      {
        children:
          "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-MQ3Z7R9GXB');",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}