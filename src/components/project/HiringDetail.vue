<script setup lang="ts">
import {
  hiringCover,
  hiringContentSections,
  hiringBackground,
  hiringHero,
  hiringDesignGoals,
} from '../../data/project/hiringProject';
import { getProjectPagination } from '../../data/project/projectPagination';
import AppContentHeading from '../AppContentHeading.vue';
import ProjectCover from './ProjectCover.vue';
import ProjectContentSection from './ProjectContentSection.vue';
import ProjectDetailHero from './ProjectDetailHero.vue';
import ProjectGoalsSection from './ProjectGoalsSection.vue';
import ProjectPagination from './ProjectPagination.vue';

const pagination = getProjectPagination('hiring-2026');
</script>

<template>
  <article class="hiring-detail">
    <ProjectCover v-bind="hiringCover" />
    <ProjectDetailHero v-bind="hiringHero" />
    <div class="hiring-detail__content detail-content-layout">
      <AppContentHeading v-bind="hiringBackground" spacing="compact" />
      <ProjectGoalsSection v-bind="hiringDesignGoals" />
      <ProjectContentSection
        v-for="section in hiringContentSections"
        :key="section.title"
        v-bind="section"
      />
    </div>
    <ProjectPagination v-bind="pagination" />
  </article>
</template>

<style scoped>
.hiring-detail {
  background: #eee;
}

.hiring-detail__content {
  color: var(--color-text-primary);
  --detail-content-mobile-gap: 64px;
  --detail-content-mobile-padding: 48px var(--page-gutter) 80px;
  --detail-content-padding: 60px var(--page-gutter) 120px;
}
</style>
