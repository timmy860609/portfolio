import type {
  ProjectPaginationData,
  ProjectPaginationItem,
} from '../../types/project';
import { articles } from './articles';
import type { ArticleItem } from './types';
import { getCircularNeighbors } from '../../utils/circularNeighbors';

function createPaginationItem(article: ArticleItem): ProjectPaginationItem {
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
  const { previous, next } = getCircularNeighbors(articles, matchedIndex);

  return {
    previous: createPaginationItem(previous),
    next: createPaginationItem(next),
  };
}
