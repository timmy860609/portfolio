<script setup lang="ts">
import type {
  ProjectContentSectionData,
  ProjectGoalItem,
  ProjectPaginationData,
} from '../../types/project';
import ProjectContentSection from './ProjectContentSection.vue';
import ProjectCover from './ProjectCover.vue';
import ProjectDetailHero from './ProjectDetailHero.vue';
import ProjectGoalsSection from './ProjectGoalsSection.vue';
import ProjectPagination from './ProjectPagination.vue';

type CoverData = {
  src: string;
  mobileSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
};

type HeroData = {
  tags: string[];
  title: string;
  year?: string;
  showAction?: boolean;
  actionLabel?: string;
  actionHref?: string;
};

type GoalsData = {
  title: string;
  introduction: string;
  goals: ProjectGoalItem[];
  challenges?: string[];
  conclusion?: string;
  conclusionPosition?: 'before' | 'after';
  density?: 'default' | 'compact';
  backgroundColor?: string;
  backgroundImage?: string;
  accentColor?: string;
  accentGradient?: string;
  headingColor?: string;
  textColor?: string;
};

defineProps<{
  cover: CoverData;
  hero: HeroData;
  goals: GoalsData;
  sections: ProjectContentSectionData[];
  pagination: ProjectPaginationData;
  goalsAfterFirstSection?: boolean;
}>();
</script>

<template>
  <article class="standard-project-detail">
    <ProjectCover v-bind="cover" />
    <ProjectDetailHero v-bind="hero" />

    <div class="standard-project-detail__content">
      <ProjectGoalsSection v-if="!goalsAfterFirstSection" v-bind="goals" />
      <template v-for="(section, index) in sections" :key="section.title">
        <ProjectContentSection v-bind="section" />
        <ProjectGoalsSection
          v-if="goalsAfterFirstSection && index === 0"
          v-bind="goals"
        />
      </template>
    </div>

    <ProjectPagination v-bind="pagination" />
  </article>
</template>

<style scoped>
.standard-project-detail {
  background: #eee;
  color: #323232;
}

.standard-project-detail__content {
  display: flex;
  flex-direction: column;
  gap: 120px;
  margin-inline: auto;
  max-width: calc(var(--content-width-project) + var(--page-gutter) * 2);
  padding: 60px var(--page-gutter);
}

@media (max-width: 767px) {
  .standard-project-detail__content {
    gap: 64px;
  }
}
</style>
