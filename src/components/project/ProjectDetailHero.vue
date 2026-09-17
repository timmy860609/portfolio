<script setup lang="ts">
import AppButton from '../AppButton.vue';

withDefaults(
  defineProps<{
    tags: string[];
    title: string;
    year?: string;
    showAction?: boolean;
    actionLabel?: string;
    actionHref?: string;
  }>(),
  {
    year: '2025',
    showAction: false,
    actionLabel: '前往網頁',
    actionHref: '#',
  },
);
</script>

<template>
  <header class="project-detail-hero">
    <div class="project-detail-hero__inner">
      <div class="project-detail-hero__content">
        <h1>{{ title }}</h1>

        <div class="project-detail-hero__meta">
          <div class="project-detail-hero__meta-item">
            <span>專案年份</span>
            <strong>{{ year }}</strong>
          </div>
          <div class="project-detail-hero__meta-item">
            <span>負責項目</span>
            <strong>{{ tags.join('｜') }}</strong>
          </div>
        </div>
      </div>

      <AppButton
        v-if="showAction"
        :href="actionHref"
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        fit-content
        mobile-full
        class="project-detail-hero__action"
      >
        {{ actionLabel }}
      </AppButton>
    </div>
  </header>
</template>

<style scoped>
.project-detail-hero {
  background: #fafafa;
  color: var(--color-text-primary);
  position: relative;
  z-index: 1;
}

.project-detail-hero__inner {
  align-items: flex-end;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  margin-inline: auto;
  padding-block: 32px;
  width: min(
    var(--content-width-project),
    calc(100% - var(--page-gutter) * 2)
  );
}

.project-detail-hero__content {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
}

.project-detail-hero__meta {
  align-items: center;
  display: flex;
  gap: 40px;
}

.project-detail-hero h1 {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.project-detail-hero__meta-item {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

.project-detail-hero__meta-item span {
  color: #525252;
  font-size: 18px;
  letter-spacing: 0.9px;
  line-height: 1.5;
}

.project-detail-hero__meta-item strong {
  color: #323232;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1.5;
}

.project-detail-hero__meta-item:first-child strong {
  font-family: 'Montserrat', 'Noto Sans TC', sans-serif;
}

.project-detail-hero__action {
  flex: 0 0 auto;
  font-weight: 700;
}

@media (max-width: 767px) {
  .project-detail-hero__inner {
    align-items: flex-start;
    flex-direction: column;
    gap: 28px;
    padding-block: 28px;
  }

  .project-detail-hero h1 {
    font-size: 30px;
  }

  .project-detail-hero__meta {
    align-items: flex-start;
    flex-direction: row;
    gap: 16px;
  }

  .project-detail-hero__meta-item span {
    font-size: 16px;
  }

  .project-detail-hero__meta-item strong {
    font-size: 18px;
  }

}
</style>
