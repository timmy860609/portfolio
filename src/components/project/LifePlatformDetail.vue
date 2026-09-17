<script setup lang="ts">
import {
  lifePlatformContentSections,
  lifePlatformCover,
  lifePlatformGoals,
  lifePlatformHero,
} from '../../data/project/lifePlatformProject';
import { getProjectPagination } from '../../data/project/projectPagination';
import StandardProjectDetail from './StandardProjectDetail.vue';

const pagination = getProjectPagination('vip-platform');
</script>

<template>
  <StandardProjectDetail
    :cover="lifePlatformCover"
    :hero="lifePlatformHero"
    :goals="lifePlatformGoals"
    :sections="lifePlatformContentSections"
    :pagination="pagination"
    goals-after-first-section
  />
</template>
