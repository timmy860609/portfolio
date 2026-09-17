<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

let mediaContext: ReturnType<typeof gsap.matchMedia> | undefined;

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  mediaContext = gsap.matchMedia();

  const createEffects = (heroOffset: number, footerOffset: number) => {
    const hero = document.querySelector<HTMLElement>('.hero-kv');
    const heroStage = hero?.querySelector<HTMLElement>('.hero-kv__stage');
    const footer = document.querySelector<HTMLElement>('.site-footer');
    const footerContent = footer?.querySelector<HTMLElement>('.site-footer__inner');

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

  mediaContext.add(
    '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
    () => createEffects(140, 64),
  );

  mediaContext.add(
    '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
    () => createEffects(70, 36),
  );
});

onBeforeUnmount(() => {
  mediaContext?.revert();
});
</script>

<template>
  <span class="home-scroll-effects" aria-hidden="true"></span>
</template>

<style scoped>
.home-scroll-effects {
  display: none;
}
</style>
