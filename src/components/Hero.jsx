import { useEffect, useRef } from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

export function Hero() {
  const backgroundRef = useRef(null);
  const effectRef = useRef(null);

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
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          zIndex: -5,
          backgroundImage: `
            radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.8), transparent 45%),
            radial-gradient(1px 1px at 30% 70%, rgba(255,255,255,0.7), transparent 50%),
            radial-gradient(1px 1px at 55% 40%, rgba(255,255,255,0.75), transparent 45%),
            radial-gradient(1px 1px at 80% 25%, rgba(255,255,255,0.65), transparent 45%),
            radial-gradient(2px 2px at 65% 80%, rgba(255,255,255,0.4), transparent 60%),
            radial-gradient(1px 1px at 15% 55%, rgba(255,255,255,0.6), transparent 45%),
            radial-gradient(1px 1px at 45% 15%, rgba(255,255,255,0.6), transparent 40%)
          `,
          backgroundSize: '100% 100%',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">Aspiring Software Engineer</p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">Malcolm Ryu Dyer</h1>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#resume"
            className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-3 font-semibold text-[#0d0529] shadow-elevate backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[#0d0529] hover:bg-white/15 hover:text-[#0d0529] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <span>Explore my journey</span>
            <ArrowDownIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
