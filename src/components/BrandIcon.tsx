import type { ProjectIcon } from "@/data/projects";

type Props = {
  name: ProjectIcon;
  className?: string;
};

export function BrandIcon({ name, className = "h-7 w-7" }: Props) {
  switch (name) {
    case "netlify":
      return (
        <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
          <path
            fill="#05BDBA"
            d="M128 0c70.7 0 128 57.3 128 128s-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0zm-7.9 152.6L80.4 112.9l-7.7 7.7 40 40 7.4-7.4v-.6zm15.8-22.3l40 40 7.7-7.7-40-40-7.7 7.7zm-15.8 22.3l7.4-7.4-40-40-7.7 7.7 40.3 39.7zm-23.6-79.4l40 40 7.7-7.7-40-40-7.7 7.7zm63.4 0l-40 40 7.7 7.7 40-40-7.7-7.7zM128 88c-3.3 0-6 2.7-6 6v68c0 3.3 2.7 6 6 6s6-2.7 6-6V94c0-3.3-2.7-6-6-6z"
          />
        </svg>
      );

    case "github":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            className="fill-foreground"
            d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"
          />
        </svg>
      );

    case "lovable":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="lovable-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF66C4" />
              <stop offset="100%" stopColor="#FF3366" />
            </linearGradient>
          </defs>
          <path
            fill="url(#lovable-gradient)"
            d="M12 21s-7.5-4.5-9.5-9C1.13 8.7 3 5 6.5 5c2 0 3.6 1.1 4.5 2.5h2c.9-1.4 2.5-2.5 4.5-2.5 3.5 0 5.37 3.7 4 7-2 4.5-9.5 9-9.5 9z"
          />
        </svg>
      );

    case "figma":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path fill="#F24E1E" d="M8.5 2h3.5v6.5H8.5A3.25 3.25 0 1 1 8.5 2z" />
          <path fill="#A259FF" d="M12 8.5h3.5a3.25 3.25 0 1 1 0 6.5H12V8.5z" />
          <path fill="#0ACF83" d="M8.5 15h3.5v3.25a3.25 3.25 0 1 1-3.5-3.25z" />
          <path fill="#FF7262" d="M12 2h3.5a3.25 3.25 0 1 1 0 6.5H12V2z" />
          <path fill="#1ABCFE" d="M8.5 8.5H12V15H8.5a3.25 3.25 0 1 1 0-6.5z" />
        </svg>
      );

    case "drive":
      return (
        <svg viewBox="0 0 87.3 78" className={className} aria-hidden="true">
          <path fill="#0066da" d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" />
          <path fill="#00ac47" d="M43.65 25 30.9 3c-1.35.8-2.5 1.9-3.3 3.3l-26.4 45.7A9.06 9.06 0 0 0 0 56.5h27.5z" />
          <path fill="#ea4335" d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.798l5.852 11.5z" />
          <path fill="#00832d" d="M43.65 25 56.4 3c-1.35-.8-2.9-1.2-4.5-1.2H35.4c-1.6 0-3.15.45-4.5 1.2z" />
          <path fill="#2684fc" d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" />
          <path fill="#ffba00" d="M73.4 26.5 60.2 3.7c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25l16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" />
        </svg>
      );

    case "video":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect x="2" y="5" width="20" height="14" rx="3" className="fill-foreground/10" />
          <path d="M10 9.5v5l4.5-2.5-4.5-2.5z" className="fill-foreground" />
        </svg>
      );

    case "external":
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M7 17L17 7M9 7h8v8" />
        </svg>
      );
  }
}
