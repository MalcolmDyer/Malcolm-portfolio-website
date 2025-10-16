import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const sections = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => setMenuOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled
          ? 'backdrop-blur bg-surface/70 shadow-[0_18px_40px_rgba(5,8,15,0.25)]'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold text-lg tracking-wide text-white">
          Malcolm Ryu Dyer
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-white lg:flex">
          {sections.map((section) => (
            <a key={section.name} href={section.href} className="hover:text-accent transition-colors">
              {section.name}
            </a>
          ))}
          <a
            href="mailto:malcolm.ryu.dyer@gmail.com"
            className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-accent hover:text-surface"
          >
            Email me
          </a>
        </div>
        <button
          type="button"
          className="inline-flex rounded-full border border-white/30 bg-white/10 p-2 text-white backdrop-blur hover:bg-accent/80 lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </nav>
      <div
        className={clsx(
          'lg:hidden transition-all duration-300 overflow-hidden bg-surface/95 backdrop-blur',
          menuOpen ? 'max-h-96 border-t border-white/10' : 'max-h-0'
        )}
      >
        <div className="space-y-2 px-6 pb-4 pt-2 text-sm font-medium text-white">
          {sections.map((section) => (
            <a
              key={section.name}
              href={section.href}
              className="block rounded-lg px-3 py-2 hover:bg-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {section.name}
            </a>
          ))}
          <a
            href="mailto:malcolm.ryu.dyer@gmail.com"
            className="mt-4 block rounded-full border border-white/20 bg-accent px-4 py-2 text-center font-semibold text-surface"
            onClick={() => setMenuOpen(false)}
          >
            Email me
          </a>
        </div>
      </div>
    </header>
  );
}
