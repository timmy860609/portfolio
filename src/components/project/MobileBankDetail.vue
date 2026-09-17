<script setup lang="ts">
import {
  mobileBankBackground,
  mobileBankCarbonTracking,
  mobileBankCover,
  mobileBankDesignGoals,
  mobileBankDesignSystem,
  mobileBankGroupAssets,
  mobileBankHero,
  mobileBankInvestmentServices,
  mobileBankLoggedOutExperience,
  mobileBankMembershipBenefits,
  mobileBankPersonalizedHome,
  mobileBankResults,
  mobileBankTransferFlow,
} from '../../data/project/mobileBankProject';
import { getProjectPagination } from '../../data/project/projectPagination';
import ProjectContentSection from './ProjectContentSection.vue';
import ProjectCover from './ProjectCover.vue';
import ProjectDetailHero from './ProjectDetailHero.vue';
import ProjectGoalsSection from './ProjectGoalsSection.vue';
import ProjectMediaSequence from './ProjectMediaSequence.vue';
import ProjectPagination from './ProjectPagination.vue';

const pagination = getProjectPagination('mobile-bank-2');
</script>

<template>
  <article class="mobile-bank-detail">
    <ProjectCover v-bind="mobileBankCover" />
    <ProjectDetailHero v-bind="mobileBankHero" />
    <div class="mobile-bank-detail__content">
      <ProjectContentSection v-bind="mobileBankBackground" />
      <ProjectGoalsSection v-bind="mobileBankDesignGoals" />
      <ProjectContentSection v-bind="mobileBankDesignSystem" />
      <ProjectContentSection v-bind="mobileBankLoggedOutExperience" />
      <ProjectContentSection v-bind="mobileBankPersonalizedHome" />
      <ProjectContentSection v-bind="mobileBankInvestmentServices" />
      <ProjectContentSection v-bind="mobileBankGroupAssets" />
      <ProjectMediaSequence v-bind="mobileBankMembershipBenefits" />
      <ProjectContentSection v-bind="mobileBankTransferFlow" />
      <ProjectContentSection v-bind="mobileBankCarbonTracking" />
      <ProjectContentSection v-bind="mobileBankResults" />
    </div>
    <ProjectPagination v-bind="pagination" />
  </article>
</template>

<style scoped>
.mobile-bank-detail {
  background: #eee;
}

.mobile-bank-detail__content {
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding: 60px var(--page-gutter) 120px;
}

@media (max-width: 767px) {
  .mobile-bank-detail__content {
    gap: 64px;
    padding-block: 48px 80px;
  }
}
</style>
