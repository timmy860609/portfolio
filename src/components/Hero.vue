<template>
  <section id="home" class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary-50">
    <!-- Background Decor -->
    <div
      ref="glowPrimary"
      class="pointer-events-none absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[640px] h-[640px] blur-3xl opacity-80 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_70%)]"
    ></div>
    <div
      ref="glowSecondary"
      class="pointer-events-none absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[560px] h-[560px] blur-3xl opacity-70 bg-[radial-gradient(circle_at_center,rgba(147,197,253,0.35),transparent_70%)]"
    ></div>

    <div class="max-w-5xl mx-auto px-6 relative z-10 text-center">
      <div class="space-y-8">
        <div class="space-y-4">
          <h2 ref="heroKicker" class="text-primary-600 font-bold tracking-wider uppercase text-sm">歡迎來到我的作品集</h2>
          <h1 ref="heroTitle" class="text-5xl md:text-7xl font-extrabold text-secondary-900 leading-tight">
            <span ref="heroTitlePrefix" class="inline-block mr-3">你好，我是</span>
            <span
              ref="heroTitleName"
              class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500"
            >
              Ha HA
            </span>
          </h1>
          <p ref="heroSubtitle" class="text-2xl md:text-4xl text-secondary-600 font-medium">
            前端開發者 / 使用者體驗設計師
          </p>
          <p ref="heroBody" class="text-lg text-secondary-500 max-w-2xl mx-auto leading-relaxed">
            專注於打造兼具美感與實用性的數位產品。擁有超過 5 年的開發經驗，致力於將複雜的邏輯轉化為直覺、優雅的使用者介面。
          </p>
        </div>

        <div ref="heroActions" class="flex flex-wrap gap-4 justify-center">
          <RouterLink
            to="/#portfolio"
            class="btn-primary-lg"
          >
            查看作品
          </RouterLink>
          <RouterLink
            to="/about"
            class="btn-outline-lg"
          >
            關於我
          </RouterLink>
        </div>
        
        <div ref="heroStats" class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 max-w-3xl mx-auto">
          <div v-for="stat in stats" :key="stat.label" class="rounded-2xl border border-secondary-100 bg-white/70 px-6 py-4">
            <div class="text-2xl font-bold text-secondary-900">{{ stat.value }}</div>
            <div class="text-sm text-secondary-500">{{ stat.label }}</div>
          </div>
        </div>
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
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { RouterLink } from 'vue-router'

const glowPrimary = ref<HTMLDivElement | null>(null)
const glowSecondary = ref<HTMLDivElement | null>(null)
const heroKicker = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const heroSubtitle = ref<HTMLElement | null>(null)
const heroBody = ref<HTMLElement | null>(null)
const heroActions = ref<HTMLElement | null>(null)
const heroStats = ref<HTMLElement | null>(null)
const heroTitlePrefix = ref<HTMLElement | null>(null)
const heroTitleName = ref<HTMLElement | null>(null)

let glowTweens: gsap.core.Tween[] = []
let heroTimeline: gsap.core.Timeline | null = null

const randomBetween = (min: number, max: number) => gsap.utils.random(min, max, 1)

const splitCharacters = (element: HTMLElement | null, options?: { gradient?: boolean }) => {
  if (!element) {
    return [] as HTMLElement[]
  }
  const text = element.textContent ?? ''
  if (!text.trim()) {
    return [] as HTMLElement[]
  }
  element.setAttribute('aria-label', text)
  element.textContent = ''
  const chars: HTMLElement[] = []
  for (const char of text) {
    const span = document.createElement('span')
    span.textContent = char
    span.setAttribute('aria-hidden', 'true')
    span.style.display = 'inline-block'
    if (options?.gradient) {
      span.classList.add(
        'text-transparent',
        'bg-clip-text',
        'bg-gradient-to-r',
        'from-primary-600',
        'to-blue-500'
      )
    }
    element.appendChild(span)
    chars.push(span)
  }
  return chars
}

const wander = (target: HTMLElement, options: { x: [number, number]; y: [number, number] }) => {
  const tween = gsap.to(target, {
    duration: randomBetween(4, 7),
    x: randomBetween(options.x[0], options.x[1]),
    y: randomBetween(options.y[0], options.y[1]),
    ease: 'sine.inOut',
    onComplete: () => wander(target, options),
  })
  glowTweens.push(tween)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  if (glowPrimary.value) {
    glowTweens.push(
      gsap.to(glowPrimary.value, {
        duration: 5,
        scale: 1.08,
        opacity: 0.75,
        filter: 'hue-rotate(18deg)',
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    )
    wander(glowPrimary.value, { x: [-40, 40], y: [-30, 30] })
  }

  if (glowSecondary.value) {
    glowTweens.push(
      gsap.to(glowSecondary.value, {
        duration: 6,
        scale: 1.05,
        opacity: 0.6,
        filter: 'hue-rotate(-14deg)',
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.4,
      })
    )
    wander(glowSecondary.value, { x: [-36, 36], y: [-28, 28] })
  }

  const kickerChars = splitCharacters(heroKicker.value)
  const titlePrefixChars = splitCharacters(heroTitlePrefix.value)
  const titleNameChars = splitCharacters(heroTitleName.value, { gradient: true })

  heroTimeline = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.7 } })
  heroTimeline
    .from(kickerChars, { opacity: 0, y: 16, stagger: 0.02 }, 0)
    .from(titlePrefixChars, { opacity: 0, y: 20, stagger: 0.03 }, '-=0.4')
    .from(titleNameChars, { opacity: 0, y: 20, stagger: 0.035 }, '-=0.5')
    .from(heroSubtitle.value, { opacity: 0, y: 18, filter: 'blur(8px)' }, '-=0.3')
    .from(heroBody.value, { opacity: 0, y: 12, filter: 'blur(6px)' }, '-=0.35')
    .from(heroActions.value, { opacity: 0, y: 10 }, '-=0.3')
    .from(heroStats.value, { opacity: 0, y: 10 }, '-=0.25')

  if (heroTitleName.value) {
    glowTweens.push(
      gsap.to(heroTitleName.value, {
        duration: 3.2,
        y: -3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    )
  }
})

onUnmounted(() => {
  glowTweens.forEach((tween) => tween.kill())
  glowTweens = []
  heroTimeline?.kill()
  heroTimeline = null
})

const stats = [
  { label: '專案經驗', value: '40+' },
  { label: '設計經驗', value: '5yrs' },
  { label: '程式經驗', value: '3 yrs' },
]
</script>
