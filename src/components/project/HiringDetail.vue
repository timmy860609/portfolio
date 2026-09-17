<script setup lang="ts">
import {
  hiringCover,
  hiringContentSections,
  hiringBackground,
  hiringHero,
  hiringDesignGoals,
} from '../../data/project/hiringProject';
import { getProjectPagination } from '../../data/project/projectPagination';
import ProjectCover from './ProjectCover.vue';
import ProjectContentSection from './ProjectContentSection.vue';
import ProjectDetailHero from './ProjectDetailHero.vue';
import ProjectSectionHeading from './ProjectSectionHeading.vue';
import ProjectGoalsSection from './ProjectGoalsSection.vue';
import ProjectPagination from './ProjectPagination.vue';

const pagination = getProjectPagination('hiring-2026');
</script>

<template>
  <article class="hiring-detail">
    <ProjectCover v-bind="hiringCover" />
    <ProjectDetailHero v-bind="hiringHero" />
    <div class="hiring-detail__content">
      <ProjectSectionHeading v-bind="hiringBackground" />
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
  display: flex;
  flex-direction: column;
  gap: 120px;
  margin-inline: auto;
  max-width: calc(var(--content-width-project) + var(--page-gutter) * 2);
  padding: 60px var(--page-gutter) 120px;
}

@media (max-width: 767px) {
  .hiring-detail__content {
    gap: 64px;
    padding-block: 48px 80px;
  }
}
</style>
