import { useEffect, useRef } from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const MAGIC_PALETTE = {
  skyLeft: [12, 18, 64],
  skyRight: [18, 140, 170],
  skyGlow: [160, 110, 220],
  cloudCool: [220, 240, 250],
  cloudWarm: [248, 214, 232],
  shadowCool: [24, 42, 96],
  shadowWarm: [110, 40, 140],
  sunCore: [246, 112, 140],
  sunBloom: [252, 214, 156],
  sunlightCool: [248, 184, 164],
  sunlightWarm: [252, 232, 194],
  overlayA: [236, 112, 186],
  overlayB: [84, 156, 230],
};

const DAY_STAGES = [
  {
    label: 'sunrise',
    sky: [255, 168, 118],
    clouds: [255, 202, 176],
    shadow: [110, 64, 112],
    sun: [255, 164, 96],
    sunlight: [255, 214, 160],
    overlayA: [255, 160, 140],
    overlayB: [255, 196, 130],
  },
  {
    label: 'daylight',
    sky: [112, 186, 230],
    clouds: [232, 246, 255],
    shadow: [68, 98, 160],
    sun: [255, 214, 132],
    sunlight: [255, 232, 190],
    overlayA: [168, 212, 255],
    overlayB: [120, 186, 240],
  },
  {
    label: 'sunset',
    sky: [255, 142, 92],
    clouds: [255, 188, 162],
    shadow: [120, 64, 98],
    sun: [255, 172, 108],
    sunlight: [255, 220, 172],
    overlayA: [255, 154, 130],
    overlayB: [255, 196, 122],
  },
  {
    label: 'night',
    sky: [16, 24, 64],
    clouds: [126, 144, 176],
    shadow: [20, 24, 56],
    sun: [160, 178, 220],
    sunlight: [132, 156, 210],
    overlayA: [72, 108, 176],
    overlayB: [42, 68, 120],
  },
];

const lerp = (start, end, t) => Math.round(start + (end - start) * t);
const mixRgb = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
const rgbToHex = ([r, g, b]) => (r << 16) + (g << 8) + b;
const blendStops = (stops, t) => {
  if (stops.length === 1) return stops[0];
  const clamped = Math.min(Math.max(t, 0), 1);
  const scaled = clamped * (stops.length - 1);
  const index = Math.floor(scaled);
  const localT = scaled - index;
  return mixRgb(stops[index], stops[Math.min(index + 1, stops.length - 1)], localT);
};

export function Hero() {
  const backgroundRef = useRef(null);
  const effectRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    let isMounted = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initEffect = async () => {
      if (!backgroundRef.current) return;

      if (prefersReducedMotion) {
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

    const updateColors = (xRatio, yRatio) => {
      if (!effectRef.current?.setOptions) return;

      const time = Date.now() * 0.00025;
      const swirl = (Math.sin(time + xRatio * Math.PI * 2) + 1) / 2;
      const shimmer = (Math.cos(time * 1.3 + yRatio * Math.PI * 2) + 1) / 2;
      const drift = (Math.sin(time * 0.7 + (xRatio + yRatio) * Math.PI) + 1) / 2;
      const colorDrift = (swirl + shimmer + drift) / 3;
      const dayNight = Math.min(Math.max(xRatio, 0), 1);
      const sunriseSunset = Math.min(Math.max(1 - yRatio, 0), 1);

      const sunriseStage = DAY_STAGES[0];
      const daylightStage = DAY_STAGES[1];
      const sunsetStage = DAY_STAGES[2];
      const nightStage = DAY_STAGES[3];

      const baseSky = mixRgb(daylightStage.sky, nightStage.sky, dayNight);
      const baseClouds = mixRgb(daylightStage.clouds, nightStage.clouds, dayNight);
      const baseShadow = mixRgb(daylightStage.shadow, nightStage.shadow, dayNight);
      const baseSun = mixRgb(daylightStage.sun, nightStage.sun, dayNight);
      const baseSunlight = mixRgb(daylightStage.sunlight, nightStage.sunlight, dayNight);
      const baseOverlayA = mixRgb(daylightStage.overlayA, nightStage.overlayA, dayNight);
      const baseOverlayB = mixRgb(daylightStage.overlayB, nightStage.overlayB, dayNight);

      const tintSky = mixRgb(sunriseStage.sky, sunsetStage.sky, sunriseSunset);
      const tintClouds = mixRgb(sunriseStage.clouds, sunsetStage.clouds, sunriseSunset);
      const tintShadow = mixRgb(sunriseStage.shadow, sunsetStage.shadow, sunriseSunset);
      const tintSun = mixRgb(sunriseStage.sun, sunsetStage.sun, sunriseSunset);
      const tintSunlight = mixRgb(sunriseStage.sunlight, sunsetStage.sunlight, sunriseSunset);
      const tintOverlayA = mixRgb(sunriseStage.overlayA, sunsetStage.overlayA, sunriseSunset);
      const tintOverlayB = mixRgb(sunriseStage.overlayB, sunsetStage.overlayB, sunriseSunset);

      const skyColor = mixRgb(baseSky, tintSky, 0.35 + colorDrift * 0.1);
      const cloudBase = mixRgb(baseClouds, tintClouds, 0.32 + drift * 0.1);
      const cloudShadow = mixRgb(baseShadow, tintShadow, 0.28 + shimmer * 0.1);
      const sunColor = mixRgb(baseSun, tintSun, 0.35 + swirl * 0.1);
      const sunlightColor = mixRgb(baseSunlight, tintSunlight, 0.32 + shimmer * 0.1);

      effectRef.current.setOptions({
        skyColor: rgbToHex(skyColor),
        cloudColor: rgbToHex(cloudBase),
        cloudShadowColor: rgbToHex(cloudShadow),
        sunColor: rgbToHex(sunColor),
        sunlightColor: rgbToHex(sunlightColor),
      });

      if (overlayRef.current) {
        const glowA = mixRgb(baseOverlayA, tintOverlayA, 0.35 + swirl * 0.1);
        const glowB = mixRgb(baseOverlayB, tintOverlayB, 0.35 + shimmer * 0.1);
        overlayRef.current.style.setProperty('--glow-a', `${glowA[0]}, ${glowA[1]}, ${glowA[2]}`);
        overlayRef.current.style.setProperty('--glow-b', `${glowB[0]}, ${glowB[1]}, ${glowB[2]}`);
        overlayRef.current.style.setProperty('--glow-spin', `${(time * 20) % 360}deg`);
      }
    };

    let frameId = null;
    const handleMouseMove = (event) => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        const xRatio = Math.min(Math.max(event.clientX / window.innerWidth, 0), 1);
        const yRatio = Math.min(Math.max(event.clientY / window.innerHeight, 0), 1);
        updateColors(xRatio, yRatio);
      });
    };

    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      isMounted = false;
      if (!prefersReducedMotion) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
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
        ref={overlayRef}
        className="absolute inset-0"
        style={{
          zIndex: -10,
          opacity: 0.5,
          background: `radial-gradient(circle at 20% -10%, rgba(var(--glow-a, 255, 99, 146), 0.25), transparent 55%),
            radial-gradient(circle at 85% 45%, rgba(var(--glow-b, 78, 118, 255), 0.3), transparent 60%),
            linear-gradient(180deg, rgba(9, 12, 23, 0.4) 0%, rgba(9, 12, 23, 0.65) 55%, rgba(9, 12, 23, 0.85) 100%)`,
          filter: 'hue-rotate(var(--glow-spin, 0deg)) saturate(1.35) contrast(1.05)',
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
