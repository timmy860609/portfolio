import type {
  ProjectPaginationData,
  ProjectPaginationItem,
} from '../../types/project';
import { projectsBySlug } from '../projects';

const projectOrder = [
  'smart-fitness',
  'open-account',
  'insurance-marketing',
  'mobile-bank-2',
  'vip-member-platform',
  'hiring-2026',
  'job-platform',
  'hr-official',
  'vip-platform',
  'iot-backend',
] as const;

export type PublishedProjectSlug = (typeof projectOrder)[number];

const paginationImages: Record<PublishedProjectSlug, string> = {
  'smart-fitness': '/Image/Project/pagination/smart-fitness.webp',
  'open-account': '/Image/Project/pagination/open-account.webp',
  'insurance-marketing': '/Image/Project/pagination/marketing-page.webp',
  'mobile-bank-2': '/Image/Project/pagination/mobile-bank.webp',
  'vip-member-platform': '/Image/Project/pagination/vip-platform.webp',
  'hiring-2026': '/Image/Project/pagination/hiring-web.webp',
  'job-platform': '/Image/Project/pagination/job-platfom.webp',
  'hr-official': '/Image/Project/project-cover/hr-offical.webp',
  'vip-platform': '/Image/Project/pagination/life-platform.webp',
  'iot-backend': '/Image/Project/pagination/iot-gateway.webp',
};

function createPaginationItem(slug: PublishedProjectSlug): ProjectPaginationItem {
  const project = projectsBySlug[slug];

  return {
    title: project.title,
    tags: project.detailTags ?? project.tags,
    href: `/projects/${slug}`,
    image: paginationImages[slug],
    imageAlt: project.title,
  };
}

export function getProjectPagination(
  slug: PublishedProjectSlug,
): ProjectPaginationData {
  const matchedIndex = projectOrder.indexOf(slug as PublishedProjectSlug);
  const currentIndex = matchedIndex < 0 ? 0 : matchedIndex;
  const previousSlug = projectOrder[
    (currentIndex - 1 + projectOrder.length) % projectOrder.length
  ];
  const nextSlug = projectOrder[(currentIndex + 1) % projectOrder.length];

  return {
    previous: createPaginationItem(previousSlug),
    next: createPaginationItem(nextSlug),
  };
}
