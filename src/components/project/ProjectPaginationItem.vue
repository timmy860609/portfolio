<script setup lang="ts">
import type { ProjectPaginationItem } from '../../types/project';
import AppButton from '../AppButton.vue';
import ProjectTags from './ProjectTags.vue';
import { withBase } from '../../utils/basePath';

withDefaults(
  defineProps<{
    item: ProjectPaginationItem;
    direction?: 'previous' | 'next';
    label?: string;
    variant?: 'project' | 'article';
  }>(),
  {
    direction: 'previous',
    variant: 'project',
  },
);
</script>

<template>
  <article
    class="project-pagination-item"
    :class="[
      `project-pagination-item--${direction}`,
      `project-pagination-item--${variant}`,
    ]"
  >
    <div class="project-pagination-item__image">
      <img
        :src="withBase(item.image)"
        :alt="item.imageAlt"
        :style="{
          objectPosition: item.imagePosition,
          transform: `scale(${item.imageScale ?? 1})`,
        }"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="project-pagination-item__content">
      <div class="project-pagination-item__summary">
        <ProjectTags
          :tags="item.tags"
          :align="direction === 'next' ? 'end' : 'start'"
        />
        <h2>{{ item.title }}</h2>
      </div>
      <AppButton
        :href="item.href"
        size="s"
        fit-content
      >
        {{ label ?? (direction === 'previous' ? '上一個' : '下一個') }}
      </AppButton>
    </div>
  </article>
</template>

<style scoped>
.project-pagination-item {
  align-items: center;
  background: #fafafa;
  border-radius: 16px;
  display: flex;
  gap: 24px;
  min-width: 0;
  overflow: hidden;
  padding: 24px 24px 0;
}

.project-pagination-item--next {
  flex-direction: row-reverse;
  text-align: right;
}

.project-pagination-item__image {
  flex: 0 0 160px;
  height: 200px;
  overflow: hidden;
}

.project-pagination-item__image img {
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: top;
  width: 100%;
}

.project-pagination-item__content {
  align-items: flex-start;
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}

.project-pagination-item--next .project-pagination-item__content {
  align-items: flex-end;
}

.project-pagination-item__summary {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.project-pagination-item h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.project-pagination-item :deep(.app-button) {
  font-weight: 700;
  padding: 11px 23px;
}

.project-pagination-item--article,
.project-pagination-item--article.project-pagination-item--next {
  align-items: center;
  flex-direction: row;
  gap: 24px;
  padding: 24px;
  text-align: left;
}

.project-pagination-item--article .project-pagination-item__image {
  border-radius: 16px;
  flex: 0 0 201px;
  height: 134px;
}

.project-pagination-item--article .project-pagination-item__content,
.project-pagination-item--article.project-pagination-item--next .project-pagination-item__content {
  align-items: flex-start;
  gap: 16px;
}

.project-pagination-item--article.project-pagination-item--next :deep(.project-tags) {
  justify-content: flex-start;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .project-pagination-item {
    gap: 16px;
    padding: 16px 16px 0;
  }

  .project-pagination-item__image {
    flex-basis: 120px;
    height: 150px;
  }
}

@media (max-width: 767px) {
  .project-pagination-item {
    gap: 12px;
    justify-content: space-between;
    padding: 16px 16px 0;
  }

  .project-pagination-item--next {
    border-top: 0;
  }

  .project-pagination-item__image {
    flex-basis: 120px;
    height: 150px;
  }

  .project-pagination-item h2 {
    font-size: 20px;
  }

  .project-pagination-item :deep(.app-button) {
    flex-shrink: 0;
    padding: 7px 15px;
  }

  .project-pagination-item--article,
  .project-pagination-item--article.project-pagination-item--next {
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }

  .project-pagination-item--article .project-pagination-item__image {
    aspect-ratio: 3 / 2;
    flex-basis: auto;
    height: auto;
    width: 100%;
  }

  .project-pagination-item--article .project-pagination-item__content {
    width: 100%;
  }

  .project-pagination-item--article :deep(.app-button.app-button--fit) {
    max-width: none;
    width: 100%;
  }

}
</style>
