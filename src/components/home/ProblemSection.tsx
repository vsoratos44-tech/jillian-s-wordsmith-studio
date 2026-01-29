import { Section, SectionHeader } from "@/components/ui/section";
import { Clock, Brain, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "No Time to Write",
    description:
      "You're running a business, leading a team, or building an empire. Writing content falls to the bottom of an endless to-do list.",
  },
  {
    icon: Brain,
    title: "Ideas Without Words",
    description:
      "You have valuable insights and expertise, but translating them into compelling content feels overwhelming and time-consuming.",
  },
  {
    icon: TrendingDown,
    title: "Inconsistent Presence",
    description:
      "Your competitors publish regularly while your thought leadership stays trapped in your head, costing you visibility and opportunities.",
  },
];

export function ProblemSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Sound Familiar?"
        title="Great Ideas Deserve Better Than Silence"
        subtitle="You know your content matters. But between meetings, decisions, and leading your business, writing always gets pushed aside."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg"
          >
            <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 text-accent">
              <problem.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-3 font-heading text-xl font-semibold">
              {problem.title}
            </h3>
            <p className="text-muted-foreground">{problem.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
