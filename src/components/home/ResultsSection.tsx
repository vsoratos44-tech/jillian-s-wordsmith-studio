import { Section, SectionHeader } from "@/components/ui/section";

const stats = [
  { value: "50+", label: "Satisfied Clients" },
  { value: "200+", label: "Projects Completed" },
  { value: "12", label: "Years Experience" },
  { value: "98%", label: "Client Retention" },
];

const testimonial = {
  quote:
    "Jillian didn't just write my book—she helped me discover what I truly wanted to say. The result exceeded every expectation.",
  author: "Sarah Mitchell",
  title: "CEO, Innovate Partners",
};

export function ResultsSection() {
  return (
    <Section variant="primary">
      <SectionHeader
        eyebrow="Results"
        title="Numbers That Tell a Story"
        subtitle="Behind every statistic is a client whose message found its audience."
      />

      {/* Stats grid */}
      <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="font-heading text-4xl font-bold text-accent md:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-primary-foreground/80">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Featured testimonial */}
      <div className="mx-auto max-w-3xl text-center">
        <blockquote>
          <p className="text-xl font-medium italic leading-relaxed text-primary-foreground/90 md:text-2xl">
            "{testimonial.quote}"
          </p>
          <footer className="mt-6">
            <div className="font-heading font-semibold">{testimonial.author}</div>
            <div className="text-sm text-primary-foreground/70">
              {testimonial.title}
            </div>
          </footer>
        </blockquote>
      </div>
    </Section>
  );
}
