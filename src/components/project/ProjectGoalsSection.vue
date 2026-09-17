<script setup lang="ts">
import ProjectGoalsGrid, {
  type ProjectGoalItem,
} from './ProjectGoalsGrid.vue';

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
    class="project-goals"
    :class="{ 'project-goals--compact': density === 'compact' }"
  >
    <div class="project-goals__heading">
      <h2>{{ title }}</h2>
      <p>{{ introduction }}</p>
      <ul v-if="challenges?.length">
        <li v-for="challenge in challenges" :key="challenge">
          {{ challenge }}
        </li>
      </ul>
      <p v-if="conclusion && conclusionPosition !== 'after'">
        {{ conclusion }}
      </p>
    </div>

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
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin-inline: auto;
  max-width: var(--content-width-project);
}

.project-goals__heading {
  display: flex;
  flex-direction: column;
  gap: var(--content-heading-gap);
}

.project-goals h2 {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
}

.project-goals__heading p,
.project-goals__heading li,
.project-goals__conclusion {
  font-size: 18px;
  letter-spacing: 0.9px;
  line-height: 1.6;
}

.project-goals__heading p {
  margin: 0;
}

.project-goals__conclusion {
  margin: 0;
}

.project-goals--compact {
  gap: 32px;
}

.project-goals__heading ul {
  margin: 0;
  padding-left: 30px;
}

@media (max-width: 767px) {
  .project-goals {
    gap: 40px;
  }

  .project-goals h2 {
    font-size: 24px;
  }

}
</style>
