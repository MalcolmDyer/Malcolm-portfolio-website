export function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-6xl px-6 pb-12 text-sm text-white/60">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
        <p>© {new Date().getFullYear()} Malcolm. Crafted with intent.</p>
        <div className="flex gap-6">
          <a href="https://dribbble.com" className="hover:text-white" target="_blank" rel="noreferrer">
            Dribbble
          </a>
          <a href="https://github.com" className="hover:text-white" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" className="hover:text-white" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
