import { projectsBySlug } from '../projects';

const mobileBankProject = projectsBySlug['mobile-bank-2'];

export const mobileBankHero = {
  tags: mobileBankProject.detailTags ?? mobileBankProject.tags,
  title: mobileBankProject.detailTitle ?? mobileBankProject.title,
  showAction: true,
  actionLabel: '前往下載',
  actionHref: '#',
};

export const mobileBankCover = {
  src: '/Image/Project/mobile-bank-detail/project-cover.webp',
  mobileSrc: '/Image/Project/mobile-bank-detail/project-cover_m.webp',
  alt: '行動銀行，金融服務隨我而行',
  width: 5760,
  height: 1440,
};

export const mobileBankBackground = {
  title: '專案背景',
  introduction: [
    '舊版行動銀行功能數量眾多且複雜，在導覽方式上，舊版採用 Tab Bar 搭配漢堡選單，用戶需先理解銀行既有的業務分類，再逐層尋找所需功能。部分高頻率使用的服務雖設有快捷入口，但首頁功能配置相對固定，無法依照個人持有的金融產品或使用頻率調整。不同用戶登入後看到的版面結構大致相同，產品較難反映個別帳務組成與操作習慣。',
  ],
  image: {
    src: '/Image/Project/mobile-bank-detail/pc-1.webp',
    alt: '舊版行動銀行的資訊層級、登入服務、選單與資訊概覽問題',
    width: 2880,
    height: 1680,
  },
  conclusion:
    '整體而言，舊版 App 已具備完整的銀行業務功能，能支援用戶完成多數日常操作。當服務內容與使用族群持續擴大，固定功能配置與多層選單，以及登入前呈現的內容有限，逐漸難以回應用戶對快速查詢、個人化配置與多元服務入口的期待。',
};

export const mobileBankDesignGoals = {
  title: '設計目標',
  introduction:
    '本次改版的核心目標是重整資訊架構，並透過更直覺的介面提升使用效率與操作體驗。',
  backgroundImage:
    '/Image/Project/mobile-bank-detail/goal-bg.webp',
  goals: [
    {
      number: '01',
      title: '快速掌握重要資訊',
      description: '以元件區分資訊層級，快速查看重點資訊',
    },
    {
      number: '02',
      title: '免登入即可使用服務',
      description: '完善的免登入服務頁，不需登入就能即時獲得資訊',
    },
    {
      number: '03',
      title: '資訊架構梳理',
      description: '重新梳理資訊的分類及收納，明確定義出主次項目及功能',
    },
  ],
};

export const mobileBankDesignSystem = {
  title: '建立系統規劃，提升開發與迭代效率',
  introduction: [
    '為提升行動銀行 2.0 的視覺與操作一致性，團隊建立中心化的設計系統，將色彩、字體、間距、Icon、元件及互動規範進行模組化，讓不同功能皆能遵循相同的設計語言。透過元件與設計規範的建立，降低重複設計與開發成本，也提升跨部門協作效率，使後續功能擴充與產品迭代更加快速且具備一致的使用體驗。',
  ],
  image: {
    src: '/Image/Project/mobile-bank-detail/pc-2.webp',
    alt: '行動銀行設計系統，包含色彩、字體、圖示、元件與互動規範',
    width: 2880,
    height: 1680,
  },
};

export const mobileBankLoggedOutExperience = {
  title: '在登入前，回應不同的使用需求',
  introduction: [
    '用戶在未登入前，仍可能有查詢資訊、了解產品或確認帳務的需求。因此，未登入體驗也成為認識服務與建立信任的重要入口。',
  ],
  image: {
    src: '/Image/Project/mobile-bank-detail/pc-3.webp',
    alt: '未登入金融服務、多元登入方式與即時帳戶通知介面',
    width: 2880,
    height: 1680,
  },
  detailMarkerColor: '#076ed7',
  details: [
    {
      title: '未登入即可瀏覽金融服務',
      description:
        '基金瀏覽、匯率換算與貸款試算，讓用戶登入前即可探索服務，再決定是否進一步登入或申辦。',
    },
    {
      title: '提供多元登入方式',
      description:
        '整合帳號密碼、生物辨識與圖形密碼；同時設置無障礙專區，回應不同族群的操作需求。',
    },
    {
      title: '不登入也能掌握帳戶動態',
      description:
        '透過裝置綁定與訊息通知，在未登入狀態下接收並查看帳戶出入金資訊。',
    },
  ],
};

