import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/malcolmdyer',
    gradient: 'from-gray-700 to-gray-900',
    border: 'border-gray-600/50',
    icon: (
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    )
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/malcolm-dyer',
    gradient: 'from-blue-600 to-blue-800',
    border: 'border-blue-500/50',
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    )
  }
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

  const SocialButton = ({ href, gradient, border, label, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group"
      aria-label={label}
    >
      <div
        style={{ clipPath: 'url(#squircleClip)' }}
        className={clsx(
          'w-14 h-14 rounded-xl flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 ease-out',
          'hover:scale-110 hover:-translate-y-2 hover:shadow-2xl',
          'bg-gradient-to-br text-white',
          gradient,
          border
        )}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
          {children}
        </svg>
      </div>
    </a>
  );

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled
          ? 'backdrop-blur bg-surface/70 shadow-[0_18px_40px_rgba(5,8,15,0.25)]'
          : 'bg-transparent'
      )}
    >
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path>
          </clipPath>
        </defs>
      </svg>
      <nav className="flex w-full items-center justify-end px-4 py-4 sm:px-6">
        <div className="hidden items-center gap-3 text-sm font-medium text-white md:flex">
          <a
            href="#contact"
            className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-accent hover:text-surface"
          >
            Let&apos;s connect
          </a>
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
            {socialLinks.map((link) => (
              <SocialButton key={link.label} {...link}>
                {link.icon}
              </SocialButton>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="inline-flex rounded-full border border-white/30 bg-white/10 p-2 text-white backdrop-blur hover:bg-accent/80 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </nav>
      <div
        className={clsx(
          'md:hidden transition-all duration-300 overflow-hidden bg-surface/95 backdrop-blur',
          menuOpen ? 'max-h-[26rem] border-t border-white/10' : 'max-h-0'
        )}
      >
        <div className="space-y-3 px-6 pb-5 pt-3 text-sm font-medium text-white">
          <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 rounded-xl bg-white/5 p-3 text-xs"
                onClick={() => setMenuOpen(false)}
              >
                <div
                  style={{ clipPath: 'url(#squircleClip)' }}
                  className={clsx(
                    'flex h-12 w-12 items-center justify-center rounded-xl text-white',
                    'bg-gradient-to-br',
                    link.gradient,
                    link.border
                  )}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    {link.icon}
                  </svg>
                </div>
                <span className="text-white/80">{link.label}</span>
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="block rounded-full border border-white/20 bg-accent px-4 py-2 text-center font-semibold text-surface"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s connect
          </a>
        </div>
      </div>
    </header>
  );
}
