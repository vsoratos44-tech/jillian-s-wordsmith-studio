import { Link } from "react-router-dom";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Photo placeholder */}
        <div className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-2xl bg-muted">
            {/* Decorative elements */}
            <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-accent/10" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/10" />
            
            {/* Placeholder for candid photo */}
            <div className="absolute inset-4 flex items-center justify-center rounded-xl border-2 border-dashed border-border bg-card/50">
              <div className="text-center p-6">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                  <span className="text-2xl">📷</span>
                </div>
                <p className="font-heading text-sm font-medium text-muted-foreground">
                  Candid Photo
                </p>
                <p className="mt-1 text-xs text-muted-foreground/70">
                  Shows personality
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <span className="mb-4 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-accent">
            About
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Hi, I'm Jillian.
          </h2>
          
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p className="text-lg font-medium text-foreground">
              I took the scenic route to get here.
            </p>
            <p>
              High school valedictorian at 16. College dropout — twice. Aspiring chef. Restaurant manager. B2B SaaS professional. And now? A ghostwriter and content strategist who finally found the work she was meant to do.
            </p>
            <p>
              All those detours taught me something: the most interesting people rarely have linear paths. And the best content comes from the stories you've actually lived — not the ones you think you're supposed to tell.
            </p>
            <p>
              I'm also a mom to three kids under three (yes, really), which means I understand what it's like to be stretched thin and still want to show up as a leader in your space. I've built my business during naptime, in the early mornings, and late at night — because this work matters to me, and my family depends on me getting it right.
            </p>
            <p className="font-medium text-foreground">
              When we work together, you get all of that: the strategic brain, the human touch, and someone who truly gets that your content needs to work as hard as you do.
            </p>
          </div>

          <Button asChild variant="outline" size="lg" className="mt-8">
            <Link to="/about">
              Read the full story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
