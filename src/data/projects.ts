export const projectCategories = [
  '全部',
  '數位金融',
  'IoT應用',
  '品牌形象',
  '會員服務',
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, '全部'>;
  additionalCategories?: Exclude<ProjectCategory, '全部'>[];
  tags: string[];
  image: string;
  description: string;
  detailTitle?: string;
  detailTags?: string[];
  showInGallery?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'smart-fitness',
    title: '智慧健身膠囊',
    category: 'IoT應用',
    tags: ['UIUX'],
    image: '/Image/Project/project-cover/smart-fitness.webp',
    description: '以智慧設備串聯健身服務，整合場館預約、訓練內容與會員體驗，打造直覺便利的運動平台。',
    detailTitle: 'OSPACE｜智慧健身膠囊 App',
    detailTags: ['UIUX', '視覺設計'],
  },
  {
    slug: 'mobile-bank-2',
    title: '行動銀行 2.0',
    category: '數位金融',
    tags: ['UIUX', '視覺設計'],
    image: '/Image/Project/project-cover/mobile-bank.webp',
    description: '重新梳理行動金融服務與資訊架構，讓日常查詢、轉帳與理財操作更加清楚流暢。',
    detailTitle: '行動銀行2.0｜為你多想一點',
    detailTags: ['UIUX', '視覺設計'],
  },
  {
    slug: 'open-account',
    title: '線上開戶平台',
    category: '數位金融',
    tags: ['UIUX', '視覺設計'],
    image: '/Image/Project/open-account/project-cover_m.webp',
    description:
      '重新梳理線上開戶、預約開戶與帳戶升級流程，以清楚分流及一致的驗證架構降低金融申請負擔。',
    detailTitle: '線上開戶平台｜在家開戶免煩惱',
    detailTags: ['UIUX', '視覺設計'],
  },
  {
    slug: 'vip-member-platform',
    title: 'VIP會員平台',
    category: '會員服務',
    tags: ['視覺設計', '視覺設計'],
    image: '/Image/Project/project-cover/vip-platform.webp',
    description:
      '新規劃會員服務流程與資訊架構，提供更直覺的權益查詢、活動管理與專屬服務體驗。',
    detailTitle: 'VIP 會員平台｜質感生活，為你所選',
    detailTags: ['UIUX', '視覺設計'],
  },
  {
    slug: 'hiring-2026',
    title: '2026 人才召募網',
    category: '品牌形象',
    tags: ['UIUX', '前端開發'],
    image: '/Image/Project/project-cover/hiring-web.webp',
    description: '整合職缺資訊與品牌溝通，以一致的數位體驗協助人才快速理解職涯機會。',
  },
  {
    slug: 'job-platform',
    title: '履歷平台',
    category: '會員服務',
    tags: ['UIUX', '前端開發'],
    image: '/Image/Project/project-cover/job-platform.webp',
    description:
      '重新整理職缺資訊、履歷建立與投遞流程，建立可跨裝置使用且能持續擴充的集團履歷平台。',
    detailTitle: '金控履歷平台｜求職一站搞定',
    detailTags: ['UIUX', '前端開發'],
  },
  {
    slug: 'hr-official',
    title: '人力資源網',
    category: '品牌形象',
    tags: ['UIUX', '前端開發'],
    image: '/Image/Project/project-cover/hr-offical.webp',
    description: '提升集團人才招募體驗，整合多項招募計畫，建立一致的品牌形象與資訊架構。',
    detailTitle: '人力資源網｜加入我們，一起強大',
    detailTags: ['UIUX', '前端開發'],
  },
  {
    slug: 'vip-platform',
    title: '保足感平台',
    category: '數位金融',
    tags: ['UIUX', '視覺設計'],
    image: '/Image/Project/project-cover/life-platform.webp',
    description: '以故事化與情境式內容將保險觀念融入生活情境，打造兼具品牌溝通與使用體驗的數位行銷網站。',
    detailTitle: '人壽保足感平台',
  },
  {
    slug: 'iot-backend',
    title: '智慧閘道器後台系統',
    category: 'IoT應用',
    tags: ['UIUX', '視覺設計'],
    image: '/Image/Project/project-cover/iot-backend.webp',
    description: '建立集中化管理平台，整合設備資訊、系統設定與監控功能，提升設備維護效率。',
    detailTitle: '智慧閘道器後台管理系統',
  },
  {
    slug: 'insurance-marketing',
    title: '行銷網頁合輯',
    category: '品牌形象',
    tags: ['UIUX', '前端開發', '視覺設計'],
    image: '/Image/Project/project-cover/marketing-page.webp',
    description: '精選多項行銷活動網站，透過品牌視覺、互動設計與響應式體驗，提升品牌曝光與活動轉換成效。',
  },
];

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
) as Record<string, Project>;
