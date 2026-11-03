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
  font-size: var(--font-size-content-heading);
  font-weight: var(--font-weight-bold);
  line-height: 1.5;
  margin: 0;
}

.project-section-heading p {
  font-size: var(--content-body-font-size);
  letter-spacing: 0.9px;
  line-height: 1.6;
  margin: 0;
}

</style>
