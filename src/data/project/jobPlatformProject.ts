import type { ProjectContentSectionData } from '../../types/project';
import { projectsBySlug } from '../projects';

const jobPlatformProject = projectsBySlug['job-platform'];
const assetPath = '/Image/Project/job-platform';

export const jobPlatformCover = {
  src: `${assetPath}/project-cover.webp`,
  mobileSrc: `${assetPath}/project-cover_m.webp`,
  alt: '履歷平台桌機與行動版專案主視覺',
  width: 5760,
  height: 1440,
};

export const jobPlatformHero = {
  tags: jobPlatformProject.detailTags ?? jobPlatformProject.tags,
  title: jobPlatformProject.detailTitle ?? jobPlatformProject.title,
  year: '2025',
  showAction: false,
};

export const jobPlatformGoals = {
  title: '設計目標',
  introduction:
    '這次履歷平台的主要目標為：優化資訊架構、履歷欄位與跨裝置體驗，讓用戶能在不同裝置上清楚瀏覽職缺，輕鬆完成履歷建立，並完成履歷投遞。',
  goals: [
    {
      number: '01',
      title: '強化資訊層級',
      description:
        '重新整理職缺資訊與操作功能，提升內容辨識度及查閱效率。',
    },
    {
      number: '02',
      title: '降低操作認知負荷',
      description:
        '透過分段架構與狀態提示，協助用戶快速掌握重點。',
    },
    {
      number: '03',
      title: '優化跨裝置體驗',
      description:
        '建立響應式版型，確保操作皆能在不同裝置上完成。',
    },
  ],
  density: 'compact' as const,
  backgroundColor: '#005bac',
  accentColor: '#fff',
  headingColor: '#fff',
  textColor: '#fff',
};

export const jobPlatformContentSections: ProjectContentSectionData[] = [
  {
    title: '專案動機',
    introduction: [
      '履歷平台專門用於集團的計畫型召募專案，由於不同年度的召募會有各自的職缺內容，平台除了要承載大量資訊，也必須讓用戶快速掌握應徵要求。',
      '然而，現有平台採固定寬度，缺少響應式設計，用戶透過手機操作時，需要頻繁縮放與左右拖曳。畫面又以表格和文字為主且缺乏清楚層級，冗長的履歷表單也沒有適當的分段引導。',
    ],
    image: {
      src: `${assetPath}/pc-1.webp`,
      alt: '舊版履歷平台的職缺列表、履歷表單與職缺說明',
      width: 2880,
      height: 1680,
    },
    density: 'caption',
  },
  {
    title: '技術落地：Web Component',
    introduction: [
      '履歷平台涵蓋大量功能與多種表單型態，為降低大型專案的重複開發與樣式衝突，採用 Custom Elements 封裝共通介面，並透過 Shadow DOM 隔離元件樣式，避免受全域 CSS 影響，確保設計一致性。',
    ],
    image: {
      src: `${assetPath}/pc-2.webp`,
      alt: 'Web Component、Custom Element 與 Shadow DOM 架構示意',
      width: 2880,
      height: 1680,
    },
  },
  {
    title: '登入頁整合招募視覺，延續活動品牌識別',
    introduction: [
      '登入頁作為應徵者接觸招募平台的首個入口，於畫面中加入當期召募活動的主視覺，讓平台與年度召募主題保持一致，也強化集團的品牌印象。',
    ],
    image: {
      src: `${assetPath}/pc-3.webp`,
      alt: '履歷平台桌機與行動版登入頁',
      width: 2880,
      height: 1680,
    },
  },
  {
    title: '重整職缺層級，提升跨裝置查閱效率',
    introduction: [
      '職缺列表以卡片條列呈現，協助用戶快速比較不同職務。已完成投遞的職缺同步顯示狀態，減少重複投遞履歷的問題。',
    ],
    image: {
      src: `${assetPath}/pc-4.webp`,
      alt: '履歷平台桌機與行動版職缺列表',
      width: 2880,
      height: 1680,
    },
    conclusion:
      '桌機版提供側邊功能導覽；行動版則將選單收納至導覽選單內，讓職缺資訊在不同裝置上都能維持清楚的閱讀層級。',
    density: 'caption',
  },
  {
    title: '重新梳理應徵流程，提升履歷效率',
    introduction: [
      '重整履歷投遞流程，用戶可以先確認職務條件，再選擇欲投遞的履歷，並填寫面談及報到時間。最後根據送出結果顯示應徵狀態。',
    ],
    image: {
      src: `${assetPath}/pc-5.webp`,
      alt: '職缺說明、履歷投遞與投遞結果流程',
      width: 2880,
      height: 1680,
    },
  },
  {
    title: '建立履歷管理機制，提升版本維護效率',
    introduction: [
      '將履歷狀態與常用操作設置於外層，並在名稱下方呈現最後更新時間及完成度，協助用戶快速掌握各版本的資料狀態。',
    ],
    image: {
      src: `${assetPath}/pc-6.webp`,
      alt: '履歷平台桌機與行動版履歷管理列表',
      width: 2880,
      height: 1680,
    },
  },
  {
    title: '優化履歷預覽版面，強化長篇資料的閱讀流暢度',
    introduction: [
      '依照資訊重要性與閱讀順序重整履歷內容，優先呈現個人概要，再銜接補充資訊。版面會根據顯示裝置寬度調整欄位排列，讓用戶能沿著閱讀動線快速掌握履歷重點。',
    ],
    image: {
      src: `${assetPath}/pc-7.webp`,
      alt: '履歷平台桌機與行動版履歷預覽',
      width: 2880,
      height: 1680,
    },
  },
  {
    title: '提升帳號資料維護效率與安全性',
    introduction: [
      '針對履歷建立與帳號資料更新，統一表單結構與操作回饋。若要新增履歷，用戶可沿用既有履歷內容；修改信箱或密碼時能夠取得即時驗證，降低重複填寫與設定錯誤，確保個人資料正確完成更新。',
    ],
    image: {
      src: `${assetPath}/pc-8.webp`,
      alt: '新建履歷、更新信箱與變更密碼介面',
      width: 2880,
      height: 1680,
    },
  },
  {
    title: '專案成果',
    introduction: [
      '全新履歷平台透過清楚的資訊層級與狀態回饋，讓用戶能快速理解職缺概要，清楚掌握履歷狀態與投遞進度。前端以 Web Components 搭配 Shadow DOM 完成元件化，讓新版介面能穩定整合既有系統。專案最終與 IT 團隊共同完成上線，也為後續不同年度的召募計畫建立可迭代的設計與開發基礎。',
    ],
    image: {
      src: `${assetPath}/pc-9.webp`,
      alt: '履歷平台多頁面響應式設計成果',
      width: 2880,
      height: 1680,
    },
  },
];
