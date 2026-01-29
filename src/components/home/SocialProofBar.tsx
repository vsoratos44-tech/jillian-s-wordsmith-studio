export function SocialProofBar() {
  const logos = [
    { name: "Forbes", placeholder: "Forbes" },
    { name: "Inc.", placeholder: "Inc." },
    { name: "Entrepreneur", placeholder: "Entrepreneur" },
    { name: "Fast Company", placeholder: "Fast Company" },
    { name: "Harvard Business Review", placeholder: "HBR" },
  ];

  return (
    <section className="border-y border-border bg-muted/50 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Clients Featured In
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center text-lg font-heading font-semibold text-muted-foreground/60 transition-colors hover:text-muted-foreground"
            >
              {logo.placeholder}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
