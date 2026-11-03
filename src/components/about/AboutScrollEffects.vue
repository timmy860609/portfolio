<script setup lang="ts">
import { gsap } from 'gsap/dist/gsap';
import {
  addScrollParallax,
  useResponsiveScrollEffects,
} from '../../utils/useResponsiveScrollEffects';

const createEffects = (contentOffset: number, heroOffset: number) => {
  const hero = document.querySelector<HTMLElement>('.about-hero');
  const heroStage = hero?.querySelector<HTMLElement>('.about-hero__stage');
  const experience = document.querySelector<HTMLElement>('.about-experience');
  const experienceContent = experience?.querySelector<HTMLElement>(
    '.about-experience__inner',
  );

  addScrollParallax(heroStage, hero, heroOffset);

  if (!experience || !experienceContent) return;

  gsap.fromTo(
    experienceContent,
    { autoAlpha: 0.65, y: contentOffset },
    {
      autoAlpha: 1,
      ease: 'none',
      y: 0,
      scrollTrigger: {
        trigger: experience,
        start: 'top bottom',
        end: 'top center',
        scrub: 0.5,
      },
    },
  );
};

useResponsiveScrollEffects(
  () => createEffects(64, 140),
  () => createEffects(36, 70),
);
</script>

<template>
  <span class="about-scroll-effects" aria-hidden="true"></span>
</template>

<style scoped>
.about-scroll-effects {
  display: none;
}
</style>
