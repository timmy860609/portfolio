<template>
  <section class="py-24 px-6 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="card-gradient p-10 text-center">
        <p class="text-xs font-bold uppercase tracking-[0.3em] text-primary-500">Contact</p>
        <h3 class="mt-3 text-3xl md:text-4xl font-bold text-secondary-900">與我聯繫</h3>
        <p class="mt-4 text-secondary-600 text-lg">
          想更了解我的背景與作品，歡迎查看 104 或直接下載簡歷。
        </p>
        <div class="mt-6 flex flex-wrap justify-center gap-3">
          <a
            :href="profile104Link"
            target="_blank"
            rel="noopener noreferrer"
             class="btn-primary"
          >
            我的104
          </a>
          <a
            :href="resumeLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-6 py-3 text-sm font-semibold text-primary-700 shadow-sm transition hover:border-primary-300 hover:bg-primary-50"
          >
            下載簡歷
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const profile104Link = 'https://www.104.com.tw'
const resumeLink = '/resume.pdf'
</script>
