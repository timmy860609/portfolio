<script setup lang="ts">
import type { ArticleDetailContentData } from '../../../data/articles';
import ProjectContentSection from '../../project/ProjectContentSection.vue';
import ProjectGoalsGrid from '../../project/ProjectGoalsGrid.vue';
import ArticleFeatureCard from './ArticleFeatureCard.vue';

defineProps<ArticleDetailContentData>();
</script>

<template>
  <div class="article-detail-content" data-node-id="4395:44506">
    <div class="article-detail-content__inner detail-content-layout">
      <ProjectContentSection
        v-for="(section, index) in sections"
        :key="section.title ?? section.image?.src ?? index"
        :title="section.title"
        :introduction="section.paragraphs"
        :image="section.image"
        :video="section.video"
        :details="section.details"
        :detail-marker-color="section.detailMarkerColor ?? '#00d9ff'"
        :gap="section.gap"
      >
        <template v-if="section.goals?.length" #after-media>
          <ProjectGoalsGrid
            :goals="section.goals"
            :accent-color="section.goalsAppearance?.accentColor ?? '#21767d'"
            :accent-gradient="section.goalsAppearance?.accentGradient"
            :background-color="section.goalsAppearance?.backgroundColor"
            :background-gradient="section.goalsAppearance?.backgroundGradient"
            :background-image="section.goalsAppearance?.backgroundImage"
            :heading-color="section.goalsAppearance?.headingColor"
            :text-color="section.goalsAppearance?.textColor"
          />
        </template>

        <template v-if="section.cards?.length" #after-details>
          <div class="article-detail-content__cards">
            <ArticleFeatureCard
              v-for="card in section.cards"
              :key="card.title"
              v-bind="card"
            />
          </div>
        </template>

        <template v-if="section.conclusion || section.externalLink" #footer>
          <div class="article-detail-content__footer">
            <p v-if="section.conclusion">{{ section.conclusion }}</p>

            <p
              v-if="section.externalLink"
              class="article-detail-content__external-link"
            >
              <span>{{ section.externalLink.description }}</span>
              <a
                :href="section.externalLink.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ section.externalLink.label ?? section.externalLink.href }}
              </a>
            </p>
          </div>
        </template>
      </ProjectContentSection>
    </div>
  </div>
</template>

<style scoped>
.article-detail-content {
  background: #eee;
}

.article-detail-content__inner {
  --detail-content-mobile-gap: 56px;
  --detail-content-mobile-padding: 48px var(--page-gutter);
}

.article-detail-content__cards,
.article-detail-content__footer {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.article-detail-content__footer p {
  font-size: var(--content-body-font-size);
  letter-spacing: 0.9px;
  line-height: 1.6;
  margin: 0;
}

.article-detail-content__external-link span,
.article-detail-content__external-link a {
  display: block;
}

.article-detail-content__external-link a {
  color: inherit;
  cursor: pointer;
  font-weight: var(--font-weight-medium);
  overflow-wrap: anywhere;
  text-decoration: none;
}

@media (hover: hover) and (pointer: fine) {
  .article-detail-content__external-link a:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
}

@media (max-width: 767px) {
  .article-detail-content :deep(.project-media) {
    border-radius: 0;
    margin-inline: calc(0px - var(--page-gutter));
    max-width: none;
    width: calc(100% + var(--page-gutter) + var(--page-gutter));
  }
}
</style>
