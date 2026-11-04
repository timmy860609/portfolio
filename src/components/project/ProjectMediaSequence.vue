<script setup lang="ts">
import type {
  ProjectImage,
  ProjectResultItem,
} from '../../types/project';
import AppContentHeading from '../AppContentHeading.vue';
import ProjectMedia from './ProjectMedia.vue';
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
  <section class="project-media-sequence app-content-shell">
    <AppContentHeading
      :title="title"
      :introduction="introduction"
      spacing="compact"
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
  --content-section-mobile-gap: 40px;
}

.project-media-sequence p {
  font-size: var(--content-body-font-size);
  letter-spacing: 0.9px;
  line-height: 1.6;
  margin: 0;
}

.project-media-sequence__item {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

</style>
