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

        <a
          class="hero-kv__scroll-cue"
          href="#featured-projects"
          aria-label="向下捲動至代表專案"
        >
          <span class="hero-kv__scroll-label">Scroll</span>
          <span class="hero-kv__scroll-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M12 5v13M7.5 13.5 12 18l4.5-4.5" />
            </svg>
          </span>
        </a>
      </div>
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
  -webkit-backdrop-filter: blur(14px);
  align-items: center;
  backdrop-filter: blur(14px);
  background: rgb(255 255 255 / 58%);
  border: 1px solid rgb(50 50 50 / 6%);
  border-radius: 999px;
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 78%),
    0 10px 30px rgb(50 50 50 / 8%);
  color: #323232;
  display: flex;
  gap: 12px;
  margin-top: clamp(48px, 8vmin, 80px);
  min-height: 48px;
  padding: 7px 8px 7px 18px;
  position: relative;
  text-decoration: none;
  transition:
    background-color 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;
  z-index: 3;
}

.hero-kv__scroll-label {
  font-size: 11px;
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.22em;
  line-height: 1;
  text-transform: uppercase;
}

.hero-kv__scroll-icon {
  align-items: center;
  background: var(--color-accent);
  border-radius: 50%;
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;
}

.hero-kv__scroll-icon svg {
  animation: scroll-cue-arrow 1.8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  fill: none;
  height: 18px;
  stroke: #323232;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.8;
  width: 18px;
}

.hero-kv__scroll-cue:hover {
  background: rgb(255 255 255 / 76%);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 90%),
    0 12px 32px rgb(50 50 50 / 12%);
  transform: translateY(2px);
}

.hero-kv__scroll-cue:focus-visible {
  outline: 3px solid #323232;
  outline-offset: 4px;
}

@keyframes scroll-cue-arrow {
  0%,
  100% {
    transform: translateY(-1px);
  }

  50% {
    transform: translateY(3px);
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
    min-height: 44px;
    padding: 6px 7px 6px 16px;
  }

  .hero-kv__scroll-icon {
    height: 30px;
    width: 30px;
  }

}

@media (prefers-reduced-motion: reduce) {
  .hero-kv__scroll-icon svg {
    animation: none;
  }
}
</style>
