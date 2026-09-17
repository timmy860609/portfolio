import type { ArticleDetailContentData } from '../types';

const imageRoot = '/Image/Articles/tpvl-web';

const image = (index: number, alt: string) => ({
  src: `${imageRoot}/pc-${index}.webp`,
  alt,
  width: 2880,
  height: 1680,
});

export const tpvlWebsiteContent: ArticleDetailContentData = {
  sections: [
    {
      title: '設計目標',
      paragraphs: [
        '作為台灣首個職業排球聯盟的官方數位入口，網站需要同時承擔品牌建立、賽事資訊發布與球迷服務。設計以聯盟識別為核心，整合賽程、戰績、球隊、球員與招募內容，並預留後續賽季與服務擴充的彈性。',
      ],
      goals: [
        {
          number: '01',
          title: '建立職業聯盟品牌形象',
          description:
            '以深綠、黑色與星芒元素建立鮮明的賽事識別，傳達職業排球的速度、力量與榮耀感。',
        },
        {
          number: '02',
          title: '整合完整賽事資訊',
          description:
            '串聯公告、賽程、戰績、球隊與球員數據，讓球迷能沿著一致脈絡持續探索內容。',
        },
        {
          number: '03',
          title: '建立可擴充的服務平台',
          description:
            '以模組化架構支援跨裝置瀏覽，並延伸線上招募與報名服務，因應不同賽季持續更新。',
        },
      ],
      goalsAppearance: {
        accentColor: '#d9c69a',
        backgroundImage: `${imageRoot}/goal-bg.webp`,
        headingColor: '#fff',
        textColor: '#fff',
      },
      gap: 56,
    },
    {
      title: '以賽季主視覺揭開職排新篇章',
      paragraphs: [
        '首季形象以「即刻行動」作為主張，集結不同球隊選手與高速光軌，呈現比賽中的爆發力與競爭張力。主視覺同時保留聯盟識別與賽季資訊，成為官網、社群及宣傳素材共用的視覺核心。',
      ],
      image: image(1, 'TPVL 即刻行動賽季主視覺'),
      gap: 56,
    },
    {
      title: '建立跨裝置的聯盟資訊入口',
      paragraphs: [
        '首頁整合賽季焦點、聯盟公告與主要功能入口，讓用戶進站後能迅速掌握最新動態。桌機版強化資訊總覽，行動版則重新安排導覽與內容順序，保留清楚的閱讀層級與操作範圍。',
      ],
      image: image(2, 'TPVL 官網桌機與行動版首頁'),
      gap: 56,
    },
    {
      title: '用一致架構整理聯盟公告',
      paragraphs: [
        '公告列表以分類、標題與日期建立清楚的掃讀順序，並在內容頁延續相同的視覺語言。用戶可快速瀏覽最新消息，再進一步閱讀賽務、培育及聯盟營運等完整資訊。',
      ],
      image: image(3, 'TPVL 聯盟公告列表與內容頁'),
      gap: 56,
    },
    {
      title: '整合賽程、即時數據與賽事結果',
      paragraphs: [
        '賽事頁依未來賽事、即時數據及賽事結果切分內容，並提供賽季、月份與球隊篩選。每場比賽集中呈現對戰隊伍、日期、場館與購票入口，協助球迷快速完成查詢與後續行動。',
      ],
      image: image(4, 'TPVL 聯盟賽事桌機與行動版介面'),
      gap: 56,
    },
    {
      title: '串聯球員資料與生涯數據',
      paragraphs: [
        '球員頁整合基本資料、所屬球隊、生涯累積與單場表現，並透過篩選器查找不同賽季、賽事及數據類型。球迷能從比賽結果延伸查看選手紀錄，形成連續的賽事探索體驗。',
      ],
      image: image(5, 'TPVL 球員個人資料與生涯數據介面'),
      gap: 56,
    },
    {
      title: '把裁判招募整合進官方網站',
      paragraphs: [
        '將裁判招募由公告資訊延伸為可直接完成的線上服務，用戶依序選擇招募場次、填寫個人資料並完成付款與報名。清楚的步驟設計降低跨頁操作負擔，也讓聯盟能集中管理報名流程。',
      ],
      image: image(6, 'TPVL 裁判招募線上報名流程'),
      gap: 56,
    },
    {
      title: '專案成果',
      paragraphs: [
        '從零建置 TPVL 首個官方網站，整合聯盟公告、球隊、球員、賽程、戰績與招募服務，建立兼具品牌形象、賽事查詢及線上報名功能的數位平台。透過模組化元件與跨裝置規劃，使網站能延伸至不同賽季與活動情境，成為聯盟對外發布資訊與服務球迷的重要入口。',
      ],
      image: image(7, 'TPVL 裁判招募三步驟成果畫面'),
      details: [
        {
          title: '規劃完整的賽事查詢脈絡',
          description:
            '串聯賽程、戰績與球員數據，使球迷能從近期對戰逐步深入至球隊表現及個人紀錄，建立從觀看賽事到追蹤選手的連續瀏覽體驗。',
        },
        {
          title: '提升數據內容的閱讀效率',
          description:
            '依資料特性分別設計賽程卡片、排名表格與球員數據模組，透過層級及欄位對齊降低閱讀負擔。',
        },
        {
          title: '強化資訊層級的辨識',
          description:
            '透過字重、色彩與版面配置建立內容的優先順序，讓用戶快速辨識重要資訊並提升大量內容的掃讀效率。',
        },
      ],
      detailMarkerColor: '#015a3d',
      gap: 56,
    },
  ],
};
