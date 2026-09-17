import type {
  ProjectGoalItem,
  ProjectResultItem,
  ProjectVideo,
} from '../../types/project';

export type ArticleDetailHeroData = {
  heading: string;
  subtitle: string;
};

export type ArticleImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ArticleFeatureCardData = {
  title: string;
  description: string;
  image: ArticleImageData;
};

export type ArticleExternalLinkData = {
  description: string;
  href: string;
  label?: string;
};

export type ArticleGoalsAppearanceData = {
  accentColor?: string;
  accentGradient?: string;
  backgroundColor?: string;
  backgroundGradient?: string;
  backgroundImage?: string;
  headingColor?: string;
  textColor?: string;
};

export type ArticleContentSectionData = {
  title?: string;
  paragraphs: string[];
  image?: ArticleImageData;
  video?: ProjectVideo;
  cards?: ArticleFeatureCardData[];
  details?: ProjectResultItem[];
  detailMarkerColor?: string;
  goals?: ProjectGoalItem[];
  goalsAppearance?: ArticleGoalsAppearanceData;
  conclusion?: string;
  externalLink?: ArticleExternalLinkData;
  gap?: number;
};

export type ArticleDetailContentData = {
  sections: ArticleContentSectionData[];
};

export type ArticleGalleryImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ArticleDetailGalleryData = {
  columns: ArticleGalleryImageData[][];
};

export type ArticleItem = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  coverScale?: number;
  coverPosition?: string;
  detailHero: ArticleDetailHeroData;
  detailContent?: ArticleDetailContentData;
  detailGallery?: ArticleDetailGalleryData;
};
