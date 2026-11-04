<script setup lang="ts">
import type { ProjectGoalItem } from '../../types/project';
import AppContentHeading from '../AppContentHeading.vue';
import ProjectGoalsGrid from './ProjectGoalsGrid.vue';

defineProps<{
  title: string;
  introduction: string;
  challenges?: string[];
  conclusion?: string;
  goals: ProjectGoalItem[];
  backgroundColor?: string;
  backgroundGradient?: string;
  backgroundImage?: string;
  accentColor?: string;
  accentGradient?: string;
  headingColor?: string;
  conclusionPosition?: 'before' | 'after';
  density?: 'default' | 'compact';
  textColor?: string;
}>();
</script>

<template>
  <section
    class="project-goals app-content-shell"
    :class="{ 'project-goals--compact': density === 'compact' }"
  >
    <AppContentHeading
      class="project-goals__heading"
      :title="title"
      :introduction="introduction"
    >
      <ul v-if="challenges?.length">
        <li v-for="challenge in challenges" :key="challenge">
          {{ challenge }}
        </li>
      </ul>
      <p v-if="conclusion && conclusionPosition !== 'after'">
        {{ conclusion }}
      </p>
    </AppContentHeading>

    <ProjectGoalsGrid
      :goals="goals"
      :background-color="backgroundColor"
      :background-gradient="backgroundGradient"
      :background-image="backgroundImage"
      :accent-color="accentColor"
      :accent-gradient="accentGradient"
      :heading-color="headingColor"
      :text-color="textColor"
    />

    <p
      v-if="conclusion && conclusionPosition === 'after'"
      class="project-goals__conclusion"
    >
      {{ conclusion }}
    </p>
  </section>
</template>

<style scoped>
.project-goals {
  --content-section-mobile-gap: 40px;
}

.project-goals__conclusion {
  font-size: var(--content-body-font-size);
  letter-spacing: 0.9px;
  line-height: 1.6;
}

.project-goals__conclusion {
  margin: 0;
}

.project-goals--compact {
  --content-section-gap: 32px;
}

.project-goals__heading ul {
  margin: 0;
  padding-left: 30px;
}

</style>
