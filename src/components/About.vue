<template>
  <section id="about" class="py-24 px-6 bg-secondary-50 overflow-x-hidden">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div class="lg:col-span-2 min-w-0">
        <div class="relative card-glass-lg p-8">
          <div class="absolute -top-8 right-6 h-24 w-24 rounded-full bg-primary-100/70 blur-2xl"></div>
          <div class="absolute -bottom-10 left-10 h-28 w-28 rounded-full bg-secondary-200/50 blur-3xl"></div>

          <div class="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div class="space-y-6">
              <div class="space-y-3">
                <SectionLabel>About Me</SectionLabel>
                <h3 class="text-3xl md:text-4xl font-bold text-secondary-900">熱衷於用程式解決問題，創造價值的開發者。</h3>
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div v-for="stat in stats" :key="stat.label" class="card-compact-soft px-4 py-4">
                  <div class="text-2xl font-bold text-secondary-900">{{ stat.value }}</div>
                  <div class="text-sm text-secondary-500">{{ stat.label }}</div>
                </div>
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
                  <SectionLabel>Skills</SectionLabel>
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

      <div class="lg:col-span-2 min-w-0">
        <div class="space-y-8">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <SectionLabel>Experience</SectionLabel>
              <h4 class="text-2xl md:text-3xl font-bold text-secondary-900">工作經歷</h4>
            </div>
            <span class="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600">Recent</span>
          </div>

            <div class="lg:hidden">
              <div class="relative w-full max-w-full overflow-hidden">
                <div
                  class="flex w-full max-w-full transition-transform duration-500 ease-out"
                  :style="{ transform: `translateX(-${currentExperienceIndex * 100}%)` }"
                >
                  <div
                    v-for="(item, index) in experiences"
                    :key="item.role + item.company"
                    class="w-full shrink-0 box-border px-1"
                  >
                    <div class="relative w-full card-compact p-6">
                      <div class="flex flex-wrap items-start justify-between gap-4 min-w-0">
                        <div class="min-w-0">
                          <SectionLabel>Phase {{ experiences.length - index }}</SectionLabel>
                          <h5 class="mt-2 text-lg font-bold text-secondary-900 break-words">{{ item.role }}</h5>
                          <p class="text-secondary-600 font-medium break-words">{{ item.company }}</p>
                        </div>
                        <div class="text-sm font-semibold text-primary-600 break-words">{{ item.period }}</div>
                      </div>

                      <div class="mt-3 flex items-center gap-2 text-sm text-secondary-500">
                        <MapPin :size="16" class="text-primary-500" />
                        <span>{{ item.location }}</span>
                      </div>

                      <div class="mt-4 space-y-2">
                        <SectionLabel>重點專案</SectionLabel>
                        <div class="flex items-start gap-2 text-secondary-600 min-w-0">
                          <Check :size="16" class="mt-1 text-primary-500" />
                          <div class="min-w-0">
                            <div class="text-sm font-semibold text-secondary-900 break-words">
                              {{ item.featuredProject.title }}
                            </div>
                            <p class="mt-1 text-sm text-secondary-600 break-words">{{ item.featuredProject.summary }}</p>
                            <div class="mt-2 flex flex-wrap gap-2">
                              <span
                                v-for="tag in item.featuredProject.tags"
                                :key="tag"
                                class="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-600"
                              >
                                {{ tag }}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mt-4 card-primary-soft px-4 py-3">
                        <SectionLabel>工作內容</SectionLabel>
                        <ul class="mt-2 space-y-2">
                          <li
                            v-for="detail in item.highlights"
                            :key="detail"
                            class="flex items-start gap-2 text-secondary-600 min-w-0"
                          >
                            <Check :size="16" class="mt-1 text-primary-500" />
                            <span class="break-words">{{ detail }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4 flex items-center justify-between">
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-full border border-secondary-200 bg-white px-3 py-2 text-secondary-600 shadow-sm transition hover:border-primary-200 hover:text-primary-600"
                  @click="prevExperience"
                >
                  <ChevronLeft :size="18" />
                </button>
                <div class="flex items-center gap-2">
                  <span
                    v-for="(item, index) in experiences"
                    :key="item.role + item.company + index"
                    class="h-2 w-2 rounded-full transition"
                    :class="index === currentExperienceIndex ? 'bg-primary-500' : 'bg-secondary-200'"
                  ></span>
                </div>
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-full border border-secondary-200 bg-white px-3 py-2 text-secondary-600 shadow-sm transition hover:border-primary-200 hover:text-primary-600"
                  @click="nextExperience"
                >
                  <ChevronRight :size="18" />
                </button>
              </div>
            </div>

            <div class="relative hidden gap-6 pl-10 lg:grid lg:grid-cols-3 lg:pl-0 lg:pt-10">
              <div
                class="absolute left-0 top-[18px] h-[2px] w-full rounded-full bg-gradient-to-r from-primary-500/70 via-primary-300/60 to-primary-100"
              ></div>

              <div
                v-for="(item, index) in experiences"
                :key="item.role + item.company"
                class="relative w-full card-compact p-6 lg:pt-10"
              >
                <div class="absolute left-8 -top-10 flex flex-col items-center">
                  <div
                    class="h-4 w-4 rounded-full border-2 border-white bg-primary-500 shadow-[0_0_0_6px_rgba(59,130,246,0.12)]"
                  ></div>
                  <div class="mt-3 h-10 w-2 rounded-full bg-gradient-to-b from-primary-500/70 to-transparent"></div>
                </div>

                <div class="flex flex-wrap items-start justify-between gap-4 min-w-0">
                  <div class="min-w-0">
                    <SectionLabel>Phase {{ experiences.length - index }}</SectionLabel>
                    <h5 class="mt-2 text-lg font-bold text-secondary-900 break-words">{{ item.role }}</h5>
                    <p class="text-secondary-600 font-medium break-words">{{ item.company }}</p>
                  </div>
                  <div class="text-sm font-semibold text-primary-600 break-words">{{ item.period }}</div>
                </div>

                <div class="mt-3 flex items-center gap-2 text-sm text-secondary-500">
                  <MapPin :size="16" class="text-primary-500" />
                  <span>{{ item.location }}</span>
                </div>

                <div class="mt-4 space-y-2">
                  <SectionLabel>重點專案</SectionLabel>
                  <div class="flex items-start gap-2 text-secondary-600 min-w-0">
                    <Check :size="16" class="mt-1 text-primary-500" />
                    <div class="min-w-0">
                      <div class="text-sm font-semibold text-secondary-900 break-words">
                        {{ item.featuredProject.title }}
                      </div>
                      <p class="mt-1 text-sm text-secondary-600 break-words">{{ item.featuredProject.summary }}</p>
                      <div class="mt-2 flex flex-wrap gap-2">
                        <span
                          v-for="tag in item.featuredProject.tags"
                          :key="tag"
                          class="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-600"
                        >
                          {{ tag }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-4 card-primary-soft px-4 py-3">
                  <SectionLabel>工作內容</SectionLabel>
                  <ul class="mt-2 space-y-2">
                    <li
                      v-for="detail in item.highlights"
                      :key="detail"
                      class="flex items-start gap-2 text-secondary-600 min-w-0"
                    >
                      <Check :size="16" class="mt-1 text-primary-500" />
                      <span class="break-words">{{ detail }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div id="contact" class="pt-10 lg:col-span-2 min-w-0 scroll-mt-24">
        <div class="relative card-gradient p-8">
          <div class="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary-200/40 blur-2xl"></div>
          <div class="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-secondary-200/40 blur-3xl"></div>

          <div class="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start min-w-0">
            <div class="space-y-4 min-w-0">
              <SectionLabel>Contact</SectionLabel>
              <h4 class="text-2xl md:text-3xl font-bold text-secondary-900">一起把想法做成產品</h4>
              <p class="text-secondary-600 leading-relaxed break-words">
                歡迎合作、專案諮詢或技術交流。回信速度快，通常 24 小時內回覆。
              </p>
              <div class="flex flex-wrap gap-3 pt-2 w-full">
                <a
                  :href="profile104Link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 sm:w-auto"
                >
                  <ExternalLink :size="16" />
                  我的104
                </a>
                <a
                  :href="resumeLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-200 bg-white px-5 py-2.5 text-sm font-semibold text-primary-700 shadow-sm transition hover:border-primary-300 hover:bg-primary-50 sm:w-auto"
                >
                  <Download :size="16" />
                  下載簡歷
                </a>
              </div>
            </div>

            <ul class="space-y-4 min-w-0">
              <li
                v-for="info in contactInfo"
                :key="info.label"
                class="flex w-full items-center gap-4 card-compact-glass px-4 py-3 min-w-0"
              >
                <div class="w-11 h-11 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center">
                  <component :is="info.icon" :size="20" />
                </div>
                <div class="min-w-0">
                  <div class="text-[11px] text-secondary-400 font-bold uppercase tracking-widest">{{ info.label }}</div>
                  <div class="text-secondary-900 font-semibold break-all">{{ info.value }}</div>
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
import { ref } from 'vue'
import SectionLabel from './SectionLabel.vue'
import { Check, ChevronLeft, ChevronRight, Download, ExternalLink, Mail, MapPin, Phone } from 'lucide-vue-next'

const profile104Link = 'https://www.104.com.tw'
const resumeLink = '/resume.pdf'

const skills = [
  { category: '前端開發', items: ['Vue 3 / Vuex / Pinia', 'TypeScript', 'Tailwind CSS', 'Next.js / React'] },
  { category: '後端開發', items: ['Node.js / Express', 'PostgreSQL / MySQL', 'Firebase', 'RESTful API'] },
]

const stats = [
  { label: '專案經驗', value: '40+' },
  { label: '設計經驗', value: '5yrs' },
  { label: '程式經驗', value: '3 yrs' },
]

const experiences = [
  {
    role: '資深前端工程師',
    company: '星河數位科技',
    period: '2023 - 現在',
    location: '台北 · Hybrid',
    featuredProject: {
      title: 'Apollo CRM 儀表板改版',
      summary: '建立模組化儀表板與即時數據視覺化，縮短決策時間。',
      tags: ['Vue 3', 'TypeScript', 'ECharts'],
    },
    highlights: [
      '主導 B2B SaaS 平台前端架構升級，首屏載入速度提升 32%。',
      '建立設計系統與元件庫，跨產品 UI 一致性提升並減少重工。',
      '與產品與設計團隊合作，打造轉換率提升的 onboarding 流程。',
    ],
  },
  {
    role: '前端工程師',
    company: '光年互動',
    period: '2020 - 2023',
    location: '新北',
    featuredProject: {
      title: 'Lumen 多語系電商平台',
      summary: '打造可擴展的商品與結帳流程，支援海外市場上線。',
      tags: ['Nuxt', 'Pinia', 'A/B Testing'],
    },
    highlights: [
      '建置多語系電商前台，導入 A/B 測試提升結帳轉換率。',
      '導入 TypeScript 與測試流程，降低回歸缺陷率。',
      '優化 SEO 與核心 Web Vitals，頁面可見度提升。',
    ],
  },
  {
    role: '前端工程師（實習）',
    company: '晨光創新工作室',
    period: '2019 - 2020',
    location: '台中',
    featuredProject: {
      title: '晨光品牌官網重構',
      summary: '導入元件化與動畫互動，提升品牌記憶點與可維護性。',
      tags: ['Vue', 'GSAP', 'Storybook'],
    },
    highlights: [
      '協助重構公司形象網站，導入元件化流程提升開發效率。',
      '與設計端協作完成互動動畫，提升品牌視覺一致性。',
      '優化內容管理流程，降低內容更新時間。',
    ],
  },
]

const currentExperienceIndex = ref(0)

const prevExperience = () => {
  currentExperienceIndex.value =
    (currentExperienceIndex.value - 1 + experiences.length) % experiences.length
}

const nextExperience = () => {
  currentExperienceIndex.value = (currentExperienceIndex.value + 1) % experiences.length
}

const contactInfo = [
  { label: '電子郵件', value: 'timmy.lee.9769@gmail.com', icon: Mail },
  { label: '聯絡電話', value: '0962-002-655', icon: Phone },
]
</script>
