<script setup lang="ts">
import { withBase } from '../../utils/basePath';

defineProps<{
  direction: 'left' | 'right';
}>();

defineEmits<{
  click: [];
}>();
</script>

<template>
  <button
    class="carousel-arrow"
    type="button"
    :aria-label="direction === 'left' ? '上一組專案' : '下一組專案'"
    @click="$emit('click')"
  >
    <img
      :src="withBase(`/Image/Home/featured-projects/arrow-${direction}.svg`)"
      alt=""
    />
  </button>
</template>

<style scoped>
.carousel-arrow {
  align-items: center;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 999px;
  cursor: pointer;
  display: flex;
  height: 42px;
  justify-content: center;
  padding: 4px;
  transition:
    background-color 160ms ease,
    transform 160ms ease;
  width: 42px;
}

.carousel-arrow img {
  display: block;
  height: 19px;
  width: auto;
}

.carousel-arrow:hover {
  background: rgb(255 255 255 / 14%);
  transform: scale(1.04);
}

.carousel-arrow:focus-visible {
  outline: 3px solid #00d3f8;
  outline-offset: 3px;
}
</style>
