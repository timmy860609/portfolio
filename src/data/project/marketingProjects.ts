export type MarketingProject = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
};

export const marketingCollectionCover = {
  src: '/Image/Project/marketing-page-detail/project-cover.webp',
  mobileSrc: '/Image/Project/marketing-page-detail/project-cover_m.webp',
  alt: '行銷網頁合輯專案主視覺',
  width: 5760,
  height: 1440,
};

export const marketingCollectionYear = '2022-2026';

export const marketingProjects: MarketingProject[] = [
  {
    title: '全支付｜秋日輕消費',
    description: '配色以明亮的黃色營造輕快氛圍，生活化的購物插畫則帶出秋日消費情境，讓優惠訊息更顯親切。',
    tags: ['前端開發'],
    image: '/Image/Project/marketing-page-detail/px-pay.webp',
    href: 'https://pse.is/9mgrjs',
  },
  {
    title: '智能客服｜24小時不打烊',
    description: '藍色漸層結合數位圖形，傳達科技與信賴感；企業品牌角色則讓智能服務保有親民印象。',
    tags: ['UIUX', '視覺設計'],
    image: '/Image/Project/marketing-page-detail/24h-service.webp',
    href: 'https://pse.is/9mgrl8',
  },
  {
    title: 'LINE個人化服務｜專屬即時交易通知',
    description: '以手機畫面為核心訊息，周圍的通知圖形模擬資訊即時送達，直觀呈現隨時掌握交易動態的服務特色。',
    tags: ['UIUX', '視覺設計'],
    image: '/Image/Project/marketing-page-detail/line-personal.webp',
    href: 'https://pse.is/9mgrnn',
  },
  {
    title: '快馬貸｜線上申請超輕鬆',
    description: '快馬象徵申請效率，向前奔馳的動勢則強化速度感，讓「快速完成線上申請」成為鮮明的視覺記憶。',
    tags: ['前端開發'],
    image: '/Image/Project/marketing-page-detail/fast-horse.webp',
    href: 'https://pse.is/9mgrql',
  },
  {
    title: '小龍吐金｜１萬元享優惠利率',
    description: '從生肖與招財意象延伸活動主題，醒目題字結合金幣動態，讓優惠利率兼具節慶話題性與辨識度。',
    tags: ['前端開發'],
    image: '/Image/Project/marketing-page-detail/dragon-money.webp',
    href: 'https://pse.is/9mgrs3',
  },
  {
    title: 'iMoney App｜口袋Money Money',
    description: '將借款服務包裝成隨身可用的資金方案，拉近金融產品與日常需求的距離。',
    tags: ['前端開發'],
    image: '/Image/Project/marketing-page-detail/imoney-app.webp',
    href: 'https://pse.is/9mgrte',
  },
  {
    title: '省利貸｜降息囉！',
    description: '從「減少利息負擔」的直接利益出發，透過存股情境將降息效果具體化，讓用戶快速理解產品能帶來的幫助。',
    tags: ['UIUX', '前端開發', '視覺設計'],
    image: '/Image/Project/marketing-page-detail/rate-down.webp',
    href: 'https://pse.is/9mgrv9',
  },
];
