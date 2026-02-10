<template>
  <component
    :is="to ? RouterLink : 'div'"
    :to="to"
    class="group card-base card-hover-lift-strong overflow-hidden cursor-pointer"
  >
    <div class="relative aspect-video overflow-hidden">
      <img :src="project.image" :alt="project.title" 
           class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <span class="text-white font-medium flex items-center gap-2">
          查看詳情 <ArrowRight :size="18" />
        </span>
      </div>
    </div>
    <div class="p-6 space-y-4">
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in project.tags" :key="tag" 
              class="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-bold rounded-full uppercase">
          {{ tag }}
        </span>
      </div>
      <h3 class="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
        {{ project.title }}
      </h3>
      <p class="text-secondary-500 line-clamp-2">
        {{ project.description }}
      </p>
    </div>
  </component>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

defineProps<{
  to?: string
  project: {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    link?: string
    details?: string
  }
}>()
</script>
