<script setup lang="ts">
import { computed } from 'vue';
import type { ArticleContentSectionData } from '../../../data/articles';
import ProjectGoalsGrid from '../../project/ProjectGoalsGrid.vue';
import ProjectMedia from '../../project/ProjectMedia.vue';
import ResultList from '../../project/ResultList.vue';
import ArticleFeatureCard from './ArticleFeatureCard.vue';

const props = defineProps<ArticleContentSectionData>();

const sectionStyle = computed(() => ({
  '--article-section-gap': props.gap ? `${props.gap}px` : undefined,
}));

</script>

<template>
  <section class="article-content-section" :style="sectionStyle">
    <div class="article-content-section__copy">
      <h2 v-if="title">{{ title }}</h2>
      <p v-for="paragraph in paragraphs" :key="paragraph">
        {{ paragraph }}
      </p>
    </div>

    <div
      v-if="image || video || goals?.length || details?.length || cards?.length || conclusion || externalLink"
      class="article-content-section__body"
    >
      <ProjectMedia
        v-if="image || video"
        :image="image"
        :video="video"
      />

      <ProjectGoalsGrid
        v-if="goals?.length"
        :goals="goals"
        :accent-color="goalsAppearance?.accentColor ?? '#21767d'"
        :accent-gradient="goalsAppearance?.accentGradient"
        :background-color="goalsAppearance?.backgroundColor"
        :background-gradient="goalsAppearance?.backgroundGradient"
        :background-image="goalsAppearance?.backgroundImage"
        :heading-color="goalsAppearance?.headingColor"
        :text-color="goalsAppearance?.textColor"
      />

      <ResultList
        v-if="details?.length"
        :items="details"
        :marker-color="detailMarkerColor ?? '#00d9ff'"
      />

      <div v-if="cards?.length" class="article-content-section__cards">
        <ArticleFeatureCard
          v-for="card in cards"
          :key="card.title"
          v-bind="card"
        />
      </div>

      <div
        v-if="conclusion || externalLink"
        class="article-content-section__footer"
      >
        <p v-if="conclusion" class="article-content-section__conclusion">
          {{ conclusion }}
        </p>

        <p v-if="externalLink" class="article-content-section__external-link">
          <span>{{ externalLink.description }}</span>
          <a
            :href="externalLink.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ externalLink.label ?? externalLink.href }}
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.article-content-section {
  color: #323232;
  display: flex;
  flex-direction: column;
  gap: var(--article-section-gap, 40px);
}

.article-content-section__copy {
  display: flex;
  flex-direction: column;
  gap: var(--content-heading-gap);
}

.article-content-section h2,
.article-content-section p {
  margin: 0;
}

.article-content-section h2 {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
}

.article-content-section p {
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1.6;
}

.article-content-section__body,
.article-content-section__footer {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.article-content-section__external-link span,
.article-content-section__external-link a {
  display: block;
}

.article-content-section__external-link a {
  color: inherit;
  cursor: pointer;
  font-weight: 600;
  overflow-wrap: anywhere;
  text-decoration: none;
}

.article-content-section__external-link a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.article-content-section__cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (max-width: 767px) {
  .article-content-section {
    gap: 32px;
  }

  .article-content-section h2 {
    font-size: 24px;
  }

  .article-content-section p {
    font-size: 16px;
    letter-spacing: 0.8px;
  }

}
</style>
