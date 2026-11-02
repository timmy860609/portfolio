<script setup lang="ts">
import { withBase } from '../../utils/basePath';
import type { OptimizedImage } from '../../data/home';

const props = withDefaults(
  defineProps<{
    title: string;
    tags: string[];
    image: OptimizedImage;
    href: string;
    selected?: boolean;
    priority?: boolean;
    eager?: boolean;
  }>(),
  {
    priority: false,
    eager: false,
  },
);

const alternativeText = `${props.title}，${props.tags.map((tag) => `#${tag}`).join(' ')}`;
const imageSizes = '(max-width: 767px) calc(100vw - 32px), (max-width: 1600px) calc((100vw - 176px) / 3), 480px';
</script>

<template>
  <article
    class="project-card"
    :class="{ 'project-card--selected': selected }"
  >
    <a
      :href="withBase(href)"
      :aria-label="`查看${title}專案介紹`"
      data-astro-prefetch="viewport"
    >
      <picture>
        <source
          type="image/avif"
          :srcset="image.avifSrcset"
          :sizes="imageSizes"
        />
        <source
          type="image/webp"
          :srcset="image.webpSrcset"
          :sizes="imageSizes"
        />
        <img
          :src="image.src"
          :srcset="image.webpSrcset"
          :sizes="imageSizes"
          :alt="alternativeText"
          :width="image.width"
          :height="image.height"
          draggable="false"
          :loading="priority || eager ? 'eager' : 'lazy'"
          decoding="async"
          :fetchpriority="priority ? 'high' : eager ? 'auto' : 'low'"
        />
      </picture>
    </a>
  </article>
</template>

<style scoped>
.project-card {
  aspect-ratio: 1152 / 1338;
  border-radius: 24px;
  flex: 0 0 calc((100% - 48px) / 3);
  min-width: 0;
  overflow: hidden;
}

.project-card a {
  cursor: pointer;
  display: block;
  height: 100%;
  width: 100%;
}

.project-card picture {
  display: block;
  height: 100%;
  width: 100%;
}

.project-card img {
  display: block;
  filter: grayscale(1) brightness(0.58) contrast(1.15);
  height: 100%;
  object-fit: contain;
  transition:
    filter 520ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
  width: 100%;
}

.project-card--selected img {
  filter: grayscale(0);
}

.project-card a:hover img {
  filter: grayscale(0);
  transform: scale(1.025);
}

.project-card a:focus-visible {
  outline: 3px solid #00d9ff;
  outline-offset: -3px;
}

@media (max-width: 767px) {
  .project-card {
    flex-basis: 100%;
  }
}
</style>
