import type {
  ProjectContentSectionData,
  ProjectGoalItem,
  ProjectResultItem,
} from '../../types/project';
import { projectsBySlug } from '../projects';

export const smartFitnessAssetPath = '/Image/Project/smart-fitness-detail';
const smartFitnessProject = projectsBySlug['smart-fitness'];

export const smartFitnessHero = {
  tags: smartFitnessProject.detailTags ?? smartFitnessProject.tags,
  title: smartFitnessProject.detailTitle ?? smartFitnessProject.title,
  showAction: false,
};

export const smartFitnessCover = {
  src: `${smartFitnessAssetPath}/project-cover.webp`,
  mobileSrc: `${smartFitnessAssetPath}/project-cover_m.webp`,
  alt: 'OSPACE 智慧健身膠囊品牌主視覺',
  width: 5760,
  height: 1440,
};

export const smartFitnessGoals: ProjectGoalItem[] = [
  {
    number: '01',
    title: '提升會員服務黏著度',
    description: '透過會員管理方案，將單次場館使用延伸為持續性的健身服務。',
  },
  {
    number: '02',
    title: '串聯完整的健身旅程',
    description: '整合場館探索、方案購買與訓練紀錄，打造流暢的使用流程',
  },
  {
    number: '03',
    title: '整合多元訓練設備數據',
    description: '統一不同設備的數據格式，集中呈現完整的訓練紀錄。',
  },
];

export const smartFitnessResults: ProjectResultItem[] = [
  {
    title: '串聯數位與實體體驗',
    description: '完善健身預約旅程，讓Ospace成為線上服務與健身場館的核心入口。',
  },
  {
    title: '整合複雜邏輯的會員加值功能',
    description: '梳理複雜會員邏輯，建立清楚的選擇與付款流程，提升會員黏著度。',
  },
  {
    title: '簡化多元 IoT 設備控制介面',
    description: '將多種設備整理為共用的控制模式，清楚呈現狀態，並保留加入新設備的延伸空間。',
  },
];

export const smartFitnessGoalsSection = {
  title: '設計目標',
  introduction:
    'Ospace的體驗同時發生在線上與實體空間，App不只是預約工具，也需要處理健身數據、會員管理與金流串接等需求。透過Ospace串起每個旅程節點，用戶能從健身需求開始，銜接至預約、進場與完成訓練，完成一條龍服務；品牌也能透過會員方案、教練服務或運動數據，持續經營後續與客群開發。',
  goals: smartFitnessGoals,
  accentColor: '#169b49',
  backgroundImage: `${smartFitnessAssetPath}/goal-bg.webp`,
  conclusion:
    'Ospace從會員經營、服務旅程與產品延展三個面向建構，以會員方案與訓練紀錄延續使用關係，串聯場館探索與健身管理，同時建立容納不同設備與數據的系統架構。',
  conclusionPosition: 'after' as const,
  density: 'compact' as const,
};

