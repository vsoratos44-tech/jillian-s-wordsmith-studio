import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";

const ABOUT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jillian Whitlow",
  jobTitle: "Ghostwriter & Content Strategist",
  description: "LinkedIn ghostwriter and content strategist for founders and executives.",
};

const About = () => {
  usePageMeta({
    title: "About Jillian Whitlow | LinkedIn Ghostwriter & Content Strategist",
    description:
      "From valedictorian at 16 to college dropout (twice) to chef to SaaS professional — I took the scenic route to find my calling as a ghostwriter and content strategist.",
    canonicalPath: "/about",
    jsonLd: ABOUT_JSONLD,
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.08),transparent_55%)]" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              I took the scenic route to get here.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Valedictorian at 16. College dropout... twice. Chef. Restaurant manager. SaaS professional. Mom of three. And now, finally, doing the work I was meant to do.
            </p>
            <p className="mt-10 font-script text-3xl text-accent md:text-4xl">
              My Story
            </p>
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <Section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-16">
          {/* Section 1: The Beginning */}
          <StorySection title="The Beginning">
            <p>
              I graduated high school more than twenty years ago as valedictorian. I was sixteen.
            </p>
            <p>
              That same year, I moved to a faraway state to start college with ambitions of becoming the first female president of the United States. I was going to change the world.
            </p>
            <p>
              I was also quick to realize I wasn't dishonest (or wealthy) enough for politics.
            </p>
            <p>
              So I switched from poli-sci to journalism. And then I dropped out — because it turns out sixteen is not a reasonable age to start college. Who knew.
            </p>
          </StorySection>

          {/* Section 2: The Detours */}
          <StorySection title="The Detours">
            <p>
              About a year later (and no wiser), I tried again.
            </p>
            <p>
              Different university. New plan. This time I was going to be a doctor — biology major, pre-med track, the whole thing.
            </p>
            <p>
              Then I took a Philosophy of the Mind course. It was endlessly fascinating. I switched my major to philosophy.
            </p>
            <p>
              And then I dropped out. Again.
            </p>
            <p>
              This time, I had a new dream: I was going to travel the world — eating, drinking, writing, and fancying myself the next Anthony Bourdain.
            </p>
          </StorySection>

          {/* Section 3: The Hospitality Years */}
          <StorySection title="The Hospitality Years">
            <p>
              There's not much money in being a chef. (Except maybe if you achieve celebrity status, which I did not.)
            </p>
            <p>
              So I made a decent living in gratuity-based roles — the kind where your income depends on showing up, working hard, and actually connecting with people. I got good at reading a room, anticipating needs, and making someone's evening a little bit better.
            </p>
            <p>
              Eventually, I advanced through the ranks and found myself managing operations at some of the top names in hospitality. I learned how to run a business. How to lead a team. How to handle the chaos of a Friday night rush and still show up with a smile on Saturday morning.
            </p>
            <p>
              All of it would matter later. I just didn't know it yet.
            </p>
          </StorySection>

          {/* Section 4: The Pivot */}
          <StorySection title="The Pivot">
            <p>
              Motherhood sent me on a different path.
            </p>
            <p>
              I transitioned to remote work in B2B SaaS — sales and customer success. It was a different world, but some things stayed the same: understanding people, anticipating their needs, communicating in a way that actually resonated.
            </p>
            <p>
              I was building skills I didn't even know I was building.
            </p>
            <p className="font-medium text-foreground">
              And then, at 35, something clicked.
            </p>
          </StorySection>

          {/* Section 5: Finding It */}
          <StorySection title="Finding It">
            <p>
              I found what I truly love doing.
            </p>
            <p>
              Ghostwriting. Content strategy. Helping founders and executives figure out what they want to say — and then saying it in a way that sounds unmistakably like them.
            </p>
            <p>
              I was telling my dear friend the other day how great it felt to finally have found my thing. To be able to earn a living doing work that actually matters to me.
            </p>
            <p>
              It didn't happen until I was 35. And I recognize that this may not be what I do forever. But right now? This is it.
            </p>
            <p>
              I'm running my own business. I'm earning more than sixteen-, twenty-six-, or thirty-year-old me ever thought I'd see in a lifetime.
            </p>
            <p className="font-medium text-foreground">
              And I'm doing it on my own terms.
            </p>
          </StorySection>

          {/* Section 6: The Reality */}
          <StorySection title="The Reality">
            <p>
              Here's what my life actually looks like:
            </p>
            <p>
              I have three kids under the age of three. Yes, really.
            </p>
            <p>
              I'm the sole provider for my family. Every proposal I send, every client I take on, every piece of content I write — it matters. My family depends on me getting this right.
            </p>
            <p>
              I work during naptime. In the early mornings. Late at night. On weekends when most of my W-2 friends have the day off. I've taken discovery calls on four hours of sleep after a sick, teething baby kept me up all night.
            </p>
            <p>
              This isn't a glamorous "quit your job and follow your dreams" story. It's a "show up every single day and do the work" story.
            </p>
            <p className="font-medium text-foreground">
              It's grit. Prioritization. Goal setting and the ruthless pursuit of stability for the people I love.
            </p>
          </StorySection>

          {/* Section 7: What I Believe */}
          <StorySection title="What I Believe">
            <p className="font-medium text-foreground">
              I believe your stories are what set you apart.
            </p>
            <p>
              Not your title. Not your credentials. Not the AI tool you're using to churn out content that sounds like everyone else's.
            </p>
            <p>
              Your specific experiences. Your unique point of view. The lessons you've learned the hard way. That's what makes your content worth reading.
            </p>
            <p>
              I've experimented with AI. I get the appeal. But I can tell you from experience — my recollection of AI-assisted content is absolute garbage. I can barely remember what I "wrote" a few months ago. And yet, there are exact phrases I can recall writing twenty years ago, sitting in front of a glowing CRT monitor, channeling teenage heartbreak into poetry on Myspace.
            </p>
            <p>
              Writing is thinking. When you outsource the writing, you outsource the thinking. And when you outsource the thinking, you lose something you can't get back.
            </p>
            <p className="font-medium text-foreground">
              That's why I do what I do the way I do it. Human writing. Human connection. Human ideas, sharpened and delivered in a way that actually resonates.
            </p>
          </StorySection>

          {/* Section 8: How I Work */}
          <StorySection title="How I Work">
            <p>
              I'm selective about who I work with.
            </p>
            <p>
              Over the last fifteen months, about 67% of the proposals I've sent have been accepted. That's not because I'm the world's greatest salesperson. It's because I only send proposals when I'm genuinely confident we'd be great together.
            </p>
            <p>
              Before we ever get to that point, I'm asking myself:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Do we have values alignment?</li>
              <li>Are you willing to give my recommended strategy a real shot?</li>
              <li>Do you trust me when I tell you that specific stories outperform generic advice?</li>
              <li>Are you okay with forgoing the pursuit of virality in favor of meaningful connections?</li>
            </ul>
            <p>
              If I get the impression that we're going to spend our entire engagement trying to force each other into our respective molds, it's just not a fit.
            </p>
            <p className="font-medium text-foreground">
              But if I send a proposal, it's a signal that I truly think we'd be onto something together.
            </p>
          </StorySection>

          {/* Section 9: The Invitation */}
          <StorySection title="The Invitation">
            <p>
              If you're still reading, here's what I want you to know:
            </p>
            <p>
              All those detours — the dropped majors, the career pivots, the years of figuring it out — they weren't wasted. They taught me how to listen. How to adapt. How to find the story worth telling.
            </p>
            <p>
              And if you feel like you're stuck right now? Keep going.
            </p>
            <p>
              Be open to new opportunities and new paths. To stretching yourself, looking dumb, and learning a lot along the way. Where you think you're headed now may not be where you end up.
            </p>
            <p>
              But with enough ambition (and yeah, a little bit of luck), you'll find your way.
            </p>
            <p className="font-medium text-foreground">
              I did. And I'd love to help you find yours.
            </p>
          </StorySection>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section variant="muted" className="py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Ready to see if we're a fit?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Let's have a real conversation — no pitch, no pressure. Just 30 minutes to talk about where you are, where you want to be, and whether I'm the right person to help you get there.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 bg-accent px-8 text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/contact">
              <Calendar className="mr-2 h-4 w-4" />
              Book a Discovery Call
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

interface StorySectionProps {
  title: string;
  children: React.ReactNode;
}

function StorySection({ title, children }: StorySectionProps) {
  return (
    <div>
      <h2 className="mb-6 font-heading text-2xl font-bold text-foreground md:text-3xl">
        {title}
      </h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default About;
