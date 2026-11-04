<script setup lang="ts">
import {
  marketingCollectionCover,
  marketingProjects,
  marketingCollectionYear,
} from '../../data/project/marketingProjects';
import { getProjectPagination } from '../../data/project/projectPagination';
import { projectsBySlug } from '../../data/projects';
import MarketingProjectCard from './MarketingProjectCard.vue';
import ProjectCover from './ProjectCover.vue';
import ProjectDetailHero from './ProjectDetailHero.vue';
import ProjectPagination from './ProjectPagination.vue';

const project = projectsBySlug['insurance-marketing'];
const pagination = getProjectPagination('insurance-marketing');
</script>

<template>
  <article class="marketing-detail">
    <ProjectCover v-bind="marketingCollectionCover" />

    <ProjectDetailHero
      :tags="project.tags"
      :title="project.title"
      :year="marketingCollectionYear"
    />

    <section
      class="marketing-content detail-content-layout"
      aria-label="行銷網站案例"
    >
      <MarketingProjectCard
        v-for="item in marketingProjects"
        :key="item.title"
        v-bind="item"
      />
    </section>

    <ProjectPagination v-bind="pagination" />
  </article>
</template>

<style scoped>
.marketing-detail {
  background: #f3f3f3;
  color: #323232;
}

.marketing-content {
  --detail-content-gap: 40px;
  --detail-content-mobile-gap: 24px;
  --detail-content-mobile-padding: 40px var(--page-gutter);
}
</style>
