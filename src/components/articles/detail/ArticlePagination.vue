<script setup lang="ts">
import type { ProjectPaginationData } from '../../../types/project';
import ProjectPagination from '../../project/ProjectPagination.vue';

defineProps<ProjectPaginationData>();
</script>

<template>
  <ProjectPagination
    class="article-pagination"
    :previous="previous"
    :next="next"
    aria-label="其他專欄"
    previous-label="上一個"
    next-label="下一個"
    variant="article"
  />
</template>
