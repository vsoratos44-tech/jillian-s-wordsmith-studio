import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export function HeroSection() {
  return <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.10),transparent_55%)]" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-7">
            

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

            
          </div>

          {/* Headshot area */}
          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted/50 border border-border/50">
              {/* Replace this placeholder with actual headshot image */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                <div className="text-center p-8">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                  <p className="text-sm font-medium">Headshot placeholder</p>
                  <p className="text-xs mt-1">Replace with Jillian's photo</p>
                </div>
              </div>
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
            {/* Decorative accent shape */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>;
}