<script setup lang="ts">
import type { ArticleDetailContentData } from '../../../data/articles';
import ArticleContentSection from './ArticleContentSection.vue';

defineProps<ArticleDetailContentData>();
</script>

<template>
  <div class="article-detail-content" data-node-id="4395:44506">
    <div class="article-detail-content__inner detail-content-layout">
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
  --detail-content-mobile-gap: 56px;
  --detail-content-mobile-padding: 48px var(--page-gutter);
}
</style>
