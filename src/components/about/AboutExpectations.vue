<script setup lang="ts">
import AppButton from '../AppButton.vue';
import AppSectionHeading from '../AppSectionHeading.vue';
import { aboutExpectations } from '../../data/about';
</script>

<template>
  <section
    class="about-expectations"
    aria-labelledby="about-expectations-title"
    data-node-id="4391:25141"
  >
    <div class="about-expectations__inner">
      <AppSectionHeading
        :title="aboutExpectations.title"
        title-id="about-expectations-title"
        :subtitle="aboutExpectations.subtitle"
      />

      <div class="about-expectations__card">
        <p>{{ aboutExpectations.quote }}</p>
        <strong>{{ aboutExpectations.callout }}</strong>
      </div>

      <div class="about-expectations__actions">
        <AppButton
          :href="aboutExpectations.contactHref"
          variant="outline"
          fit-content
          class="about-expectations__button"
        >
          與我聯繫
        </AppButton>
        <AppButton
          :href="aboutExpectations.resumeHref"
          :download="aboutExpectations.resumeDownload"
          variant="primary"
          fit-content
          class="about-expectations__button"
        >
          下載簡歷
        </AppButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-expectations {
  background: #fff;
  color: #323232;
  padding: 60px var(--layout-gutter) 56px;
  position: relative;
  z-index: 1;
}

.about-expectations__inner {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-inline: auto;
  max-width: 1200px;
  width: 100%;
}

.about-expectations__card {
  background: #f3f3f3;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px 40px;
}

.about-expectations__card p {
  color: #737373;
  font-size: var(--font-size-body-small);
  line-height: 1.6;
  margin: 0;
}

.about-expectations__card strong {
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  line-height: 1.5;
}

.about-expectations__actions {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.about-expectations__button {
  padding: 11px 23px;
}

@media (max-width: 767px) {
  .about-expectations {
    padding: 48px var(--layout-gutter);
  }

  .about-expectations__inner {
    gap: 24px;
  }

  .about-expectations__card {
    border-radius: 24px;
    gap: 16px;
    padding: 28px 24px;
  }

  .about-expectations__actions {
    gap: 8px;
    margin-top: 16px;
    width: 100%;
  }

  .about-expectations__button {
    flex: 1 1 0;
    min-width: 0;
    width: auto;
  }
}
</style>
