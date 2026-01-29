import { Link } from "react-router-dom";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <Section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Ready to Tell Your Story?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Let's discuss your project over a free discovery call. No pressure, no 
          obligations—just a conversation about how we might work together.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
          >
            <Link to="/contact">
              <Calendar className="mr-2 h-4 w-4" />
              Book a Free Call
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8">
            <Link to="/services">
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
