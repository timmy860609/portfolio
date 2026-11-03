<script setup lang="ts">
import { responsiveImage } from '../../utils/responsiveImage';
import { computed, inject } from 'vue';
import type { ProjectImage, ProjectVideo } from '../../types/project';
import { withBase } from '../../utils/basePath';
import { optimizedProjectImagesKey } from '../../utils/projectImageAssets';

const props = withDefaults(
  defineProps<{
    image?: ProjectImage;
    video?: ProjectVideo;
    fit?: 'natural' | 'cover';
    coverHeight?: number;
  }>(),
  {
    fit: 'natural',
    coverHeight: 560,
  },
);

const mediaStyle = computed(() => ({
  ...(props.fit === 'cover'
    ? { '--project-media-height': `${props.coverHeight}px` }
    : {}),
  ...(props.video?.scale
    ? { '--project-media-video-scale': String(props.video.scale) }
    : {}),
}));

const optimizedImages = inject(optimizedProjectImagesKey, {});
const optimizedImage = computed(() => props.image
  ? optimizedImages[props.image.src]
  : undefined);
const imageSizes = '(max-width: 767px) 100vw, (max-width: 1008px) calc(100vw - 48px), 960px';
const imageAttributes = computed(() => {
  if (!props.image) return {};
  if (!optimizedImage.value) return responsiveImage(props.image.src);
  return {
    src: optimizedImage.value.src,
    srcset: optimizedImage.value.webpSrcset,
    sizes: imageSizes,
    'data-responsive-image': '',
  };
});

</script>

<template>
  <figure
    class="project-media"
    :class="{ 'project-media--cover': fit === 'cover' }"
    :style="mediaStyle"
  >
    <picture v-if="image">
      <source
        v-if="optimizedImage"
        media="(max-width: 767px)"
        type="image/avif"
        :srcset="optimizedImage.mobileAvifSrcset"
        sizes="100vw"
      />
      <source
        v-if="optimizedImage"
        media="(max-width: 767px)"
        type="image/webp"
        :srcset="optimizedImage.mobileWebpSrcset"
        sizes="100vw"
      />
      <source
        v-if="optimizedImage"
        type="image/avif"
        :srcset="optimizedImage.avifSrcset"
        :sizes="imageSizes"
      />
      <source
        v-if="optimizedImage"
        type="image/webp"
        :srcset="optimizedImage.webpSrcset"
        :sizes="imageSizes"
      />
      <img
        v-bind="imageAttributes"
        :alt="image.alt"
        :width="optimizedImage?.width ?? image.width ?? 2880"
        :height="optimizedImage?.height ?? image.height ?? 1680"
        loading="lazy"
        decoding="async"
      />
    </picture>
    <video
      v-else-if="video"
      data-managed-video
      :data-src="withBase(video.src)"
      :data-mobile-src="video.mobileSrc ? withBase(video.mobileSrc) : undefined"
      :poster="video.poster ? withBase(video.poster) : undefined"
      :width="video.width ?? 1280"
      :height="video.height ?? 720"
      :aria-label="video.title"
      :data-autoplay-on-view="video.autoplayOnView ? '' : undefined"
      :controls="video.controls !== false"
      :loop="video.loop || video.autoplayOnView"
      :muted="video.muted || video.autoplayOnView"
      playsinline
      preload="none"
    ></video>

    <button
      v-if="video?.poster && !video.autoplayOnView"
      class="project-media__video-cover"
      type="button"
      :aria-label="`播放影片：${video.title}`"
      data-play-video
    >
      <img
        v-bind="responsiveImage(video.poster)"
        alt=""
        :width="video.width ?? 1280"
        :height="video.height ?? 720"
        loading="lazy"
        decoding="async"
      />
      <span class="project-media__play-button" aria-hidden="true"></span>
    </button>
  </figure>
</template>

<style scoped>
.project-media {
  border-radius: var(--radius-card);
  margin: 0;
  max-width: 100%;
  overflow: hidden;
  position: relative;
}

.project-media img,
.project-media video {
  display: block;
  height: auto;
  width: 100%;
}

.project-media picture {
  display: block;
  width: 100%;
}

.project-media video {
  background: #131313;
  transform: scale(var(--project-media-video-scale, 1));
  transform-origin: center;
}

.project-media video[data-autoplay-on-view] {
  pointer-events: none;
}

.project-media video[data-autoplay-on-view]::-webkit-media-controls {
  display: none !important;
}

.project-media__video-cover {
  background: #131313;
  border: 0;
  cursor: pointer;
  inset: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
}

.project-media__video-cover img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.project-media__play-button {
  align-items: center;
  aspect-ratio: 165 / 93;
  background: #f00;
  border-radius: clamp(8px, 2.5vw, 24px);
  display: flex;
  justify-content: center;
  left: 50%;
  max-width: 132px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 160ms ease;
  width: 13.75%;
}

.project-media__play-button::before {
  border-bottom: clamp(8px, 1.7vw, 16px) solid transparent;
  border-left: clamp(12px, 2.3vw, 22px) solid #fff;
  border-top: clamp(8px, 1.7vw, 16px) solid transparent;
  content: '';
  height: 0;
  transform: translateX(10%);
  width: 0;
}

.project-media__video-cover:hover .project-media__play-button {
  transform: translate(-50%, -50%) scale(1.02);
}

.project-media__video-cover:focus-visible {
  outline: 3px solid #00d9ff;
  outline-offset: -3px;
}

.project-media--cover {
  background: #fff;
  height: var(--project-media-height);
}

.project-media--cover picture,
.project-media--cover img,
.project-media--cover video {
  height: 100%;
  object-fit: cover;
}

@media (max-width: 767px) {
  .project-media {
    border-radius: 0;
    margin-inline: calc(0px - var(--page-gutter));
    max-width: none;
    width: calc(100% + var(--page-gutter) + var(--page-gutter));
  }

  .project-media--cover {
    height: auto;
  }

  .project-media--cover picture,
  .project-media--cover img,
  .project-media--cover video {
    height: auto;
  }

  .project-media__video-cover img {
    height: 100%;
  }
}
</style>
