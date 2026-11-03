<script setup lang="ts">
import { gsap } from 'gsap/dist/gsap';
import {
  addScrollParallax,
  useResponsiveScrollEffects,
} from '../../utils/useResponsiveScrollEffects';

const createEffects = (coverOffset: number, paginationOffset: number) => {
  const cover = document.querySelector<HTMLElement>('.project-cover');
  const pagination = document.querySelector<HTMLElement>('.project-pagination');
  const paginationItems = gsap.utils.toArray<HTMLElement>(
    '.project-pagination-item',
  );

  addScrollParallax(cover, cover, coverOffset);

  if (pagination && paginationItems.length) {
    gsap.fromTo(
      paginationItems,
      {
        autoAlpha: 0,
        scale: 0.98,
        x: (index) => index === 0 ? -paginationOffset : paginationOffset,
        y: 32,
      },
      {
        autoAlpha: 1,
        duration: 1.15,
        ease: 'power4.out',
        scale: 1,
        stagger: 0.08,
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: pagination,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      },
    );
  }
};

useResponsiveScrollEffects(
  () => createEffects(72, 72),
  () => createEffects(36, 36),
);
</script>

<template>
  <span class="project-scroll-effects" aria-hidden="true"></span>
</template>

<style scoped>
.project-scroll-effects {
  display: none;
}
</style>
