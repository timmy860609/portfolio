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

    <section class="marketing-content" aria-label="行銷網站案例">
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
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-inline: auto;
  max-width: calc(var(--content-width-project) + var(--page-gutter) * 2);
  padding: 60px var(--page-gutter);
}

@media (max-width: 767px) {
  .marketing-content {
    gap: 24px;
    padding-block: 40px;
  }
}
</style>
