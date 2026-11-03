<script setup lang="ts">
import { gsap } from 'gsap/dist/gsap';
import {
  addScrollParallax,
  useResponsiveScrollEffects,
} from '../../utils/useResponsiveScrollEffects';

const createEffects = (heroOffset: number, footerOffset: number) => {
  const hero = document.querySelector<HTMLElement>('.hero-kv');
  const heroStage = hero?.querySelector<HTMLElement>('.hero-kv__stage');
  const scrollCue = hero?.querySelector<HTMLElement>('.hero-kv__scroll-cue');
  const footer = document.querySelector<HTMLElement>('.site-footer');
  const footerContent = footer?.querySelector<HTMLElement>('.site-footer__inner');

  addScrollParallax(heroStage, hero, heroOffset);

  if (hero && scrollCue) {
    gsap.to(scrollCue, {
      autoAlpha: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '35% top',
        scrub: 0.5,
      },
    });
  }

  if (footer && footerContent) {
    gsap.fromTo(
      footerContent,
      { autoAlpha: 0.65, y: footerOffset },
      {
        autoAlpha: 1,
        ease: 'none',
        y: 0,
        scrollTrigger: {
          trigger: footer,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      },
    );
  }
};

useResponsiveScrollEffects(
  () => createEffects(140, 64),
  () => createEffects(70, 36),
);
</script>

<template>
  <span class="home-scroll-effects" aria-hidden="true"></span>
</template>

<style scoped>
.home-scroll-effects {
  display: none;
}
</style>
