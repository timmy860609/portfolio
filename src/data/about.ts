export type AboutStat = {
  value: string;
  label: string;
};

export type AboutExperienceProject = {
  title: string;
  year: string;
  tags: string[];
  image: string;
  imageAlt: string;
  imageType?: 'phone' | 'brand' | 'office';
  backgroundImage?: string;
};

export type AboutExperience = {
  company: string;
  companyLogo: string;
  role: string;
  roleImage?: string;
  period: string;
  description: string;
  projects: AboutExperienceProject[];
};

export const aboutHero = {
  logo: '/WebCI/ci-logo.svg',
  logoAlt: 'Timmy Lee',
  portrait: '/Image/About/profile.webp',
  portraitAlt: 'Timmy Lee 個人照片',
  introduction:
    '專注數位產品體驗與視覺落地，從需求規劃、UI/UX 設計到前端實作，讓設計不只停留在畫面。',
  stats: [
    {
      value: '40+',
      label: '專案經驗',
    },
    {
      value: '5+ yrs',
      label: '設計經驗',
    },
    {
      value: '3 yrs',
      label: '前端經驗',
    },
  ] satisfies AboutStat[],
};

export const aboutExperienceSection = {
  title: '工作經驗',
  description:
    '從接案累積多元專案經驗，歷經 IoT 產品規劃後進入金融產業，持續深化 UI/UX、視覺設計與前端落地能力。',
  experiences: [
    {
      company: '方閣設計',
      companyLogo: '/Image/About/experience/fangge-logo.svg',
      role: '個人接案',
      period: '2021/02–2026/02',
      description:
        '在學期間創立「方閣設計」進行接案，從需求溝通到設計執行累積跨領域經驗，並逐步拓展至金融與運動科技等產業，確立投入數位產品設計的方向。',
      projects: [
        {
          title: '嘉立富財富管理 App',
          year: '2021',
          tags: ['UI/UX'],
          image: '/Image/About/experience/wealth.png',
          imageAlt: '嘉立富財富管理 App 畫面',
        },
        {
          title: 'TPVL 臺灣職排官網',
          year: '2025',
          tags: ['專案規劃'],
          image: '/Image/About/experience/tpvl.png',
          imageAlt: 'TPVL 臺灣職業排球聯賽官網畫面',
        },
        {
          title: '桃園飛將雲豹隊徽',
          year: '2025',
          tags: ['視覺設計'],
          image: '/Image/About/experience/leopard-logo.svg',
          imageAlt: '桃園飛將雲豹隊徽',
          imageType: 'brand',
          backgroundImage: '/Image/About/experience/leopard-bg.png',
        },
      ],
    },
    {
      company: '晶錡微電子',
      companyLogo: '/Image/About/experience/acs-logo.svg',
      role: '晶錡微電子',
      period: '2021/10–2022/08',
      description:
        '參與各式裝置之使用者介面設計與專案規劃，協助不同產業運用物聯網系統提高空間營運效能，透過使用者研究，分析用戶的需求及痛點，規劃平台系統與架構。',
      projects: [
        {
          title: 'OSPACE App',
          year: '2022',
          tags: ['UI/UX'],
          image: '/Image/About/experience/ospace.png',
          imageAlt: 'OSPACE App 畫面',
        },
        {
          title: '智慧閘道器後台管理系統',
          year: '2021',
          tags: ['UI/UX'],
          image: '/Image/About/experience/iot-back.png',
          imageAlt: '智慧閘道器後台管理系統畫面',
        },
        {
          title: '智慧商辦場域規劃與建置',
          year: '2021',
          tags: ['專案規劃'],
          image: '/Image/About/experience/office.jpg',
          imageAlt: '智慧商辦場域裝置操作',
          imageType: 'office',
        },
      ],
    },
    {
      company: '金控',
      companyLogo: '/Image/About/experience/fintech-logo.svg',
      role: '金控',
      roleImage: '/Image/About/experience/company-name.webp',
      period: '2022/09–Present',
      description:
        '負責金控旗下五大子公司的數位平台設計與開發，依業務需求規劃符合使用情境的操作介面，同時支援行銷視覺與前端開發。',
      projects: [
        {
          title: '行動銀行 2.0',
          year: '2022–2025',
          tags: ['UI/UX', '視覺設計'],
          image: '/Image/About/experience/mobile-bank.png',
          imageAlt: '行動銀行 2.0 App 畫面',
        },
        {
          title: '線上開戶平台',
          year: '2023',
          tags: ['UI/UX'],
          image: '/Image/About/experience/open-account.png',
          imageAlt: '線上開戶平台畫面',
        },
        {
          title: '集團設計系統',
          year: '2022–2026',
          tags: ['UI/UX', '前端開發'],
          image: '/Image/About/experience/design-system.png',
          imageAlt: '集團設計系統畫面',
        },
      ],
    },
  ] satisfies AboutExperience[],
};

export const aboutExpectations = {
  title: '自我期許',
  quote:
    '《為真實的世界而設計》（Victor Papanek，2013）：「設計不像其他學科，需要垂直鑽研；而是要水平發展，接觸各種不同的領域。」',
  subtitle:
    '期望持續深化 UI/UX 與前端落地能力，讓設計不只停留在畫面，而能真正回應需求並推動產品前進。未來也希望接觸更多不同產業的專案，透過跨領域合作累積更完整的產品思維，持續打造兼具體驗與價值的設計成果。',
  callout: '若你對我的經歷與作品感興趣，歡迎進一步聯繫交流。',
  contactHref: '/#contact',
  resumeHref: '/Image/About/portfolio.pdf',
  resumeDownload: 'portfolio.pdf',
};
