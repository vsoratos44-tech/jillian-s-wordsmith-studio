import { Section, SectionHeader } from "@/components/ui/section";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We talk. I listen. A 30-minute conversation where I learn about your business, your goals, and what you're hoping to achieve with your LinkedIn presence. No pitch, no pressure — just a real conversation to see if we'd work well together.",
  },
  {
    number: "02",
    title: "Strategy & Onboarding",
    description:
      "We find your voice. Through a deep-dive interview, I’ll extract your stories, your POV, and the ideas that make you you. We’ll define your content pillars, nail down your messaging, and create a strategy that actually fits your life.",
  },
  {
    number: "03",
    title: "Content Creation",
    description:
      "Writing & refinement. I write. You approve. Easy! I draft your content based on our conversations and strategy. You review, give feedback, and we refine until it sounds exactly like you wrote it (because, in a way, you did). Then it goes live.",
  },
  {
    number: "04",
    title: "Results & Iteration",
    description:
      "We measure. We adjust. We track what’s working — not just likes, but real results: profile views, connection requests, inbound inquiries. Then we double down on what resonates and adjust what doesn’t. Rinse, repeat, grow.",
  },
];

export function ProcessSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Recommended"
        title="Here’s how it works"
        subtitle="(It’s simpler than you think.)"
      />

      <div className="relative">
        {/* Connection line - visible on md+ */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent via-accent/50 to-transparent md:block" />

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg ${
                index % 2 === 1 ? "md:mt-16" : ""
              }`}
            >
              {/* Step number */}
              <span className="absolute -top-4 left-8 bg-background px-2 font-heading text-sm font-bold text-accent">
                {step.number}
              </span>
              <h3 className="mb-3 font-heading text-xl font-semibold">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
