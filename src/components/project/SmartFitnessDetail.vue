<script setup lang="ts">
import { provide } from 'vue';
import {
  smartFitnessContentSections,
  smartFitnessCover,
  smartFitnessGoalsSection,
  smartFitnessHero,
} from '../../data/project/smartFitnessProject';
import { getProjectPagination } from '../../data/project/projectPagination';
import StandardProjectDetail from './StandardProjectDetail.vue';
import {
  optimizedProjectImagesKey,
  type OptimizedProjectImages,
} from '../../utils/projectImageAssets';

const props = withDefaults(defineProps<{
  optimizedImages?: OptimizedProjectImages;
}>(), {
  optimizedImages: () => ({}),
});

provide(optimizedProjectImagesKey, props.optimizedImages);

const pagination = getProjectPagination('smart-fitness');
</script>

<template>
  <StandardProjectDetail
    :cover="smartFitnessCover"
    :hero="smartFitnessHero"
    :goals="smartFitnessGoalsSection"
    :sections="smartFitnessContentSections"
    :pagination="pagination"
    goals-after-first-section
  />
</template>
