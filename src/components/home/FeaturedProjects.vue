<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import { featuredProjects as projects } from '../../data/home';
import AppButton from '../AppButton.vue';
import AppSectionHeading from '../AppSectionHeading.vue';
import CarouselArrow from './CarouselArrow.vue';
import ProjectCard from './ProjectCard.vue';

const activeIndex = ref(0);
const trackIndex = ref(1);
const trackOffset = ref(0);
const dragOffset = ref(0);
const transitionEnabled = ref(true);
const isAnimating = ref(false);
const isDragging = ref(false);
const trackElement = ref<HTMLElement>();
let dragStartX = 0;
let didDrag = false;
const marqueeItems = [
  'UIUXDesign',
  'Vue.js',
  'Git',
  'Figma',
  'AdobeSuite',
  'GraphicDesign',
];
const loopedProjects = computed(() => [
  projects.at(-1)!,
  ...projects,
  ...projects.slice(0, 3),
]);

const updateTrackOffset = () => {
  const targetCard = trackElement.value?.children[trackIndex.value];
  if (targetCard instanceof HTMLElement) {
    trackOffset.value = targetCard.offsetLeft;
  }
};

const slideTo = async (nextTrackIndex: number, nextActiveIndex: number) => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  transitionEnabled.value = true;
  trackIndex.value = nextTrackIndex;
  activeIndex.value = nextActiveIndex;
  await nextTick();
  updateTrackOffset();

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    isAnimating.value = false;
    if (trackIndex.value === 0 || trackIndex.value === projects.length + 1) {
      transitionEnabled.value = false;
      trackIndex.value = trackIndex.value === 0 ? projects.length : 1;
      await nextTick();
      updateTrackOffset();
    }
  }
};

const previous = () => {
  slideTo(
    trackIndex.value - 1,
    (activeIndex.value - 1 + projects.length) % projects.length,
  );
};

const next = () => {
  slideTo(
    trackIndex.value + 1,
    (activeIndex.value + 1) % projects.length,
  );
};

const goTo = (index: number) => {
  if (index === activeIndex.value) return;
  slideTo(index + 1, index);
};

const startDrag = (event: PointerEvent) => {
  didDrag = false;
  if (event.button !== 0 || isAnimating.value) return;
  dragStartX = event.clientX;
  dragOffset.value = 0;
  isDragging.value = true;
  transitionEnabled.value = false;
};

const moveDrag = (event: PointerEvent) => {
  if (!isDragging.value) return;
  dragOffset.value = event.clientX - dragStartX;

  const carousel = event.currentTarget as HTMLElement;
  if (
    Math.abs(dragOffset.value) > 8
    && !carousel.hasPointerCapture(event.pointerId)
  ) {
    carousel.setPointerCapture(event.pointerId);
  }
};

const endDrag = (event: PointerEvent) => {
  if (!isDragging.value) return;
  const carousel = event.currentTarget as HTMLElement;
  if (carousel.hasPointerCapture(event.pointerId)) {
    carousel.releasePointerCapture(event.pointerId);
  }

  const card = trackElement.value?.children[trackIndex.value];
  const threshold = card instanceof HTMLElement
    ? Math.min(card.offsetWidth * 0.2, 80)
    : 48;
  const finalDragOffset = dragOffset.value;
  didDrag = Math.abs(finalDragOffset) > 14;

  isDragging.value = false;
  dragOffset.value = 0;
  transitionEnabled.value = true;

  if (finalDragOffset <= -threshold) {
    next();
  } else if (finalDragOffset >= threshold) {
    previous();
  } else {
    isAnimating.value = Math.abs(finalDragOffset) > 0;
  }
};

const cancelDrag = (event: PointerEvent) => {
  if (!isDragging.value) return;
  const carousel = event.currentTarget as HTMLElement;
  if (carousel.hasPointerCapture(event.pointerId)) {
    carousel.releasePointerCapture(event.pointerId);
  }

  didDrag = false;
  isDragging.value = false;
  dragOffset.value = 0;
  transitionEnabled.value = true;
};

const preventDraggedClick = (event: MouseEvent) => {
  if (!didDrag) return;
  event.preventDefault();
  event.stopPropagation();
  didDrag = false;
};

const finishSlide = async (event: TransitionEvent) => {
  if (
    event.propertyName !== 'transform'
    || event.target !== trackElement.value
  ) return;
  isAnimating.value = false;

  if (trackIndex.value === 0 || trackIndex.value === projects.length + 1) {
    transitionEnabled.value = false;
    trackIndex.value = trackIndex.value === 0 ? projects.length : 1;
    await nextTick();
    updateTrackOffset();
  }
};

const handleResize = () => {
  transitionEnabled.value = false;
  updateTrackOffset();
  window.requestAnimationFrame(() => {
    transitionEnabled.value = true;
  });
};

