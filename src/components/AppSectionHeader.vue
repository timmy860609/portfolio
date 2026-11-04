<script setup lang="ts">
import AppSectionHeading from './AppSectionHeading.vue';

withDefaults(
  defineProps<{
    title: string;
    titleId?: string;
    subtitle?: string;
    tone?: 'dark' | 'light';
  }>(),
  { titleId: undefined, subtitle: undefined, tone: 'light' },
);
</script>

<template>
  <header class="app-section-header">
    <AppSectionHeading
      class="app-section-header__heading"
      :title="title"
      :title-id="titleId"
      :subtitle="subtitle"
      :tone="tone"
    />

    <div v-if="$slots.default" class="app-section-header__actions">
      <slot />
    </div>
  </header>
</template>

<style scoped>
.app-section-header {
  align-items: flex-end;
  display: flex;
  gap: 56px;
  justify-content: space-between;
  width: 100%;
}

.app-section-header__heading,
.app-section-header__actions {
  flex: 1 0 0;
  min-width: 0;
}

.app-section-header__actions {
  align-items: center;
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 1023px) {
  .app-section-header {
    gap: 40px;
  }
}

@media (max-width: 767px) {
  .app-section-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;
  }

  .app-section-header__actions {
    flex: none;
    justify-content: flex-start;
    width: 100%;
  }
}
</style>
