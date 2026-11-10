<script setup lang="ts">
import type { ArticleItem } from '../../../data/articles';
import ArticleThumbnail from './ArticleThumbnail.vue';
import { withBase } from '../../../utils/basePath';

withDefaults(defineProps<ArticleItem & {
  priority?: boolean;
}>(), {
  priority: false,
});
</script>

<template>
  <a
    class="article-card"
    :href="withBase(`/articles/${slug}`)"
    :aria-label="`閱讀${title}`"
  >
    <ArticleThumbnail
      :src="cover"
      :alt="coverAlt"
      :scale="coverScale"
      :position="coverPosition"
      :priority="priority"
    />
    <div class="article-card__content">
      <div class="article-card__heading">
        <div class="article-card__tags">
          <span v-for="tag in tags" :key="tag"><b>#</b>{{ tag }}</span>
        </div>
        <h2 class="app-card-heading">{{ title }}</h2>
      </div>
      <p class="app-card-description">{{ description }}</p>
    </div>
  </a>
</template>

<style scoped>
.article-card {
  align-items: flex-start;
  color: #323232;
  cursor: pointer;
  display: flex;
  gap: 24px;
  min-width: 0;
  text-decoration: none;
}

.article-card__content {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
}

.article-card__heading {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.article-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.article-card__tags span {
  font-size: var(--font-size-body-small);
  line-height: 1.5;
  white-space: nowrap;
}

.article-card__tags b {
  color: #00d9ff;
  font-weight: var(--font-weight-semibold);
}

.article-card .app-card-heading {
  font-family: 'Noto Sans TC', sans-serif;
}

.article-card:focus-visible {
  outline: 3px solid #00d9ff;
  outline-offset: 4px;
}

@media (hover: hover) and (pointer: fine) {
  .article-card :deep(.article-thumbnail > img) {
    transition: transform 400ms cubic-bezier(.22, 1, .36, 1);
  }

  .article-card:hover :deep(.article-thumbnail > img) {
    transform: scale(calc(var(--article-thumbnail-scale) * 1.025));
  }
}

@media (max-width: 767px) {
  .article-card {
    flex-direction: column;
    gap: 16px;
  }

}
</style>
