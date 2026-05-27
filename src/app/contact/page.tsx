import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — Nirmal Nayada",
  description: "Get in touch via email or LinkedIn.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="w-full max-w-xl text-center animate-fade-up">
          <p className="text-sm uppercase tracking-widest text-muted">Get in touch</p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight">
            Let&apos;s talk.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            Contact me via email or head to my LinkedIn.
          </p>

          <div className="mt-12 flex items-center justify-center gap-10 sm:gap-14">
            {/* Gmail */}
            <a
              href="mailto:nirmalkuttappa@gmail.com"
              className="group flex flex-col items-center gap-3 animate-float"
              aria-label="Send an email"
            >
              <span className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl border border-border/70 bg-background shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-md group-hover:border-foreground/30">
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  aria-hidden="true"
                >
                  <path fill="#4285F4" d="M22 6.98v10.04a2 2 0 0 1-2 2h-1.5V9.32L12 13.78 5.5 9.32v9.7H4a2 2 0 0 1-2-2V6.98a2 2 0 0 1 2-2h.66L12 9.96l7.34-4.98H20a2 2 0 0 1 2 2z" />
                  <path fill="#34A853" d="M5.5 19.02V9.32L12 13.78V19.02H5.5z" />
                  <path fill="#FBBC04" d="M18.5 19.02V9.32L12 13.78V19.02h6.5z" />
                  <path fill="#EA4335" d="M5.5 9.32 4.66 4.98H4a2 2 0 0 0-2 2v.66l3.5 1.68z" />
                  <path fill="#C5221F" d="M18.5 9.32 19.34 4.98H20a2 2 0 0 1 2 2v.66L18.5 9.32z" />
                </svg>
              </span>
              <span className="text-sm text-muted transition-colors group-hover:text-foreground">
                Email
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nirmmall-kuttapaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 animate-float-delay"
              aria-label="Open LinkedIn profile"
            >
              <span className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl border border-border/70 bg-background shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-md group-hover:border-foreground/30">
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  aria-hidden="true"
                >
                  <rect width="24" height="24" rx="4" fill="#0A66C2" />
                  <path
                    fill="#fff"
                    d="M7.06 9.5h2.4v7.7h-2.4V9.5zm1.2-3.7a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8zM11 9.5h2.3v1.05h.03c.32-.6 1.1-1.24 2.27-1.24 2.43 0 2.88 1.6 2.88 3.68v4.21H16.1v-3.73c0-.89-.02-2.03-1.24-2.03-1.24 0-1.43.97-1.43 1.97v3.79H11V9.5z"
                  />
                </svg>
              </span>
              <span className="text-sm text-muted transition-colors group-hover:text-foreground">
                LinkedIn
              </span>
            </a>
          </div>

          <p className="mt-14 text-xs text-muted/70">
            nirmalkuttappa@gmail.com
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
