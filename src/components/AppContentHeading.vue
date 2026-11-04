<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    title?: string;
    introduction?: string | string[];
    spacing?: 'compact' | 'default';
  }>(),
  {
    title: undefined,
    introduction: undefined,
    spacing: 'default',
  },
);

const paragraphs = computed(() => {
  if (!props.introduction) return [];
  return Array.isArray(props.introduction)
    ? props.introduction
    : [props.introduction];
});
</script>

<template>
  <div
    class="app-content-heading"
    :class="`app-content-heading--${spacing}`"
  >
    <h2 v-if="title">{{ title }}</h2>
    <p
      v-for="paragraph in paragraphs"
      :key="paragraph"
      class="app-content-heading__introduction"
    >
      {{ paragraph }}
    </p>
    <slot />
  </div>
</template>

<style scoped>
.app-content-heading {
  display: flex;
  flex-direction: column;
  gap: var(--app-content-heading-gap, var(--content-heading-gap));
}

.app-content-heading--compact {
  --app-content-heading-gap: 8px;
}

.app-content-heading h2 {
  font-size: var(--font-size-content-heading);
  font-weight: var(--font-weight-bold);
  line-height: 1.5;
  margin: 0;
}

.app-content-heading__introduction,
.app-content-heading :slotted(p),
.app-content-heading :slotted(li) {
  font-size: var(--content-body-font-size);
  letter-spacing: var(--content-copy-letter-spacing, 0.9px);
  line-height: 1.6;
}

.app-content-heading__introduction,
.app-content-heading :slotted(p) {
  margin: 0;
}
</style>
