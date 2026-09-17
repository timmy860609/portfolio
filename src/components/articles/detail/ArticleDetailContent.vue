<script setup lang="ts">
import type { ArticleDetailContentData } from '../../../data/articles';
import ArticleContentSection from './ArticleContentSection.vue';

defineProps<ArticleDetailContentData>();
</script>

<template>
  <div class="article-detail-content" data-node-id="4395:44506">
    <div class="article-detail-content__inner">
      <ArticleContentSection
        v-for="(section, index) in sections"
        :key="section.title ?? section.image?.src ?? index"
        v-bind="section"
      />
    </div>
  </div>
</template>

<style scoped>
.article-detail-content {
  background: #eee;
}

.article-detail-content__inner {
  display: flex;
  flex-direction: column;
  gap: 120px;
  margin-inline: auto;
  max-width: calc(var(--content-width-project) + var(--page-gutter) * 2);
  padding: 60px var(--page-gutter);
}

@media (max-width: 767px) {
  .article-detail-content__inner {
    gap: 56px;
    padding-block: 48px;
  }
}
</style>
