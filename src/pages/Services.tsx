import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Megaphone, 
  Lightbulb, 
  Check, 
  ArrowRight,
  FileText,
  Mail,
  PenTool,
  Target,
  Calendar,
  MessageSquare
} from "lucide-react";

const services = [
  {
    id: "ghostwriting",
    icon: BookOpen,
    title: "Ghostwriting",
    tagline: "Your Ideas, Your Voice, Your Name—My Words",
    description:
      "Transform your expertise into published works that establish your authority. From business books to thought leadership articles, I'll capture your unique voice and bring your ideas to life.",
    offerings: [
      {
        icon: FileText,
        name: "Books & eBooks",
        description: "Full-length books, memoirs, and digital publications that position you as an industry leader.",
      },
      {
        icon: PenTool,
        name: "Articles & Blogs",
        description: "Thought leadership pieces, LinkedIn articles, and blog content that builds your audience.",
      },
      {
        icon: MessageSquare,
        name: "Speeches & Presentations",
        description: "Keynote speeches, TEDx talks, and presentations that captivate your audience.",
      },
    ],
    features: [
      "Deep-dive interviews to capture your authentic voice",
      "Comprehensive research and fact-checking",
      "Multiple revision rounds included",
      "Complete confidentiality guaranteed",
      "Publishing guidance and support",
    ],
    idealFor: [
      "Executives building thought leadership",
      "Entrepreneurs with a story to tell",
      "Professionals pivoting to consulting",
      "Speakers needing written materials",
    ],
  },
  {
    id: "copywriting",
    icon: Megaphone,
    title: "Copywriting",
    tagline: "Words That Work as Hard as You Do",
    description:
      "Strategic copywriting that converts readers into customers. Every word is crafted to resonate with your audience and drive them toward action.",
    offerings: [
      {
        icon: Target,
        name: "Website Copy",
        description: "Homepage, service pages, and about pages that communicate your value and convert visitors.",
      },
      {
        icon: Mail,
        name: "Email Campaigns",
        description: "Welcome sequences, nurture campaigns, and promotional emails that build relationships.",
      },
      {
        icon: FileText,
        name: "Sales Pages & Funnels",
        description: "High-converting landing pages and sales funnels that turn prospects into paying clients.",
      },
    ],
    features: [
      "Customer research and voice-of-customer mining",
      "SEO-optimized content structure",
      "A/B testing recommendations",
      "Brand voice consistency",
      "Conversion-focused CTAs",
    ],
    idealFor: [
      "Service businesses launching or rebranding",
      "Course creators and coaches",
      "SaaS companies humanizing their message",
      "Consultants upgrading their web presence",
    ],
  },
  {
    id: "strategy",
    icon: Lightbulb,
    title: "Content Strategy",
    tagline: "A Roadmap for Your Words",
    description:
      "Stop guessing what to write. Get a comprehensive content strategy that aligns with your business goals and speaks directly to your ideal clients.",
    offerings: [
      {
        icon: Target,
        name: "Content Audits",
        description: "Deep analysis of your existing content with actionable recommendations for improvement.",
      },
      {
        icon: Calendar,
        name: "Editorial Calendars",
        description: "12-month content plans with topics, formats, and publishing schedules tailored to your goals.",
      },
      {
        icon: MessageSquare,
        name: "Brand Voice Development",
        description: "Comprehensive brand voice guidelines that ensure consistency across all communications.",
      },
    ],
    features: [
      "Competitor content analysis",
      "Audience persona development",
      "Content pillar framework",
      "Distribution channel strategy",
      "KPI setting and measurement plan",
    ],
    idealFor: [
      "Growing businesses ready to scale content",
      "Teams needing content direction",
      "Brands seeking consistency",
      "Marketers building authority",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center">
          <span className="mb-4 inline-block font-heading text-sm font-semibold uppercase tracking-wider text-accent">
            Services
          </span>
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Words That Build Businesses
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Whether you need a book, a website, or a complete content strategy—I'll craft 
            the words that tell your story and drive real results.
          </p>
        </div>
      </Section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          variant={index % 2 === 1 ? "muted" : "default"}
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Service Info */}
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="mb-4 inline-flex rounded-lg bg-primary p-3 text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                {service.title}
              </h2>
              <p className="mt-2 font-heading text-lg text-accent">
                {service.tagline}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Offerings */}
              <div className="mt-8 space-y-4">
                {service.offerings.map((offering, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-accent/10 p-2">
                      <offering.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold">{offering.name}</h4>
                      <p className="text-sm text-muted-foreground">{offering.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Features & Ideal For */}
            <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              {/* Features Card */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold mb-4">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For Card */}
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
                <h3 className="font-heading text-lg font-semibold mb-4">
                  Ideal For
                </h3>
                <ul className="space-y-2">
                  {service.idealFor.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Not Sure Which Service You Need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Let's have a conversation. Book a free 30-minute discovery call and 
            we'll figure out exactly how I can help you achieve your goals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/contact">Book a Discovery Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Services;
