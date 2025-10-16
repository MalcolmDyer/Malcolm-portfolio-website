import { useEffect, useRef } from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const contactItems = [
  { label: 'San José, CA' },
  { label: 'malcolm.ryu.dyer@gmail.com', href: 'mailto:malcolm.ryu.dyer@gmail.com' },
  { label: '(408) 340-8601', href: 'tel:+14083408601' },
  { label: 'linkedin.com/in/malcolm-dyer', href: 'https://linkedin.com/in/malcolm-dyer' }
];

export function Hero() {
  const backgroundRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    let isMounted = true;

    const initEffect = async () => {
      if (!backgroundRef.current) return;

      try {
        const [{ default: vantaBirds }, THREE] = await Promise.all([
          import('vanta/dist/vanta.birds.min'),
          import('three'),
        ]);

        if (!isMounted || !backgroundRef.current) return;

        const threeInstance = THREE.default ?? THREE;

        if (effectRef.current) {
          effectRef.current.destroy();
          effectRef.current = null;
        }

        effectRef.current = vantaBirds({
          el: backgroundRef.current,
          THREE: threeInstance,
          backgroundAlpha: 0,
          color1: 0xff3c70,
          color2: 0x3256ff,
          colorMode: 'varianceGradient',
          quantity: 4,
          cohesion: 22,
          separation: 26,
          alignment: 24,
          speedLimit: 4,
          birdSize: 1.4,
        });
      } catch (error) {
        console.error('Failed to initialize the Vanta Birds effect.', error);
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

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32"
    >
      <div ref={backgroundRef} className="pointer-events-none absolute inset-0" style={{ zIndex: -20 }} aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          zIndex: -10,
          background: `radial-gradient(circle at 20% -10%, rgba(255, 99, 146, 0.35), transparent 55%),
            radial-gradient(circle at 85% 45%, rgba(78, 118, 255, 0.4), transparent 60%),
            linear-gradient(180deg, rgba(9, 12, 23, 0.8) 0%, rgba(9, 12, 23, 0.9) 55%, rgba(9, 12, 23, 0.95) 100%)`,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">Software Engineering Student &amp; Frontend Engineer</p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">Malcolm Ryu Dyer</h1>
        <p className="mt-6 text-lg text-white/70">
          San José-based engineer focused on secure, resilient user experiences. I build responsive web interfaces,
          modernize testing pipelines, and lead collaborative workflows that keep teams shipping with confidence.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
          {contactItems.map((item) => {
            const className = 'rounded-full border border-white/20 bg-white/5 px-4 py-2 transition-colors hover:border-accent hover:text-white';
            if (item.href) {
              const isExternal = item.href.startsWith('http');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={className}
                  {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {item.label}
                </a>
              );
            }
            return (
              <span key={item.label} className={className}>
                {item.label}
              </span>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#summary"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-surface shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Explore my journey
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
          >
            <span>Let&apos;s build together</span>
            <ArrowDownIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
