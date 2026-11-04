<script setup lang="ts">
import { computed } from 'vue';
import type { ProjectGoalItem } from '../../types/project';
import { withBase } from '../../utils/basePath';
import AppContentHeading from '../AppContentHeading.vue';

const props = withDefaults(
  defineProps<{
    goals: ProjectGoalItem[];
    accentColor?: string;
    accentGradient?: string;
    backgroundColor?: string;
    backgroundGradient?: string;
    backgroundImage?: string;
    headingColor?: string;
    textColor?: string;
  }>(),
  {
    accentColor: '#076ed7',
    accentGradient: undefined,
    backgroundColor: '#fff',
    backgroundGradient: undefined,
    backgroundImage: undefined,
    headingColor: undefined,
    textColor: '#323232',
  },
);

const gridStyle = computed(() => ({
  '--goal-accent': props.accentColor,
  '--goal-accent-gradient': props.accentGradient,
  '--goal-background': props.backgroundColor,
  '--goal-columns': props.goals.length === 3 ? 3 : 2,
  '--goal-heading': props.headingColor ?? props.textColor,
  '--goal-text': props.textColor,
  backgroundImage: props.backgroundGradient
    ?? (props.backgroundImage ? `url(${withBase(props.backgroundImage)})` : undefined),
}));
</script>

<template>
  <ol
    class="project-goals-grid"
    :class="{ 'project-goals-grid--gradient': accentGradient }"
    :style="gridStyle"
  >
    <li v-for="goal in goals" :key="goal.number">
      <span>{{ goal.number }}</span>
      <AppContentHeading
        class="project-goals-grid__content"
        :title="goal.title"
        :introduction="goal.description"
        heading-tag="h3"
        spacing="compact"
      />
    </li>
  </ol>
</template>

<style scoped>
.project-goals-grid {
  background-color: var(--goal-background);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 24px;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(var(--goal-columns), minmax(0, 1fr));
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 40px;
}

.project-goals-grid > li {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
}

.project-goals-grid span {
  font-size: var(--font-size-item-heading);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
}

.project-goals-grid span {
  color: var(--goal-accent);
}

.project-goals-grid__content {
  color: var(--goal-heading);
}

.project-goals-grid--gradient span,
.project-goals-grid--gradient :deep(.app-content-heading__title) {
  background-image: var(--goal-accent-gradient);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.project-goals-grid--gradient :deep(.app-content-heading__title) {
  width: fit-content;
}

.project-goals-grid__content :deep(.app-content-heading__introduction) {
  color: var(--goal-text);
}

@media (max-width: 767px) {
  .project-goals-grid {
    border-radius: 16px;
    gap: 28px;
    grid-template-columns: 1fr;
    padding: 28px 24px;
  }
}
</style>
