<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    titleId?: string;
  }>(),
  {
    title: '精選案例',
    subtitle: '精選作品，記錄每一次設計思考與成果',
    titleId: 'project-page-title',
  },
);
</script>

<template>
  <section
    class="project-hero"
    :aria-labelledby="titleId"
    data-node-id="5050:15981"
  >
    <div class="project-hero__content" data-node-id="5050:16001">
      <h1 :id="titleId">{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
  </section>
</template>

<style scoped>
.project-hero {
  align-items: center;
  background: #f3f3f3 url('/Image/Project/project-hero.webp') center / cover no-repeat;
  display: flex;
  min-height: 256px;
  overflow: hidden;
  position: relative;
}

.project-hero__content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-inline: auto;
  max-width: var(--layout-shell-width);
  padding: 60px var(--layout-gutter);
  position: relative;
  width: 100%;
  z-index: 1;
}

.project-hero h1 {
  color: #323232;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
}

.project-hero p {
  color: #323232;
  font-size: 40px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 1024px) {
  .project-hero h1 {
    font-size: clamp(36px, 4.6875vw, 48px);
  }

  .project-hero p {
    font-size: clamp(28px, 3.90625vw, 40px);
  }

}

@media (max-width: 767px) {
  .project-hero {
    min-height: 240px;
  }

  .project-hero__content {
    padding-block: 48px;
  }

  .project-hero h1 {
    font-size: 32px;
  }

  .project-hero p {
    font-size: 24px;
    line-height: 1.35;
    white-space: normal;
  }

}
</style>
