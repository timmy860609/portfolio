<script setup lang="ts">
import {
  smartFitnessContentSections,
  smartFitnessCover,
  smartFitnessGoalsSection,
  smartFitnessHero,
} from '../../data/project/smartFitnessProject';
import { getProjectPagination } from '../../data/project/projectPagination';
import StandardProjectDetail from './StandardProjectDetail.vue';

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
