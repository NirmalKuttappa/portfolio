export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-3xl px-6 py-10 border-t border-border/60 text-xs text-muted">
      <div className="flex items-center justify-between">
        <span>© {year} Nirmal Nayada</span>
        <span>Built with Next.js · Deployed on Netlify</span>
      </div>
    </footer>
  );
}
