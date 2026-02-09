<template>
  <section id="about" class="py-24 px-6 bg-secondary-50">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div class="lg:col-span-2">
        <div
          class="relative overflow-hidden rounded-[32px] border border-secondary-100 bg-white/80 p-8 shadow-sm backdrop-blur"
        >
          <div class="absolute -top-8 right-6 h-24 w-24 rounded-full bg-primary-100/70 blur-2xl"></div>
          <div class="absolute -bottom-10 left-10 h-28 w-28 rounded-full bg-secondary-200/50 blur-3xl"></div>

          <div class="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div class="space-y-6">
              <div class="space-y-3">
                <p class="text-xs font-bold uppercase tracking-[0.3em] text-primary-500">About Me</p>
                <h3 class="text-3xl md:text-4xl font-bold text-secondary-900">熱衷於用程式解決問題，創造價值的開發者。</h3>
              </div>

              <p class="text-secondary-600 text-lg leading-relaxed">
                你好！我是李柏廷，一名居住在台灣的全端網頁開發者。自從 2018 年接觸網頁開發以來，我對如何透過程式碼構建出具有影響力的產品感到無比興奮。
              </p>

              <p class="text-secondary-600 text-lg leading-relaxed">
                我擅長使用 Vue.js、TypeScript 與 Node.js 構建現代化的網頁應用程式。除了技術開發，我也非常注重使用者體驗設計（UX/UI），致力於讓每一個產品不僅好用，而且美觀。
              </p>
            </div>

            <div class="space-y-5">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-xs font-bold uppercase tracking-[0.3em] text-primary-500">Skills</p>
                  <h4 class="text-2xl font-bold text-secondary-900">專業能力一覽</h4>
                </div>
                <span class="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600">Tech Stack</span>
              </div>

              <div class="grid gap-6 sm:grid-cols-2">
                <div v-for="skill in skills" :key="skill.category" class="space-y-3">
                  <h5 class="font-bold text-secondary-900">{{ skill.category }}</h5>
                  <ul class="space-y-2">
                    <li v-for="item in skill.items" :key="item" class="flex items-center gap-2 text-secondary-500">
                      <Check :size="16" class="text-primary-500" />
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" class="pt-10 lg:col-span-2 scroll-mt-24">
        <div
          class="relative overflow-hidden rounded-3xl border border-primary-100 bg-gradient-to-br from-white via-primary-50/60 to-secondary-50 p-8 shadow-sm"
        >
          <div class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary-200/40 blur-2xl"></div>
          <div class="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-secondary-200/40 blur-3xl"></div>

          <div class="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div class="space-y-4">
              <p class="text-xs font-bold uppercase tracking-[0.3em] text-primary-500">Contact</p>
              <h4 class="text-2xl md:text-3xl font-bold text-secondary-900">一起把想法做成產品</h4>
              <p class="text-secondary-600 leading-relaxed">
                歡迎合作、專案諮詢或技術交流。回信速度快，通常 24 小時內回覆。
              </p>
              <div class="flex flex-wrap gap-3 pt-2">
                <a
                  :href="gmailComposeLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700"
                >
                  <Mail :size="16" />
                  寄送信件
                </a>
                <a
                  href="tel:+886962002655"
                  class="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-5 py-2.5 text-sm font-semibold text-primary-700 shadow-sm transition hover:border-primary-300 hover:bg-primary-50"
                >
                  <Phone :size="16" />
                  立即通話
                </a>
              </div>
            </div>

            <ul class="space-y-4">
              <li
                v-for="info in contactInfo"
                :key="info.label"
                class="flex items-center gap-4 rounded-2xl bg-white/80 px-4 py-3 shadow-sm"
              >
                <div class="w-11 h-11 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center">
                  <component :is="info.icon" :size="20" />
                </div>
                <div>
                  <div class="text-[11px] text-secondary-400 font-bold uppercase tracking-widest">{{ info.label }}</div>
                  <div class="text-secondary-900 font-semibold">{{ info.value }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Check, Mail, MapPin, Phone } from 'lucide-vue-next'

const gmailComposeLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=timmy.lee.9769@gmail.com'

const skills = [
  { category: '前端開發', items: ['Vue 3 / Vuex / Pinia', 'TypeScript', 'Tailwind CSS', 'Next.js / React'] },
  { category: '後端開發', items: ['Node.js / Express', 'PostgreSQL / MySQL', 'Firebase', 'RESTful API'] },
]

const contactInfo = [
  { label: '電子郵件', value: 'timmy.lee.9769@gmail.com', icon: Mail },
  { label: '聯絡電話', value: '0962-002-655', icon: Phone },
]
</script>
