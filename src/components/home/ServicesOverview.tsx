import { Link } from "react-router-dom";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { PenLine, Compass, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: PenLine,
    title: "LinkedIn Ghostwriting",
    description:
      "Your ideas. Your voice. Zero time investment. I’ll interview you, extract your best thinking, and turn it into a steady stream of content that sounds unmistakably like you.",
    features: [
      "Interview-based voice extraction",
      "Strategy to posting (handled)",
      "Content that sounds like you",
    ],
    href: "/services#ghostwriting",
  },
  {
    icon: Compass,
    title: "Content Strategy",
    description:
      "A clear plan for what to say, how to say it, and why it matters. We’ll build a roadmap that turns your expertise into content that actually resonates.",
    features: ["Messaging framework", "Content pillars", "Engagement strategy"],
    href: "/services#strategy",
  },
  {
    icon: Lightbulb,
    title: "Thought Leadership Development",
    description:
      "Position yourself as the go-to expert in your space. This is the full package: ghostwriting, strategy, engagement support, and ongoing optimization.",
    features: ["Ghostwriting + strategy", "Engagement support", "Ongoing optimization"],
    href: "/services#thought-leadership",
  },
];

export function ServicesOverview() {
  return (
    <Section variant="muted">
      <SectionHeader
        eyebrow="Recommended"
        title="How we can work together"
        subtitle="Every engagement is tailored, but here’s where most clients start:"
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg"
          >
            <div className="mb-4 inline-flex rounded-lg bg-primary p-3 text-primary-foreground">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-3 font-heading text-xl font-semibold">
              {service.title}
            </h3>
            <p className="mb-6 flex-1 text-muted-foreground">
              {service.description}
            </p>
            <ul className="mb-6 space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-muted-foreground">
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-auto group-hover:border-accent group-hover:text-accent">
              <Link to={service.href}>
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
