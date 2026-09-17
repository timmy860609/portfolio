<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { aboutExperienceSection } from '../../data/about';
import AboutExperienceCard from './AboutExperienceCard.vue';
import AboutExperienceSummary from './AboutExperienceSummary.vue';
import AppSectionHeading from '../AppSectionHeading.vue';

const activeExperienceIndex = ref(0);
const projectGroups = ref<HTMLElement[]>([]);
const activeExperience = computed(
  () => aboutExperienceSection.experiences[activeExperienceIndex.value],
);
let animationFrame = 0;

const updateActiveExperience = () => {
  animationFrame = 0;
  let nextIndex = 0;

  projectGroups.value.forEach((group, index) => {
    if (index === 0) return;

    const previousGroup = projectGroups.value[index - 1];
    const previousRect = previousGroup?.getBoundingClientRect();

    if (previousRect && previousRect.top + previousRect.height / 2 <= 0) {
      nextIndex = index;
    }
  });

  activeExperienceIndex.value = nextIndex;
};

const requestActiveExperienceUpdate = () => {
  if (animationFrame) return;
  animationFrame = window.requestAnimationFrame(updateActiveExperience);
};

onMounted(() => {
  updateActiveExperience();
  window.addEventListener('scroll', requestActiveExperienceUpdate, { passive: true });
  window.addEventListener('resize', requestActiveExperienceUpdate);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', requestActiveExperienceUpdate);
  window.removeEventListener('resize', requestActiveExperienceUpdate);
  if (animationFrame) window.cancelAnimationFrame(animationFrame);
});
</script>

<template>
  <section class="about-experience" aria-labelledby="about-experience-title" data-node-id="5131:36409">
    <div class="about-experience__inner">
      <AppSectionHeading
        :title="aboutExperienceSection.title"
        title-id="about-experience-title"
      >
        <p class="about-experience__description">
          {{ aboutExperienceSection.description }}
        </p>
      </AppSectionHeading>

      <div class="about-experience__desktop">
        <div class="about-experience__summary">
          <Transition name="experience-summary" mode="out-in">
            <AboutExperienceSummary
              :key="activeExperience.company"
              :experience="activeExperience"
            />
          </Transition>
        </div>

        <div class="about-experience__project-groups">
          <div
            v-for="experience in aboutExperienceSection.experiences"
            :key="experience.company"
            ref="projectGroups"
            class="about-experience__projects"
          >
            <AboutExperienceCard
              v-for="project in experience.projects"
              :key="project.title"
              v-bind="project"
            />
          </div>
        </div>
      </div>

      <div class="about-experience__mobile">
        <article
          v-for="experience in aboutExperienceSection.experiences"
          :key="experience.company"
          class="about-experience__row"
        >
          <AboutExperienceSummary :experience="experience" />

          <div class="about-experience__projects">
            <AboutExperienceCard
              v-for="project in experience.projects"
              :key="project.title"
              v-bind="project"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-experience {
  background: #F4F4F4;
  padding: 60px var(--layout-gutter);
  position: relative;
  z-index: 1;
}

.about-experience__inner {
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-inline: auto;
  max-width: 1200px;
}

.about-experience__description {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  max-width: 568px;
}

.about-experience__desktop {
  display: grid;
  gap: 64px;
  grid-template-columns: minmax(0, 1fr) 560px;
}

.about-experience__summary {
  align-self: start;
  position: sticky;
  top: 160px;
}

.about-experience__project-groups,
.about-experience__mobile {
  display: flex;
  flex-direction: column;
}

.about-experience__project-groups {
  gap: 200px;
}

.about-experience__mobile {
  display: none;
  gap: 80px;
}

.about-experience__row {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.about-experience__projects {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.experience-summary-enter-active,
.experience-summary-leave-active {
  transition:
    opacity 220ms ease,
    transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
}

.experience-summary-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.experience-summary-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

@media (max-width: 1024px) {
  :deep(#about-experience-title) {
    font-size: 24px;
  }

  .about-experience__description {
    font-size: 18px;
  }

  .about-experience__desktop {
    gap: 40px;
    grid-template-columns: minmax(0, 1fr) minmax(440px, 1fr);
  }
}

@media (max-width: 900px) {
  .about-experience__desktop {
    display: none;
  }

  .about-experience__mobile {
    display: flex;
  }
}

@media (max-width: 620px) {
  .about-experience {
    padding: 48px var(--layout-gutter);
  }

  .about-experience__list {
    gap: 64px;
  }

}
</style>
