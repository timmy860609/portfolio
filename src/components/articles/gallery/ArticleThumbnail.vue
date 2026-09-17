<script setup lang="ts">
import { computed } from 'vue';
import { withBase } from '../../../utils/basePath';

const props = withDefaults(defineProps<{
  src: string;
  alt: string;
  scale?: number;
  position?: string;
}>(), {
  scale: 1,
  position: 'center',
});

const imageStyle = computed(() => ({
  '--article-thumbnail-scale': props.scale,
  objectPosition: props.position,
}));

</script>

<template>
  <div class="article-thumbnail">
    <img
      :src="withBase(src)"
      :alt="alt"
      :style="imageStyle"
      loading="lazy"
      decoding="async"
    />
  </div>
</template>

<style scoped>
.article-thumbnail {
  flex: 0 0 320px;
  height: 220px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  width: 320px;
}

@media (max-width: 767px) {
  .article-thumbnail {
    aspect-ratio: 3 / 2;
    flex-basis: auto;
    height: auto;
    width: 100%;
  }
}

.article-thumbnail img {
  display: block;
  height: 100%;
  object-fit: cover;
  transform: scale(var(--article-thumbnail-scale));
  width: 100%;
}

</style>