onMounted(() => {
  updateTrackOffset();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <section class="featured" aria-labelledby="featured-title" data-node-id="4965:32095">
    <div class="featured__inner">
      <header class="featured__header">
        <AppSectionHeading class="featured__heading" title="代表專案" title-id="featured-title" tone="dark">
          <p class="featured__description">
            歡迎深入了解我的設計過程和思考方式
          </p>
        </AppSectionHeading>

        <div class="featured__controls">
          <AppButton
            href="/projects"
            variant="light-outline"
            size="s-wide"
            fit-content
          >
            更多專案
          </AppButton>

          <div class="featured__arrows">
            <CarouselArrow direction="left" @click="previous" />
            <CarouselArrow direction="right" @click="next" />
          </div>
        </div>
      </header>

      <div
        class="featured__carousel"
        :class="{ 'featured__carousel--dragging': isDragging }"
        aria-live="polite"
        @pointerdown="startDrag"
        @pointermove="moveDrag"
        @pointerup="endDrag"
        @pointercancel="cancelDrag"
        @click.capture="preventDraggedClick"
      >
        <div
          ref="trackElement"
          class="featured__carousel-track"
          :class="{ 'featured__carousel-track--animated': transitionEnabled }"
          :style="{ transform: `translate3d(${-trackOffset + dragOffset}px, 0, 0)` }"
          @transitionend="finishSlide"
        >
          <ProjectCard
            v-for="(project, index) in loopedProjects"
            :key="`${project.title}-${index}`"
            v-bind="project"
            :selected="index === trackIndex"
          />
        </div>
      </div>

      <div class="featured__dots" aria-label="輪播頁面">
        <button
          v-for="(_, index) in projects"
          :key="index"
          type="button"
          :class="{ active: index === activeIndex }"
          :aria-label="`前往第 ${index + 1} 組`"
          :aria-current="index === activeIndex ? 'true' : undefined"
          @click="goTo(index)"
        ></button>
      </div>
    </div>

    <div class="featured__marquee" aria-hidden="true">
      <div class="featured__marquee-track">
        <div
          v-for="groupIndex in 4"
          :key="groupIndex"
          class="featured__marquee-group"
        >
          <span v-for="item in marqueeItems" :key="item">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured {
  align-items: center;
  background: #131313;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow: hidden;
  padding-top: 60px;
  position: relative;
  z-index: 2;
}

.featured__inner {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: var(--layout-shell-width);
  padding-inline: var(--layout-gutter);
  position: relative;
  width: 100%;
  z-index: 1;
}

.featured__header {
  align-items: flex-end;
  display: flex;
  gap: 56px;
  justify-content: space-between;
  width: 100%;
}

.featured__heading {
  flex: 1;
}

.featured__description {
  color: #e3e3e3;
  font-size: 18px;
  letter-spacing: 0.9px;
  line-height: 1.5;
  margin: 0;
  text-wrap: pretty;
}

.featured__controls {
  align-items: center;
  display: flex;
  gap: 16px;
}

.featured__arrows {
  display: flex;
  gap: 16px;
}

.featured__carousel {
  cursor: grab;
  overflow: hidden;
  touch-action: pan-y;
  user-select: none;
  width: 100%;
}

.featured__carousel--dragging {
  cursor: grabbing;
}

.featured__carousel-track {
  display: flex;
  gap: 24px;
  width: 100%;
  will-change: transform;
}

.featured__carousel-track--animated {
  transition: transform 620ms cubic-bezier(0.22, 1, 0.36, 1);
}

.featured__dots {
  display: flex;
  gap: 6px;
}

.featured__dots button {
  background: #a6a6a6;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  height: 8px;
  padding: 0;
  transition:
    background-color 160ms ease,
    width 160ms ease;
  width: 8px;
}

.featured__dots button.active {
  background: #00d3f8;
  width: 28px;
}

.featured__marquee {
  border-top: 1px solid #7d7d7d;
  color: #7d7d7d;
  font-family: 'Montserrat', 'Noto Sans TC', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  overflow: hidden;
  padding-block: 20px 24px;
  white-space: nowrap;
  width: 100%;
}

.featured__marquee-track {
  display: flex;
  width: max-content;
  will-change: transform;
}

.featured__marquee-group {
  display: flex;
  flex: 0 0 auto;
}

.featured__marquee-group span {
  flex: 0 0 auto;
  white-space: nowrap;
}

.featured__marquee-group span::after {
  content: ' - ';
  white-space: pre;
}

@media (prefers-reduced-motion: no-preference) {
  .featured__marquee-track {
    animation: marquee 24s linear infinite;
  }
}

@media (prefers-reduced-motion: reduce) {
  .featured__carousel-track--animated {
    transition: none;
  }
}

@keyframes marquee {
  to {
    transform: translateX(-25%);
  }
}

@media (max-width: 1024px) {
  .featured__carousel-track--animated {
    transition-duration: 520ms;
  }
}

@media (max-width: 767px) {
  .featured {
    min-height: 820px;
    padding-top: 48px;
  }

  .featured__carousel {
    margin-inline: calc(50% - 50vw);
    padding: 10px 16px;
    width: 100vw;
  }

  .featured__header {
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;
  }

  .featured__description {
    font-size: 16px;
  }

  .featured__controls {
    align-self: stretch;
    justify-content: space-between;
    width: 100%;
  }

  .featured__marquee {
    font-size: 24px;
  }
}
</style>
