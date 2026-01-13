import { useEffect, useRef } from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const MAGIC_PALETTE = {
  skyLeft: [18, 24, 74],
  skyRight: [120, 158, 210],
  skyGlow: [214, 126, 196],
  cloudCool: [216, 228, 242],
  cloudWarm: [252, 206, 186],
  shadowCool: [36, 44, 92],
  shadowWarm: [118, 66, 104],
  sunCore: [255, 148, 102],
  sunBloom: [255, 206, 150],
  sunlightCool: [246, 182, 162],
  sunlightWarm: [255, 224, 186],
  overlayA: [242, 126, 168],
  overlayB: [146, 170, 220],
};

const DAY_STAGES = [
  {
    label: 'sunrise',
    sky: [252, 176, 132],
    clouds: [255, 206, 186],
    shadow: [128, 76, 118],
    sun: [255, 160, 110],
    sunlight: [255, 216, 170],
    overlayA: [252, 162, 150],
    overlayB: [252, 198, 142],
  },
  {
    label: 'daylight',
    sky: [122, 178, 222],
    clouds: [226, 236, 246],
    shadow: [76, 106, 164],
    sun: [255, 210, 140],
    sunlight: [255, 232, 198],
    overlayA: [182, 210, 238],
    overlayB: [142, 186, 228],
  },
  {
    label: 'sunset',
    sky: [188, 108, 190],
    clouds: [232, 168, 210],
    shadow: [92, 58, 130],
    sun: [232, 138, 200],
    sunlight: [244, 196, 228],
    overlayA: [206, 128, 206],
    overlayB: [178, 132, 210],
  },
  {
    label: 'night',
    sky: [18, 26, 70],
    clouds: [116, 132, 170],
    shadow: [22, 28, 62],
    sun: [148, 168, 210],
    sunlight: [122, 146, 198],
    overlayA: [86, 112, 172],
    overlayB: [50, 72, 126],
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

      const skyColor = mixRgb(baseSky, tintSky, 0.48 + colorDrift * 0.12);
      const cloudBase = mixRgb(baseClouds, tintClouds, 0.46 + drift * 0.12);
      const cloudShadow = mixRgb(baseShadow, tintShadow, 0.42 + shimmer * 0.12);
      const sunColor = mixRgb(baseSun, tintSun, 0.5 + swirl * 0.12);
      const sunlightColor = mixRgb(baseSunlight, tintSunlight, 0.46 + shimmer * 0.12);

      effectRef.current.setOptions({
        skyColor: rgbToHex(skyColor),
        cloudColor: rgbToHex(cloudBase),
        cloudShadowColor: rgbToHex(cloudShadow),
        sunColor: rgbToHex(sunColor),
        sunlightColor: rgbToHex(sunlightColor),
      });

      if (overlayRef.current) {
        const glowA = mixRgb(baseOverlayA, tintOverlayA, 0.48 + swirl * 0.12);
        const glowB = mixRgb(baseOverlayB, tintOverlayB, 0.48 + shimmer * 0.12);
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
