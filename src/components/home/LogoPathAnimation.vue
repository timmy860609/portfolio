<script setup lang="ts">
import logoSource from '../../../public/WebCI/ci-logo.svg?raw';

defineProps<{
  label: string;
}>();

const animatedLogo = logoSource
  .replace('<svg ', '<svg aria-hidden="true" focusable="false" ')
  .replaceAll('<path ', '<path pathLength="1" ');
</script>

<template>
  <div
    class="logo-path-animation"
    role="img"
    :aria-label="label"
    v-html="animatedLogo"
  ></div>
</template>

<style scoped>
.logo-path-animation {
  display: block;
  width: 100%;
}

.logo-path-animation :deep(svg) {
  display: block;
  height: auto;
  overflow: visible;
  width: 100%;
}

.logo-path-animation :deep(path) {
  --path-order: 0;
  animation:
    logo-path-draw 1.25s cubic-bezier(0.65, 0, 0.35, 1)
      calc(var(--path-order) * 45ms) both,
    logo-path-fill 0.55s ease-out
      calc(1.05s + var(--path-order) * 45ms) both;
  fill: transparent;
  stroke: #323232;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.4;
}

.logo-path-animation :deep(path:nth-child(2)) {
  --path-order: 1;
}

.logo-path-animation :deep(path:nth-child(3)) {
  --path-order: 2;
}

.logo-path-animation :deep(path:nth-child(4)) {
  --path-order: 3;
}

.logo-path-animation :deep(path:nth-child(5)) {
  --path-order: 4;
}

.logo-path-animation :deep(path:nth-child(6)) {
  --path-order: 5;
}

.logo-path-animation :deep(path:nth-child(7)) {
  --path-order: 6;
}

.logo-path-animation :deep(path:nth-child(8)) {
  --path-order: 7;
}

.logo-path-animation :deep(path:nth-child(9)) {
  --path-order: 8;
}

.logo-path-animation :deep(path:nth-child(10)) {
  --path-order: 9;
}

.logo-path-animation :deep(path:nth-child(11)) {
  --path-order: 10;
}

.logo-path-animation :deep(path:nth-child(12)) {
  --path-order: 11;
}

.logo-path-animation :deep(path:nth-child(13)) {
  --path-order: 12;
}

.logo-path-animation :deep(path:nth-child(14)) {
  --path-order: 13;
}

.logo-path-animation :deep(path:nth-child(15)) {
  --path-order: 14;
}

.logo-path-animation :deep(path:nth-child(16)) {
  --path-order: 15;
}

@keyframes logo-path-draw {
  from {
    stroke-dashoffset: 1;
  }

  to {
    stroke-dashoffset: 0;
  }
}

@keyframes logo-path-fill {
  from {
    fill: transparent;
    stroke-opacity: 1;
  }

  to {
    fill: #323232;
    stroke-opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .logo-path-animation :deep(path) {
    animation: none;
    fill: #323232;
    stroke: none;
  }
}
</style>
