<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    tags: string[];
    symbol?: string;
    align?: 'start' | 'end';
    markerColor?: string;
    fontSize?: number;
    mobileFontSize?: number;
  }>(),
  {
    symbol: '#',
    align: 'start',
    markerColor: '#00d9ff',
    fontSize: 18,
    mobileFontSize: 18,
  },
);

const tagStyle = computed(() => ({
  '--project-tag-marker': props.markerColor,
  '--project-tag-size': `${props.fontSize}px`,
  '--project-tag-mobile-size': `${props.mobileFontSize}px`,
}));
</script>

<template>
  <ul
    class="project-tags"
    :class="{ 'project-tags--end': align === 'end' }"
    :style="tagStyle"
    aria-label="專案類型"
  >
    <li v-for="(tag, index) in tags" :key="`${tag}-${index}`">
      <span aria-hidden="true">{{ symbol }}</span>{{ tag }}
    </li>
  </ul>
</template>

<style scoped>
.project-tags {
  display: flex;
  flex-wrap: wrap;
  font-size: var(--project-tag-size);
  gap: 12px;
  line-height: 1.5;
  list-style: none;
  margin: 0;
  padding: 0;
}

.project-tags--end {
  justify-content: flex-end;
}

.project-tags span {
  color: var(--project-tag-marker);
  font-family: 'Montserrat', 'Noto Sans TC', sans-serif;
  font-weight: 700;
}

@media (max-width: 767px) {
  .project-tags {
    font-size: var(--project-tag-mobile-size);
  }
}
</style>
