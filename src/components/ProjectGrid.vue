<script setup lang="ts">
import { computed, ref } from 'vue';

type Project = {
  title: string;
  category: string;
  year: string;
  summary: string;
  color: string;
};

const projects: Project[] = [
  {
    title: '品牌識別系統',
    category: 'Branding',
    year: '2026',
    summary: '從品牌策略到視覺語言，建立一致且可延展的識別系統。',
    color: '#ff6b4a',
  },
  {
    title: '數位產品體驗',
    category: 'Product',
    year: '2025',
    summary: '重新梳理關鍵流程，讓複雜的服務變得直覺而有溫度。',
    color: '#9d8cff',
  },
  {
    title: '文化策展網站',
    category: 'Web',
    year: '2025',
    summary: '以編輯設計的節奏，打造兼顧內容與探索感的線上展覽。',
    color: '#38b99a',
  },
];

const categories = ['All', ...new Set(projects.map((project) => project.category))];
const activeCategory = ref('All');
const visibleProjects = computed(() =>
  activeCategory.value === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory.value),
);
</script>

<template>
  <div class="projects">
    <div class="filters" aria-label="作品分類">
      <button
        v-for="category in categories"
        :key="category"
        type="button"
        :class="{ active: activeCategory === category }"
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <div class="grid">
      <article v-for="(project, index) in visibleProjects" :key="project.title" class="card">
        <div class="visual" :style="{ '--accent': project.color }">
          <span>0{{ index + 1 }}</span>
        </div>
        <div class="meta">
          <div>
            <p>{{ project.category }} · {{ project.year }}</p>
            <h3>{{ project.title }}</h3>
          </div>
          <span aria-hidden="true">↗</span>
        </div>
        <p class="summary">{{ project.summary }}</p>
      </article>
    </div>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

button {
  border: 1px solid var(--line);
  border-radius: 999px;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font: inherit;
  padding: 0.55rem 1rem;
  transition: 160ms ease;
}

button:hover,
button.active {
  border-color: var(--ink);
  background: var(--ink);
  color: var(--paper);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem 1.25rem;
}

.visual {
  aspect-ratio: 4 / 3;
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 65% 38%, var(--paper) 0 12%, transparent 12.5%),
    linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent), #111 28%));
}

.visual span {
  color: color-mix(in srgb, var(--paper), transparent 15%);
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 700;
  letter-spacing: -0.08em;
}

.meta {
  align-items: start;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
}

.meta p,
.summary {
  color: var(--muted);
  font-size: 0.82rem;
  margin: 0;
}

h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.25rem 0 0;
}

.summary {
  line-height: 1.65;
  margin-top: 0.75rem;
}

@media (max-width: 760px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
