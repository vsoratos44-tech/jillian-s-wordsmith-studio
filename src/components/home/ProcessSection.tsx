import { Section, SectionHeader } from "@/components/ui/section";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a conversation about your goals, audience, and vision. I learn your voice, your story, and what success looks like for you.",
  },
  {
    number: "02",
    title: "Strategy & Research",
    description:
      "I dive deep into your industry, competitors, and audience. We develop a content strategy that positions you as the authority you are.",
  },
  {
    number: "03",
    title: "Writing & Refinement",
    description:
      "I craft your content with care, capturing your authentic voice. You review, we refine, and we don't stop until it's perfect.",
  },
  {
    number: "04",
    title: "Deliver & Support",
    description:
      "You receive polished, publish-ready content. I remain available for revisions and ongoing support as your content partner.",
  },
];

export function ProcessSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="How It Works"
        title="A Process Built on Partnership"
        subtitle="No templates, no AI shortcuts. Just a collaborative process designed to bring your unique voice and vision to life."
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
