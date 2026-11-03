<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { aboutHero } from '../../data/about';
import { withBase } from '../../utils/basePath';

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
    <div class="about-hero__stage">
      <picture class="about-hero__background" aria-hidden="true">
        <source
          media="(max-width: 767px)"
          :srcset="withBase('/Image/About/about-hero-bg-mobile.webp')"
        />
        <img
          :src="withBase('/Image/About/about-hero-bg-desktop.webp')"
          alt=""
          width="3840"
          height="1250"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
      </picture>

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
              :src="withBase('/Image/About/hero-stat-divider.svg')"
              alt=""
            />
          </template>
        </dl>
      </div>

      <img
        class="about-hero__portrait"
        :src="withBase(aboutHero.portrait)"
        :alt="aboutHero.portraitAlt"
        width="388"
        height="537"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />
    </div>

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

.about-hero__background {
  display: block;
  inset: 0;
  pointer-events: none;
  position: absolute;
  z-index: 0;
}

.about-hero__background img {
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  width: 100%;
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
  font-weight: var(--font-weight-bold);
  line-height: 1.5;
  margin: 0;
}

.about-hero__introduction {
  font-size: 24px;
  font-weight: var(--font-weight-regular);
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
  font-weight: var(--font-weight-regular);
  line-height: 1.5;
  order: 2;
}

.about-hero__stat dd {
  font-feature-settings: 'tnum';
  font-size: 40px;
  font-weight: var(--font-weight-semibold);
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

@media (min-width: 768px) {
  .about-hero__stats {
    column-gap: 24px;
    grid-template-columns: max-content 1px max-content 1px max-content;
    padding-inline: 0;
    width: max-content;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .about-hero__stats {
    column-gap: clamp(12px, calc(4.6875vw - 24px), 24px);
  }

  .about-hero__stat dd {
    font-size: clamp(28px, calc(4.6875vw - 8px), 40px);
    min-width: 0;
  }

  .about-hero__stat dt {
    font-size: clamp(14px, calc(0.78125vw + 8px), 16px);
  }

  .about-hero__stat-divider {
    height: clamp(64px, calc(7.8125vw + 4px), 84px);
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

}
</style>
