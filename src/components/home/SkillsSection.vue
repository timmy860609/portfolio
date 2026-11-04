<script setup lang="ts">
import { skills } from '../../data/home';
import SkillCard from './SkillCard.vue';
import AppSectionHeading from '../AppSectionHeading.vue';
</script>

<template>
  <section class="skills" aria-labelledby="skills-title" data-node-id="4967:32414">
    <div class="skills__inner">
      <AppSectionHeading class="skills__intro" title="技能與專長" title-id="skills-title">
        <p class="skills__description">
          兼顧用戶體驗與技術實作，使設計落實於產品中
        </p>
      </AppSectionHeading>

      <div class="skills__list">
        <SkillCard
          v-for="skill in skills"
          :key="skill.title"
          v-bind="skill"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  width: 100%;
}

.skills__inner {
  align-items: stretch;
  display: grid;
  gap: 64px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: var(--layout-shell-width);
  padding-block: 60px;
  padding-inline: var(--layout-gutter);
  width: 100%;
}

.skills__intro {
  align-self: start;
  position: sticky;
  top: 120px;
}

.skills__description {
  font-size: var(--content-body-font-size);
  line-height: 1.5;
  margin: 0;
  position: relative;
  z-index: 1;
}

.skills__list {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (max-width: 767px) {
  .skills__inner {
    gap: 48px;
    grid-template-columns: 1fr;
    padding-block: 56px;
  }

  .skills__intro {
    position: relative;
    top: auto;
  }

}
</style>
