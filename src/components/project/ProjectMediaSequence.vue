<script setup lang="ts">
import type {
  ProjectImage,
  ProjectResultItem,
} from '../../types/project';
import ProjectMedia from './ProjectMedia.vue';
import ProjectSectionHeading from './ProjectSectionHeading.vue';
import ResultList from './ResultList.vue';

type MediaItem = {
  image: ProjectImage;
  description?: string;
  details?: ProjectResultItem[];
};

defineProps<{
  title: string;
  introduction: string[];
  items: MediaItem[];
  detailMarkerColor?: string;
}>();
</script>

<template>
  <section class="project-media-sequence">
    <ProjectSectionHeading
      :title="title"
      :introduction="introduction"
    />

    <div
      v-for="item in items"
      :key="item.image.src"
      class="project-media-sequence__item"
    >
      <ProjectMedia :image="item.image" />
      <p v-if="item.description">{{ item.description }}</p>
      <ResultList
        v-if="item.details?.length"
        :items="item.details"
        :marker-color="detailMarkerColor ?? '#076ed7'"
      />
    </div>
  </section>
</template>

<style scoped>
.project-media-sequence {
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin-inline: auto;
  max-width: var(--content-width-project);
}

.project-media-sequence p {
  font-size: 18px;
  letter-spacing: 0.9px;
  line-height: 1.6;
  margin: 0;
}

.project-media-sequence__item {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (max-width: 767px) {
  .project-media-sequence {
    gap: 40px;
  }

}
</style>
