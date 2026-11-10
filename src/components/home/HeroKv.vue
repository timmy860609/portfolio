<script setup lang="ts">
import { homeHero } from '../../data/home';
import LogoPathAnimation from './LogoPathAnimation.vue';
import { withBase } from '../../utils/basePath';
</script>

<template>
  <section class="hero-kv" aria-labelledby="hero-tagline" data-node-id="5756:16008">
    <div class="hero-kv__stage">
      <picture class="hero-kv__background" aria-hidden="true">
        <source
          media="(max-width: 767px)"
          type="image/avif"
          :srcset="withBase('/Image/Home/kv-new/hero-bg_m.avif')"
        />
        <source
          media="(min-width: 768px) and (max-width: 1023px)"
          type="image/avif"
          :srcset="withBase('/Image/Home/kv-new/hero-bg_p.avif')"
        />
        <source
          media="(min-width: 1024px)"
          type="image/avif"
          :srcset="withBase('/Image/Home/kv-new/hero-bg_w.avif')"
        />
        <source
          media="(max-width: 767px)"
          :srcset="withBase('/Image/Home/kv-new/hero-bg_m.webp')"
        />
        <source
          media="(min-width: 768px) and (max-width: 1023px)"
          :srcset="withBase('/Image/Home/kv-new/hero-bg_p.webp')"
        />
        <img
          :src="withBase('/Image/Home/kv-new/hero-bg_w.webp')"
          alt=""
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
      </picture>

      <div class="hero-kv__content">
        <div class="hero-kv__brand">
          <LogoPathAnimation class="hero-kv__logo" :label="homeHero.logoAlt" />
          <h1 id="hero-tagline">{{ homeHero.tagline }}</h1>
        </div>
      </div>

      <a
        class="hero-kv__scroll-cue"
        href="#featured-projects"
        aria-label="向下捲動至代表專案"
      >
        <span class="hero-kv__scroll-track" aria-hidden="true">
          <span class="hero-kv__scroll-dot"></span>
        </span>
        <span class="hero-kv__scroll-label">Scroll</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero-kv {
  background: linear-gradient(180deg, #fdfdfd 0%, #d2d2d2 104.67%);
  height: 100svh;
  margin-top: -72px;
  min-height: 620px;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 1;
}

.hero-kv__stage {
  height: 100%;
  inset: 0;
  isolation: isolate;
  position: absolute;
  width: 100%;
}

.hero-kv__background {
  display: block;
  height: 100%;
  inset: 0;
  max-width: none;
  object-fit: cover;
  object-position: center bottom;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 0;
}

.hero-kv__background img {
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  width: 100%;
}

.hero-kv__content {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 50%;
  position: absolute;
  top: 27.5%;
  transform: translateX(-50%);
  width: min(53.90625vw, calc(100% - 48px));
  z-index: 2;
}

.hero-kv__brand {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: clamp(26px, 2.1875vw, 42px);
  width: 100%;
}

.hero-kv__logo {
  display: block;
  height: auto;
  width: 100%;
}

.hero-kv__brand h1 {
  color: #323232;
  font-size: clamp(24px, 2.0833vw, 40px);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.12em;
  line-height: 1.2;
  margin: 0;
  text-align: center;
  white-space: nowrap;
}

.hero-kv__scroll-cue {
  align-items: center;
  bottom: clamp(36px, 4.5svh, 52px);
  color: #1f1f1f;
  display: flex;
  flex-direction: column;
  gap: 0;
  left: 50%;
  padding: 8px 20px 4px;
  position: absolute;
  text-decoration: none;
  transition: color 180ms ease;
  transform: translateX(-50%);
  z-index: 3;
}

.hero-kv__scroll-label {
  font-size: clamp(13px, 1.05vmin, 15px);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.28em;
  line-height: 1;
  margin-top: clamp(12px, 1.4vmin, 16px);
  padding-left: 0.28em;
  text-transform: uppercase;
}

.hero-kv__scroll-track {
  background: linear-gradient(
    to bottom,
    rgb(31 31 31 / 72%) 0%,
    rgb(31 31 31 / 72%) 70%,
    rgb(31 31 31 / 0%) 100%
  );
  display: block;
  height: clamp(64px, 8vmin, 82px);
  position: relative;
  width: 1px;
}

.hero-kv__scroll-dot {
  animation: scroll-cue-dot 2.8s cubic-bezier(0.49, -0.01, 0.46, 1) infinite;
  background: #00d3f8;
  border-radius: 50%;
  box-shadow: 0 0 10px rgb(0 211 248 / 85%);
  display: block;
  height: 8px;
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  width: 8px;
}

@media (hover: hover) and (pointer: fine) {
  .hero-kv__scroll-cue:hover {
    color: #000;
  }

  .hero-kv__scroll-cue:hover .hero-kv__scroll-track {
    background: linear-gradient(
      to bottom,
      rgb(31 31 31 / 92%) 0%,
      rgb(31 31 31 / 92%) 70%,
      rgb(31 31 31 / 0%) 100%
    );
  }
}

.hero-kv__scroll-cue:focus-visible {
  outline: 3px solid #323232;
  outline-offset: 4px;
}

@keyframes scroll-cue-dot {
  0% {
    height: 0;
    opacity: 0;
    top: 0;
    width: 0;
  }

  20% {
    height: 8px;
    opacity: 1;
    top: 0;
    width: 8px;
  }

  45% {
    height: 10px;
    opacity: 1;
    width: 10px;
  }

  70% {
    height: 8px;
    opacity: 1;
    width: 8px;
  }

  100% {
    height: 0;
    opacity: 0;
    top: 100%;
    width: 0;
  }
}


@media (max-width: 1024px) {
  .hero-kv__content {
    width: min(82vw, 820px);
  }

  .hero-kv__brand {
    gap: 30px;
  }

  .hero-kv__brand h1 {
    font-size: clamp(22px, 3.2vw, 32px);
  }

}

@media (max-width: 1023px) {
  .hero-kv {
    margin-top: -44px;
  }
}

@media (max-width: 767px) {
  .hero-kv {
    min-height: 560px;
  }

  .hero-kv__content {
    top: 36%;
    width: calc(100% - 40px);
  }

  .hero-kv__brand {
    gap: 26px;
  }

  .hero-kv__brand h1 {
    font-size: clamp(17px, 4.5vw, 22px);
    letter-spacing: 0.07em;
    white-space: normal;
  }

  .hero-kv__scroll-cue {
    bottom: clamp(26px, 3.6svh, 38px);
    padding-inline: 18px;
  }

  .hero-kv__scroll-label {
    font-size: 12px;
  }

  .hero-kv__scroll-track {
    height: clamp(54px, 7svh, 68px);
  }

}

@media (prefers-reduced-motion: reduce) {
  .hero-kv__scroll-dot {
    animation: none;
    height: 8px;
    opacity: 1;
    top: 42%;
    width: 8px;
  }
}
</style>
