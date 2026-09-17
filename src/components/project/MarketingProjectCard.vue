<script setup lang="ts">
import type { MarketingProject } from '../../data/project/marketingProjects';
import AppButton from '../AppButton.vue';
import ProjectTags from './ProjectTags.vue';

defineProps<MarketingProject>();
</script>

<template>
  <article class="marketing-card">
    <div class="marketing-card__content">
      <div class="marketing-card__copy">
        <ProjectTags :tags="tags" />
        <div>
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>
      </div>
      <AppButton
        class="marketing-card__button"
        :href="href"
        variant="outline"
        target="_blank"
        rel="noopener noreferrer"
        fit-content
      >
        前往網站
      </AppButton>
    </div>

    <figure>
      <img :src="image" :alt="`${title}網站預覽`" width="1080" height="720" loading="lazy" />
    </figure>
  </article>
</template>

<style scoped>
.marketing-card {
  align-items: center;
  background: #fff;
  border-radius: 24px;
  display: flex;
  gap: 24px;
  padding: 24px;
  width: 100%;
}

.marketing-card__content {
  align-items: flex-start;
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: 13px;
  min-width: 0;
}

.marketing-card__copy {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.marketing-card__copy > div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.marketing-card h2 {
  color: #323232;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.marketing-card p {
  color: #737373;
  font-size: 20px;
  line-height: 1.5;
  margin: 0;
}

.marketing-card :deep(.marketing-card__button) {
  font-weight: 700;
}

.marketing-card figure {
  background: #c9c9c9;
  border-radius: 16px;
  flex: 0 0 360px;
  height: 240px;
  margin: 0;
  overflow: hidden;
}

.marketing-card figure img {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

@media (max-width: 767px) {
  .marketing-card {
    align-items: stretch;
    flex-direction: column-reverse;
  }

  .marketing-card h2 {
    font-size: 26px;
  }

  .marketing-card p {
    font-size: 18px;
  }

  .marketing-card :deep(.marketing-card__button.app-button--fit) {
    max-width: none;
    width: 100%;
  }

  .marketing-card figure {
    flex-basis: auto;
    height: auto;
  }

  .marketing-card figure img {
    height: auto;
  }
}
</style>
