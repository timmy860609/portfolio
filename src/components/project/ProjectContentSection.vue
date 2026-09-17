<script setup lang="ts">
import type {
  ProjectContentSectionData,
} from '../../types/project';
import ProjectMedia from './ProjectMedia.vue';
import ProjectSectionHeading from './ProjectSectionHeading.vue';
import ResultList from './ResultList.vue';

withDefaults(defineProps<ProjectContentSectionData>(), {
  density: 'default',
  imageFit: 'natural',
  imageHeight: 560,
});
</script>

<template>
  <section
    class="project-content-section"
    :class="`project-content-section--${density}`"
  >
    <ProjectSectionHeading
      :title="title"
      :introduction="introduction"
    />

    <div
      class="project-content-section__body"
      :class="{ 'project-content-section__body--with-media': image || video }"
    >
      <ProjectMedia
        v-if="image || video"
        :image="image"
        :video="video"
        :fit="imageFit"
        :cover-height="imageHeight"
      />

      <ResultList
        v-if="details?.length"
        :items="details"
        :marker-color="detailMarkerColor ?? '#076ed7'"
      />

      <p v-if="conclusion" class="project-content-section__conclusion">
        {{ conclusion }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.project-content-section {
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin-inline: auto;
  max-width: var(--content-width-project);
}

.project-content-section p {
  font-size: 18px;
  letter-spacing: 0.9px;
  line-height: 1.6;
  margin: 0;
}

.project-content-section__body {
  display: contents;
}

.project-content-section--compact {
  gap: 32px;
}

.project-content-section--tight {
  gap: 24px;
}

.project-content-section--results {
  gap: 0;
  padding-bottom: 20px;
}

.project-content-section--results :deep(.project-section-heading) {
  margin-bottom: 56px;
}

.project-content-section--results :deep(.project-media) {
  margin-bottom: 24px;
}

.project-content-section--caption {
  gap: 0;
}

.project-content-section--caption :deep(.project-section-heading) {
  margin-bottom: 64px;
}

.project-content-section--caption :deep(.project-media) {
  margin-bottom: 24px;
}

@media (max-width: 767px) {
  .project-content-section,
  .project-content-section--compact,
  .project-content-section--tight,
  .project-content-section--results,
  .project-content-section--caption {
    gap: 40px;
  }

  .project-content-section--results :deep(.project-section-heading),
  .project-content-section--caption :deep(.project-section-heading) {
    margin-bottom: 0;
  }

  .project-content-section--results :deep(.project-media),
  .project-content-section--caption :deep(.project-media) {
    margin-bottom: 0;
  }

  .project-content-section__body--with-media {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
