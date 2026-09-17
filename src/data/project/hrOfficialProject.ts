import type { ProjectContentSectionData } from '../../types/project';
import { projectsBySlug } from '../projects';

const hrOfficialProject = projectsBySlug['hr-official'];
const assetPath = '/Image/Project/hr-web';

export const hrOfficialCover = {
  src: `${assetPath}/project-cover.webp`,
  mobileSrc: `${assetPath}/project-cover_m.webp`,
  alt: '人力資源網專案主視覺',
  width: 5760,
  height: 1440,
};

export const hrOfficialHero = {
  tags: hrOfficialProject.detailTags ?? hrOfficialProject.tags,
  title: hrOfficialProject.detailTitle ?? hrOfficialProject.title,
  year: '2025',
  showAction: true,
  actionLabel: '前往網站',
  actionHref: 'https://pse.is/9mgr5x',
};

export const hrOfficialGoals = {
  title: '設計目標',
  introduction:
    '這次優化希望將公司的人才理念轉化為具體且容易理解的內容，讓不同背景的用戶都能找到與自身需求相關的資訊。',
  goals: [
    {
      number: '01',
      title: '點出集團品牌價值',
      description:
        '清楚呈現集團提供的職涯環境，讓用戶快速先理解企業待遇。',
    },
    {
      number: '02',
      title: '聚焦傳達人才發展制度',
      description:
        '重點揭露集團培育架構，突顯公司對於員工的成長支持。',
    },
    {
      number: '03',
      title: '整合多元人才入口',
      description:
        '囊括子公司職缺入口，降低資訊比較與跨站查找成本。',
    },
  ],
  density: 'compact' as const,
  accentColor: '#d7cfb7',
  backgroundColor: '#005bac',
  headingColor: '#d7cfb7',
  textColor: '#fff',
};

export const hrOfficialContentSections: ProjectContentSectionData[] = [
  {
    title: '專案背景',
    introduction: [
      '金控人力資源網是對外傳達集團人才理念與發展制度的重要平台。但因資訊量龐大且層級關係不夠清楚，用戶難以快速掌握內容脈絡；介面元件的樣式與操作規則也缺乏一致性，整體視覺與集團品牌形象存在明顯差異。',
    ],
    image: {
      src: `${assetPath}/pc-1.webp`,
      alt: '舊版人力資源網桌機與行動版介面',
      width: 2880,
      height: 1680,
    },
    conclusion:
      '本次設計重新梳理不同性質的人力資源資訊，統一介面元件與視覺語言，並透過資訊視覺化聚焦重點訊息。讓用戶能從企業文化開始認識，再逐步了解職涯發展、員工照護，同時強化網站與集團品牌的一致性。',
    density: 'caption',
  },
  {
    title: '以品牌敘事建立人才理念',
    introduction: [
      '首頁以集團 Slogan 作為溝通主軸，從公司的金融版圖與發展規模切入，傳達員工能在多元事業體中累積專業並拓展職涯的價值；透過清楚的主標與段落層級，結合主視覺周圍的線段動畫，傳達公司對於人才年輕化的重視與目標。',
    ],
    image: {
      src: `${assetPath}/pc-2.webp`,
      alt: '人力資源網新版品牌敘事與響應式首頁',
      width: 2880,
      height: 1680,
    },
  },
  {
    title: '一站式整合跨集團職缺引導入口',
    introduction: [
      '集團旗下共有五間子公司，每一間公司都有強調的召募計畫，因此設計上以標籤突顯計畫所需的技能及產業類別，同時每張計畫卡片都能引導至人才招募網中對應的頁面，讓用戶可以更詳細地了解計畫內容與待遇。',
    ],
    image: {
      src: `${assetPath}/pc-3.webp`,
      alt: '集團招募計畫的桌機與行動版卡片介面',
      width: 2880,
      height: 1680,
    },
  },
  {
    title: '',
    introduction: [
      '除了重點召募外，在下方集團職缺區塊中，呈現子公司常態性職缺的入口。用戶不必透過搜尋引擎逐一查找。這項設計也保留各子公司原有召募系統，不需強制整併後端資料，降低平台改造成本。',
    ],
    image: {
      src: `${assetPath}/pc-4.webp`,
      alt: '金控及各子公司職缺查詢入口',
      width: 2880,
      height: 1680,
    },
    density: 'tight',
  },
  {
    title: '將人才培育轉化為清楚的職涯路徑',
    introduction: [
      '集團的人才培育涵蓋不同職級與專業發展方向，從基層同仁到高階主管，各階段都有相應的培育內容。',
    ],
    image: {
      src: `${assetPath}/pc-5.webp`,
      alt: '人力資源網人才培育職涯路徑',
      width: 2880,
      height: 1680,
    },
    conclusion:
      '將抽象的制度轉化為視覺架構，讓用戶能看見職級能力與發展方向的關係，使用戶更具體地瞭解人才如何在組織內持續成長。',
    density: 'caption',
  },
  {
    title: '整合五大學習領域，呈現持續成長資源',
    introduction: [
      '將企業內部學習資源重新整理，相較於直接列出大量課程，五大分類能先建立清楚的學習輪廓，讓用戶快速理解公司不只重視金融專業，也關注其他跨領域職能。',
    ],
    image: {
      src: `${assetPath}/pc-6.webp`,
      alt: '人力資源網五大學習領域內容模組',
      width: 2880,
      height: 1680,
    },
    density: 'tight',
  },
  {
    title: '簡化制度規章，員工權益一目瞭然',
    introduction: [
      '健康福祉透過生活情境重新組織福利內容，用戶不必逐條閱讀制度，也能理解各項福利措施與權益。',
    ],
    image: {
      src: `${assetPath}/pc-7.webp`,
      alt: '人力資源網員工健康福祉響應式頁面',
      width: 2880,
      height: 1680,
    },
    density: 'tight',
  },
  {
    title: '專案成果',
    introduction: [
      '新版人力資源網將原本性質不同的內容，重整為具有連續閱讀脈絡的人力資源平台。用戶能從企業理念開始，逐步了解人才培育、學習資源與員工照護，最後再依照自身背景選擇合適的召募計畫或子公司職缺。',
    ],
    image: {
      src: `${assetPath}/pc-8.webp`,
      alt: '人力資源網跨頁面響應式設計成果',
      width: 2880,
      height: 1680,
    },
    conclusion:
      '透過資訊視覺化與模組化，複雜的人才制度變得更容易理解，各項召募計畫也具備一致的比較規則。響應式版型則補足不同裝置的瀏覽情境，使人力資源網能同時支援品牌傳達、制度介紹與職缺引導，也為未來更新計畫與人力資源內容保留擴充彈性。',
    density: 'caption',
  },
];
