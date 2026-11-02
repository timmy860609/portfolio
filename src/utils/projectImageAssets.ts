import type { InjectionKey } from 'vue';

export type OptimizedProjectImage = {
  src: string;
  avifSrcset: string;
  webpSrcset: string;
  mobileAvifSrcset: string;
  mobileWebpSrcset: string;
  width: number;
  height: number;
};

export type OptimizedProjectImages = Record<string, OptimizedProjectImage>;

export const optimizedProjectImagesKey: InjectionKey<OptimizedProjectImages> =
  Symbol('optimized-project-images');
