import { projectsBySlug } from '../projects';
import type { ProjectContentSectionData } from '../../types/project';

const lifePlatformProject = projectsBySlug['vip-platform'];
const assetPath = '/Image/Project/life-platform';

export const lifePlatformCover = {
  src: `${assetPath}/project-cover.webp`,
  mobileSrc: `${assetPath}/project-cover_m.webp`,
  alt: '人壽保足感平台專案主視覺',
  width: 5760,
  height: 1440,
};

export const lifePlatformHero = {
  tags: lifePlatformProject.detailTags ?? lifePlatformProject.tags,
  title: lifePlatformProject.detailTitle ?? lifePlatformProject.title,
  year: '2024',
  showAction: true,
  actionLabel: '前往網站',
  actionHref: 'https://pse.is/9mgr9f',
};

export const lifePlatformGoals = {
  title: '設計目標',
  introduction:
    '保險商品涵蓋大量專業術語，用戶需要花費不少時間閱讀，也容易因資訊繁雜而降低投保意願。保足感平台希望透過故事化與角色 IP，將抽象的保險觀念轉化為更貼近生活的閱讀體驗，降低理解門檻，同時建立鮮明的品牌形象，提升品牌記憶與參與感。',
  goals: [
    {
      number: '01',
      title: '降低保險內容的理解門檻',
      description:
        '以生活情境切入，搭配插圖將保障內容轉換為容易閱讀的資訊。',
    },
    {
      number: '02',
      title: '建立清楚的投保引導',
      description:
        '揭露投保前可能產生的疑問，減少資訊中斷與操作猶豫。',
    },
    {
      number: '03',
      title: '強化數位服務的品牌傳遞',
      description:
        '塑造可靠且親民的角色形象，作為品牌服務與線上投保的入口。',
    },
  ],
  density: 'compact' as const,
  accentColor: '#3b64a6',
  backgroundImage: `${assetPath}/goal-bg.webp`,
  textColor: '#323232',
};

export const lifePlatformContentSections: ProjectContentSectionData[] = [
  {
    title: '專案背景',
    introduction: [
      '隨著遠距投保逐漸成為保險業的發展趨勢，用戶對於線上獲取保險資訊的需求也日益提升。現有保險商品頁面多以條款與大量文字呈現，難以在短時間內掌握保障內容。',
      '因此保足感平台以情境故事為核心，結合互動與品牌設計，降低保險知識的理解門檻，提升品牌識別與產品溝通效率。',
    ],
    density: 'compact',
  },
  {
    title: '建立品牌角色，拉近與客戶的距離',
    introduction: [
      '保足感平台以「元先生家族」作為品牌核心，透過不同年齡層與家庭成員的設定，對應人生各階段可能面臨的保障需求，將保險知識轉化為更貼近生活的情境，建立具有親和力與記憶點的品牌 IP。',
    ],
    image: {
      src: `${assetPath}/pic-1.webp`,
      alt: '保足感平台跨世代角色設計',
      width: 2880,
      height: 1560,
    },
    density: 'compact',
  },
  {
    title: '將角色融入網站體驗',
    introduction: [
      '元先生家族是網站的核心引導者，透過角色故事的情境插圖，將保險觀念自然融入商品說明，讓用戶在閱讀時逐步理解保障內容，降低資訊理解門檻。',
    ],
    image: {
      src: `${assetPath}/pic-2.webp`,
      alt: '人壽保足感平台品牌主視覺',
      width: 2880,
      height: 1560,
    },
    density: 'compact',
  },
  {
    title: '人生情境分類，建立專屬保險旅程',
    introduction: [
      '保險需求會隨著人生階段而有所不同，因此以「小資族」、「數位生活族」及「高資產傳承族」為切入點，透過生活引導用戶找到符合自身需求的保障方案。',
    ],
    image: {
      src: `${assetPath}/pic-3.webp`,
      alt: '保足感平台三類目標客群設計',
      width: 2880,
      height: 1680,
    },
    density: 'compact',
  },
  {
    title: '突顯平台價值，解除用戶疑惑',
    introduction: [
      '數位投保雖然提供便利的服務模式，但用戶在初次接觸時，仍可能對平台的可靠性與投保流程產生疑慮，因此以「保費透明、商品透明、投保簡便」三大核心價值為主軸，以圖像化設計重點呈現，快速建立平台信任感。',
    ],
    image: {
      src: `${assetPath}/pic-4.webp`,
      alt: '保足感平台三項核心優勢與商品比較',
      width: 2880,
      height: 1680,
    },
    conclusion:
      '區塊底部設置 CTA，引導用戶在理解特色後，順勢進入商品頁，建立由品牌認識、信任到商品探索的流程。',
    density: 'compact',
  },
  {
    title: '建立差異化，降低決策成本',
    introduction: [
      '「新選擇」區塊透過表格呈現，將保足感平台與一般保險商品進行多面向比較，協助用戶理解平台優勢。傳統投保流程通常需要多次與業務往返溝通，數位投保模式則整合商品瀏覽、線上試算、遠距投保及電子簽章等，讓用戶能更快速完成投保流程，提升整體投保效率與便利性。',
    ],
    image: {
      src: `${assetPath}/pic-5.webp`,
      alt: '保足感平台商品與投保流程比較',
      width: 2880,
      height: 1680,
    },
    conclusion:
      '商品與流程的比較將保足感的核心價值具體化，打造更流暢且具說服力的數位投保體驗。',
    density: 'compact',
  },
  {
    title: '圖像化投保流程，提升投保信心',
    introduction: [
      '數位投保除了提供便利的服務，更重要的是讓用戶清楚理解每個操作階段。投保流程重新拆解為三個主要步驟，並以圖像化設計呈現，同時整合遠距投保與業務協助兩種服務模式，引導用戶依需求選擇合適的投保方式。',
    ],
    image: {
      src: `${assetPath}/pic-6.webp`,
      alt: '保足感平台三步驟投保流程與常見問答',
      width: 2880,
      height: 1680,
    },
    density: 'compact',
  },
  {
    title: '專案成果',
    introduction: [
      '重新梳理平台內容與投保資訊，將原本分散、難懂的保險服務，整合為簡單易懂的服務平台。用戶可以依序認識服務特色與比較投保方式，讓投保旅程更容易掌握。',
    ],
    image: {
      src: `${assetPath}/pic-7.webp`,
      alt: '保足感平台桌機與行動版響應式成果',
      width: 2880,
      height: 1680,
    },
    details: [
      {
        title: '降低保險資訊的理解門檻',
        description:
          '搭配生活化情境與圖像說明，減少專業名詞造成的閱讀負擔，讓用戶能更快掌握各項服務的用途與差異。',
      },
      {
        title: '強化保險服務的信任感',
        description:
          '以明確的資訊層級與一致的品牌溝通，讓用戶感受到服務的透明度與專業性，進一步提升對數位投保服務的黏著度。',
      },
    ],
    detailMarkerColor: '#3b64a6',
    density: 'results',
  },
];
