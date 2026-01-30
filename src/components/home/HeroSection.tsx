import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import jillianHeadshot from "@/assets/jillian-headshot-cream.png";
import jillianHeadshotMask from "@/assets/jillian-headshot-mask-bw.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.10),transparent_55%)]" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-12">
          {/* Copy */}
          <div className="md:col-span-7">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              For founders who are too busy to post but too smart to sound like everyone else — or AI.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              I help founders build social authority and generate revenue. Most know they should be posting on LinkedIn,
              but don't have the time (or patience) to get it done. Together we'll transform your compelling ideas into
              content that builds trust with your audience, connects them to your brand, and builds lasting authority to
              grow your business.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent px-8 text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">
                  Let's figure this out together
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link to="/services">See how it works</Link>
              </Button>
            </div>
          </div>

          {/* Headshot area */}
          <div className="relative md:col-span-5 lg:col-span-5">
            <div className="relative mx-auto aspect-square w-64 overflow-hidden md:w-full bg-background">
              <img
                src={jillianHeadshot}
                alt="Jillian Whitlow - LinkedIn Ghostwriter & Content Strategist"
                className="h-full w-full object-cover object-top"
                style={{
                  WebkitMaskImage: `url(${jillianHeadshotMask})`,
                  maskImage: `url(${jillianHeadshotMask})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "cover",
                  maskSize: "cover",
                  WebkitMaskPosition: "top",
                  maskPosition: "top",
                }}
              />
            </div>
            {/* Decorative accent shape */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
