<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { aboutHero } from '../../data/about';

const parseStat = (value: string) => {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);

  return match
    ? {
        target: Number(match[1]),
        suffix: match[2],
        decimals: match[1].includes('.') ? match[1].split('.')[1].length : 0,
      }
    : null;
};

const displayedStats = ref(aboutHero.stats.map((stat) => stat.value));
let animationFrame = 0;

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const parsedStats = aboutHero.stats.map((stat) => parseStat(stat.value));
  displayedStats.value = parsedStats.map((stat, index) =>
    stat ? `0${stat.suffix}` : aboutHero.stats[index].value,
  );

  const duration = 1400;
  const stagger = 120;
  const startTime = performance.now();

  const animate = (currentTime: number) => {
    let isComplete = true;

    displayedStats.value = parsedStats.map((stat, index) => {
      if (!stat) return aboutHero.stats[index].value;

      const elapsed = currentTime - startTime - index * stagger;
      const progress = Math.min(Math.max(elapsed / duration, 0), 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = stat.target * easedProgress;

      if (progress < 1) isComplete = false;

      return `${currentValue.toFixed(stat.decimals)}${stat.suffix}`;
    });

    if (!isComplete) animationFrame = requestAnimationFrame(animate);
  };

  animationFrame = requestAnimationFrame(animate);
});

onBeforeUnmount(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame);
});
</script>

<template>
  <section class="about-hero" aria-labelledby="about-hero-title" data-node-id="4391:25152">
    <div class="about-hero__orb about-hero__orb--left" aria-hidden="true">
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="/Image/About/hero-glow-left-mobile.svg"
        />
        <img src="/Image/About/hero-glow-left.svg" alt="" />
      </picture>
    </div>

    <div class="about-hero__triangle" aria-hidden="true">
      <div class="about-hero__triangle-shape">
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="/Image/About/hero-triangle-mobile.svg"
          />
          <img src="/Image/About/hero-triangle.svg" alt="" />
        </picture>
      </div>
    </div>

    <div class="about-hero__orb about-hero__orb--right" aria-hidden="true">
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="/Image/About/hero-glow-right-mobile.svg"
        />
        <img src="/Image/About/hero-glow-right.svg" alt="" />
      </picture>
    </div>

    <div class="about-hero__stage">
      <div class="about-hero__content">
        <h1 id="about-hero-title">關於我</h1>
        <p class="about-hero__introduction">{{ aboutHero.introduction }}</p>

        <dl class="about-hero__stats">
          <template v-for="(stat, index) in aboutHero.stats" :key="stat.label">
            <div class="about-hero__stat">
              <dt>{{ stat.label }}</dt>
              <dd>{{ displayedStats[index] }}</dd>
            </div>
            <img
              v-if="index < aboutHero.stats.length - 1"
              class="about-hero__stat-divider"
              src="/Image/About/hero-stat-divider.svg"
              alt=""
            />
          </template>
        </dl>
      </div>

      <img
        class="about-hero__portrait"
        :src="aboutHero.portrait"
        :alt="aboutHero.portraitAlt"
        width="388"
        height="537"
      />
    </div>

    <picture class="about-hero__glass" aria-hidden="true">
      <source
        media="(max-width: 767px)"
        srcset="/Image/About/glass-bg-mobile.svg"
      />
      <img
        src="/Image/About/glass-bg.svg"
        alt=""
        width="1920"
        height="342"
      />
    </picture>
  </section>
</template>

<style scoped>
.about-hero {
  background: linear-gradient(180deg, #fdfdfd 0%, #d2d2d2 104.67%);
  container-type: inline-size;
  height: 625px;
  overflow: hidden;
  position: relative;
  z-index: 0;
}

.about-hero__stage {
  container-type: inline-size;
  height: 100%;
  left: min(0px, calc((100% - 1440px) / 2));
  margin-inline: auto;
  max-width: 1920px;
  position: absolute;
  right: auto;
  top: 0;
  width: max(100%, 1440px);
  z-index: 3;
}

.about-hero__content {
  color: #323232;
  display: flex;
  flex-direction: column;
  gap: 16px;
  left: calc(50% - 539px);
  position: absolute;
  top: 149px;
  width: 611px;
  z-index: 3;
}

.about-hero__content h1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
}

.about-hero__introduction {
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  width: 100%;
}

.about-hero__stats {
  align-items: center;
  align-self: flex-start;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 1px minmax(0, 1fr) 1px minmax(0, 1fr);
  height: fit-content;
  margin: 8px 0 0;
  padding-inline: 24px;
  width: 100%;
}

