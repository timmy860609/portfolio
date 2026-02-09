export interface Project {
  id: number
  title: string
  description: string
  details?: string
  image: string
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: '全新個人行動銀行APP',
    description: '一個為電子商務品牌打造的數據分析後台，提供即時銷售監控與庫存管理。',
    details:
      '這個專案使用 Vue 3 與 Tailwind CSS 構建，實現了高度可自定義的儀表板。後端整合了 RESTful API 與 WebSocket 進行即時數據更新。具備豐富的圖表展示（ECharts）與複雜的權限控管系統。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tags: ['數位金融', '使用者體驗設計', '視覺設計'],
    link: 'https://example.com',
  },
  {
    id: 2,
    title: '台灣職業排球聯賽官方網站(TPVL)',
    description: '專為數位創意工作者設計的個人作品集模板，強調流暢的動畫與響應式體驗。',
    details:
      '利用 GSAP 實現了細膩的捲動動畫，並使用 Vite 進行極速建構。設計風格走簡約扁平化，確保在各種行動裝置上都有絕佳的閱讀體驗。',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    tags: ['體育行銷', '使用者體驗設計'],
    link: 'https://example.com',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: '提升團隊協作效率的任務管理工具，支援看板視圖與時間追蹤。',
    details:
      '此應用程式整合了 Firebase 作為即時資料庫，實現了拖放式（Drag and Drop）任務卡片。使用者可以建立多個專案，並邀請團隊成員共同協作，支援即時聊天與通知功能。',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=800&auto=format&fit=crop',
    tags: ['Firebase', 'Vue 3', 'Tailwind', 'PWA'],
    link: 'https://example.com',
  },
  {
    id: 4,
    title: 'AI Image Generator',
    description: '整合 OpenAI API 的圖像生成平台，讓使用者透過文字描述創造藝術。',
    details:
      '前端介面極其簡約，專注於使用者輸入與生成結果的展示。透過 API Proxy 處理 OpenAI 請求，並實裝了圖像快取與歷史紀錄功能。',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    tags: ['OpenAI', 'Next.js', 'React', 'Tailwind'],
    link: 'https://example.com',
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    description: '現代化的不動產搜尋平台，提供 3D 導覽與精確的地圖定位。',
    details:
      '整合了 Google Maps API 與 Three.js，讓使用者可以進行虛擬看房。優化了地圖標記點的渲染效能，即使有上千個物件也能流暢滑動。',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
    tags: ['Three.js', 'Google Maps', 'Vue.js', 'Node.js'],
    link: 'https://example.com',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: '健康與運動管理應用，幫助使用者紀錄飲食、步數與訓練計畫。',
    details:
      '使用 Canvas API 繪製體重趨勢圖，並支援連動 Apple Health 數據。具備離線模式，讓使用者即使在沒有網路的健身房也能持續紀錄。',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
    tags: ['PWA', 'Canvas', 'Vuex', 'Vuetify'],
    link: 'https://example.com',
  },
]

export const getProjectById = (id: number) => projects.find((project) => project.id === id)
