<script setup lang="ts">
import { homeArticles } from '../../data/articles';
import AppButton from '../AppButton.vue';
import AppSectionHeading from '../AppSectionHeading.vue';
</script>

<template>
  <section
    class="home-articles"
    aria-labelledby="home-articles-title"
  >
    <div class="home-articles__inner">
      <header class="home-articles__header">
        <AppSectionHeading
          class="home-articles__heading"
          title="專欄分享"
          title-id="home-articles-title"
          tone="dark"
        >
          <p class="home-articles__description">
            這裡紀錄了我過去在設計路途中與到的趣事
          </p>
        </AppSectionHeading>

        <div class="home-articles__controls">
          <AppButton
            href="/articles"
            variant="light-outline"
            size="s-wide"
            fit-content
          >
            更多文章
          </AppButton>
        </div>
      </header>

      <div class="home-articles__content">
        <figure class="home-articles__visual">
          <img
            src="/Image/Home/creative-journal/creative-cover.webp"
            alt="響應式網頁與視覺設計工具插畫"
            width="1704"
            height="984"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <nav class="home-articles__list" aria-label="精選專欄文章">
          <a
            v-for="article in homeArticles"
            :key="article.slug"
            :href="`/articles/${article.slug}`"
          >
            {{ article.title }}
          </a>
        </nav>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-articles {
  background: #131313;
  color: #fff;
  display: flex;
  justify-content: center;
  width: 100%;
}

.home-articles__inner {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: var(--layout-shell-width);
  padding: 60px var(--layout-gutter);
  width: 100%;
}

.home-articles__header {
  align-items: flex-end;
  display: flex;
  gap: 56px;
  justify-content: space-between;
}

.home-articles__heading {
  flex: 1 0 0;
  min-width: 0;
}

.home-articles__controls {
  align-items: center;
  display: flex;
  flex: 1 0 0;
  justify-content: flex-end;
  min-width: 0;
}

.home-articles__description {
  color: #e3e3e3;
  font-size: 18px;
  letter-spacing: 0.9px;
  line-height: 1.5;
  margin: 0;
  text-wrap: pretty;
}

.home-articles__content {
  align-items: start;
  display: grid;
  gap: 64px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.home-articles__visual {
  aspect-ratio: 71 / 41;
  border-radius: var(--radius-card);
  margin: 0;
  overflow: hidden;
}

.home-articles__visual img {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.home-articles__list {
  display: flex;
  flex-direction: column;
}

.home-articles__list a {
  color: #bcbcbc;
  display: block;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  padding-block: 24px;
  text-decoration: none;
  transition: color 180ms ease;
}

.home-articles__list a:first-child {
  padding-top: 0;
}

.home-articles__list a:last-child {
  padding-bottom: 0;
}

.home-articles__list a:not(:last-child) {
  border-bottom: 1px solid #737373;
}

.home-articles__list a:hover {
  color: #fff;
}

.home-articles__list a:focus-visible {
  color: #fff;
  outline: 2px solid var(--color-accent);
  outline-offset: 6px;
}

@media (max-width: 1023px) {
  .home-articles__header {
    gap: 40px;
  }

  .home-articles__content {
    gap: 40px;
  }
}

@media (max-width: 767px) {
  .home-articles__inner {
    gap: 32px;
    padding-block: 56px;
  }

  .home-articles__header {
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;
  }

  .home-articles__description {
    font-size: 16px;
  }

  .home-articles__controls {
    flex: none;
    justify-content: flex-start;
  }

  .home-articles__content {
    gap: 32px;
    grid-template-columns: 1fr;
  }

  .home-articles__list a {
    font-size: 18px;
    padding-block: 20px;
  }
}
</style>
