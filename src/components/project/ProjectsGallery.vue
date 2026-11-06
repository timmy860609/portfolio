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
const tabsScrollerElement = ref<HTMLElement | null>(null);
const tabsAreStuck = ref(false);
const tabsCanScrollRight = ref(false);
let tabsResizeObserver: ResizeObserver | undefined;
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

const isPriorityProject = (slug: string) =>
  filteredProjects.value.slice(0, 2).some((project) => project.slug === slug);

const getHeaderHeight = () => {
  const header = document.querySelector<HTMLElement>('.site-header');

  return Math.ceil(
    header?.getBoundingClientRect().height ??
      (window.matchMedia('(max-width: 760px)').matches ? 109 : 77),
  );
};

const updateTabsOverflow = () => {
  const tabs = tabsScrollerElement.value;
  if (!tabs) return;

  const buttons = tabs.querySelectorAll<HTMLButtonElement>('button');
  const lastButton = buttons.item(buttons.length - 1);
  if (!lastButton) return;

  const styles = getComputedStyle(tabs);
  const paddingRight = Number.parseFloat(styles.paddingRight) || 0;
  const contentRight = lastButton.offsetLeft + lastButton.offsetWidth;
  const hasOverflow = contentRight + paddingRight > tabs.clientWidth + 1;
  const visibleRight = tabs.scrollLeft + tabs.clientWidth - paddingRight;

  tabsCanScrollRight.value = hasOverflow && contentRight > visibleRight + 1;
};

const alignTabToLeft = (button: HTMLButtonElement) => {
  const tabs = tabsScrollerElement.value;
  if (!tabs) return;

  updateTabsOverflow();
  const buttons = tabs.querySelectorAll<HTMLButtonElement>('button');
  const lastButton = buttons.item(buttons.length - 1);
  const styles = getComputedStyle(tabs);
  const paddingLeft = Number.parseFloat(styles.paddingLeft) || 0;
  const paddingRight = Number.parseFloat(styles.paddingRight) || 0;
  const targetLeft = button === lastButton
    ? button.offsetLeft + button.offsetWidth + paddingRight - tabs.clientWidth
    : button.offsetLeft - paddingLeft;

  tabs.scrollTo({
    left: Math.max(0, targetLeft),
    behavior: 'smooth',
  });
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
  updateTabsOverflow();
  tabsScrollerElement.value?.addEventListener('scroll', updateTabsOverflow, {
    passive: true,
  });
  if ('ResizeObserver' in window && tabsScrollerElement.value) {
    tabsResizeObserver = new ResizeObserver(updateTabsOverflow);
    tabsResizeObserver.observe(tabsScrollerElement.value);
  }
  void document.fonts?.ready.then(updateTabsOverflow);
  window.addEventListener('scroll', updateStickyState, { passive: true });
  window.addEventListener('resize', updateStickyState, { passive: true });
  window.addEventListener('resize', updateTabsOverflow, { passive: true });
});

onBeforeUnmount(() => {
  tabsScrollerElement.value?.removeEventListener('scroll', updateTabsOverflow);
  tabsResizeObserver?.disconnect();
  window.removeEventListener('scroll', updateStickyState);
  window.removeEventListener('resize', updateStickyState);
  window.removeEventListener('resize', updateTabsOverflow);
});

const selectCategory = async (category: ProjectCategory, event: MouseEvent) => {
  const selectedButton = event.currentTarget as HTMLButtonElement;

  galleryElement.value
    ?.querySelectorAll<HTMLElement>(
      '.projects-gallery__column > article, .projects-gallery__mobile > article',
    )
    .forEach((card) => {
      const { width } = card.getBoundingClientRect();

      card.style.setProperty('--project-leave-left', `${card.offsetLeft}px`);
      card.style.setProperty('--project-leave-top', `${card.offsetTop}px`);
      card.style.setProperty('--project-leave-width', `${width}px`);
    });

  activeCategory.value = category;
  await nextTick();
  alignTabToLeft(selectedButton);

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
      :class="{
        'projects-gallery__tabs-shell--stuck': tabsAreStuck,
        'projects-gallery__tabs-shell--can-scroll-right': tabsCanScrollRight,
      }"
    >
      <div
        ref="tabsScrollerElement"
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
          @click.stop.prevent="selectCategory(category, $event)"
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
          v-for="(project, projectIndex) in column"
          :key="project.slug"
          v-bind="project"
          :priority="isPriorityProject(project.slug)"
          :style="{
            '--project-filter-delay': `${Math.min(projectIndex, 5) * 45}ms`,
          }"
        />
      </TransitionGroup>
    </div>

    <TransitionGroup
      name="project-filter"
      tag="div"
      class="projects-gallery__mobile"
    >
      <ProjectOverviewCard
        v-for="(project, projectIndex) in filteredProjects"
        :key="project.slug"
        v-bind="project"
        :priority="isPriorityProject(project.slug)"
        :style="{
          '--project-filter-delay': `${Math.min(projectIndex, 6) * 40}ms`,
        }"
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

.projects-gallery__tabs-shell--can-scroll-right .projects-gallery__tabs {
  --projects-tabs-mask-width: 95px;

  -webkit-mask-image: linear-gradient(
    to right,
    #000 0,
    #000 calc(100% - var(--projects-tabs-mask-width)),
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    #000 0,
    #000 calc(100% - var(--projects-tabs-mask-width)),
    transparent 100%
  );
}

.projects-gallery__tabs-shell--stuck .projects-gallery__tabs {
  border-radius: 12px;
  padding-block: 16px;
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
  font-weight: var(--font-weight-medium);
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

.project-filter-enter-active {
  transition:
    opacity 560ms ease-out calc(120ms + var(--project-filter-delay, 0ms)),
    transform 680ms cubic-bezier(0.22, 1, 0.36, 1) calc(120ms + var(--project-filter-delay, 0ms));
  will-change: opacity, transform;
}

.project-filter-enter-from {
  opacity: 0;
  transform: translate3d(0, 28px, 0);
}

.project-filter-leave-active {
  left: var(--project-leave-left, 0);
  pointer-events: none;
  position: absolute;
  top: var(--project-leave-top, 0);
  transition: opacity 180ms ease-in;
  width: var(--project-leave-width, 100%);
  will-change: opacity;
  z-index: 0;
}

.project-filter-leave-to {
  opacity: 0;
}

.project-filter-move {
  transition: transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
}

@media (prefers-reduced-motion: reduce) {
  .projects-gallery__tabs {
    transition: none;
  }

  .project-filter-enter-active,
  .project-filter-leave-active,
  .project-filter-move {
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
    padding-block: 12px;
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
    gap: 64px;
    padding: 0 var(--page-gutter) 60px;
    position: relative;
  }
}
</style>
