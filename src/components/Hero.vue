<template>
  <section id="home" class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary-50">
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary-200/30 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div class="space-y-8 animate-slide-up">
        <div class="space-y-4">
          <h2 class="text-primary-600 font-bold tracking-wider uppercase text-sm">歡迎來到我的作品集</h2>
          <h1 class="text-5xl md:text-7xl font-extrabold text-secondary-900 leading-tight">
            你好，我是 <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500">Ha HA</span>
          </h1>
          <p class="text-2xl md:text-4xl text-secondary-600 font-medium">
            前端開發者 / 使用者體驗設計師
          </p>
          <p class="text-lg text-secondary-500 max-w-lg leading-relaxed">
            專注於打造兼具美感與實用性的數位產品。擁有超過 5 年的開發經驗，致力於將複雜的邏輯轉化為直覺、優雅的使用者介面。
          </p>
        </div>

        <div class="flex flex-wrap gap-4">
          <RouterLink
            to="/#portfolio"
            class="bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-200 hover:shadow-2xl hover:-translate-y-1 active:scale-95"
          >
            查看作品
          </RouterLink>
          <RouterLink
            to="/#about"
            class="bg-white text-secondary-900 border border-secondary-200 px-8 py-4 rounded-2xl font-bold hover:bg-secondary-50 transition-all hover:-translate-y-1 active:scale-95"
          >
            關於我
          </RouterLink>
        </div>
        
        <div class="flex items-center gap-6 pt-4">
          <div v-for="stat in stats" :key="stat.label" class="text-center md:text-left">
            <div class="text-2xl font-bold text-secondary-900">{{ stat.value }}</div>
            <div class="text-sm text-secondary-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <div class="relative animate-fade-in hidden md:block">
        <div class="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
               alt="Li Bo-Ting" 
               class="w-full aspect-[4/5] object-cover" />
        </div>
        <!-- Decorative elements -->
        <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-100 rounded-2xl -z-10 rotate-12"></div>
        <div class="absolute -top-6 -right-6 w-32 h-32 border-4 border-primary-200 rounded-full -z-10"></div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
      <span class="text-xs font-semibold text-secondary-400 uppercase tracking-widest">Scroll</span>
      <div class="w-1 h-12 bg-gradient-to-b from-primary-500 to-transparent rounded-full"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const stats = [
  { label: '專案經驗', value: '40+' },
  { label: '設計經驗', value: '5yrs' },
  { label: '程式經驗', value: '3 yrs' },
]
</script>
