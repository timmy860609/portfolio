<template>
  <section
    id="home"
    ref="heroSection"
    class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary-50"
  >
    <!-- Background Decor -->
    <div
      ref="glowPrimary"
      class="pointer-events-none absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[640px] h-[640px] blur-3xl opacity-80 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_70%)]"
    ></div>
    <div
      ref="glowSecondary"
      class="pointer-events-none absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[560px] h-[560px] blur-3xl opacity-70 bg-[radial-gradient(circle_at_center,rgba(147,197,253,0.35),transparent_70%)]"
    ></div>
    <div
      ref="glowSplitLeft"
      class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] blur-3xl opacity-0 mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.45),transparent_70%)]"
    ></div>
    <div
      ref="glowSplitRight"
      class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] blur-3xl opacity-0 mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(147,197,253,0.42),transparent_70%)]"
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

const heroSection = ref<HTMLElement | null>(null)
const glowPrimary = ref<HTMLDivElement | null>(null)
const glowSecondary = ref<HTMLDivElement | null>(null)
const glowSplitLeft = ref<HTMLDivElement | null>(null)
const glowSplitRight = ref<HTMLDivElement | null>(null)
const heroKicker = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const heroSubtitle = ref<HTMLElement | null>(null)
const heroBody = ref<HTMLElement | null>(null)
const heroActions = ref<HTMLElement | null>(null)
const heroTitlePrefix = ref<HTMLElement | null>(null)
const heroTitleName = ref<HTMLElement | null>(null)

let glowTweens: gsap.core.Tween[] = []
let heroTimeline: gsap.core.Timeline | null = null
let removeHeroPointerListeners: (() => void) | null = null

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

  const heroEl = heroSection.value
  if (heroEl) {
    const quickPrimaryX = glowPrimary.value ? gsap.quickTo(glowPrimary.value, 'x', { duration: 0.6, ease: 'sine.out' }) : null
    const quickPrimaryY = glowPrimary.value ? gsap.quickTo(glowPrimary.value, 'y', { duration: 0.6, ease: 'sine.out' }) : null
    const quickSecondaryX = glowSecondary.value
      ? gsap.quickTo(glowSecondary.value, 'x', { duration: 0.7, ease: 'sine.out' })
      : null
    const quickSecondaryY = glowSecondary.value
      ? gsap.quickTo(glowSecondary.value, 'y', { duration: 0.7, ease: 'sine.out' })
      : null
    const quickSplitLeftX = glowSplitLeft.value
      ? gsap.quickTo(glowSplitLeft.value, 'x', { duration: 0.5, ease: 'sine.out' })
      : null
    const quickSplitLeftY = glowSplitLeft.value
      ? gsap.quickTo(glowSplitLeft.value, 'y', { duration: 0.5, ease: 'sine.out' })
      : null
    const quickSplitRightX = glowSplitRight.value
      ? gsap.quickTo(glowSplitRight.value, 'x', { duration: 0.5, ease: 'sine.out' })
      : null
    const quickSplitRightY = glowSplitRight.value
      ? gsap.quickTo(glowSplitRight.value, 'y', { duration: 0.5, ease: 'sine.out' })
      : null

    const handleMove = (event: MouseEvent) => {
      const rect = heroEl.getBoundingClientRect()
      const relativeX = (event.clientX - rect.left) / rect.width - 0.5
      const relativeY = (event.clientY - rect.top) / rect.height - 0.5

      quickPrimaryX?.(relativeX * 80)
      quickPrimaryY?.(relativeY * 60)
      quickSecondaryX?.(relativeX * -60)
      quickSecondaryY?.(relativeY * -50)

      quickSplitLeftX?.(relativeX * 70 - 90)
      quickSplitLeftY?.(relativeY * 45 + 30)
      quickSplitRightX?.(relativeX * 70 + 90)
      quickSplitRightY?.(relativeY * 45 - 30)
    }

    const handleEnter = () => {
      if (glowSplitLeft.value) {
        gsap.to(glowSplitLeft.value, { opacity: 0.85, scale: 1.05, duration: 0.5, ease: 'sine.out' })
      }
      if (glowSplitRight.value) {
        gsap.to(glowSplitRight.value, { opacity: 0.85, scale: 1.05, duration: 0.5, ease: 'sine.out' })
      }
    }

    const handleLeave = () => {
      quickPrimaryX?.(0)
      quickPrimaryY?.(0)
      quickSecondaryX?.(0)
      quickSecondaryY?.(0)
      quickSplitLeftX?.(0)
      quickSplitLeftY?.(0)
      quickSplitRightX?.(0)
      quickSplitRightY?.(0)

      if (glowSplitLeft.value) {
        gsap.to(glowSplitLeft.value, { opacity: 0, scale: 0.9, duration: 0.5, ease: 'sine.out' })
      }
      if (glowSplitRight.value) {
        gsap.to(glowSplitRight.value, { opacity: 0, scale: 0.9, duration: 0.5, ease: 'sine.out' })
      }
    }

    heroEl.addEventListener('mousemove', handleMove)
    heroEl.addEventListener('mouseenter', handleEnter)
    heroEl.addEventListener('mouseleave', handleLeave)
    removeHeroPointerListeners = () => {
      heroEl.removeEventListener('mousemove', handleMove)
      heroEl.removeEventListener('mouseenter', handleEnter)
      heroEl.removeEventListener('mouseleave', handleLeave)
    }
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
    wander(glowPrimary.value, { x: [-70, 70], y: [-55, 55] })
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
    wander(glowSecondary.value, { x: [-62, 62], y: [-50, 50] })
  }

  if (glowSplitLeft.value) {
    glowTweens.push(
      gsap.to(glowSplitLeft.value, {
        duration: 4.8,
        scale: 1.04,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    )
    wander(glowSplitLeft.value, { x: [-52, 52], y: [-40, 40] })
  }

  if (glowSplitRight.value) {
    glowTweens.push(
      gsap.to(glowSplitRight.value, {
        duration: 5.4,
        scale: 1.03,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.2,
      })
    )
    wander(glowSplitRight.value, { x: [-48, 48], y: [-38, 38] })
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
  removeHeroPointerListeners?.()
  removeHeroPointerListeners = null
})

</script>
