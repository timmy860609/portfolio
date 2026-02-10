<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    showSubtitle?: boolean
    containerClass?: string
    titleClass?: string
    subtitleClass?: string
  }>(),
  {
    subtitle: '',
    showSubtitle: true,
    containerClass: '',
    titleClass: 'text-4xl md:text-5xl font-bold text-secondary-900',
    subtitleClass: 'text-secondary-500 text-lg',
  }
)
</script>

<template>
  <div :class="['space-y-4 text-center max-w-2xl mx-auto', containerClass]">
    <slot name="label" />
    <h1 :class="titleClass">{{ title }}</h1>
    <p v-if="showSubtitle" :class="subtitleClass">
      {{ subtitle }}
    </p>
  </div>
</template>
