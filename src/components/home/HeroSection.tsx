import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.10),transparent_55%)]" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-7">
            <span className="mb-6 inline-block rounded-full bg-accent/10 px-4 py-1.5 font-heading text-sm font-semibold text-accent">
              JW Ghostwriting &amp; Content Strategy
            </span>

            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              For founders who are too busy to post but too smart to sound like everyone else — or AI.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              I help founders build social authority and generate revenue. Most know they should be posting on LinkedIn,
              but don’t have the time (or patience) to get it done. Together we’ll transform your compelling ideas into
              content that builds trust with your audience, connects them to your brand, and builds lasting authority to
              grow your business.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent px-8 text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">
                  Let’s figure this out together
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link to="/services">See how it works</Link>
              </Button>
            </div>

            <div className="mt-8 max-w-xl rounded-xl border border-border bg-card p-5">
              <p className="font-heading text-sm font-semibold text-foreground">67% of my proposals close.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Why does that matter? I only send them when I’m confident we’ll be great together.
              </p>
            </div>
          </div>

          {/* Headshot placeholder */}
          <div className="relative lg:col-span-5">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />

            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-muted">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.10),transparent_55%)]" />
              <div className="absolute inset-6 grid place-items-center rounded-xl border-2 border-dashed border-border bg-card/40">
                <div className="max-w-xs text-center">
                  <p className="font-heading text-sm font-semibold text-foreground">Professional headshot</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Warm, approachable, professional — not overly corporate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