.about-hero__stat {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.about-hero__stat dt {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  order: 2;
}

.about-hero__stat dd {
  font-feature-settings: 'tnum';
  font-size: 40px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
  margin: 0;
  min-width: 5ch;
  order: 1;
  text-align: center;
  white-space: nowrap;
}

.about-hero__stat-divider {
  align-self: center;
  display: block;
  height: 84px;
  width: 1px;
}

.about-hero__portrait {
  bottom: 0;
  filter: drop-shadow(0 0 40px rgb(255 255 255 / 20%));
  height: 537px;
  object-fit: fill;
  object-position: bottom;
  position: absolute;
  left: calc(50% + 148px);
  top: auto;
  width: 388px;
  z-index: 5;
}

.about-hero__orb,
.about-hero__triangle {
  pointer-events: none;
  position: absolute;
  z-index: 1;
}

.about-hero__orb img,
.about-hero__triangle img {
  display: block;
  max-width: none;
  transition: transform 650ms cubic-bezier(0.16, 1, 0.3, 1);
}

.about-hero__orb picture,
.about-hero__triangle picture {
  display: contents;
}

.about-hero__orb--left {
  animation: about-hero-enter-top-left 1600ms cubic-bezier(.16, 1, .3, 1) both;
  bottom: auto;
  height: 1689px;
  left: calc(50% - 1431px);
  top: -355px;
  width: 1689px;
}

.about-hero__orb--left img {
  height: 100%;
  width: 100%;
}

.about-hero__triangle {
  align-items: center;
  animation: about-hero-enter-left 1500ms 70ms cubic-bezier(.16, 1, .3, 1) both;
  bottom: auto;
  display: flex;
  height: 551.59px;
  justify-content: center;
  left: calc(50% - 1091px);
  position: absolute;
  top: 221px;
  width: 798.5px;
  z-index: 1;
}

.about-hero__triangle-shape {
  height: 672.038px;
  position: relative;
  transform: rotate(-105deg) skewX(-9.27deg) scaleY(-.99);
  width: 501.584px;
}

.about-hero__triangle img {
  bottom: auto;
  height: 790.263px;
  left: -18.88%;
  position: absolute;
  top: -8.66%;
  width: 621.308px;
}

.about-hero__orb--right {
  animation: about-hero-enter-right 1700ms 110ms cubic-bezier(.16, 1, .3, 1) both;
  bottom: auto;
  height: 917px;
  left: calc(50% + 43px);
  top: 221px;
  width: 917px;
}

.about-hero__orb--right img {
  bottom: auto;
  height: 1037px;
  left: -10.36%;
  position: absolute;
  top: -6.54%;
  width: 1037px;
}

.about-hero__glass {
  animation: about-hero-enter-bottom 1450ms 90ms cubic-bezier(.16, 1, .3, 1) both;
  bottom: 0;
  display: block;
  height: 342px;
  left: calc(50% - 960px);
  max-width: none;
  position: absolute;
  right: auto;
  top: auto;
  width: 1920px;
  z-index: 2;
}

.about-hero__glass img {
  display: block;
  height: 100%;
  object-fit: fill;
  width: 100%;
}

@keyframes about-hero-enter-top-left {
  from {
    opacity: 0;
    transform: translate3d(-18vw, -14vh, 0) scale(.94);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

@keyframes about-hero-enter-left {
  from {
    opacity: 0;
    transform: translate3d(-28vw, 10vh, 0) scale(.94);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

@keyframes about-hero-enter-right {
  from {
    opacity: 0;
    transform: translate3d(26vw, 14vh, 0) scale(.94);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

@keyframes about-hero-enter-bottom {
  from {
    opacity: 0;
    transform: translate3d(0, 24vh, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes about-hero-enter-glass-mobile {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media (max-width: 1440px) {
  .about-hero__stage {
    box-sizing: border-box;
    padding-inline: 32px;
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .about-hero__content {
    left: calc((1440px - 100vw) / 2 + 32px);
    width: min(611px, calc(100vw - 484px));
  }

  .about-hero__portrait {
    left: auto;
    right: calc((1440px - 100vw) / 2 + 32px);
  }
}

@media (min-width: 1921px) {
  .about-hero__stage {
    left: calc(50% - 960px);
  }
}

@media (max-width: 767px) {
  .about-hero {
    height: 672px;
    min-height: 0;
  }

  .about-hero__stage {
    display: block;
    left: 0;
    right: 0;
    width: calc(100% - 32px);
  }

  .about-hero__content {
    gap: 16px;
    left: 50%;
    max-width: 420px;
    top: 30px;
    transform: translateX(-50%);
    width: 100%;
    z-index: 3;
  }

  .about-hero__content h1 {
    font-size: 24px;
  }

  .about-hero__introduction {
    font-size: 18px;
  }

  .about-hero__stats {
    margin-top: 8px;
    padding-inline: 0;
  }

  .about-hero__stat dd {
    font-size: 32px;
  }

  .about-hero__stat dt {
    font-size: 16px;
  }

  .about-hero__stat-divider {
    align-self: center;
    height: 72px;
  }

  .about-hero__portrait {
    bottom: 0;
    height: 395px;
    left: 50%;
    top: auto;
    transform: translateX(-50%);
    width: 285px;
  }

  .about-hero__orb--left {
    bottom: auto;
    height: 923px;
    left: -551px;
    top: -66px;
    width: 923px;
  }

  .about-hero__triangle {
    bottom: auto;
    height: 388.812px;
    left: -293px;
    top: 381px;
    width: 562.858px;
  }

  .about-hero__triangle-shape {
    height: 473.716px;
    width: 353.564px;
  }

  .about-hero__triangle img {
    bottom: auto;
    height: 592px;
    left: -26.79%;
    top: -12.29%;
    width: 473.3px;
  }

  .about-hero__orb--right {
    bottom: auto;
    height: 431px;
    left: 249px;
    top: 311px;
    width: 431px;
  }

  .about-hero__orb--right img {
    bottom: auto;
    height: 551px;
    left: -22.04%;
    top: -13.92%;
    width: 551px;
  }

  .about-hero__glass {
    animation: about-hero-enter-glass-mobile 900ms 90ms cubic-bezier(.16, 1, .3, 1) both;
    bottom: 0;
    height: 194px;
    inset-block-end: 0;
    inset-block-start: auto;
    inset-inline: auto;
    left: 50%;
    right: auto;
    top: auto;
    transform: translateX(-50%) scaleX(-1);
    width: 1076.532px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-hero__orb--left,
  .about-hero__triangle,
  .about-hero__orb--right,
  .about-hero__glass {
    animation: none;
  }
}
</style>
