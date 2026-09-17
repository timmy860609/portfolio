<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

let mediaContext: ReturnType<typeof gsap.matchMedia> | undefined;

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  mediaContext = gsap.matchMedia();

  const createEffects = (contentOffset: number, heroOffset: number) => {
    const hero = document.querySelector<HTMLElement>('.about-hero');
    const heroStage = hero?.querySelector<HTMLElement>('.about-hero__stage');
    const experience = document.querySelector<HTMLElement>('.about-experience');
    const experienceContent = experience?.querySelector<HTMLElement>(
      '.about-experience__inner',
    );

    if (hero && heroStage) {
      gsap.to(heroStage, {
        ease: 'none',
        y: heroOffset,
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }

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

  mediaContext.add(
    '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
    () => createEffects(64, 140),
  );

  mediaContext.add(
    '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
    () => createEffects(36, 70),
  );
});

onBeforeUnmount(() => {
  mediaContext?.revert();
});
</script>

<template>
  <span class="about-scroll-effects" aria-hidden="true"></span>
</template>

<style scoped>
.about-scroll-effects {
  display: none;
}
</style>
