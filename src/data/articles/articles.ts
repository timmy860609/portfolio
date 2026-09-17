import type { ArticleItem } from './types';
import { accessibleDesignContent } from './details/accessibleDesign';
import { puzzleGameContent } from './details/puzzleGame';
import { taoyuanLeopardsContent } from './details/taoyuanLeopards';
import { tpvlWebsiteContent } from './details/tpvlWebsite';
import { visualDesignGallery } from './details/visualDesign';

export const articlesHero = {
  title: '專欄分享',
  subtitle: '一路上走來，那些碰到的新鮮事',
  titleId: 'articles-page-title',
};

export const articles: ArticleItem[] = [
  {
    slug: 'interactive-child-education',
    title: '不可忽視的幼兒教育，學習與成長不只是靠書本',
    description:
      '以實體介面結合互動科技技術，把數位內容轉化成動手參與的學習體驗，提升幼兒學習時的趣味性！',
    tags: ['互動投影', '幼兒教育', '益智遊戲'],
    cover: '/Image/Articles/article-cover/child-education.jpg',
    coverAlt: '幼兒圍繞互動投影桌進行益智學習遊戲',
    coverScale: 1.35,
    coverPosition: 'center 58%',
    detailHero: {
      heading: '互動投影幼兒教育',
      subtitle: '不可忽視的幼兒教育，學習與成長不只是靠書本',
    },
    detailContent: puzzleGameContent,
  },
  {
    slug: 'accessible-design',
    title: '任何人都能快速上手，無痛使用的無障礙設計',
    description:
      '將 WCAG、報讀順序、Focus 狀態與開發標註整合為共用規範，讓無障礙從設計階段就能被直接採用。',
    tags: ['A11y', 'WCAG', 'Accessibility'],
    cover: '/Image/Articles/article-cover/a11y-design.webp',
    coverAlt: '視障用戶操作行動銀行無障礙介面',
    detailHero: {
      heading: '無障礙設計元件庫',
      subtitle: '任何人都能快速上手，無痛使用的無障礙設計',
    },
    detailContent: accessibleDesignContent,
  },
  {
    slug: 'tpvl-official-website',
    title: '化身為PM，臺灣職業排球聯盟官網上線啦！',
    description:
      '整合賽事資訊、球隊介紹、最新消息與票務資訊，打造兼具品牌形象與球迷互動體驗的官方網站。',
    tags: ['設計顧問', '專案溝通', '需求訪談'],
    cover: '/Image/Articles/article-cover/tpvl-web.webp',
    coverAlt: '臺灣職業排球聯盟官網主視覺',
    detailHero: {
      heading: '臺灣職業排球聯盟官網',
      subtitle: '化身為PM，臺灣職業排球聯盟官網上線啦！',
    },
    detailContent: tpvlWebsiteContent,
  },
  {
    slug: 'visual-design-collection',
    title: '設計路途中，一定會遇到的視覺大雜燴在此',
    description:
      '自求學到工作階段，雖然不是平面設計本科出生，但這一路上也支援了許多平面相關的產出，也算是一種休閒活動(?',
    tags: ['Banner', 'EDM', '電子報'],
    cover: '/Image/Articles/article-cover/visaul-design.webp',
    coverAlt: 'Banner、EDM 與電子報等視覺設計作品拼貼',
    detailHero: {
      heading: '視覺設計合輯，不分類型一次奉上',
      subtitle: '設計路途中，一定會遇到的視覺大雜燴在此',
    },
    detailGallery: visualDesignGallery,
  },
  {
    slug: 'taoyuan-leopards-logo',
    title: '臺灣第一個職業排球聯盟的成員：桃園雲豹飛將登場！',
    description:
      '透過雲豹形象、競技感與球隊個性的整合，打造更具辨識度與延伸性的全新隊徽。',
    tags: ['Logo設計', '體育行銷'],
    cover: '/Image/Articles/article-cover/taoyuan-leopards.webp',
    coverAlt: '桃園雲豹飛將品牌標誌設計',
    detailHero: {
      heading: '桃園飛將雲豹職業排球隊',
      subtitle: '臺灣第一個職業排球聯盟的成員：桃園雲豹飛將登場！',
    },
    detailContent: taoyuanLeopardsContent,
  },
];

const articlesBySlug = Object.fromEntries(
  articles.map((article) => [article.slug, article]),
) as Record<string, ArticleItem>;

export const homeArticles = [
  'interactive-child-education',
  'visual-design-collection',
  'taoyuan-leopards-logo',
  'accessible-design',
  'tpvl-official-website',
].map((slug) => articlesBySlug[slug]);
