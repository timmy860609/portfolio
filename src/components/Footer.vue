<template>
  <footer class="bg-secondary-900 text-white py-16 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            L
          </div>
          <span class="font-bold text-xl tracking-tight">Lie Portfolio</span>
        </div>
        <p class="text-secondary-400 max-w-xs">
          致力於創造極致的數位體驗，融合美學與技術，打造高品質的網頁應用程式。
        </p>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-6">快速連結</h3>
        <ul class="space-y-3">
          <li>
            <RouterLink to="/#home" class="text-secondary-400 hover:text-primary-400 transition-colors">首頁</RouterLink>
          </li>
          <li>
            <RouterLink to="/#portfolio" class="text-secondary-400 hover:text-primary-400 transition-colors">作品集</RouterLink>
          </li>
          <li>
            <RouterLink to="/#about" class="text-secondary-400 hover:text-primary-400 transition-colors">關於我</RouterLink>
          </li>
          <li>
            <RouterLink to="/#contact" class="text-secondary-400 hover:text-primary-400 transition-colors">聯絡資訊</RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-6">社群連結</h3>
        <div class="flex gap-4">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.href"
            :target="social.external ? '_blank' : undefined"
            :rel="social.external ? 'noopener noreferrer' : undefined"
            class="w-12 h-12 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all hover:-translate-y-1"
          >
            <component :is="social.icon" :size="20" />
          </a>
        </div>
        <p class="mt-8 text-secondary-500 text-sm">
          &copy; {{ new Date().getFullYear() }} Li Bo-Ting. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const socials = [
  { name: 'Github', href: 'https://github.com', icon: Github, external: true },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin, external: true },
  { name: 'Email', href: '/#contact', icon: Mail, external: false },
]
</script>
