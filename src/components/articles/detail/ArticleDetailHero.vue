<script setup lang="ts">
import type { ArticleDetailHeroData } from '../../../data/articles';

defineProps<ArticleDetailHeroData>();
</script>

<template>
  <section
    class="article-detail-hero"
    aria-labelledby="article-detail-title"
    data-node-id="4395:44483"
  >
    <div class="article-detail-hero__inner">
      <h1 id="article-detail-title">{{ heading }}</h1>
      <p>{{ subtitle }}</p>
    </div>
  </section>
</template>

<style scoped>
.article-detail-hero {
  align-items: center;
  background: #f3f3f3;
  color: #323232;
  display: flex;
  justify-content: center;
}

.article-detail-hero__inner {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 960px;
  padding-block: 60px;
  width: calc(100% - var(--layout-gutter) * 2);
}

.article-detail-hero h1,
.article-detail-hero p {
  line-height: 1.5;
  margin: 0;
}

.article-detail-hero h1 {
  font-size: 48px;
  font-weight: 700;
}

.article-detail-hero p {
  font-size: 40px;
  font-weight: 400;
}

@media (max-width: 1023px) {
  .article-detail-hero h1 {
    font-size: 40px;
  }

  .article-detail-hero p {
    font-size: 32px;
  }
}

@media (max-width: 767px) {
  .article-detail-hero__inner {
    padding-block: 48px;
  }

  .article-detail-hero h1 {
    font-size: 32px;
  }

  .article-detail-hero p {
    font-size: 24px;
  }
}
</style>
