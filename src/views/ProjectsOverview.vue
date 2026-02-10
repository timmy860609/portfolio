<script setup lang="ts">
import { computed, ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'

const featuredProjects = computed(() => projects.slice(0, 3))
const currentSlide = ref(0)
const categories = ['全部', 'UIUX', '前端開發', '其他'] as const
type Category = (typeof categories)[number]
const selectedCategory = ref<Category>('全部')

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % featuredProjects.value.length
}

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + featuredProjects.value.length) % featuredProjects.value.length
}

const inferCategory = (tags: string[]): Category => {
  const uiuxKeywords = ['使用者體驗設計', '視覺設計', 'UX', 'UI', '設計']
  const frontendKeywords = ['Vue', 'Vue.js', 'Vue 3', 'React', 'Next.js', 'Tailwind', 'PWA', 'Canvas']

  if (tags.some((tag) => uiuxKeywords.some((keyword) => tag.includes(keyword)))) {
    return 'UIUX'
  }
  if (tags.some((tag) => frontendKeywords.some((keyword) => tag.includes(keyword)))) {
    return '前端開發'
  }
  return '其他'
}

const filteredProjects = computed(() => {
  if (selectedCategory.value === '全部') {
    return projects
  }
  return projects.filter((project) => inferCategory(project.tags) === selectedCategory.value)
})
</script>

<template>
  <section class="bg-white py-24 px-6">
    <div class="max-w-7xl mx-auto space-y-12">
      <div class="space-y-4 text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-[0.3em] text-primary-500">Projects</p>
        <h1 class="text-4xl md:text-5xl font-bold text-secondary-900">專案總覽</h1>
        <p class="text-secondary-500 text-lg">
          瀏覽所有專案，點擊卡片進入專案詳情。
        </p>
      </div>

    </div>
  </section>

  <section class="bg-secondary-50/60 py-14">
    <div class="max-w-7xl mx-auto px-6">
      <div class="space-y-6">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.3em] text-primary-500">Featured</p>
            <h2 class="text-3xl md:text-4xl font-bold text-secondary-900">精選成果</h2>
            <p class="mt-2 text-secondary-500">
              挑選 3 個代表作品，快速了解我的專案特色。
            </p>
          </div>

          <div class="overflow-hidden">
            <div
              class="flex transition-transform duration-500 ease-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div
                v-for="project in featuredProjects"
                :key="project.id"
                class="w-full flex-shrink-0 px-2"
              >
                <ProjectCard :project="project" :to="`/projects/${project.id}`" />
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <button
                type="button"
                @click="prevSlide"
                class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-secondary-200 bg-white text-secondary-700 transition hover:border-primary-200 hover:text-primary-600"
                aria-label="上一個精選專案"
              >
                ‹
              </button>
              <button
                type="button"
                @click="nextSlide"
                class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-secondary-200 bg-white text-secondary-700 transition hover:border-primary-200 hover:text-primary-600"
                aria-label="下一個精選專案"
              >
                ›
              </button>
            </div>

            <div class="flex gap-2">
              <button
                v-for="(project, index) in featuredProjects"
                :key="project.id"
                type="button"
                @click="goToSlide(index)"
                class="h-2.5 w-2.5 rounded-full transition"
                :class="currentSlide === index ? 'bg-primary-600' : 'bg-secondary-300'"
                :aria-label="`前往第 ${index + 1} 個精選專案`"
              ></button>
            </div>
          </div>
        </div>
      </div>
  </section>

  <section class="bg-white pt-8">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-wrap gap-3">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          @click="selectedCategory = category"
          class="rounded-full px-4 py-2 text-sm font-semibold transition"
          :class="
            selectedCategory === category
              ? 'bg-primary-600 text-white shadow-sm'
              : 'bg-secondary-50 text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
          "
        >
          {{ category }}
        </button>
      </div>
    </div>
  </section>

  <section class="bg-white pb-24 pt-10 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          :to="`/projects/${project.id}`"
        />
      </div>
      <div v-if="filteredProjects.length === 0" class="mt-10 text-center text-secondary-500">
        目前沒有符合分類的作品。
      </div>
    </div>
  </section>
</template>
