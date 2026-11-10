<script setup lang="ts">
import { withBase } from '../utils/basePath';
import { mainNavigation } from '../data/site';
</script>

<template>
  <footer class="site-footer" data-node-id="5758:16017">
    <picture class="site-footer__artwork" aria-hidden="true">
      <source
        media="(max-width: 767px)"
        :srcset="withBase('/Image/Footer/Footer_M.webp')"
      />
      <img
        :src="withBase('/Image/Footer/Footer.webp')"
        alt=""
        width="3840"
        height="696"
        loading="lazy"
        decoding="async"
      />
    </picture>

    <div class="site-footer__inner" data-nosnippet>
      <div class="site-footer__identity">
        <a class="site-footer__logo" :href="withBase('/')" aria-label="Timmy Lee 首頁">
          <img :src="withBase('/WebCI/ci-logo.svg')" alt="Timmy Lee" width="362" height="28" />
        </a>

        <nav aria-label="頁尾導覽">
          <a
            v-for="item in mainNavigation"
            :key="item.to"
            :href="withBase(item.to)"
          >
            {{ item.label }}
          </a>
          <a :href="withBase('/#contact')">與我聯繫</a>
          <a :href="withBase('/Image/About/portfolio.pdf')" download="portfolio.pdf">下載簡歷</a>
        </nav>
      </div>

      <div class="site-footer__meta">
        <p>Copyright © {{ new Date().getFullYear() }} Timmy Lee</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  --footer-art-unit: clamp(0.65px, 0.0520833333vw, 1px);
  align-items: flex-end;
  background: linear-gradient(180deg, #fff 12.42%, #f3f3f3 100%);
  color: #323232;
  display: flex;
  min-height: calc(348 * var(--footer-art-unit));
  overflow: hidden;
  padding: calc(240 * var(--footer-art-unit)) var(--layout-gutter)
    calc(32 * var(--footer-art-unit));
  position: relative;
}

.site-footer__artwork {
  display: block;
  height: 100%;
  inset: 0;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 0;
}

.site-footer__artwork img {
  display: block;
  height: 100%;
  object-fit: fill;
  width: 100%;
}

.site-footer__inner {
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-inline: auto;
  max-width: calc(1200 * var(--footer-art-unit));
  position: relative;
  width: 100%;
  z-index: 2;
}

.site-footer__identity {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: calc(24 * var(--footer-art-unit));
}

.site-footer__logo {
  display: block;
  height: calc(28 * var(--footer-art-unit));
  line-height: 0;
  width: calc(362.1 * var(--footer-art-unit));
}

.site-footer__logo img {
  display: block;
  height: calc(28 * var(--footer-art-unit));
  width: calc(362.1 * var(--footer-art-unit));
}

.site-footer nav {
  align-items: center;
  display: flex;
  gap: calc(24 * var(--footer-art-unit));
}

.site-footer nav a {
  color: #323232;
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
  min-width: auto;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
}

.site-footer nav a {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

@media (hover: hover) and (pointer: fine) {
  .site-footer nav a:hover {
    opacity: 0.7;
  }
}

.site-footer__meta {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.site-footer__meta p {
  font-family: 'Montserrat', 'Noto Sans TC', sans-serif;
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-regular);
  line-height: 1.5;
  margin: 0;
  white-space: nowrap;
}

@media (max-width: 900px) {
  .site-footer {
    padding-top: calc(200 * var(--footer-art-unit));
  }

  .site-footer__inner {
    gap: calc(40 * var(--footer-art-unit));
  }

  .site-footer nav {
    flex-wrap: wrap;
    gap: calc(12 * var(--footer-art-unit)) calc(20 * var(--footer-art-unit));
  }
}

@media (max-width: 767px) {
  .site-footer {
    align-items: stretch;
    min-height: 280px;
    padding: 32px 24px;
  }

  .site-footer__inner {
    align-items: flex-start;
    flex-direction: column;
    gap: 32px;
  }

  .site-footer__identity {
    gap: 32px;
    width: 100%;
  }

  .site-footer__logo {
    height: 20px;
    width: 258px;
  }

  .site-footer__logo img {
    height: 20px;
    width: 258px;
  }

  .site-footer nav {
    align-items: start;
    column-gap: 12px;
    display: grid;
    grid-template-columns: repeat(3, 120px);
    row-gap: 12px;
  }

  .site-footer nav a {
    font-size: var(--font-size-body-small);
    line-height: 24px;
    min-width: 120px;
    text-align: left;
  }

  .site-footer__meta {
    align-items: flex-start;
    gap: 16px;
  }

}
</style>
