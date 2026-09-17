import type {
  ProjectPaginationData,
  ProjectPaginationItem,
} from '../../types/project';
import { articles } from './articles';

function createPaginationItem(index: number): ProjectPaginationItem {
  const article = articles[index];

  return {
    title: article.title,
    tags: article.tags,
    href: `/articles/${article.slug}`,
    image: article.cover,
    imageAlt: article.coverAlt,
    imagePosition: article.coverPosition,
    imageScale: article.coverScale,
  };
}

export function getArticlePagination(slug: string): ProjectPaginationData {
  const matchedIndex = articles.findIndex((article) => article.slug === slug);
  const currentIndex = matchedIndex < 0 ? 0 : matchedIndex;
  const previousIndex = (currentIndex - 1 + articles.length) % articles.length;
  const nextIndex = (currentIndex + 1) % articles.length;

  return {
    previous: createPaginationItem(previousIndex),
    next: createPaginationItem(nextIndex),
  };
}
