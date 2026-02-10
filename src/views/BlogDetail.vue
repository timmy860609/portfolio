<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import { getPostById } from '../data/posts'

const route = useRoute()

const postId = computed(() => Number(route.params.id))
const post = computed(() => getPostById(postId.value))
</script>

<template>
  <section class="bg-white py-24 px-6">
    <div class="max-w-4xl mx-auto space-y-8">
      <RouterLink to="/#blog" class="text-link">
        <ArrowLeft :size="16" />
        回到創作記錄
      </RouterLink>

      <div v-if="post" class="space-y-10">
        <div class="space-y-3">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-primary-500">{{ post.tag }}</p>
          <h1 class="text-3xl md:text-4xl font-bold text-secondary-900">{{ post.title }}</h1>
          <p class="text-secondary-400">{{ post.date }}</p>
        </div>
        <p class="text-secondary-600 text-lg leading-relaxed">
          {{ post.content }}
        </p>

        <div class="space-y-12">
          <template v-for="(section, index) in post.sections" :key="index">
            <div
              v-if="section.type === 'image-left'"
              class="grid gap-8 md:grid-cols-[1.1fr_1fr] items-center"
            >
              <div class="overflow-hidden rounded-3xl border border-secondary-100 shadow-sm">
                <img :src="section.image" :alt="section.title" class="h-full w-full object-cover" />
              </div>
              <div class="space-y-3">
                <h2 class="text-2xl font-bold text-secondary-900">{{ section.title }}</h2>
                <p class="text-secondary-600 leading-relaxed">{{ section.body }}</p>
              </div>
            </div>

            <div
              v-else-if="section.type === 'image-right'"
              class="grid gap-8 md:grid-cols-[1fr_1.1fr] items-center"
            >
              <div class="space-y-3 order-2 md:order-1">
                <h2 class="text-2xl font-bold text-secondary-900">{{ section.title }}</h2>
                <p class="text-secondary-600 leading-relaxed">{{ section.body }}</p>
              </div>
              <div class="overflow-hidden rounded-3xl border border-secondary-100 shadow-sm order-1 md:order-2">
                <img :src="section.image" :alt="section.title" class="h-full w-full object-cover" />
              </div>
            </div>

            <div v-else-if="section.type === 'full-image'" class="space-y-4">
              <div class="overflow-hidden rounded-3xl border border-secondary-100 shadow-sm">
                <img :src="section.image" :alt="section.title" class="h-full w-full object-cover" />
              </div>
              <div class="space-y-2">
                <h2 class="text-2xl font-bold text-secondary-900">{{ section.title }}</h2>
                <p class="text-secondary-600 leading-relaxed">{{ section.body }}</p>
              </div>
            </div>

            <div
              v-else-if="section.type === 'quote'"
              class="rounded-3xl border border-secondary-100 bg-secondary-50 px-8 py-10 text-center"
            >
              <p class="text-xl md:text-2xl font-semibold text-secondary-800">“{{ section.quote }}”</p>
              <p class="mt-4 text-sm font-semibold text-secondary-500">— {{ section.author }}</p>
            </div>
          </template>
        </div>
      </div>

      <div v-else class="rounded-3xl border border-secondary-100 bg-secondary-50 p-10 text-center">
        <p class="text-secondary-600">找不到對應的文章內容。</p>
      </div>
    </div>
  </section>
</template>
