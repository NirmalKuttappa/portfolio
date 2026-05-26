export function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <h1 className="text-3xl sm:text-4xl font-medium tracking-tight leading-[1.15]">
        My name is <span className="text-foreground">[YOUR NAME]</span>. I&apos;m a{" "}
        <span className="text-foreground">[YOUR ROLE]</span> based in{" "}
        <span className="text-foreground">[YOUR LOCATION]</span>.
      </h1>
      <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
        [YOUR BIO] — replace this with a short, honest one-paragraph introduction. Mention the
        kind of work you enjoy, the problems you like solving, and anything that makes your
        perspective unusual.
      </p>
    </section>
  );
}
