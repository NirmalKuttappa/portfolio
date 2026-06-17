export function Footer() {
  const year = new Date().getFullYear();
  const host = process.env.VERCEL ? "Vercel" : process.env.NETLIFY ? "Netlify" : null;
  return (
    <footer className="mx-auto max-w-3xl px-6 py-10 border-t border-border/60 text-xs text-muted">
      <div className="flex items-center justify-between">
        <span>© {year} Nirmal Nayada</span>
        <span>Built with Next.js{host ? ` · Deployed on ${host}` : ""}</span>
      </div>
    </footer>
  );
}
