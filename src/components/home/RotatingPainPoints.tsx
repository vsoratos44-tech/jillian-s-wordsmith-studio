import { useEffect, useMemo, useState } from "react";

type PainPoint = {
  label: string;
  quote: string;
  body: string;
};

export function RotatingPainPoints() {
  const items = useMemo<PainPoint[]>(
    () => [
      {
        label: "The Time Problem",
        quote: "I know I should be posting on LinkedIn, but…",
        body:
          "You've got a business to run, clients to serve, and approximately 47 other things that need your attention before \"write a LinkedIn post\" ever makes it to the top of the list. You're not lazy — you're just busy building something that matters.",
      },
      {
        label: "The Voice Problem",
        quote: "Everything I write sounds generic.",
        body:
          "You've tried posting. Maybe you even did it consistently for a while. But everything ended up sounding like everyone else — or worse, like ChatGPT wrote it. (No shade if you tried. Most people have. It just… doesn't work.)",
      },
      {
        label: "The Results Problem",
        quote: "I'm posting, but nothing's happening.",
        body:
          "Likes from your mom don't count. (Love you, Mom.) You want inbound leads. Speaking invitations. Partnerships. The kind of opportunities that come from being seen as a genuine expert in your space — not just another person with a title and a post schedule.",
      },
      {
        label: "The AI Problem",
        quote: "I don't want to sound like a robot.",
        body:
          "You've heard the pitch: \"Just use AI! It's so easy!\" But here's what they don't tell you — your audience can tell. And more importantly: you can tell. Using AI to churn out content might save time, but it costs you something more important: the ability to think through your own ideas and build real connections with real people.",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const total = items.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 7500);
    return () => window.clearInterval(id);
  }, [total]);

  const current = items[active];

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="font-heading text-sm font-semibold text-accent">{current.label}</p>
        <p className="text-xs text-muted-foreground">
          {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>

      <p className="mt-3 font-heading text-xl font-semibold text-foreground md:text-2xl">
        “{current.quote}”
      </p>
      <p className="mt-4 text-muted-foreground">{current.body}</p>

      <div className="mt-6 flex items-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className="h-2.5 w-2.5 rounded-full bg-muted transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            style={{ opacity: i === active ? 1 : 0.35 }}
            aria-label={`Show pain point ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
