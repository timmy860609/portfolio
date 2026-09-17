import { projectsBySlug } from '../projects';
import type { ProjectContentSectionData } from '../../types/project';

const hiringProject = projectsBySlug['hiring-2026'];

export const hiringCover = {
  src: '/Image/Project/hiring-web/project-cover.webp',
  mobileSrc: '/Image/Project/hiring-web/project-cover_m.webp',
  alt: '2026 人才招募網站專案主視覺',
  width: 5760,
  height: 1440,
};

export const hiringHero = {
  tags: hiringProject.detailTags ?? hiringProject.tags,
  title: hiringProject.detailTitle ?? hiringProject.title,
  showAction: true,
  actionLabel: '前往網頁',
  actionHref: 'https://pse.is/9mgr32',
};

export const hiringBackground = {
  title: '專案背景',
  introduction: [
    '集團旗下包含多間子公司，人才計畫各自具有不同的專業條件與申請門檻。若以傳統職缺頁面呈現，求職者往往只能看到工作要求，難以理解集團環境、培育制度及未來發展。',
    '因此，人才召募網依正職與實習兩種求職階段進行規劃，除了協助求職者精準判斷職涯方向，也讓召募網成為企業長期對外招攬人才的入口。',
  ],
};

export const hiringDesignGoals = {
  title: '設計目標',
  introduction:
    '人才召募網是企業對求職者建立第一印象的管道。以企業品牌經營與人才招募策略為核心，整合不同職缺計畫，建立一致的平台體驗，讓求職者能快速理解企業文化，同時提升企業召募效率與長期維運彈性。',
  goals: [
    {
      number: '01',
      title: '建立一致的召募形象',
      description:
        '以集團品牌為核心，統整正職與實習的視覺及資訊層級，傳達共同的招募形象。',
    },
    {
      number: '02',
      title: '整合多元人才職缺',
      description:
        '彙整集團旗下子公司職缺，讓求職者快速掌握職務內容。',
    },
    {
      number: '03',
      title: '可持續擴充的招募平台',
      description:
        '規劃召募期間及職缺異動彈性更新，減少維護成本。',
    },
  ],
  conclusion:
    '正職與實習面對的求職者不同，正職人才在意長期發展；學生更重視實際工作內容與學習收穫。因此要在集團品牌之下，回應不同階段的人才需求，同時協助各子公司持續發布與管理召募。',
  conclusionPosition: 'after' as const,
  density: 'compact' as const,
  accentColor: '#fff',
  textColor: '#fff',
  backgroundImage: '/Image/Project/hiring-web/goal-bg.webp',
};

