export type ProjectImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type ProjectVideo = {
  src: string;
  title: string;
  width?: number;
  height?: number;
  poster?: string;
  autoplayOnView?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  scale?: number;
};

export type ProjectResultItem = {
  title: string;
  description: string;
};

export type ProjectPaginationItem = {
  title: string;
  tags: string[];
  href: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  imageScale?: number;
};

export type ProjectPaginationData = {
  previous: ProjectPaginationItem;
  next: ProjectPaginationItem;
};

export type ProjectGoalItem = {
  number: string;
  title: string;
  description: string;
};

export type ProjectContentSectionData = {
  title: string;
  introduction: string[];
  image?: ProjectImage;
  video?: ProjectVideo;
  details?: ProjectResultItem[];
  detailMarkerColor?: string;
  conclusion?: string;
  density?: 'default' | 'compact' | 'results' | 'caption' | 'tight';
  imageFit?: 'natural' | 'cover';
  imageHeight?: number;
};
