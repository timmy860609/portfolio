<script setup lang="ts">
import { responsiveImage, imageSrcset } from '../../utils/responsiveImage';
import { withBase } from '../../utils/basePath';

withDefaults(
  defineProps<{
    src: string;
    mobileSrc?: string;
    alt: string;
    width?: number;
    height?: number;
    loading?: 'eager' | 'lazy';
  }>(),
  {
    width: 5760,
    height: 1440,
    loading: 'eager',
  },
);
</script>

<template>
  <section class="project-cover" aria-label="專案主視覺">
    <picture>
      <source
        v-if="mobileSrc"
        media="(max-width: 767px)"
        :srcset="imageSrcset(mobileSrc) || withBase(mobileSrc)"
        sizes="100vw"
      />
      <img
        v-bind="responsiveImage(src, '(max-width: 767px) 100vw, (max-width: 1439px) 1440px, 100vw')"
        :alt="alt"
        :width="width"
        :height="height"
        :loading="loading"
        decoding="async"
        :fetchpriority="loading === 'eager' ? 'high' : 'low'"
      />
    </picture>
  </section>
</template>

<style scoped>
.project-cover {
  background: #eef3f7;
  height: max(25vw, 360px);
  position: relative;
  width: 100%;
  z-index: 0;
}

.project-cover img {
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
}

.project-cover picture {
  display: block;
  height: 100%;
  width: 100%;
}

@media (max-width: 767px) {
  .project-cover,
  .project-cover picture {
    height: auto;
  }

  .project-cover img {
    height: auto;
    object-fit: contain;
  }
}
</style>
