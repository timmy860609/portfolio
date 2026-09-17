<script setup lang="ts">
import ProjectTags from './ProjectTags.vue';
import { withBase } from '../../utils/basePath';

defineProps<{
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}>();
</script>

<template>
  <article>
    <a class="overview-card" :href="withBase(`/projects/${slug}`)">
      <div class="overview-card__cover">
        <img :src="withBase(image)" :alt="`${title}專案封面`" width="1692" height="1671" />
      </div>

      <div class="overview-card__body">
        <ProjectTags :tags="tags" :mobile-font-size="16" />
        <div>
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>
      </div>
    </a>
  </article>
</template>

<style scoped>
.overview-card {
  color: #323232;
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-decoration: none;
  width: 100%;
}

.overview-card__cover {
  aspect-ratio: 564 / 557;
  border-radius: 24px;
  overflow: hidden;
}

.overview-card__cover img {
  display: block;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
  width: 100%;
}

.overview-card:hover .overview-card__cover img {
  transform: scale(1.025);
}

.overview-card:focus-visible {
  border-radius: 24px;
  outline: 3px solid #00d9ff;
  outline-offset: 6px;
}

.overview-card__body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.overview-card__body > div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.overview-card h2 {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.overview-card p {
  color: #737373;
  font-size: 20px;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 767px) {
  .overview-card {
    gap: 18px;
  }

  .overview-card h2 {
    font-size: 26px;
  }

  .overview-card p {
    font-size: 17px;
  }
}
</style>
