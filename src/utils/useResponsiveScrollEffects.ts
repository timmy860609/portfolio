import { onBeforeUnmount, onMounted } from 'vue';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const desktopMotionQuery =
  '(min-width: 768px) and (prefers-reduced-motion: no-preference)';
const mobileMotionQuery =
  '(max-width: 767px) and (prefers-reduced-motion: no-preference)';

export function addScrollParallax(
  target: HTMLElement | undefined,
  trigger: HTMLElement | undefined,
  offset: number,
) {
  if (!target || !trigger) return;

  gsap.to(target, {
    ease: 'none',
    y: offset,
    scrollTrigger: {
      trigger,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.5,
    },
  });
}

export function useResponsiveScrollEffects(
  createDesktopEffects: () => void,
  createMobileEffects: () => void,
) {
  let mediaContext: ReturnType<typeof gsap.matchMedia> | undefined;

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    mediaContext = gsap.matchMedia();
    mediaContext.add(desktopMotionQuery, createDesktopEffects);
    mediaContext.add(mobileMotionQuery, createMobileEffects);
  });

  onBeforeUnmount(() => {
    mediaContext?.revert();
  });
}
