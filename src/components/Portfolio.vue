<template>
  <section id="portfolio" class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto space-y-16">
      <SectionHeader title="精選作品展示" subtitle="這裡展示了我近期的一些代表作，涵蓋了UIUX規劃設計與前端程式開發。">
        <template #label>
          <SectionLabel>My Work</SectionLabel>
        </template>
      </SectionHeader>

      <!-- Filter (Optional, keeping it simple for now) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id" 
          :project="project"
          :to="`/projects/${project.id}`"
        />
      </div>

      <div class="flex justify-center">
        <RouterLink
          to="/projects"
          class="btn-outline"
        >
          查看全部專案
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import SectionHeader from './SectionHeader.vue'
import SectionLabel from './SectionLabel.vue'
import { projects } from '../data/projects'
import { RouterLink } from 'vue-router'
</script>
