import manifest from '../generated/images.json';
import { withBase } from './basePath';

type ImageMetadata = {
  width: number;
  height: number;
  variants: { width: number; src: string }[];
  placeholder: string;
};
const images = manifest as Record<string, ImageMetadata>;
export const projectImageSizes = '(max-width: 767px) 100vw, (max-width: 1008px) calc(100vw - 48px), 960px';

export function imageSrcset(src: string) {
  return images[src]?.variants.map(v => `${withBase(v.src)} ${v.width}w`).join(', ');
}

export function responsiveImage(src: string, sizes = projectImageSizes) {
  const image = images[src];
  if (!image) return { src: withBase(src) };
  const fallback = image.variants.find(v => v.width >= 1280) ?? image.variants[image.variants.length - 1];
  return {
    src: withBase(fallback.src),
    srcset: imageSrcset(src),
    sizes,
    width: image.width,
    height: image.height,
    'data-responsive-image': '',
    style: { backgroundImage: `url("${image.placeholder}")`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' },
  };
}
