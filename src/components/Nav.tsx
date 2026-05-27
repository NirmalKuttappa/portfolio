import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-medium tracking-tight">
          Nirmal Nayada
        </Link>
        <div className="flex items-center gap-1 text-sm text-muted">
          <Link href="/#projects" className="px-3 py-1.5 hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="px-3 py-1.5 hover:text-foreground transition-colors">
            Contact
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
