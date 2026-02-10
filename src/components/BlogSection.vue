<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { posts } from '../data/posts'
</script>

<template>
  <section id="blog" class="py-24 px-6 bg-secondary-50">
    <div class="max-w-7xl mx-auto space-y-12">
      <div class="text-center space-y-4 max-w-2xl mx-auto">
        <h2 class="text-primary-600 font-bold tracking-wider uppercase text-sm">Stories</h2>
        <h3 class="text-4xl md:text-5xl font-bold text-secondary-900">創作記錄</h3>
        <p class="text-secondary-500 text-lg">
          分享設計、開發與專案中的實作心得，記錄每一次成長。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RouterLink
          v-for="post in posts"
          :key="post.id"
          :to="`/blog/${post.id}`"
          class="group rounded-3xl border border-secondary-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="flex items-center justify-between text-xs text-secondary-400">
            <span class="font-semibold uppercase tracking-widest">{{ post.tag }}</span>
            <time :datetime="post.date">{{ post.date }}</time>
          </div>
          <h4 class="mt-4 text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
            {{ post.title }}
          </h4>
          <p class="mt-3 text-secondary-500 leading-relaxed">
            {{ post.excerpt }}
          </p>
          <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
            閱讀更多
            <span aria-hidden="true">→</span>
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
