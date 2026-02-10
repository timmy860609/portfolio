<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
      isMobileMenuOpen
        ? 'bg-white shadow-sm'
        : isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center relative z-50">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          L
        </div>
        <span class="font-bold text-xl tracking-tight text-secondary-900">lie Porfolio</span>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.to"
          class="text-link-nav"
        >
          {{ item.name }}
        </RouterLink>
        <RouterLink
          to="/about#contact"
          class="btn-primary"
        >
          與我聯繫
        </RouterLink>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden p-2 text-secondary-600">
        <Transition
          mode="out-in"
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 rotate-90 scale-75"
          enter-to-class="opacity-100 rotate-0 scale-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 rotate-0 scale-100"
          leave-to-class="opacity-0 -rotate-90 scale-75"
        >
          <Menu v-if="!isMobileMenuOpen" :size="24" />
          <X v-else :size="24" />
        </Transition>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 z-40 h-[100vh] bg-secondary-900/40 backdrop-blur-sm"
        @click="isMobileMenuOpen = false"
      ></div>
    </Transition>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 right-0 z-50 bg-white shadow-xl border-t border-secondary-100 py-6 px-6 flex flex-col gap-4">
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.to"
          @click="isMobileMenuOpen = false"
          class="text-link-nav py-2 border-b border-secondary-50"
        >
          {{ item.name }}
        </RouterLink>
        <RouterLink
          to="/about#contact"
          @click="isMobileMenuOpen = false"
          class="btn-primary w-full justify-center rounded-xl px-5 py-3 text-center mt-2"
        >
          與我聯繫
        </RouterLink>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const route = useRoute()

const navItems = [
  { name: '首頁', to: '/#home' },
  { name: '專案總覽', to: '/projects' },
  { name: '關於我', to: '/about' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})

watch(isMobileMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

watch(
  () => route.fullPath,
  () => {
    isMobileMenuOpen.value = false
    document.body.style.overflow = ''
  }
)
</script>
