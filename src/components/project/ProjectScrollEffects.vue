<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

let mediaContext: ReturnType<typeof gsap.matchMedia> | undefined;
let videoObserver: IntersectionObserver | undefined;

const setupAutoplayVideos = () => {
  videoObserver?.disconnect();
  const autoplayVideos = Array.from(
    document.querySelectorAll<HTMLVideoElement>('video[data-autoplay-on-view]'),
  );

  if (!autoplayVideos.length) return;

  autoplayVideos.forEach((video) => {
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    if (video.readyState === HTMLMediaElement.HAVE_NOTHING) video.load();
  });

  if (!('IntersectionObserver' in window)) {
    autoplayVideos.forEach((video) => {
      void video.play().catch(() => undefined);
    });
    return;
  }

  videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;

        if (entry.intersectionRatio >= 0.45) {
          void video.play().catch(() => undefined);
        } else if (!entry.isIntersecting) {
          video.pause();
          if (video.readyState > HTMLMediaElement.HAVE_NOTHING) {
            video.currentTime = 0;
          }
        }
      });
    },
    { threshold: [0, 0.45] },
  );

  autoplayVideos.forEach((video) => videoObserver?.observe(video));
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  mediaContext = gsap.matchMedia();
  setupAutoplayVideos();
  document.addEventListener('astro:page-load', setupAutoplayVideos);

  const createEffects = (coverOffset: number, paginationOffset: number) => {
    const cover = document.querySelector<HTMLElement>('.project-cover');
    const pagination = document.querySelector<HTMLElement>('.project-pagination');
    const paginationItems = gsap.utils.toArray<HTMLElement>(
      '.project-pagination-item',
    );

    if (cover) {
      gsap.to(cover, {
        ease: 'none',
        y: coverOffset,
        scrollTrigger: {
          trigger: cover,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }

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

  mediaContext.add(
    '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
    () => createEffects(72, 72),
  );

  mediaContext.add(
    '(max-width: 767px) and (prefers-reduced-motion: no-preference)',
    () => createEffects(36, 36),
  );
});

onBeforeUnmount(() => {
  document.removeEventListener('astro:page-load', setupAutoplayVideos);
  videoObserver?.disconnect();
  mediaContext?.revert();
});
</script>

<template>
  <span class="project-scroll-effects" aria-hidden="true"></span>
</template>

<style scoped>
.project-scroll-effects {
  display: none;
}
</style>
