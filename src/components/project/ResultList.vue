<script setup lang="ts">
import { computed } from 'vue';
import type { ProjectResultItem } from '../../types/project';

const props = withDefaults(
  defineProps<{
    items: ProjectResultItem[];
    markerColor?: string;
  }>(),
  {
    markerColor: '#169b49',
  },
);

const listStyle = computed(() => ({
  '--result-marker-color': props.markerColor,
}));
</script>

<template>
  <ul class="result-list" :style="listStyle">
    <li v-for="item in items" :key="item.title">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </li>
  </ul>
</template>

<style scoped>
.result-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  list-style: disc;
  margin: 0;
  padding-left: 16px;
}

.result-list li::marker {
  color: var(--result-marker-color);
  font-size: 16px;
}

.result-list h3 {
  color: #323232;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.5;
  margin: 0;
}

.result-list p {
  color: #000;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin: 2px 0 0;
}
</style>
