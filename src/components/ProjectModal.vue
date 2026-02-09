<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div v-if="project" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-secondary-900/60 backdrop-blur-sm" @click="$emit('close')"></div>
      
      <!-- Modal Content -->
      <div class="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl">
        <button 
          @click="$emit('close')" 
          class="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur rounded-full text-secondary-900 hover:bg-white shadow-md transition-all"
        >
          <X :size="24" />
        </button>

        <div class="grid md:grid-cols-2">
          <div class="relative aspect-square md:aspect-auto">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
          </div>
          <div class="p-8 md:p-12 space-y-6">
            <h2 class="text-3xl font-bold text-secondary-800">{{ project.title }}</h2>
            
            <div class="space-y-4">
              <h4 class="font-bold text-secondary-900 uppercase tracking-wider text-sm">專案簡介</h4>
              <p class="text-secondary-600 leading-relaxed text-lg">
                {{ project.details || project.description }}
              </p>
            </div>

            <div class="space-y-4">
              <h4 class="font-bold text-secondary-900 uppercase tracking-wider text-sm">使用技術</h4>
              <div class="flex flex-wrap gap-3">
                <div v-for="tech in project.tags" :key="tech" class="flex items-center gap-2 px-4 py-2 bg-secondary-50 rounded-xl text-secondary-700 font-medium border border-secondary-100">
                  <span class="w-2 h-2 bg-primary-500 rounded-full"></span>
                  {{ tech }}
                </div>
              </div>
            </div>

            <div class="pt-6 border-t border-secondary-100">
              <a v-if="project.link" :href="project.link" target="_blank" 
                 class="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200">
                造訪網站 <ExternalLink :size="20" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { X, ExternalLink } from 'lucide-vue-next'

defineProps<{
  project: {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    link?: string
    details?: string
  } | null
}>()

defineEmits(['close'])
</script>
