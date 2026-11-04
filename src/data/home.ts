export type FeaturedProjectContent = {
  title: string;
  tags: string[];
  imageKey: 'mobile-bank' | 'smart-fitness' | 'hiring-web' | 'iot-backend' | 'life-web';
  href: string;
};

export type OptimizedImage = {
  src: string;
  avifSrc: string;
  avifSrcset: string;
  webpSrcset: string;
  width: number;
  height: number;
};

export type FeaturedProject = Omit<FeaturedProjectContent, 'imageKey'> & {
  image: OptimizedImage;
};

export type Skill = {
  title: string;
  tags: string[];
  description: string;
};

export type ContactItem = {
  title: string;
  label: string;
  value: string;
  href: string;
  copyLabel: string;
  actionLabel: string;
  actionIcon: string;
};

export const homeHero = {
  logo: '/WebCI/ci-logo.svg',
  logoAlt: 'Timmy Lee',
  tagline: '以設計梳理體驗，用前端實現細節',
};

export const featuredProjects: FeaturedProjectContent[] = [
  {
    title: '全新行動銀行 2.0',
    tags: ['UI/UX', '視覺設計'],
    imageKey: 'mobile-bank',
    href: '/projects/mobile-bank-2',
  },
  {
    title: '智慧健身膠囊 App',
    tags: ['UI/UX'],
    imageKey: 'smart-fitness',
    href: '/projects/smart-fitness',
  },
  {
    title: '2026 人才招募網',
    tags: ['UI/UX', '前端開發'],
    imageKey: 'hiring-web',
    href: '/projects/hiring-2026',
  },
  {
    title: '智慧閘道器後台系統',
    tags: ['UI/UX', '視覺設計'],
    imageKey: 'iot-backend',
    href: '/projects/iot-backend',
  },
  {
    title: '保足感平台',
    tags: ['UI/UX', '視覺設計'],
    imageKey: 'life-web',
    href: '/projects/vip-platform',
  },
];

export const skills: Skill[] = [
  {
    title: '用戶體驗設計',
    tags: ['User Flow', 'Maze'],
    description: '透過用戶研究、設計思維與互動設計，打造兼具美觀與高可用性的數位產品。',
  },
  {
    title: '介面規劃與設計',
    tags: ['Figma', 'Adobe Suite'],
    description: '從需求與使用情境出發，規劃資訊架構與操作流程，設計清楚易用的介面，並維持視覺與互動的一致性。',
  },
  {
    title: '前端開發',
    tags: ['HTML / CSS / JS', 'Vue.js'],
    description: '熟悉前端語言，處理互動邏輯與資料呈現；理解前端架構與元件化設計概念，讓設計落實於產品中。',
  },
];

export const homeContact = {
  title: '與我聯繫',
  description:
    '我很樂意接收各種想法或合作機會！可以透過以下方式聯繫我：',
  items: [
    {
      title: '電子郵件',
      label: 'timmyk408b@gmail.com',
      value: 'timmyk408b@gmail.com',
      href: 'mailto:timmyk408b@gmail.com',
      copyLabel: '複製郵件',
      actionLabel: '前往寄件',
      actionIcon: '/Image/Home/contact/envelope.svg',
    },
    {
      title: '聯絡電話',
      label: '0962002655',
      value: '0962002655',
      href: 'tel:0962002655',
      copyLabel: '複製號碼',
      actionLabel: '撥打電話',
      actionIcon: '/Image/Home/contact/phone.svg',
    },
  ] satisfies ContactItem[],
};
