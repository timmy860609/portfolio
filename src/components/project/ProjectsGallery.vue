<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue';
import ProjectOverviewCard from './ProjectOverviewCard.vue';
import {
  projectCategories as categories,
  projects,
  type ProjectCategory,
} from '../../data/projects';

const activeCategory = ref<ProjectCategory>('全部');
const galleryElement = ref<HTMLElement | null>(null);
const tabsElement = ref<HTMLElement | null>(null);
const tabsAreStuck = ref(false);
const galleryProjects = projects.filter(
  (project) => project.showInGallery !== false,
);

const filteredProjects = computed(() =>
  activeCategory.value === '全部'
    ? galleryProjects
    : galleryProjects.filter(
        (project) =>
          project.category === activeCategory.value ||
          project.additionalCategories?.includes(activeCategory.value as Exclude<ProjectCategory, '全部'>),
      ),
);

const columns = computed(() => [
  filteredProjects.value.filter((_, index) => index % 2 === 0),
  filteredProjects.value.filter((_, index) => index % 2 === 1),
]);

const getHeaderHeight = () => {
  const header = document.querySelector<HTMLElement>('.site-header');

  return Math.ceil(
    header?.getBoundingClientRect().height ??
      (window.matchMedia('(max-width: 760px)').matches ? 109 : 77),
  );
};

const updateStickyState = () => {
  const tabs = tabsElement.value;
  if (!tabs) return;

  const stickyTop = getHeaderHeight();
  tabs.style.setProperty('--projects-tabs-sticky-top', `${stickyTop}px`);

  tabsAreStuck.value =
    window.scrollY > 0 && tabs.getBoundingClientRect().top <= stickyTop + 1;
};

onMounted(() => {
  updateStickyState();
  window.addEventListener('scroll', updateStickyState, { passive: true });
  window.addEventListener('resize', updateStickyState, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateStickyState);
  window.removeEventListener('resize', updateStickyState);
});

const selectCategory = async (category: ProjectCategory) => {
  activeCategory.value = category;
  await nextTick();

  const tabs = tabsElement.value;
  const isMobile = window.matchMedia('(max-width: 760px)').matches;
  const grid = galleryElement.value?.querySelector<HTMLElement>(
    isMobile ? '.projects-gallery__mobile' : '.projects-gallery__grid',
  );

  if (!tabs || !grid) return;

  const headerHeight = getHeaderHeight();
  const gridDocumentTop = window.scrollY + grid.getBoundingClientRect().top;

  window.scrollTo({
    top: gridDocumentTop - headerHeight - tabs.offsetHeight - 24,
    behavior: 'smooth',
  });
};
</script>

<template>
  <section
    ref="galleryElement"
    class="projects-gallery"
    aria-label="精選專案"
  >
    <div
      ref="tabsElement"
      class="projects-gallery__tabs-shell"
      :class="{ 'projects-gallery__tabs-shell--stuck': tabsAreStuck }"
    >
      <div
        class="projects-gallery__tabs"
        role="tablist"
        aria-label="專案分類"
      >
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          role="tab"
          :aria-selected="activeCategory === category"
          :class="{ active: activeCategory === category }"
          @pointerdown.stop
          @click.stop.prevent="selectCategory(category)"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div class="projects-gallery__grid">
      <TransitionGroup
        v-for="(column, columnIndex) in columns"
        :key="columnIndex"
        name="project-filter"
        tag="div"
        class="projects-gallery__column"
        :class="{ 'projects-gallery__column--offset': columnIndex === 1 }"
      >
        <ProjectOverviewCard
          v-for="project in column"
          :key="project.title"
          v-bind="project"
        />
      </TransitionGroup>
    </div>

    <TransitionGroup
      name="project-filter"
      tag="div"
      class="projects-gallery__mobile"
    >
      <ProjectOverviewCard
        v-for="project in filteredProjects"
        :key="project.title"
        v-bind="project"
      />
    </TransitionGroup>
  </section>
</template>

<style scoped>
.projects-gallery {
  background: #f3f3f3;
  padding-bottom: 120px;
}

.projects-gallery__tabs-shell {
  --projects-tabs-sticky-top: 77px;

  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  background: rgb(243 243 243 / 90%);
  position: sticky;
  top: var(--projects-tabs-sticky-top);
  width: 100%;
  z-index: 100;
}

.projects-gallery__tabs {
  display: flex;
  gap: 16px;
  margin-inline: auto;
  max-width: var(--content-width-project);
  overflow-x: auto;
  padding: 24px var(--page-gutter);
  scrollbar-width: none;
  transform: scale(1);
  transform-origin: center;
  transition:
    transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
    padding 360ms cubic-bezier(0.22, 1, 0.36, 1),
    border-radius 360ms ease;
}

.projects-gallery__tabs::-webkit-scrollbar {
  display: none;
}

.projects-gallery__tabs-shell--stuck .projects-gallery__tabs {
  border-radius: 12px;
  padding-block: 8px;
  transform: scale(0.9);
}

.projects-gallery__tabs-shell--stuck .projects-gallery__tabs button {
  padding-block: 6px;
}

.projects-gallery__tabs button {
  background: #dcdcdc;
  border: 0;
  border-radius: 999px;
  color: #595959;
  cursor: pointer;
  flex: 0 0 auto;
  font: inherit;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  padding: 8px 24px;
  position: relative;
  touch-action: manipulation;
  transition:
    background-color 160ms ease,
    color 160ms ease,
    transform 160ms ease;
}

.projects-gallery__tabs button:hover {
  background: #cfcfcf;
  color: #323232;
}

.projects-gallery__tabs button.active {
  background: #323232;
  color: #fff;
}

.projects-gallery__tabs button:focus-visible {
  outline: 3px solid #323232;
  outline-offset: 3px;
}

.projects-gallery__grid {
  display: grid;
  gap: 72px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-inline: auto;
  max-width: var(--content-width-project);
  padding: 0 var(--page-gutter) 60px;
}

.projects-gallery__column {
  display: flex;
  flex-direction: column;
  gap: 80px;
  min-width: 0;
  position: relative;
}

.projects-gallery__column--offset {
  padding-top: 72px;
}

.projects-gallery__mobile {
  display: none;
}

.project-filter-enter-active,
.project-filter-leave-active {
  transition:
    opacity 260ms ease,
    transform 360ms cubic-bezier(0.22, 1, 0.36, 1);
}

.project-filter-enter-from,
.project-filter-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.project-filter-leave-active {
  position: absolute;
}

@media (prefers-reduced-motion: reduce) {
  .projects-gallery__tabs {
    transition: none;
  }
}

@media (max-width: 767px) {
  .projects-gallery {
    padding-bottom: 72px;
  }

  .projects-gallery__tabs-shell {
    --projects-tabs-sticky-top: 109px;

    overflow: hidden;
  }

  .projects-gallery__tabs {
    gap: 8px;
    margin-inline: 0;
    max-width: none;
    padding-inline: 16px;
    scroll-padding-inline: 16px;
  }

  .projects-gallery__tabs button {
    font-size: 16px;
    padding: 8px 18px;
  }

  .projects-gallery__tabs-shell--stuck .projects-gallery__tabs {
    padding-block: 6px;
    transform: none;
  }

  .projects-gallery__tabs-shell--stuck .projects-gallery__tabs button {
    padding-block: 5px;
  }

  .projects-gallery__grid {
    display: none;
  }

  .projects-gallery__mobile {
    display: flex;
    flex-direction: column;
    gap: 56px;
    padding: 0 var(--page-gutter) 60px;
    position: relative;
  }
}
</style>
