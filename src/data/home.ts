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
    title: '數位產品設計',
    tags: ['Figma', 'Adobe Suite'],
    description: '透過用戶研究、設計思維與互動設計，打造兼具美觀與高可用性的數位產品。',
  },
  {
    title: '前端介面開發',
    tags: ['HTML / CSS / JS', 'Vue.js'],
    description: '熟悉前端基礎語言，注重響應式網頁設計，確保網站在不同裝置上都能維持一致的視覺與操作體驗。',
  },
  {
    title: 'AI 協作與輔助開發',
    tags: ['Skill', 'MCP'],
    description: '以 AI 將工作流程標準化，整合設計與開發，輔助分析設計規範、產出程式碼與驗證成果。',
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
