import { Section, SectionHeader } from "@/components/ui/section";

const results = [
  {
    metric: "0 → 4+ inbound leads/week",
    title: "Lead Generation",
    description:
      "One client came to me with zero inbound leads from LinkedIn. After 90 days of working together — honing her talking points, strengthening her messaging, and deploying a strategic engagement approach — she's now fielding multiple qualified inquiries every single week.",
  },
  {
    metric: "3 podcast invitations in 60 days",
    title: "Speaking Opportunities",
    description:
      "When your content demonstrates genuine expertise — not just titles and credentials — people notice. One client went from “posting into the void” to being invited onto three industry podcasts within two months of our engagement.",
  },
  {
    metric: "First brand partnership deal",
    title: "Brand Partnership",
    description:
      "For another client, consistent, strategic content led to a partnership opportunity she never would have found through traditional outreach. The right post, seen by the right person, at the right time. That’s the compounding power of showing up with something real to say.",
  },
];

const featuredTestimonial = {
  quote:
    "Working with Jillian has completely transformed how I show up on LinkedIn. Before, I’d stare at the blank post box and give up. Now, I have a clear strategy, content that actually sounds like me, and — this is the big one — I’m getting real business from it. Last month alone, three new clients mentioned they found me through my posts.",
  author: "[Client Name]",
  title: "[Title], [Company]",
};

export function ResultsSection() {
  return (
    <Section variant="primary">
      <SectionHeader
        eyebrow="Recommended"
        title="What happens when it clicks"
        subtitle="Real results from real clients. (Names withheld to protect the innocent — and their inboxes.)"
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {results.map((r, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7"
          >
            <div className="font-heading text-2xl font-bold text-accent md:text-3xl">{r.metric}</div>
            <h3 className="mt-3 font-heading text-xl font-semibold text-primary-foreground">{r.title}</h3>
            <p className="mt-3 text-primary-foreground/80">{r.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
            Before / After
          </p>
          <div className="mt-4 space-y-4">
            <p className="text-primary-foreground/80">
              <span className="font-semibold text-primary-foreground">BEFORE:</span> “I know I should post, but I never
              know what to say. Everything sounds generic.”
            </p>
            <p className="text-primary-foreground/80">
              <span className="font-semibold text-primary-foreground">AFTER:</span> “People are reaching out and saying,
              ‘I feel like I already know you.’ That’s when I knew the content was working.”
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7">
          <blockquote>
            <p className="text-lg font-medium italic leading-relaxed text-primary-foreground/90 md:text-xl">
              “{featuredTestimonial.quote}”
            </p>
            <footer className="mt-6">
              <div className="font-heading font-semibold text-primary-foreground">— {featuredTestimonial.author}</div>
              <div className="text-sm text-primary-foreground/70">{featuredTestimonial.title}</div>
            </footer>
          </blockquote>
        </div>
      </div>
    </Section>
  );
}
