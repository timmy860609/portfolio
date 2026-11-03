import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import type { OptimizedProjectImages } from './projectImageAssets';

const projectImageLoaders = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/project-details/**/*.webp',
);

export const optimizedProjectFolders = {
  'mobile-bank-2': 'mobile-bank-detail',
  'smart-fitness': 'smart-fitness-detail',
} as const;

export type OptimizedProjectSlug = keyof typeof optimizedProjectFolders;

export async function loadOptimizedProjectImages(
  folder: (typeof optimizedProjectFolders)[OptimizedProjectSlug] | undefined,
): Promise<OptimizedProjectImages> {
  if (!folder) return {};

  const matchingImages = Object.entries(projectImageLoaders).filter(([path]) =>
    path.includes(`/project-details/${folder}/`),
  );
  const optimizedImages: OptimizedProjectImages = {};

  await Promise.all(matchingImages.map(async ([path, loadImage]) => {
    const source = (await loadImage()).default;
    const filename = path.split('/').at(-1)!;
    const isMobileCover = filename === 'project-cover_m.webp';
    const isDesktopCover = filename === 'project-cover.webp';
    const widths = isMobileCover
      ? [480, 768, 960]
      : isDesktopCover
        ? [768, 1280, 1920]
        : [480, 768, 960, 1280];
    const fallbackWidth = widths.at(-1)!;
    const [avif, webp] = await Promise.all([
      getImage({
        src: source,
        width: fallbackWidth,
        widths,
        format: 'avif',
        quality: 55,
      }),
      getImage({
        src: source,
        width: fallbackWidth,
        widths,
        format: 'webp',
        quality: 82,
      }),
    ]);
    const mobileSrcset = (result: typeof avif) => result.srcSet.values
      .filter((value) => (value.transform.width ?? 0) <= 960)
      .map((value) => `${value.url} ${value.descriptor}`)
      .join(', ');
    const originalPath = `/Image/Project/${folder}/${filename}`;

    optimizedImages[originalPath] = {
      src: webp.src,
      avifSrcset: avif.srcSet.attribute,
      webpSrcset: webp.srcSet.attribute,
      mobileAvifSrcset: mobileSrcset(avif),
      mobileWebpSrcset: mobileSrcset(webp),
      width: source.width,
      height: source.height,
    };
  }));

  return optimizedImages;
}
