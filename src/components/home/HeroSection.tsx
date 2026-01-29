import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <span className="mb-6 inline-block rounded-full bg-accent/10 px-4 py-1.5 font-heading text-sm font-semibold text-accent">
            Professional Ghostwriter & Copywriter
          </span>

          {/* Main headline */}
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
            Your Ideas Deserve
            <span className="relative ml-3 inline-block">
              <span className="relative z-10">Words That Work</span>
              <span className="absolute bottom-2 left-0 -z-0 h-3 w-full bg-accent/30 md:h-4" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            I help thought leaders, executives, and brands transform complex ideas 
            into compelling content that connects, converts, and builds lasting authority.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="px-8"
            >
              <Link to="/portfolio">View My Work</Link>
            </Button>
          </div>

          {/* Trust indicator */}
          <p className="mt-8 text-sm text-muted-foreground">
            Trusted by 50+ executives, founders, and brands worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
