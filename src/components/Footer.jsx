export function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-6xl px-6 pb-12 text-sm text-white/60">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
        <p>© {new Date().getFullYear()} Malcolm Ryu Dyer. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="mailto:malcolm.ryu.dyer@gmail.com" className="hover:text-white">
            Email
          </a>
          <a href="tel:+14083408601" className="hover:text-white">
            (408) 340-8601
          </a>
          <a href="https://linkedin.com/in/malcolm-dyer" className="hover:text-white" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
