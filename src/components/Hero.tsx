export function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-24 pb-8 sm:pt-32 sm:pb-10">
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
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/uw.svg" alt="University of Washington" className="h-16 sm:h-20 w-auto" />
        </a>
        <a
          href="https://www.godaddy.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GoDaddy"
          title="GoDaddy"
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/godaddy.svg" alt="GoDaddy" className="h-6 w-auto" />
        </a>
        <a
          href="https://www.sap.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="SAP"
          title="SAP"
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/sap.svg" alt="SAP" className="h-9 w-auto" />
        </a>
      </div>
    </section>
  );
}