export const mobileBankPersonalizedHome = {
  title: '個人化首頁，打造屬於你的金融App',
  introduction: [
    '不同用戶持有的金融商品、關注資訊與操作習慣不同，固定的首頁配置難以回應每個人的日常需求。透過卡片排序與快捷功能設定，讓用戶自行決定優先查看的內容與常用服務，讓首頁更貼近個人的使用情境。',
  ],
  video: {
    src: '/Image/Project/mobile-bank-detail/vd-4.mov',
    title: '可自訂總覽卡片與快捷功能排序的個人化首頁',
    autoplayOnView: true,
    controls: false,
    muted: true,
    scale: 1.025,
    width: 1896,
    height: 1104,
  },
  conclusion:
    '將「總覽卡片」與「快捷功能」拆分為可調整的內容，規劃對應的編輯入口。可依照持有的金融商品與功能使用頻率決定排列順序，讓首頁反映個人的使用情境。',
};

export const mobileBankInvestmentServices = {
  title: '整合投資服務，提升理財效率',
  introduction: [
    '為了讓用戶更有效率地掌握投資狀況，團隊將各類投資理財進行整合，包含基金、海外債、黃金存摺、ETF／境外股票與信託服務等。優化後的資產總覽頁面，用戶可一眼掌握整體資產配置與即時損益，提升投資決策效率。',
  ],
  image: {
    src: '/Image/Project/mobile-bank-detail/pc-5.webp',
    alt: '整合投資商品、定期投資日曆與損益資訊的理財介面',
    width: 2880,
    height: 1680,
  },
  detailMarkerColor: '#076ed7',
  details: [
    {
      title: '定期投資日曆',
      description:
        '將不同商品的扣款日期與金額轉化為日曆，用戶可依日期查看當日投資安排，不必逐筆進入商品明細確認。',
    },
    {
      title: '明確揭露損益',
      description:
        '重新梳理投資金額的資訊層級，同步呈現報酬率協助用戶快速判讀績效表現。',
    },
  ],
};

export const mobileBankGroupAssets = {
  title: '跨子公司整合，所有資產一目瞭然',
  introduction: [
    '以 FIDO 身分認證，整合集團旗下銀行、證券、投信等子公司資產，用戶無須重複登入不同 App，即可於同一平台快速檢視資產概況。資產總覽頁將根據不同子公司呈現對應的投資或消費業務，提升資產管理便利性。',
  ],
  image: {
    src: '/Image/Project/mobile-bank-detail/pc-6.webp',
    alt: '整合集團子公司資產與資產授權管理的總覽介面',
    width: 2880,
    height: 1680,
  },
};

export const mobileBankMembershipBenefits = {
  title: '會員權益重整，讓複雜資訊更容易理解',
  introduction: [
    '原本分散且複雜的客戶權益，藉由不同的視覺風格與元件樣式，整合為更清楚的層級與分類，讓用戶更清楚理解自己擁有哪些權益、還差多少條件，以及可以進一步使用哪些服務。',
  ],
  detailMarkerColor: '#076ed7',
  items: [
    {
      image: {
        src: '/Image/Project/mobile-bank-detail/pc-7.webp',
        alt: '財管會員等級、條件與專屬優惠介面',
        width: 2880,
        height: 1260,
      },
      description:
        '財管會員制度涵蓋交易優惠、等級條件、專屬權益與理財服務，不同會員等級對應的內容繁多，且使用情境各異，若缺乏清楚的整理方式，用戶難以快速瞭解自己目前的權益，以及後續可達成的目標。',
    },
    {
      image: {
        src: '/Image/Project/mobile-bank-detail/pc-8.webp',
        alt: '富樂會員不同等級的專屬視覺卡片',
        width: 2880,
        height: 1260,
      },
      description:
        '富樂會員以「成長型會員制度」為核心，透過任務條件進行權益解鎖。介面著重呈現升級條件與已取得優惠，使會員關係從單次瀏覽延伸為持續累積的成長型歷程。',
    },
    {
      image: {
        src: '/Image/Project/mobile-bank-detail/pc-9.webp',
        alt: '金融交易優惠、財管會員權益與理財會員服務介面',
        width: 2880,
        height: 1680,
      },
      details: [
        {
          title: '金融交易優惠',
          description:
            '清楚呈現各項優惠的適用條件、剩餘次數及引導入口，用戶能快速確認目前可使用的回饋。',
        },
        {
          title: '財管會員權益',
          description:
            '以富樂會員的成長機制為核心，除了呈現目前等級，也同步揭露下一階段條件，讓會員清楚掌握自身狀態與升級方向。',
        },
        {
          title: '理財會員服務',
          description:
            '依客戶的財管身分顯示對應的服務，並提供專人聯繫入口。',
        },
      ],
    },
  ],
};

