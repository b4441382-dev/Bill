import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Reveal: fades/slides children in when they enter the viewport and out when
 * they leave (appearance + disappearance on scroll).
 */
export function Reveal({ children, className = '', variant = '', delay = 0 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${variant} ${inView ? 'is-in' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/**
 * Typewriter: types phrases letter by letter, holds, deletes and loops
 * forever. Renders the first phrase statically when reduced motion is on.
 */
export function Typewriter({ phrases, className = '', typeMs = 62, deleteMs = 30, holdMs = 1900 }) {
  const [staticMode] = useState(prefersReducedMotion);
  const [display, setDisplay] = useState(staticMode ? phrases[0] : '');
  useEffect(() => {
    if (staticMode) return undefined;
    const state = { phrase: 0, len: 0, mode: 'typing' };
    let timer;
    const tick = () => {
      const target = phrases[state.phrase];
      if (state.mode === 'typing') {
        state.len += 1;
        setDisplay(target.slice(0, state.len));
        if (state.len >= target.length) {
          state.mode = 'holding';
          timer = window.setTimeout(tick, holdMs);
          return;
        }
        timer = window.setTimeout(tick, typeMs);
      } else if (state.mode === 'holding') {
        state.mode = 'deleting';
        timer = window.setTimeout(tick, deleteMs);
      } else {
        state.len -= 1;
        setDisplay(target.slice(0, Math.max(0, state.len)));
        if (state.len <= 0) {
          state.mode = 'typing';
          state.phrase = (state.phrase + 1) % phrases.length;
          timer = window.setTimeout(tick, 380);
          return;
        }
        timer = window.setTimeout(tick, deleteMs);
      }
    };
    timer = window.setTimeout(tick, 500);
    return () => window.clearTimeout(timer);
  }, [phrases, typeMs, deleteMs, holdMs, staticMode]);
  return (
    <span className={`typewriter ${className}`.trim()}>
      <span className="typewriter-text">{display}</span>
      <span className="typewriter-caret" aria-hidden="true" />
    </span>
  );
}

/**
 * Marquee: seamless infinite horizontal scroll. Children are duplicated so
 * the loop never shows a gap.
 */
export function Marquee({ children, className = '', duration = 28, reverse = false }) {
  return (
    <div className={`marquee ${className}`.trim()}>
      <div
        className="marquee-track"
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? 'reverse' : undefined }}
      >
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

/**
 * CountUp: counts from 0 to `to` with an ease-out curve the first time the
 * element scrolls into view. Static when reduced motion is on.
 */
export function CountUp({ to, duration = 1500, className = '', format }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setValue(to);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();
        const start = performance.now();
        const step = (now) => {
          const t = Math.min(1, (now - start) / duration);
          setValue(to * (1 - Math.pow(1 - t, 3)));
          if (t < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [to, duration]);
  const shown = format ? format(value) : Math.round(value).toLocaleString('en-US');
  return <span ref={ref} className={`count-up ${className}`.trim()}>{shown}</span>;
}

/**
 * ScrollProgress: thin gradient bar at the top that fills as the page scrolls.
 */
export function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${progress})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return <div className="scroll-progress" ref={ref} aria-hidden="true" />;
}
