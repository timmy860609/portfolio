import { projectsBySlug } from '../projects';
import type { ProjectContentSectionData } from '../../types/project';

const iotGatewayProject = projectsBySlug['iot-backend'];
const assetPath = '/Image/Project/iot-gateway';

export const iotGatewayCover = {
  src: `${assetPath}/project-cover.webp`,
  mobileSrc: `${assetPath}/project-cover_m.webp`,
  alt: '智慧閘道器後台管理系統專案主視覺',
  width: 5760,
  height: 1440,
};

export const iotGatewayHero = {
  tags: iotGatewayProject.detailTags ?? iotGatewayProject.tags,
  title: iotGatewayProject.detailTitle ?? iotGatewayProject.title,
  year: '2025',
};

export const iotGatewayGoals = {
  title: '設計目標',
  introduction:
    'Gateway 後台管理系統的設計重新檢視工程人員在場域中的操作順序，將工作內容中的操作行為整合至行動管理介面，面對不同設備或異常情況時，能快速掌握目前狀態，並完成後續設定與處理。',
  goals: [
    {
      number: '01',
      title: '支援行動場域作業',
      description: '降低對筆記型電腦與固定工作環境的依賴。',
    },
    {
      number: '02',
      title: '簡化設備部署流程',
      description: '依照工作順序規劃功能，減少操作過程中的來回切換。',
    },
    {
      number: '03',
      title: '協助快速定位設備問題',
      description: '統整設備節點資訊，快速定位異常資訊。',
    },
  ],
  density: 'compact' as const,
  accentColor: '#fff',
  backgroundImage: `${assetPath}/goal-bg.webp`,
  textColor: '#fff',
};

export const iotGatewayContentSections: ProjectContentSectionData[] = [
  {
    title: '專案背景',
    introduction: [
      'IoT 設備逐漸部署各種智慧場域，工程人員需要頻繁前往現場完成設備調整。然而，多數 Gateway 管理工具仍以 Desktop 為主要介面，使現場作業高度依賴筆記型電腦，不僅增加攜帶負擔，也限制了維運工作的靈活性。',
      'Gateway 後台管理系統將設備管理延伸至手機，讓工程人員能直接於現場完成系統設定，使維運更貼近實際使用情境。',
    ],
    density: 'compact',
  },
  {
    title: '設計系統規劃，提升開發與迭代效率',
    introduction: [
      '後台系統分為管理、控制與感知三層，透過 Gateway 串接後台與現場設備，整合資料狀態與設備控制。',
    ],
    image: {
      src: `${assetPath}/pc-1.webp`,
      alt: '智慧閘道器後台管理系統資訊架構',
      width: 2880,
      height: 1680,
    },
    density: 'compact',
  },
  {
    title: '一機在手，現場設定一次搞定',
    introduction: [
      '透過行動化介面整合 Gateway 與設備節點，讓工程人員抵達現場後即可使用手機快速掌握概況，快速定位異常，並接續完成安裝與除錯作業。',
    ],
    image: {
      src: `${assetPath}/pc-2.webp`,
      alt: '智慧閘道器行動登入、場域設備總覽與狀態篩選',
      width: 2880,
      height: 1680,
    },
    details: [
      {
        title: '快速掌握設備狀態',
        description: '將場域設備與數據集中顯示，快速取得目前狀態。',
      },
      {
        title: '精準定位裝置訊息',
        description:
          '依場域、設備類型與狀態縮小查找範圍，協助判斷問題來源。',
      },
    ],
    detailMarkerColor: '#326fc8',
    density: 'compact',
  },
  {
    title: '從設備資訊掌握到系統維護',
    introduction: [
      '工程人員可直接透過手機掌握場域狀態，並切換管理任務確認執行進度，減少現場反覆使用電腦與不同工具的操作負擔。',
    ],
    image: {
      src: `${assetPath}/pc-3.webp`,
      alt: '智慧閘道器設備狀態、功能選單與更新進度',
      width: 2880,
      height: 1680,
    },
    details: [
      {
        title: '快速掌握設備狀態',
        description:
          '整合 Gateway 與感測器的資訊，即時查看各項設備的狀態。',
      },
      {
        title: '重點功能總覽',
        description:
          '側邊選單提供系統更新與參數設定，快速切換不同的功能。',
      },
      {
        title: '進度即時回饋',
        description: '以進度條呈現系統更新過程，清楚掌握目前進度。',
      },
    ],
    detailMarkerColor: '#326fc8',
    density: 'compact',
  },
  {
    title: '從設備加入到參數設定，完整掌握節點管理流程',
    introduction: [
      '梳理各項參數設定，能在同一介面中完成新增、移除與狀態確認，讓設備部署與後續除錯更容易掌握。',
    ],
    image: {
      src: `${assetPath}/pc-4.webp`,
      alt: '智慧閘道器 Node、DSK 與 Gateway 參數管理',
      width: 2880,
      height: 1680,
    },
    details: [
      {
        title: '快速掌握設備狀態',
        description:
          '輸入設備專屬的 DSK 資訊後，可送出配對指令，將新的感測器加入，簡化現場建置時的節點新增流程。',
      },
      {
        title: '精準定位裝置訊息',
        description:
          '將 Gateway 資訊與硬體版本等資訊整合於分頁，方便快速查找並調整相關設定。',
      },
    ],
    detailMarkerColor: '#326fc8',
    density: 'compact',
  },
  {
    title: '專案成果',
    introduction: [
      '後台管理系統將 IoT 設備的參數整合至手機端，使工程人員抵達場域後，也能進行基礎除錯。重新梳理功能層級與操作順序，讓原本偏向工程端的技術資訊，更符合實際部署與維護情境。',
    ],
    image: {
      src: `${assetPath}/pc-5.webp`,
      alt: '智慧閘道器後台管理系統完整行動介面成果',
      width: 2880,
      height: 1680,
    },
    details: [
      {
        title: '提升現場作業效率',
        description:
          '透過更符合現場情境的操作流程與資訊呈現，快速掌握設備狀況，並更直接地完成後續處理。',
      },
      {
        title: '強化操作判斷的準確性',
        description:
          '以明確的狀態、進度與結果回饋，降低資訊判讀落差，讓決策有依據地確認設備是否正常運作。',
      },
    ],
    detailMarkerColor: '#326fc8',
    density: 'results',
  },
];
