<script setup lang="ts">
import AppButton from '../AppButton.vue';
import { aboutExpectations } from '../../data/about';
import AppSectionHeading from '../AppSectionHeading.vue';
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
      >
        <div class="about-expectations__copy">
          <div class="about-expectations__paragraphs">
            <p v-for="paragraph in aboutExpectations.paragraphs" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
          <strong>{{ aboutExpectations.callout }}</strong>
        </div>
      </AppSectionHeading>

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
  padding: 60px var(--layout-gutter) 0;
  position: relative;
  z-index: 1;
}

.about-expectations__inner {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-inline: auto;
  max-width: 1220px;
  width: 100%;
}

.about-expectations :deep(.app-section-heading h2) {
  line-height: 1.2;
}

.about-expectations__copy {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 20px;
  line-height: 1.5;
  width: 100%;
}

.about-expectations__paragraphs p {
  margin: 0;
}

@media (max-width: 1024px) {
  .about-expectations__paragraphs p {
    display: inline;
  }

  .about-expectations__paragraphs p + p::before {
    content: ' ';
  }
}

.about-expectations__copy strong {
  font-weight: 700;
}

.about-expectations__actions {
  align-items: flex-start;
  display: flex;
  gap: 16px;
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

  .about-expectations__copy {
    font-size: 17px;
  }

  .about-expectations__actions {
    width: 100%;
  }

  .about-expectations__button {
    flex: 1 1 0;
    min-width: 0;
    width: auto;
  }
}
</style>
