<script setup lang="ts">
import type { AboutExperienceProject } from '../../data/about';
import { withBase } from '../../utils/basePath';

defineProps<AboutExperienceProject>();
</script>

<template>
  <article class="experience-card">
    <div
      class="experience-card__media"
      :class="`experience-card__media--${imageType ?? 'phone'}`"
    >
      <img
        v-if="backgroundImage"
        class="experience-card__background"
        :src="withBase(backgroundImage)"
        alt=""
        aria-hidden="true"
      />
      <img class="experience-card__image" :src="withBase(image)" :alt="imageAlt" />
    </div>

    <div class="experience-card__content">
      <h3>{{ title }}</h3>
      <div class="experience-card__meta">
        <span>{{ year }}</span>
        <span class="experience-card__divider" aria-hidden="true"></span>
        <ul aria-label="專案類型">
          <li v-for="tag in tags" :key="tag">{{ tag }}</li>
        </ul>
      </div>
    </div>
  </article>
</template>

<style scoped>
.experience-card {
  align-items: center;
  background: #fff;
  border-radius: 16px;
  display: flex;
  gap: 32px;
  min-height: 184px;
  overflow: hidden;
  padding: 24px 24px 0;
}

.experience-card__media {
  align-self: flex-end;
  flex: 0 0 120px;
  height: 160px;
  overflow: hidden;
  position: relative;
}

.experience-card__image {
  display: block;
  height: auto;
  width: 100%;
}

.experience-card__media--brand {
  align-self: flex-end;
  background: linear-gradient(139deg, #d4187c 8%, #522bff 100%);
  border-radius: 16px 16px 0 0;
}

.experience-card__media--brand .experience-card__background {
  height: 211px;
  left: 50%;
  mix-blend-mode: soft-light;
  object-fit: cover;
  opacity: 0.15;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 216px;
}

.experience-card__media--brand .experience-card__image {
  height: 109px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 111px;
}

.experience-card__media--office {
  background: #a66565;
  border-radius: 16px 16px 0 0;
}

.experience-card__media--office .experience-card__image {
  height: 201px;
  left: -98px;
  max-width: none;
  object-fit: cover;
  position: absolute;
  top: -41px;
  width: 365px;
}

.experience-card__content {
  min-width: 0;
}

.experience-card h3 {
  color: #323232;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.35;
  margin: 0;
}

.experience-card__meta {
  align-items: center;
  color: #323232;
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  gap: 14px;
  line-height: 1.5;
}

.experience-card__divider {
  background: #737373;
  height: 16px;
  width: 1px;
}

.experience-card ul {
  display: flex;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.experience-card li::before {
  color: #00d9ff;
  content: '#';
  font-weight: 600;
}

@media (max-width: 620px) {
  .experience-card {
    align-items: stretch;
    gap: 16px;
    min-height: 152px;
    padding: 16px 16px 0;
  }

  .experience-card__media {
    flex-basis: 96px;
    height: 136px;
  }

  .experience-card__content {
    align-self: center;
    padding-bottom: 16px;
  }

  .experience-card h3 {
    font-size: 18px;
  }

  .experience-card__meta {
    font-size: 14px;
    gap: 8px;
  }
}
</style>