export const mobileBankTransferFlow = {
  title: '重整資訊與驗證節點，讓每一次交易都更安心',
  introduction: [
    '臺幣轉帳涉及多項複雜資訊填寫，團隊將流程拆分為「資料填寫、交易確認、身分驗證與完成結果」四個階段，依照操作順序動態顯示重要資訊，並強化關鍵內容的辨識，讓用戶在送出交易前能充分確認。',
  ],
  video: {
    src: '/Image/Project/mobile-bank-detail/vd-10.mov',
    title: '多元收款方式、分段確認與安全驗證的台幣轉帳流程',
    autoplayOnView: true,
    controls: false,
    muted: true,
    scale: 1.025,
    width: 1896,
    height: 1104,
  },
};

export const mobileBankCarbonTracking = {
  title: '將永續概念轉化為可理解、可追蹤的日常行動',
  introduction: [
    '「鑽金碳吉」將全站的金融行為，轉換為具體的減碳數據，用戶可以看見每一次操作對環境產生的影響。除了顯示整體減碳成果，也依月份整理明細來源，協助用戶理解減碳量如何產生；同時透過生活化比較與低碳服務引導，將永續議題轉化為更貼近日常的資訊，鼓勵用戶持續選擇數位化與低碳的金融服務。',
  ],
  video: {
    src: '/Image/Project/mobile-bank-detail/vd-11.mov',
    title: '鑽金碳吉減碳成果、減碳明細與低碳生活引導介面',
    autoplayOnView: true,
    controls: false,
    muted: true,
    scale: 1.025,
    width: 1896,
    height: 1104,
  },
  detailMarkerColor: '#076ed7',
  details: [
    {
      title: '減碳明細與活動',
      description:
        '依月份整理各項交易的減碳紀錄，並串聯活動與回饋。',
    },
    {
      title: '低碳生活引導',
      description:
        '呈現數位金融服務帶來的減碳效益，引導用戶選擇更低碳的金融服務。',
    },
  ],
};

export const mobileBankResults = {
  title: '專案成果',
  introduction: [
    '行動銀行 2.0 重新整理用戶從登入前到完成交易的使用旅程。透過資訊層級、操作流程與介面規則的梳理，使不同金融功能有一致的操作體驗與邏輯，除了提升使用體驗外，也強化整體品牌的一致性。',
  ],
  image: {
    src: '/Image/Project/mobile-bank-detail/pc-12.webp',
    alt: '行動銀行 2.0 專案成果主視覺',
    width: 2880,
    height: 1581,
  },
  detailMarkerColor: '#076ed7',
  details: [
    {
      title: '完成核心功能與多種狀態設計',
      description:
        '重新設計重點功能，並根據產品特性，規劃不同情境的回饋設計。',
    },
    {
      title: '簡化複雜金融資訊',
      description:
        '透過資訊分層、模組化卡片與差異化視覺，協助用戶判讀目前狀態、可享權益與下一步操作。',
    },
    {
      title: '元件模組化',
      description:
        '將帳務卡片、功能入口、列表、表單、狀態提示整理為可重複運用的介面模式，讓後續新增服務時能沿用既有結構，減少不同頁面各自發展所產生的落差。',
    },
  ],
};