export const smartFitnessContentSections: ProjectContentSectionData[] = [
  {
    title: '專案背景',
    introduction: [
      '都市生活節奏與運動習慣逐漸分散，用戶對健身空間的需求也不再只集中於大型場館。使用時間是否彈性與保有隱私，成為重要課題；空間能否鄰近生活範圍，產生新的服務機會。',
    ],
    image: {
      src: `${smartFitnessAssetPath}/pc-1.webp`,
      alt: 'OSPACE 智慧健身膠囊場館內部',
    },
    conclusion:
      'Ospace以全天候與預約制的智慧健身膠囊切入市場，將私人運動空間部署於不同生活場域，透過數位服務承接預約、付款、入場與訓練管理，有別於傳統健身房的服務模式。',
    density: 'compact',
    imageFit: 'cover',
    imageHeight: 560,
  },
  {
    title: '智慧健身服務架構',
    introduction: [
      'Ospace作為智慧健身服務的主要入口，整合多項功能讓用戶從選擇健身地點到完成運動，都能在同一套流程中進行。',
    ],
    image: {
      src: `${smartFitnessAssetPath}/pc-2.webp`,
      alt: 'OSPACE 智慧健身服務架構示意',
    },
    conclusion:
      '進入場館後，App透過Gateway控制門鎖、燈光、空調或健身器材，並將設備狀態與健身數據同步至雲端平台，進一步支援目標分析，形成涵蓋數位操作與實體場館的智慧健身服務。',
    density: 'compact',
  },
  {
    title: '讓健身更簡單、更快速',
    introduction: [
      '為了讓用戶更快速登入使用App，可以社群帳號綁定登入，減少註冊時的操作負擔；首次使用時則透過偏好設定蒐集健身類型、時段與地區，作為後續個人化內容的依據。首頁集中呈現會員管理、推薦內容與場館預約，登入後即可掌握重點資訊。',
    ],
    image: {
      src: `${smartFitnessAssetPath}/pc-3.webp`,
      alt: '支援社群登入、個人喜好設定與關鍵資訊介面',
    },
    details: [
      {
        title: '支援社群登入',
        description: '社群帳號綁定登入，縮短註冊時流程，讓新用戶更快開始使用。',
      },
      {
        title: '個人喜好設定',
        description: '搜集用戶偏好項目，建立符合個人需求的內資訊呈現。',
      },
      {
        title: '突顯關鍵資訊',
        description: '將重點訊息集中於首頁，減少功能切換與資訊查找。',
      },
    ],
    detailMarkerColor: '#169b49',
    density: 'compact',
  },
  {
    title: '場館探索與預約',
    introduction: [
      '為了協助用戶快速找到符合需求的健身空間，我將場館相關資訊重新梳理，並依照「探索、篩選、比較」的決策順序規劃。用戶可先瀏覽鄰近場館，再透過地區與器材條件縮小範圍，同時比較不同人數與使用方案的費用，減少反覆切換頁面的困擾。',
    ],
    image: {
      src: `${smartFitnessAssetPath}/pc-4.webp`,
      alt: 'OSPACE 場館探索、設備條件與費用總覽介面',
    },
    details: [
      {
        title: '設備條件篩選',
        description: '依地區與訓練器材設定篩選條件，讓用戶快速找到符合運動需求的空間。',
      },
      {
        title: '場館費用總覽',
        description: '統整場館相關費用，在預約前即可清楚瞭解。',
      },
    ],
    detailMarkerColor: '#169b49',
    density: 'compact',
  },
  {
    title: '點數與會員方案購買',
    introduction: [
      '整合會員儲值與方案選擇，讓用戶可清楚比較方案，確認購買金額並付款。交易成功後即時更新點數或會員狀態，並提供場館預約入口。',
    ],
    video: {
      src: `${smartFitnessAssetPath}/vd-5.mov`,
      title: 'OSPACE 會員方案、點數加值與付款流程',
      autoplayOnView: true,
      controls: false,
      muted: true,
      scale: 1.025,
      width: 1886,
      height: 1094,
    },
    conclusion:
      'Ospace 提供點數儲值與會員方案兩種購買方式，我將方案內容做為重點資訊呈現；付款階段加入安全驗證，降低交易風險；完成購買後則立即顯示新增點數與可預約場館，讓用戶直接延續至下一步使用服務。',
    density: 'compact',
  },
  {
    title: '多元預約與行程管理',
    introduction: [
      '將場館、教練與課程整合於單一預約入口，讓用戶能依需求選擇服務，完成預約設定，並於送出前確認完整資訊。同時依「即將開始、已完成、已取消」分門別類，輕鬆掌握目前行程與安排下一次訓練。',
    ],
    image: {
      src: `${smartFitnessAssetPath}/pc-6.webp`,
      alt: 'OSPACE 場館、課程、教練預約與預約紀錄介面',
    },
    details: [
      {
        title: '預約與課程總覽',
        description: '即將到來的預約以卡片重點呈現，讓用戶快速掌握行程。',
      },
      {
        title: '多工預約入口',
        description: '整合場館、教練與課程的多功能入口，依需求快速進行預約。',
      },
      {
        title: '預約紀錄狀態',
        description: '依照即將開始、已完成與已取消分類預約紀錄，協助用戶清楚查看各項行程與狀態。',
      },
    ],
    detailMarkerColor: '#169b49',
    density: 'compact',
  },
  {
    title: '智慧場館控制與訓練管理',
    introduction: [
      '場館的規劃重點，是依照用戶進入健身膠囊的過程，串聯時段、權限、設備與數據。系統會根據當下狀態開放對應功能，讓用戶從抵達到完成運動，都能透過App掌握場館情況；訓練結束後，呈現健身成果與趨勢查看，使Ospace成為連接實體場館與個人運動管理的核心工具。',
    ],
    video: {
      src: `${smartFitnessAssetPath}/vd-7.mov`,
      title: 'OSPACE IoT 場館控制與運動數據流程',
      autoplayOnView: true,
      controls: false,
      muted: true,
      scale: 1.025,
      width: 1914,
      height: 1102,
    },
    density: 'compact',
  },
  {
    title: '專案成果',
    introduction: [
      'Ospace 是一套自動化健身管理的數位服務。設計面囊括各種功能，將數位平台、實體場館與 IoT 設備串聯，使用戶能從加入會員一路完成健身，品牌也能透過會員與教練服務持續經營。',
    ],
    image: {
      src: `${smartFitnessAssetPath}/pc-8.webp`,
      alt: 'OSPACE 完整介面設計成果總覽',
    },
    details: smartFitnessResults,
    detailMarkerColor: '#169b49',
    density: 'results',
  },
];
