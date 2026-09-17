<script setup lang="ts">
withDefaults(
  defineProps<{
    show: boolean;
    message?: string;
  }>(),
  {
    message: '',
  },
);
</script>

<template>
  <Transition name="app-toast">
    <span v-if="show" class="app-toast" role="status">
      {{ message }}
    </span>
  </Transition>
</template>

<style scoped>
.app-toast {
  background: #323232;
  border-radius: 999px;
  bottom: calc(100% + 8px);
  color: #fff;
  font-size: 14px;
  left: 50%;
  line-height: 1.4;
  padding: 5px 10px;
  pointer-events: none;
  position: absolute;
  transform: translateX(-50%);
  white-space: nowrap;
  z-index: 1;
}

.app-toast-enter-active,
.app-toast-leave-active {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.app-toast-enter-from,
.app-toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 4px);
}
</style>
