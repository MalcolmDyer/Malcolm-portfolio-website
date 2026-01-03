import { useEffect, useRef, useState } from 'react';
import { ArrowDownIcon, CheckIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline';

const contactItems = [
  { label: 'San José, CA' },
  {
    label: 'malcolm.ryu.dyer@gmail.com',
    href: 'mailto:malcolm.ryu.dyer@gmail.com',
    copyValue: 'malcolm.ryu.dyer@gmail.com',
  },
  {
    label: '(408) 340-8601',
    href: 'tel:+14083408601',
    copyValue: '(408) 340-8601',
  },
  { label: 'linkedin.com/in/malcolm-dyer', href: 'https://linkedin.com/in/malcolm-dyer' }
];

export function Hero() {
  const backgroundRef = useRef(null);
  const effectRef = useRef(null);
  const copyTimeoutRef = useRef(null);
  const [copiedLabel, setCopiedLabel] = useState(null);

  const handleCopy = async (value, label) => {
    if (typeof window === 'undefined') return;

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else if (typeof document !== 'undefined') {
        const textarea = document.createElement('textarea');
        textarea.value = value;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      } else {
        throw new Error('Clipboard API is unavailable in this environment.');
      }

      setCopiedLabel(label);
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
      copyTimeoutRef.current = window.setTimeout(() => {
        setCopiedLabel(null);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy contact info.', error);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    let isMounted = true;

    const initEffect = async () => {
      if (!backgroundRef.current) return;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      try {
        const [{ default: vantaClouds }, THREE] = await Promise.all([
          import('vanta/dist/vanta.clouds.min'),
          import('three'),
        ]);

        if (!isMounted || !backgroundRef.current) return;

        const threeInstance = THREE.default ?? THREE;

        if (effectRef.current) {
          effectRef.current.destroy();
          effectRef.current = null;
        }

        effectRef.current = vantaClouds({
          el: backgroundRef.current,
          THREE: threeInstance,
          backgroundAlpha: 0,
          skyColor: 0x05080f,
          cloudColor: 0xf7fbff,
          cloudShadowColor: 0x1a2a4a,
          sunColor: 0xff6f91,
          sunlightColor: 0xffc197,
          speed: 0.8,
          zoom: 0.9,
        });
      } catch (error) {
        console.error('Failed to initialize the Vanta Clouds effect.', error);
      }
    };

    initEffect();

    return () => {
      isMounted = false;
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32"
    >
      <div ref={backgroundRef} className="pointer-events-none absolute inset-0" style={{ zIndex: 0 }} aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          zIndex: -10,
          opacity: 0.55,
          background: `radial-gradient(circle at 20% -10%, rgba(255, 99, 146, 0.25), transparent 55%),
            radial-gradient(circle at 85% 45%, rgba(78, 118, 255, 0.3), transparent 60%),
            linear-gradient(180deg, rgba(9, 12, 23, 0.4) 0%, rgba(9, 12, 23, 0.65) 55%, rgba(9, 12, 23, 0.85) 100%)`,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">Aspiring Software Engineer</p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">Malcolm Ryu Dyer</h1>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
          {contactItems.map((item) => {
            const isCopyable = Boolean(item.copyValue);
            const className = [
              'inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-slate-900/70 px-4 py-2 text-white/90 shadow-elevate backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-slate-800/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
              isCopyable ? 'pr-10' : '',
            ]
              .filter(Boolean)
              .join(' ');
            const isExternal = item.href?.startsWith('http');

            return (
              <div key={item.label} className="group relative">
                {item.href ? (
                  <a
                    href={item.href}
                    className={className}
                    {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className={className}>{item.label}</span>
                )}
                {isCopyable && (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      handleCopy(item.copyValue ?? item.label, item.label);
                    }}
                    aria-label={`Copy ${item.label}`}
                    className="pointer-events-none absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 scale-75 items-center justify-center text-white/70 opacity-0 transition-transform transition-opacity duration-150 ease-out group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:scale-100 group-focus-within:opacity-100 focus-visible:pointer-events-auto focus-visible:scale-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:text-accent"
                  >
                    {copiedLabel === item.label ? (
                      <CheckIcon className="h-4 w-4 text-accent" />
                    ) : (
                      <ClipboardDocumentIcon className="h-4 w-4" />
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#resume"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-accent via-sky-400 to-sky-500 px-7 py-3 font-semibold text-surface shadow-glow transition-all hover:-translate-y-0.5 hover:from-sky-300 hover:via-accent hover:to-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <span>Explore my journey</span>
            <ArrowDownIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
