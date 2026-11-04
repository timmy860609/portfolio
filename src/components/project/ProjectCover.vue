<script setup lang="ts">
import { computed, inject } from 'vue';
import { responsiveImage, imageSrcset } from '../../utils/responsiveImage';
import { withBase } from '../../utils/basePath';
import { optimizedProjectImagesKey } from '../../utils/projectImageAssets';

const props = withDefaults(
  defineProps<{
    src: string;
    mobileSrc?: string;
    alt: string;
    width?: number;
    height?: number;
    loading?: 'eager' | 'lazy';
  }>(),
  {
    width: 5760,
    height: 1440,
    loading: 'eager',
  },
);

const optimizedImages = inject(optimizedProjectImagesKey, {});
const desktopImage = computed(() => optimizedImages[props.src]);
const mobileImage = computed(() => props.mobileSrc
  ? optimizedImages[props.mobileSrc]
  : undefined);
const imageAttributes = computed(() => desktopImage.value
  ? {
      src: desktopImage.value.src,
      srcset: desktopImage.value.webpSrcset,
      sizes: '100vw',
      'data-responsive-image': '',
    }
  : responsiveImage(
      props.src,
      '100vw',
    ));
</script>

<template>
  <section class="project-cover" aria-label="專案主視覺">
    <picture>
      <source
        v-if="mobileImage"
        media="(max-width: 767px)"
        type="image/avif"
        :srcset="mobileImage.mobileAvifSrcset || mobileImage.avifSrcset"
        sizes="100vw"
      />
      <source
        v-if="mobileImage"
        media="(max-width: 767px)"
        type="image/webp"
        :srcset="mobileImage.mobileWebpSrcset || mobileImage.webpSrcset"
        sizes="100vw"
      />
      <source
        v-else-if="mobileSrc"
        media="(max-width: 767px)"
        :srcset="imageSrcset(mobileSrc) || withBase(mobileSrc)"
        sizes="100vw"
      />
      <source
        v-if="desktopImage"
        type="image/avif"
        :srcset="desktopImage.avifSrcset"
        sizes="100vw"
      />
      <source
        v-if="desktopImage"
        type="image/webp"
        :srcset="desktopImage.webpSrcset"
        sizes="100vw"
      />
      <img
        v-bind="imageAttributes"
        :alt="alt"
        :width="width"
        :height="height"
        :loading="loading"
        decoding="async"
        :fetchpriority="loading === 'eager' ? 'high' : 'low'"
      />
    </picture>
  </section>
</template>

<style scoped>
.project-cover {
  background: #eef3f7;
  height: max(25vw, 360px);
  position: relative;
  width: 100%;
  z-index: 0;
}

.project-cover img {
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
}

.project-cover picture {
  display: block;
  height: 100%;
  width: 100%;
}

@media (max-width: 767px) {
  .project-cover,
  .project-cover picture {
    height: auto;
  }

  .project-cover img {
    height: auto;
    object-fit: contain;
  }
}
</style>
