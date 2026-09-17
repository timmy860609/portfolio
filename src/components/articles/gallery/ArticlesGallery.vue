<script setup lang="ts">
import { articles } from '../../../data/articles';
import ArticleCard from './ArticleCard.vue';
</script>

<template>
  <section class="articles-gallery" aria-label="專欄文章">
    <div class="articles-gallery__grid">
      <ArticleCard
        v-for="article in articles"
        :key="article.slug"
        v-bind="article"
      />
    </div>
  </section>
</template>

<style scoped>
.articles-gallery {
  background: #f3f3f3;
  padding: 60px var(--layout-gutter);
}

.articles-gallery__grid {
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  max-width: var(--content-width-project);
}

.articles-gallery__grid :deep(.article-card + .article-card) {
  border-top: 1px solid #c8c8c8;
  margin-top: 40px;
  padding-top: 40px;
}

@media (max-width: 767px) {
  .articles-gallery {
    padding-block: 48px;
  }

  .articles-gallery__grid :deep(.article-card + .article-card) {
    margin-top: 32px;
    padding-top: 32px;
  }
}
</style>
