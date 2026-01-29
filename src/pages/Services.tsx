import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta";
import {
  PenLine,
  Compass,
  Lightbulb,
  ArrowRight,
  MessageSquare,
  Target,
  Users,
  Calendar,
  FileText,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const services = [
  {
    id: "ghostwriting",
    icon: PenLine,
    title: "LinkedIn Ghostwriting",
    tagline: "Your ideas. Your voice. Zero time investment.",
    description:
      "I'll interview you, extract your best thinking, and turn it into a steady stream of content that sounds unmistakably like you. You show up, share your expertise in conversation, and I handle the rest — from strategy to posting.",
    bestFor:
      "Founders and executives who want to build their presence without adding \"content creator\" to their job description.",
    features: [
      { icon: MessageSquare, text: "Monthly voice extraction interviews" },
      { icon: FileText, text: "8-12 LinkedIn posts per month" },
      { icon: Target, text: "Strategic content calendar" },
      { icon: TrendingUp, text: "Performance tracking & optimization" },
    ],
    process: [
      "We start with a deep-dive interview to capture your voice, stories, and expertise",
      "I draft content that sounds like you wrote it on your best day",
      "You review and approve (usually with minimal edits)",
      "Content goes live, and we track what resonates",
    ],
  },
  {
    id: "strategy",
    icon: Compass,
    title: "Content Strategy",
    tagline: "A clear plan for what to say, how to say it, and why it matters.",
    description:
      "Not sure where to start? We'll dig into your goals, your audience, and your unique point of view — then build a roadmap that turns your expertise into content that actually resonates. Includes messaging framework, content pillars, and engagement strategy.",
    bestFor:
      "Leaders who want to DIY their content but need strategic direction first.",
    features: [
      { icon: Target, text: "Audience & positioning analysis" },
      { icon: FileText, text: "Messaging framework & brand voice guide" },
      { icon: Calendar, text: "Content pillars & editorial calendar" },
      { icon: Users, text: "Engagement strategy & best practices" },
    ],
    process: [
      "Discovery session to understand your business goals and target audience",
      "Competitive analysis and positioning work",
      "Develop your unique messaging framework and content pillars",
      "Deliver a comprehensive strategy document you can execute on your own",
    ],
  },
  {
    id: "thought-leadership",
    icon: Lightbulb,
    title: "Thought Leadership Development",
    tagline: "Position yourself as the go-to expert in your space.",
    description:
      "This is the full package: ghostwriting, strategy, engagement support, and ongoing optimization. We'll build your visibility systematically — attracting the right opportunities, the right connections, and the right conversations to your profile.",
    bestFor:
      "Executives ready to invest in becoming a recognized voice in their industry.",
    features: [
      { icon: PenLine, text: "Full ghostwriting service included" },
      { icon: Compass, text: "Comprehensive content strategy" },
      { icon: Users, text: "Engagement & community building support" },
      { icon: Sparkles, text: "Ongoing optimization & iteration" },
    ],
    process: [
      "Complete brand and voice development",
      "Strategic content creation and posting",
      "Active engagement strategy implementation",
      "Regular reviews and strategy adjustments based on results",
    ],
  },
];

const SERVICES_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "LinkedIn Ghostwriting & Content Strategy",
  provider: {
    "@type": "Organization",
    name: "Jillian Whitlow Consulting",
  },
};

const Services = () => {
  usePageMeta({
    title: "Services | Jillian Whitlow Consulting",
    description:
      "LinkedIn Ghostwriting, Content Strategy, and Thought Leadership Development for founders and executives who want authority without the time drain.",
    canonicalPath: "/services",
    jsonLd: SERVICES_JSONLD,
  });

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-12 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-accent">
            Services
          </span>
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            How We Can Work Together
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Every engagement is tailored to your specific needs, goals, and timeline. Here's where most clients start.
          </p>
        </div>
      </Section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          variant={index % 2 === 1 ? "muted" : "default"}
        >
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Content */}
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="mb-4 inline-flex rounded-lg bg-primary p-3 text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                {service.title}
              </h2>
              <p className="mt-2 text-xl font-medium text-accent">
                {service.tagline}
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                {service.description}
              </p>
              
              <div className="mt-6 rounded-lg bg-accent/10 p-4">
                <p>
                  <span className="font-semibold text-foreground">Best for: </span>
                  <span className="text-muted-foreground">{service.bestFor}</span>
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Features & Process */}
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              {/* Features */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 font-heading text-lg font-semibold">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-md bg-accent/10 p-1.5 text-accent">
                        <feature.icon className="h-4 w-4" />
                      </div>
                      <span className="text-muted-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="mt-6 rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 font-heading text-lg font-semibold">
                  How It Works
                </h3>
                <ol className="space-y-3">
                  {service.process.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        {i + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA Section */}
      <Section variant="primary">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Not sure which service is right for you?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Let's talk. A quick conversation will help us figure out the best approach for your goals, timeline, and budget.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link to="/contact">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Services;
