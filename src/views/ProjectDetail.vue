<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-vue-next'
import SectionLabel from '../components/SectionLabel.vue'
import { getProjectById, projects } from '../data/projects'

const route = useRoute()

const projectId = computed(() => Number(route.params.id))
const project = computed(() => getProjectById(projectId.value))
const currentIndex = computed(() => projects.findIndex((item) => item.id === projectId.value))
const prevProject = computed(() =>
  currentIndex.value > 0 ? projects[currentIndex.value - 1] : null
)
const nextProject = computed(() =>
  currentIndex.value >= 0 && currentIndex.value < projects.length - 1
    ? projects[currentIndex.value + 1]
    : null
)
</script>

<template>
  <section class="bg-white py-24 px-6">
    <div class="max-w-6xl mx-auto space-y-10">
      <div class="flex flex-wrap items-start justify-start gap-4">
        <div class="space-y-2">
          <SectionLabel>Project</SectionLabel>
          <h1 class="text-3xl md:text-4xl font-bold text-secondary-900">
            {{ project?.title || '找不到此專案' }}
          </h1>
          <RouterLink
            to="/"
            class="text-link"
          >
            <ArrowLeft :size="16" />
            回首頁
          </RouterLink>
        </div>
      </div>

      <div v-if="project" class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div class="space-y-6">
          <div class="card-media">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-bold text-secondary-900">專案簡介</h2>
            <p class="text-secondary-600 leading-relaxed text-lg">
              {{ project.details || project.description }}
            </p>
          </div>
        </div>

        <aside class="space-y-6">
          <div class="card-muted p-6 space-y-4">
            <h3 class="text-lg font-bold text-secondary-900">使用技術</h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="tech in project.tags"
                :key="tech"
                class="px-4 py-2 rounded-xl bg-white text-secondary-700 font-medium border border-secondary-100"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="card-primary p-6 space-y-4">
            <h3 class="text-lg font-bold text-secondary-900">專案連結</h3>
            <p class="text-secondary-600">查看專案線上展示或更多細節。</p>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700"
            >
              造訪網站
              <ExternalLink :size="16" />
            </a>
            <p v-else class="text-sm text-secondary-400">目前尚未公開連結。</p>
          </div>
        </aside>
      </div>

      <div v-else class="card-muted p-10 text-center">
        <p class="text-secondary-600">找不到對應的專案內容，請返回作品集查看。</p>
      </div>

      <div v-if="project" class="flex flex-wrap items-center justify-between gap-4 border-t border-secondary-100 pt-8">
        <RouterLink
          v-if="prevProject"
          :to="`/projects/${prevProject.id}`"
          class="btn-outline"
        >
          <ArrowLeft :size="16" />
          {{ prevProject.title }}
        </RouterLink>
        <span v-else class="text-sm text-secondary-400">已是第一個專案</span>

        <RouterLink
          v-if="nextProject"
          :to="`/projects/${nextProject.id}`"
          class="btn-outline"
        >
          {{ nextProject.title }}
          <ArrowRight :size="16" />
        </RouterLink>
        <span v-else class="text-sm text-secondary-400">已是最後一個專案</span>
      </div>
    </div>
  </section>
</template>
