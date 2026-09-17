<script setup lang="ts">
defineProps<{
  title: string;
  introduction: string[];
}>();
</script>

<template>
  <div class="project-section-heading">
    <h2 v-if="title">{{ title }}</h2>
    <p v-for="paragraph in introduction" :key="paragraph">
      {{ paragraph }}
    </p>
  </div>
</template>

<style scoped>
.project-section-heading {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.project-section-heading h2 {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
}

.project-section-heading p {
  font-size: 18px;
  letter-spacing: 0.9px;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 767px) {
  .project-section-heading h2 {
    font-size: 24px;
  }
}
</style>
