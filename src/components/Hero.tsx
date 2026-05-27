export function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
      <h1 className="text-3xl sm:text-4xl font-medium tracking-tight leading-[1.15]">
        My name is <span className="text-foreground">Nirmal Nayada</span>.
      </h1>
      <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
        I build AI products end-to-end, from engineering the backend to designing the experience
        to writing the strategy. I&apos;ve shipped 0→1 at GoDaddy and SAP Labs, and I&apos;m
        currently at the University of Washington finishing my MS in Human Centered Design-Product
        Management.
      </p>

      <div className="mt-10 flex items-center gap-x-8 sm:gap-x-10">
        <a
          href="https://www.washington.edu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="University of Washington"
          title="University of Washington"
          className="text-foreground/50 hover:text-foreground transition-colors"
        >
          <svg
            viewBox="0 0 60 44"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="h-7 w-auto"
            aria-hidden="true"
          >
            <path d="M4 6 L17 38 L30 16 L43 38 L56 6" />
          </svg>
        </a>

        <a
          href="https://www.godaddy.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GoDaddy"
          title="GoDaddy"
          className="text-foreground/50 hover:text-foreground transition-colors"
        >
          <svg viewBox="0 0 132 28" className="h-5 w-auto" fill="currentColor" aria-hidden="true">
            <text
              x="0"
              y="22"
              fontFamily="'Helvetica Neue', Arial, sans-serif"
              fontWeight="700"
              fontSize="26"
              letterSpacing="-0.6"
            >
              GoDaddy
            </text>
          </svg>
        </a>

        <a
          href="https://www.sap.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="SAP"
          title="SAP"
          className="text-foreground/50 hover:text-foreground transition-colors"
        >
          <svg viewBox="0 0 70 32" className="h-6 w-auto" fill="currentColor" aria-hidden="true">
            <text
              x="0"
              y="26"
              fontFamily="'Helvetica Neue', Arial, sans-serif"
              fontWeight="900"
              fontSize="30"
              letterSpacing="-1.5"
            >
              SAP
            </text>
          </svg>
        </a>
      </div>
    </section>
  );
}
