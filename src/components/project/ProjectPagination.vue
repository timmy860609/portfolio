<script setup lang="ts">
import type { ProjectPaginationItem as PaginationItem } from '../../types/project';
import ProjectPaginationItem from './ProjectPaginationItem.vue';

withDefaults(defineProps<{
  previous: PaginationItem;
  next: PaginationItem;
  ariaLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
  variant?: 'project' | 'article';
}>(), {
  variant: 'project',
});
</script>

<template>
  <nav
    class="project-pagination"
    :class="`project-pagination--${variant}`"
    :aria-label="ariaLabel ?? '其他專案'"
  >
    <ProjectPaginationItem
      :item="previous"
      direction="previous"
      :label="previousLabel"
      :variant="variant"
    />
    <ProjectPaginationItem
      :item="next"
      direction="next"
      :label="nextLabel"
      :variant="variant"
    />
  </nav>
</template>

<style scoped>
.project-pagination {
  background: #fff;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: 60px max(
    var(--page-gutter),
    calc((100% - var(--content-width-project)) / 2)
  );
}

.project-pagination--article {
  gap: 40px;
  grid-template-columns: minmax(0, 960px);
  justify-content: center;
}

@media (max-width: 767px) {
  .project-pagination {
    grid-template-columns: 1fr;
    padding-block: 48px;
  }

  .project-pagination--article {
    gap: 24px;
  }

}
</style>
