import type { ProjectContentSectionData } from '../../types/project';
import { projectsBySlug } from '../projects';

const vipMemberPlatformProject = projectsBySlug['vip-member-platform'];
const assetPath = '/Image/Project/vip-platform';

export const vipMemberPlatformCover = {
  src: `${assetPath}/project-cover.webp`,
  mobileSrc: `${assetPath}/project-cover-m.webp`,
  alt: 'VIP 會員平台桌機與行動版專案主視覺',
  width: 5760,
  height: 1440,
};

export const vipMemberPlatformHero = {
  tags:
    vipMemberPlatformProject.detailTags ?? vipMemberPlatformProject.tags,
  title:
    vipMemberPlatformProject.detailTitle ?? vipMemberPlatformProject.title,
  year: '2025',
  showAction: true,
  actionLabel: '前往網站',
  actionHref: 'https://reurl.cc/gNDqvR',
};

export const vipMemberPlatformGoals = {
  title: '設計目標',
  introduction:
    '重新定義會員平台的資訊架構，依使用需求歸納功能層級，解決既有入口重複及導覽關係不明的問題。同時導入響應式版型與一致的操作規則，讓用戶在不同裝置上都能快速確認會員狀態。',
  goals: [
    {
      number: '01',
      title: '重新梳理資訊層級',
      description: '整合重複入口，明確區分會員資訊與專屬服務。',
    },
    {
      number: '02',
      title: '強化會員狀態辨識',
      description: '重整會員權益，快速掌握個人權益。',
    },
    {
      number: '03',
      title: '完善跨裝置體驗',
      description:
        '導入響應式設計，維持桌機與手機一致的閱讀與操作體驗。',
    },
  ],
  density: 'compact' as const,
  backgroundImage: `${assetPath}/goal-bg.webp`,
  accentColor: '#fdf0c5',
  accentGradient:
    'linear-gradient(68deg, #FDF0C5 19.72%, #A89264 102.92%)',
  headingColor: '#fdf0c5',
  textColor: '#fff',
};

export const vipMemberPlatformContentSections: ProjectContentSectionData[] = [
  {
    title: '專案背景',
    introduction: [
      '舊版 VIP 會員平台未建立完整的響應式規則，導致內容難以適應不同螢幕尺寸，也限制了行動裝置上的瀏覽與操作。會員狀態相關服務也被放在同個大型主視覺中。雖然畫面同時傳達會員身分與服務內容，卻使資訊層級混亂，無法聚焦重點：目前是否具備 VIP 資格？擁有多少點數？可以使用哪些服務？',
    ],
    image: {
      src: `${assetPath}/pc-1.webp`,
      alt: '舊版 VIP 會員網站的主視覺、導覽與會員資格資訊',
      width: 2880,
      height: 1680,
    },
    density: 'tight',
  },
  {
    title: '由主視覺重新定義會員體驗',
    introduction: [
      '主視覺延續深藍與金色的品牌印象，保留 VIP 會員既有的尊榮感，透過俐落的幾何切面與細緻線條，讓整體風格更符合現代數位平台。',
    ],
    image: {
      src: `${assetPath}/pc-2.webp`,
      alt: 'VIP 會員平台深藍與金色品牌主視覺',
      width: 2880,
      height: 1680,
    },
    density: 'tight',
  },
  {
    title: '全新首頁層級，讓服務內容清楚呈現',
    introduction: [
      '首頁先透過主視覺建立 VIP 會員平台的品牌識別，也為會員資訊保留足夠的空間，用戶進入網站後能立即聚焦會員狀態與專屬服務。',
    ],
    image: {
      src: `${assetPath}/pc-3.webp`,
      alt: 'VIP 會員平台桌機與行動版首頁資訊層級',
      width: 2880,
      height: 1680,
    },
    density: 'tight',
  },
  {
    title: '依會員資格與點數狀態顯示對應資訊',
    introduction: [
      '登入後，系統會依照用戶是否具備 VIP 資格，以及是否有即將到期的點數，變更會員資訊。以下圖為例：除了會員星等與累積點數外，進一步顯示本年度到期點數，提醒會員於期限內使用。',
    ],
    image: {
      src: `${assetPath}/pc-4.webp`,
      alt: '登入後依 VIP 資格與到期點數切換的會員資訊',
      width: 2880,
      height: 1680,
    },
    density: 'tight',
  },
  {
    title: '',
    introduction: [
      '依照會員資格、星等、點數與到期情況，盤點可能出現的資料組合，並整理會員卡片在各種狀態下的顯示方式。透過欄位規則與資訊優先順序，讓用戶快速掌握目前資格與點數狀態。',
    ],
    image: {
      src: `${assetPath}/pc-5.webp`,
      alt: 'VIP 會員、非 VIP 會員及到期點數的三種卡片狀態',
      width: 2880,
      height: 1680,
    },
    density: 'tight',
  },
  {
    title: '重新組織資格資訊，清楚呈現會員制度',
    introduction: [
      '將資格說明重新梳理，透過頁籤區分資格指標，並以表格呈現，讓複雜的認定規則更容易掃讀，也能快速理解積分如何影響會員等級。',
    ],
    image: {
      src: `${assetPath}/pc-6.webp`,
      alt: 'VIP 會員資格、積分指標、會員星級與注意事項',
      width: 2880,
      height: 1680,
    },
    density: 'tight',
  },
  {
    title: '專案成果',
    introduction: [
      '本次改版除了更新品牌視覺，也梳理資訊架構，重新規劃首頁動線，同時盤點會員資料狀態；將複雜的積分指標轉化為容易查找的頁籤及表格，最後補足響應式版型、驗證流程與外部服務提示。',
    ],
    image: {
      src: `${assetPath}/pc-7.webp`,
      alt: 'VIP 會員平台跨頁面響應式設計成果',
      width: 2880,
      height: 1680,
    },
    density: 'tight',
  },
];
