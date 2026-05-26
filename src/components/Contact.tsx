export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h2 className="text-sm uppercase tracking-widest text-muted mb-6">Contact</h2>
      <p className="text-base sm:text-lg leading-relaxed">
        The best way to reach me is by email at{" "}
        <a
          href="mailto:[YOUR EMAIL]"
          className="underline underline-offset-4 decoration-1 hover:decoration-2"
        >
          [YOUR EMAIL]
        </a>
        . You can also find me on{" "}
        <a
          href="https://github.com/NirmalKuttappa"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-1 hover:decoration-2"
        >
          GitHub
        </a>{" "}
        and{" "}
        <a
          href="[YOUR LINKEDIN]"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-1 hover:decoration-2"
        >
          LinkedIn
        </a>
        .
      </p>
    </section>
  );
}
