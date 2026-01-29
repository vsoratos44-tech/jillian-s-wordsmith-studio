import { Link } from "react-router-dom";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { BookOpen, Megaphone, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Ghostwriting",
    description:
      "Books, articles, speeches, and thought leadership pieces written in your voice—you get the byline, I handle the writing.",
    features: ["Books & eBooks", "Articles & Blogs", "Speeches & Presentations"],
    href: "/services#ghostwriting",
  },
  {
    icon: Megaphone,
    title: "Copywriting",
    description:
      "Persuasive copy that converts readers into customers. From websites to email campaigns, every word works toward your goals.",
    features: ["Website Copy", "Email Campaigns", "Sales Pages"],
    href: "/services#copywriting",
  },
  {
    icon: Lightbulb,
    title: "Content Strategy",
    description:
      "A comprehensive content roadmap aligned with your business goals. Know what to say, when to say it, and where to say it.",
    features: ["Content Audits", "Editorial Calendars", "Brand Voice Development"],
    href: "/services#strategy",
  },
];

export function ServicesOverview() {
  return (
    <Section variant="muted">
      <SectionHeader
        eyebrow="Services"
        title="Words That Move People"
        subtitle="Whether you need a book, a website, or a complete content strategy—I'll craft the words that tell your story and drive results."
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
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
