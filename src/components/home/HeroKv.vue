<script setup lang="ts">
import { homeHero } from '../../data/home';
import LogoPathAnimation from './LogoPathAnimation.vue';
</script>

<template>
  <section class="hero-kv" aria-labelledby="hero-tagline" data-node-id="5756:16008">
    <div class="hero-kv__stage">
      <picture class="hero-kv__background" aria-hidden="true">
        <source
          media="(max-width: 767px)"
          srcset="/Image/Home/kv-new/hero-bg_m.webp"
        />
        <source
          media="(min-width: 768px) and (max-width: 1023px)"
          srcset="/Image/Home/kv-new/hero-bg_p.webp"
        />
        <img src="/Image/Home/kv-new/hero-bg_w.webp" alt="" />
      </picture>

      <div class="hero-kv__brand">
        <LogoPathAnimation class="hero-kv__logo" :label="homeHero.logoAlt" />
        <h1 id="hero-tagline">{{ homeHero.tagline }}</h1>
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

.hero-kv__brand {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: clamp(26px, 2.1875vw, 42px);
  left: 50%;
  position: absolute;
  top: 27.5%;
  transform: translateX(-50%);
  width: min(53.90625vw, calc(100% - 48px));
  z-index: 2;
}

.hero-kv__logo {
  display: block;
  height: auto;
  width: 100%;
}

.hero-kv__brand h1 {
  color: #323232;
  font-size: clamp(24px, 2.0833vw, 40px);
  font-weight: 500;
  letter-spacing: 0.12em;
  line-height: 1.2;
  margin: 0;
  text-align: center;
  white-space: nowrap;
}


@media (max-width: 1024px) {
  .hero-kv__brand {
    gap: 30px;
    width: min(82vw, 820px);
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

  .hero-kv__brand {
    gap: 26px;
    top: 36%;
    width: calc(100% - 40px);
  }

  .hero-kv__brand h1 {
    font-size: clamp(17px, 4.5vw, 22px);
    letter-spacing: 0.07em;
    white-space: normal;
  }

}
</style>
