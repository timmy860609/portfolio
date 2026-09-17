<script setup lang="ts">
import type { AboutExperience } from '../../data/about';
import { withBase } from '../../utils/basePath';

defineProps<{
  experience: AboutExperience;
}>();
</script>

<template>
  <div class="experience-summary">
    <div class="experience-summary__company">
      <img :src="withBase(experience.companyLogo)" alt="" aria-hidden="true" />
      <h3 v-if="experience.company === '方閣設計'">{{ experience.company }}</h3>
    </div>
    <img
      v-if="experience.roleImage"
      class="experience-summary__role-image"
      :src="withBase(experience.roleImage)"
      alt="任職公司與期間"
    />
    <p v-else class="experience-summary__role">
      <strong>{{ experience.role }}</strong>
      <span aria-hidden="true">｜</span>
      <b>{{ experience.period }}</b>
    </p>
    <p class="experience-summary__description">{{ experience.description }}</p>
  </div>
</template>

<style scoped>
.experience-summary {
  color: #323232;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.experience-summary__company {
  align-items: center;
  display: flex;
  gap: 10px;
  height: 40px;
}

.experience-summary__company img {
  display: block;
  height: 40px;
  max-width: 220px;
  width: auto;
}

.experience-summary__company h3 {
  font-size: 26px;
  font-weight: 500;
  letter-spacing: 0.06em;
  line-height: 1.5;
  margin: 0;
}

.experience-summary__role {
  font-size: 20px;
  letter-spacing: 0.06em;
  line-height: 1.5;
  margin: 0;
}

.experience-summary__role strong,
.experience-summary__role b {
  font-weight: 700;
}

.experience-summary__role-image {
  display: block;
  height: 20px;
  max-width: 100%;
  object-fit: contain;
  object-position: left center;
  width: auto;
}

.experience-summary__description {
  font-size: 18px;
  letter-spacing: 0.06em;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 767px) {
  .experience-summary__role-image {
    height: 17px;
  }
}

@media (max-width: 620px) {
  .experience-summary__description {
    font-size: 16px;
    letter-spacing: 0.03em;
  }

  .experience-summary__role {
    font-size: 17px;
  }
}
</style>
