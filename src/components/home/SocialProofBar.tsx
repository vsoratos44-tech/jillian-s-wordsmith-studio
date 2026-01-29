export function SocialProofBar() {
  const logos = [
    { name: "Client 1", placeholder: "Client Logo" },
    { name: "Client 2", placeholder: "Client Logo" },
    { name: "Client 3", placeholder: "Client Logo" },
    { name: "Client 4", placeholder: "Client Logo" },
    { name: "Client 5", placeholder: "Client Logo" },
  ];

  return (
    <section className="border-y border-border bg-muted/50 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by founders building something that matters
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center text-base font-heading font-semibold text-muted-foreground/60 transition-colors hover:text-muted-foreground"
            >
              {logo.placeholder}
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          20+ executives served <span className="mx-2">|</span> 500+ pieces of content delivered{" "}
          <span className="mx-2">|</span> 67% proposal close rate
        </p>
      </div>
    </section>
  );
}
