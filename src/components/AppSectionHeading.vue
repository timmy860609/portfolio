<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    titleId?: string;
    tone?: 'dark' | 'light';
    align?: 'start' | 'center';
  }>(),
  { titleId: undefined, tone: 'light', align: 'start' },
);
</script>

<template>
  <div class="app-section-heading" :class="[`app-section-heading--${tone}`, `app-section-heading--${align}`]">
    <h2 :id="titleId">{{ title }}</h2>
    <div v-if="$slots.default" class="app-section-heading__content"><slot /></div>
  </div>
</template>

<style scoped>
.app-section-heading { display: flex; flex-direction: column; gap: 16px; }
.app-section-heading--light { color: #323232; }
.app-section-heading--dark { color: #fff; }
.app-section-heading--center { align-items: center; text-align: center; }
.app-section-heading h2 { color: inherit; font-size: 40px; font-weight: 700; letter-spacing: .06em; line-height: 1.5; margin: 0; }
.app-section-heading__content { color: inherit; }
@media (max-width: 767px) { .app-section-heading h2 { font-size: 32px; } }
</style>
