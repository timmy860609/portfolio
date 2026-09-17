<script setup lang="ts">
import type { ArticleFeatureCardData } from '../../../data/articles';

defineProps<ArticleFeatureCardData>();
</script>

<template>
  <article class="article-feature-card">
    <img
      class="article-feature-card__image"
      :src="image.src"
      :alt="image.alt"
      :width="image.width"
      :height="image.height"
      loading="lazy"
      decoding="async"
    />
    <div class="article-feature-card__content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </article>
</template>

<style scoped>
.article-feature-card {
  align-items: center;
  background: #fff;
  border-radius: 16px;
  color: #000;
  display: flex;
  gap: 32px;
  padding: 24px 32px;
}

.article-feature-card__image {
  display: block;
  flex: 0 0 200px;
  height: 200px;
  object-fit: contain;
  width: 200px;
}

.article-feature-card__content {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}

.article-feature-card h3,
.article-feature-card p {
  line-height: 1.6;
  margin: 0;
}

.article-feature-card h3 {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
}

.article-feature-card p {
  font-size: 20px;
  letter-spacing: 1px;
}

@media (max-width: 767px) {
  .article-feature-card {
    align-items: flex-start;
    gap: 16px;
    padding: 16px;
  }

  .article-feature-card__image {
    flex-basis: 88px;
    height: 88px;
    width: 88px;
  }

  .article-feature-card__content {
    gap: 8px;
  }

  .article-feature-card h3 {
    font-size: 18px;
    letter-spacing: 0.9px;
  }

  .article-feature-card p {
    font-size: 16px;
    letter-spacing: 0.8px;
  }
}
</style>
