<template>
  <section id="portfolio" class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto space-y-16">
      <div class="text-center space-y-4 max-w-2xl mx-auto">
        <h2 class="text-primary-600 font-bold tracking-wider uppercase text-sm">My Work</h2>
        <h3 class="text-4xl md:text-5xl font-bold text-secondary-900">精選作品展示</h3>
        <p class="text-secondary-500 text-lg">
          這裡展示了我近期的一些代表作，涵蓋了UIUX規劃設計與前端程式開發。
        </p>
      </div>

      <!-- Filter (Optional, keeping it simple for now) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id" 
          :project="project"
          :to="`/projects/${project.id}`"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects'
</script>
