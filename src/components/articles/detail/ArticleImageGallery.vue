<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import type { ArticleDetailGalleryData } from '../../../data/articles';

defineProps<ArticleDetailGalleryData>();

const gallery = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | undefined;

onMounted(() => {
  const root = gallery.value;
  if (!root) return;

  const items = Array.from(root.querySelectorAll<HTMLElement>('.article-image-gallery__item'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('article-image-gallery__item--visible'));
    return;
  }

  root.classList.add('article-image-gallery--ready');
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('article-image-gallery__item--visible');
        observer?.unobserve(entry.target);
      });
    },
    {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08,
    },
  );

  items.forEach((item) => observer?.observe(item));
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <section ref="gallery" class="article-image-gallery" aria-label="視覺設計作品">
    <div class="article-image-gallery__inner">
      <div
        v-for="(column, columnIndex) in columns"
        :key="columnIndex"
        class="article-image-gallery__column"
      >
        <figure
          v-for="item in column"
          :key="item.src"
          class="article-image-gallery__item"
        >
          <img
            :src="item.src"
            :alt="item.alt"
            :width="item.width"
            :height="item.height"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.article-image-gallery {
  background: #eee;
}

.article-image-gallery__inner {
  align-items: flex-start;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-inline: auto;
  max-width: calc(960px + var(--page-gutter) * 2);
  padding: 60px var(--page-gutter);
}

.article-image-gallery__column {
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 0;
}

.article-image-gallery__item {
  border-radius: 24px;
  margin: 0;
  overflow: hidden;
}

.article-image-gallery__item img {
  display: block;
  height: auto;
  width: 100%;
}

.article-image-gallery--ready .article-image-gallery__item {
  opacity: 0;
  transform: translateY(48px);
  transition:
    opacity 700ms cubic-bezier(.22, 1, .36, 1),
    transform 700ms cubic-bezier(.22, 1, .36, 1);
}

.article-image-gallery--ready .article-image-gallery__item--visible {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 768px) and (max-width: 1024px) {
  .article-image-gallery__inner {
    column-count: 2;
    column-gap: 24px;
    display: block;
  }

  .article-image-gallery__column {
    display: contents;
  }

  .article-image-gallery__item {
    break-inside: avoid;
    margin-bottom: 24px;
  }
}

@media (max-width: 767px) {
  .article-image-gallery__inner {
    display: flex;
    flex-direction: column;
    padding-block: 48px;
  }

  .article-image-gallery__column {
    display: contents;
  }
}

@media (prefers-reduced-motion: reduce) {
  .article-image-gallery--ready .article-image-gallery__item {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