export const hiringContentSections: ProjectContentSectionData[] = [
  {
    title: '透過視覺差異呈現不同的求職目的',
    introduction: [
      '網站延續品牌藍作為主要用色，並使用橘色作為關鍵資訊與重點引導，使兩類召募頁面保有共同的品牌辨識。依求職階段，網站將分為兩條主要路徑。',
    ],
    image: {
      src: '/Image/Project/hiring-web/pc-1.webp',
      alt: '正職與實習招募網站首頁設計',
      width: 2880,
      height: 1680,
    },
    details: [
      {
        title: '正職',
        description:
          '以較深的藍色背景、幾何圖形與強烈標語，傳達成長挑戰與組織規模。',
      },
      {
        title: '實習',
        description:
          '加入人物插畫與學習元素，呈現較年輕、開放的招募氛圍。',
      },
    ],
    detailMarkerColor: '#076ed7',
  },
  {
    title: '釐清資訊架構與引導路徑',
    introduction: [
      '召募網同時涵蓋 MA、ITMT 等計畫，各領域人才在瀏覽時關注的資訊不同。因此先以「求職目的」區分主要路徑，再依子公司與職務類別規劃內容層級，避免大量職缺與制度資訊集中在同一畫面。',
    ],
    image: {
      src: '/Image/Project/hiring-web/pc-2.webp',
      alt: '2026 人才招募網站正職與實習資訊架構圖',
      width: 2880,
      height: 1680,
    },
    conclusion:
      '正職路徑著重培育制度及職涯發展；實習路徑則優先呈現實習期間與學習經驗。兩條路徑最後皆銜接召募流程與履歷投遞，使求職者能從認識職缺一路完成履歷投遞。',
    density: 'caption',
  },
  {
    title: '同步設計稿與前端元件樣式',
    introduction: [
      '正職與實習使用相同的結構與元件，但在品牌色彩與視覺氛圍上有所區別。為避免兩套頁面各自維護樣式，我將 Figma Variables 中的 Token 設定同步至前端，讓設計與程式使用同一套變數邏輯。',
      '在 Figma 中將色彩區分為「正職」與「實習」兩種模式，再將 Variables 輸出為 JSON Token。前端匯入後轉換為 CSS Custom Properties，元件僅引用語意化變數，不直接寫入特定色碼。',
    ],
    image: {
      src: '/Image/Project/hiring-web/pc-3.webp',
      alt: 'Figma Variables 與 CSS Token 對照畫面',
      width: 2880,
      height: 1680,
    },
    conclusion:
      '例如：當元件位於 fulltime.html 時，頁面載入正職主題，以深藍色作為主要色彩；進入 internship.html 時，則切換為實習的淺藍色。相同的元件與內容模組不需重新開發，即可依所在頁面呈現對應風格。',
    density: 'caption',
  },
  {
    title: '正職：從多元招募計畫，找到適合自己的職涯入口',
    introduction: [
      '正職招募以 MA、ITM 等核心計畫作為分群，再於計畫內呈現不同職能與發展方向。透過資訊層級化，求職者不需一次閱讀所有招募內容，即可快速切換計畫、相互比較。',
    ],
    image: {
      src: '/Image/Project/hiring-web/pc-4.webp',
      alt: '正職人才招募網站桌機與手機版介面',
      width: 2880,
      height: 1680,
    },
    conclusion:
      '面對數量多且名稱較長的計畫，在行動版採用橫向延伸的破格頁籤。透過水平滑動保留各選項的閱讀性與操作範圍。',
    density: 'results',
  },
  {
    title: '從職務介紹，延伸至完整的人才培育內容',
    introduction: [
      '進入單一計畫後，依序呈現計畫介紹與未來發展，讓求職者理解加入後將經歷的工作階段與培育資源。',
    ],
    image: {
      src: '/Image/Project/hiring-web/pc-5.webp',
      alt: '人才招募計畫的培訓架構與職缺介紹畫面',
      width: 2880,
      height: 1680,
    },
    conclusion:
      '把較複雜的制度內容拆分為資訊卡片，協助用戶快速掌握各項計畫之間的差異。',
    density: 'results',
  },
  {
    title: '透過真實經驗，補足制度之外的職涯想像',
    introduction: [
      '對於求職者，最關心的不外乎日常的工作環境與成長歷程。透過「學長姐分享」，讓求職者能快速找到與自身方向相關的經驗分享。列表以卡片摘要呈現，能夠快速瀏覽不同背景的分享；點擊卡片後，再以彈窗開啟被收納的完整內容。',
    ],
    image: {
      src: '/Image/Project/hiring-web/pc-7.webp',
      alt: '正職人才招募學長姐心得分享畫面',
      width: 2880,
      height: 1680,
    },
    conclusion:
      '透過彈窗聚焦心得分享，減少畫面被大量文字佔用，關閉後也能直接返回原本瀏覽位置。',
    density: 'results',
  },
  {
    title: '整合活動資訊與地點導航，協助求職者精準安排行程',
    introduction: [
      '企業會於各式場合舉辦招募說明會，以卡片呈現活動摘要訊息，讓求職者能快速比較場次並掌握參與資訊。',
    ],
    image: {
      src: '/Image/Project/hiring-web/pc-6.webp',
      alt: '人才招募活動資訊與地點導航的桌機及手機版畫面',
      width: 2880,
      height: 1680,
    },
    conclusion:
      '每筆活動皆設有地圖圖示，點擊後可直接開啟原生地圖並帶入活動地點，省去複製與搜尋地址的步驟，求職者能夠立即確認位置與規劃交通。',
    density: 'tight',
  },
  {
    title: '實習：依子公司分類，逐步收斂職涯選擇',
    introduction: [
      '實習計畫依公司別進行分類，也會有同一間子公司擁有兩個實習計畫的情境。計畫內容透過標題層級與條列整理職缺條件，求職者能先快速掃描重點資訊，再進一步閱讀詳細說明，判斷背景是否符合職缺需求。',
    ],
    image: {
      src: '/Image/Project/hiring-web/pc-8.webp',
      alt: '三種實習計畫的職缺內容頁面',
      width: 2880,
      height: 1680,
    },
    density: 'tight',
  },
  {
    title: '透過學長姐分享，提升學生的信心度',
    introduction: [
      '同正職網頁的設計邏輯，除了沿用前端元件外，心得分享以心得摘要突顯敘述主題；點擊後再閱讀完整內容，避免大量長文直接佔據版面，也讓求職者只深入感興趣的經驗分享。',
    ],
    image: {
      src: '/Image/Project/hiring-web/pc-9.webp',
      alt: '實習學長姐心得分享的桌機與手機版頁面',
      width: 2880,
      height: 1680,
    },
    density: 'tight',
  },
  {
    title: '專案成果',
    introduction: [
      '將正職、實習與不同人才計畫串連於人才召募網，統整求職複雜資訊，規劃清晰的求職探索路徑。介面以模組化方式設計，以主題 Token 延伸不同召募風格，兼顧品牌辨識與元件彈性；後續新增職缺、調整樣式或年度更新時，也能沿用既有模組快速維護。',
    ],
    image: {
      src: '/Image/Project/hiring-web/pc-10.webp',
      alt: '正職與實習人才招募網站首頁成果',
      width: 2880,
      height: 1680,
    },
    details: [
      {
        title: '塑造完整的集團招募形象',
        description:
          '統整品牌用色、層級及操作方式，依受眾調整視覺呈現，傳達共同的企業形象。',
      },
      {
        title: '匯集多元人才與職涯機會',
        description:
          '整合不同子公司的人才計畫，協助求職者快速找到符合自身職能的發展方向。',
      },
      {
        title: '建立可共用的前端架構，提升後續維運效率',
        description:
          '集中管理網站的元件模組，減少重複修改與提升迭代效率。',
      },
    ],
    detailMarkerColor: '#116de4',
    density: 'results',
  },
];
