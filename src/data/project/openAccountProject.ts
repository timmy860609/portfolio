import type { ProjectContentSectionData } from '../../types/project';
import { projectsBySlug } from '../projects';

const openAccountProject = projectsBySlug['open-account'];
const assetPath = '/Image/Project/open-account';

export const openAccountCover = {
  src: `${assetPath}/project-cover.webp`,
  mobileSrc: `${assetPath}/project-cover_m.webp`,
  alt: '線上開戶平台桌機與行動版專案主視覺',
  width: 5760,
  height: 1440,
};

export const openAccountHero = {
  tags: openAccountProject.detailTags ?? openAccountProject.tags,
  title: openAccountProject.detailTitle ?? openAccountProject.title,
  year: '2024',
  showAction: true,
  actionLabel: '前往網站',
  actionHref: 'https://pse.is/9mgrzs',
};

export const openAccountGoals = {
  title: '設計目標',
  introduction:
    '這次以降低線上開戶的不確定感為目標，依身分條件顯示對應的驗證流程，並統一手機與桌機的操作回饋，讓用戶能順利完成開戶。',
  goals: [
    {
      number: '01',
      title: '流程可預期',
      description:
        '清楚呈現目前階段與所需資料，減少操作不確定感。',
    },
    {
      number: '02',
      title: '身分條件正確分流',
      description:
        '依申請身分與驗證方式顯示對應內容，避免無關資訊干擾。',
    },
    {
      number: '03',
      title: '操作一致性',
      description:
        '統一元件狀態回饋，使手機與桌機有相同的使用邏輯。',
    },
  ],
  density: 'compact' as const,
  backgroundColor: '#1e8bfa',
  accentColor: '#fff',
  headingColor: '#fff',
  textColor: '#fff',
};

export const openAccountContentSections: ProjectContentSectionData[] = [
  {
    title: '專案背景',
    introduction: [
      '銀行開戶涉及各式驗證及條款確認多項流程。不同的帳戶類型更會產生不同的操作路徑。當大量欄位與專有名詞出現在畫面中，用戶容易失去方向，也難以理解每個步驟的目的。因此，本次優化的核心在於建立清楚易懂的開戶架構。',
    ],
    density: 'tight',
  },
  {
    title: '選擇申辦方式後，開始開戶流程',
    introduction: [
      '首頁作為各項開戶服務的入口，透過分頁區分「數位帳戶、預約開戶與帳戶升級」，讓用戶先依需求選擇正確路徑。',
    ],
    image: {
      src: `${assetPath}/pic-1.webp`,
      alt: '線上開戶平台桌機與行動版首頁服務入口',
      width: 2880,
      height: 1680,
    },
    conclusion:
      '選定服務後，卡片會呈現服務特色與準備事項，並規劃引導讓用戶可以直接進入申請。',
    density: 'caption',
  },
  {
    title: '根據帳戶類型，同步顯示對應的檢核資料',
    introduction: [
      '將可進行開立的帳戶列在選項中，當用戶選定適合的帳戶後，欄位會直接切換為該帳戶的所需資料，用戶能直接進行填寫以利後續流程。',
    ],
    image: {
      src: `${assetPath}/pc-2.webp`,
      alt: '依帳戶類型顯示對應檢核資料的介面',
      width: 2880,
      height: 1680,
    },
  },
  {
    title: '選擇熟悉的方式，更快完成金融驗證',
    introduction: [
      '考量用戶持有的金融工具不同，平台提供銀行帳戶、信用卡及他行 Fast-ID 等驗證方式，並在選擇前說明各方式的適用條件。',
    ],
    image: {
      src: `${assetPath}/pc-3.webp`,
      alt: '銀行帳戶、信用卡與 Fast-ID 金融驗證流程',
      width: 2880,
      height: 1680,
    },
    conclusion:
      '選定方式後，畫面只顯示對應的輸入欄位與說明；Fast-ID 流程則整合 QR Code 與 App 引導按鈕，銜接跨平台身分驗證。',
    density: 'caption',
  },
  {
    title: '清楚引導拍攝，讓身分驗證更順利',
    introduction: [
      '進入 eKYC 前，優先說明證件擺放方式與注意事項，並用正確及錯誤範例協助用戶理解拍攝條件，減少驗證失敗的次數。',
    ],
    image: {
      src: `${assetPath}/pc-4.webp`,
      alt: 'eKYC 證件拍攝說明、定位與資料核對流程',
      width: 2880,
      height: 1680,
    },
    conclusion:
      '拍攝時透過辨識框引導證件定位，系統確認影像清晰後自動帶入資料，減少重複輸入並降低填寫錯誤率。',
    density: 'caption',
  },
  {
    title: '資料不漏填，申請進度清楚掌握',
    introduction: [
      '基本資料依個人資訊的類型進行拆頁設計，降低長表單帶來的閱讀負擔。於送出前統一呈現所填寫的內容，並保留分頁修改入口，讓用戶能快速檢查資料與修改。',
    ],
    image: {
      src: `${assetPath}/pc-5.webp`,
      alt: '基本資料填寫、送出確認與申請進度介面',
      width: 2880,
      height: 1680,
    },
    conclusion:
      '完成申請後，結果頁會說明目前申請狀態與後續流程，避免用戶誤以為帳戶已立即開通，讓開戶流程在送出後仍有清楚的下一步。',
    density: 'caption',
  },
  {
    title: '專案成果',
    introduction: [
      '全新線上開戶平台整合多種開戶方式，作為銀行全新的開戶服務入口。用戶能清楚掌握目前步驟，也能依自身條件選擇合適的帳戶開立。',
    ],
    image: {
      src: `${assetPath}/pc-6.webp`,
      alt: '線上開戶平台跨流程與響應式設計成果',
      width: 2880,
      height: 1680,
    },
    density: 'caption',
  },
];
