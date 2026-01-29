import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Essentials",
    price: "Starting at $2,500",
    description: "Perfect for entrepreneurs and professionals who need focused, high-impact content.",
    popular: false,
    features: [
      "Website copy (up to 5 pages)",
      "Brand voice consultation",
      "2 rounds of revisions",
      "SEO optimization basics",
      "2-week turnaround",
    ],
    cta: "Get Started",
    href: "/contact?package=essentials",
  },
  {
    name: "Professional",
    price: "Starting at $5,000",
    description: "For established businesses ready to elevate their content and build authority.",
    popular: true,
    features: [
      "Everything in Essentials, plus:",
      "Complete website copy (up to 10 pages)",
      "Email welcome sequence (5 emails)",
      "Brand voice guide document",
      "3 rounds of revisions",
      "Priority support",
      "3-week turnaround",
    ],
    cta: "Most Popular",
    href: "/contact?package=professional",
  },
  {
    name: "Executive",
    price: "Custom Pricing",
    description: "Full-service content partnership for leaders ready to dominate their industry.",
    popular: false,
    features: [
      "Everything in Professional, plus:",
      "Ghostwritten book or eBook",
      "Content strategy & editorial calendar",
      "Monthly thought leadership articles",
      "Unlimited revisions",
      "Dedicated Slack channel",
      "Rush delivery available",
    ],
    cta: "Let's Talk",
    href: "/contact?package=executive",
  },
];

const faqs = [
  {
    question: "How do you capture my voice?",
    answer:
      "We start with a 60-90 minute deep-dive interview where I learn not just what you want to say, but how you naturally say it. I study your existing content, record our conversations, and develop a voice profile that ensures everything sounds authentically you.",
  },
  {
    question: "What's your revision process?",
    answer:
      "Each package includes multiple revision rounds. I deliver drafts in stages, and you provide feedback at each checkpoint. Most clients find we nail the voice by the second round, but I'm committed to getting it right—not just getting it done.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Website copy typically takes 2-3 weeks. Email sequences run 1-2 weeks. Books and larger projects are 3-6 months depending on scope. I'll give you a detailed timeline in our discovery call.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes! For projects over $3,000, I offer split payments—typically 50% upfront and 50% on delivery. For larger book projects, we can discuss a monthly retainer structure.",
  },
  {
    question: "What if we're not a good fit?",
    answer:
      "That's what the discovery call is for. I only take on projects where I'm confident I can deliver exceptional results. If I don't think I'm the right fit, I'll tell you honestly and refer you to someone who might be better suited.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Absolutely. Confidentiality is fundamental to ghostwriting. I'm happy to sign your NDA, or I can provide my standard confidentiality agreement. Your ideas and our working relationship remain completely private.",
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Section>
        <div className="text-center">
          <span className="mb-4 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-accent">
            Investment
          </span>
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Transparent Pricing, <br />
            <span className="text-accent">Exceptional Value</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Every project is unique, but here's a starting point. Let's find the 
            right package—or create a custom scope that fits your needs exactly.
          </p>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section variant="muted" className="pt-0 md:pt-0">
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-card p-8 shadow-sm transition-all",
                pkg.popular
                  ? "border-accent shadow-lg scale-105 z-10"
                  : "border-border hover:border-accent/50"
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent px-4 py-1 text-sm font-semibold text-accent-foreground">
                    <Sparkles className="h-4 w-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading text-xl font-semibold">{pkg.name}</h3>
                <div className="mt-2">
                  <span className="font-heading text-3xl font-bold">{pkg.price}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{pkg.description}</p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={cn(
                  "w-full",
                  pkg.popular
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "bg-primary hover:bg-primary/90"
                )}
              >
                <Link to={pkg.href}>
                  {pkg.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-muted-foreground">
          Need something different?{" "}
          <Link to="/contact" className="text-accent hover:underline font-medium">
            Let's create a custom package
          </Link>{" "}
          tailored to your specific goals.
        </p>
      </Section>

      {/* What's Included Section */}
      <Section>
        <SectionHeader
          eyebrow="The Process"
          title="What Working Together Looks Like"
          subtitle="Every engagement follows a proven process designed to capture your voice and deliver exceptional results."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Discovery Call",
              description: "Free 30-minute conversation to understand your goals and determine fit.",
            },
            {
              step: "02",
              title: "Proposal & Agreement",
              description: "Detailed scope, timeline, and investment. No surprises, ever.",
            },
            {
              step: "03",
              title: "Deep Dive & Creation",
              description: "Interviews, research, and drafting with regular check-ins.",
            },
            {
              step: "04",
              title: "Revisions & Delivery",
              description: "Refinement until you're thrilled, then final polished delivery.",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <span className="inline-block font-heading text-4xl font-bold text-accent/30">
                {item.step}
              </span>
              <h3 className="mt-2 font-heading text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="muted">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions? I've Got Answers"
          subtitle="Here are the most common questions I hear. If yours isn't here, just ask."
        />

        <div className="mx-auto max-w-3xl divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <h3 className="font-heading text-lg font-semibold">{faq.question}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Invest in Words That Work?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Book a free discovery call. No pressure, no obligation—just a conversation 
            about your goals and how I might help you achieve them.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/contact">
              Book Your Free Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Pricing;
