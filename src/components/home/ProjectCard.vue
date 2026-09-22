<script setup lang="ts">
import { withBase } from '../../utils/basePath';

const props = withDefaults(
  defineProps<{
    title: string;
    tags: string[];
    image: string;
    imageSmall?: string;
    href: string;
    selected?: boolean;
    priority?: boolean;
  }>(),
  {
    priority: false,
  },
);

const alternativeText = `${props.title}，${props.tags.map((tag) => `#${tag}`).join(' ')}`;
const avifSource = props.imageSmall?.replace(/\.webp$/i, '.avif');
</script>

<template>
  <article
    class="project-card"
    :class="{ 'project-card--selected': selected }"
  >
    <a :href="withBase(href)" :aria-label="`查看${title}專案介紹`">
      <picture>
        <source
          v-if="avifSource"
          type="image/avif"
          :srcset="withBase(avifSource)"
        />
        <img
          :src="withBase(image)"
          :srcset="imageSmall ? `${withBase(imageSmall)} 768w, ${withBase(image)} 1152w` : undefined"
          sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1600px) calc((100vw - 176px) / 3), 480px"
          :alt="alternativeText"
          width="1152"
          height="1338"
          draggable="false"
          :loading="priority ? 'eager' : 'lazy'"
          decoding="async"
          :fetchpriority="priority ? 'high' : 'low'"
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
