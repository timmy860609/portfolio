export interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  tag: string
  content: string
  sections: Array<
    | {
        type: 'image-left' | 'image-right'
        title: string
        body: string
        image: string
      }
    | {
        type: 'full-image'
        title: string
        body: string
        image: string
      }
    | {
        type: 'quote'
        quote: string
        author: string
      }
  >
}

export const posts: Post[] = [
  {
    id: 1,
    title: '設計與開發如何協作：我的流程分享',
    excerpt: '從需求釐清、Wireframe 到介面落地，我如何讓設計與開發無縫接軌。',
    date: '2026-02-01',
    tag: 'Workflow',
    content:
      '在每個專案開始前，我會先將需求拆解為目標、使用者旅程與驗收指標。接著透過 Wireframe 迅速驗證流程，再進行視覺設計。開發階段會先建立可重用元件與版面系統，確保設計與實作一致，並降低後續維護成本。',
    sections: [
      {
        type: 'image-left',
        title: '從需求拆解開始',
        body: '以使用者旅程為核心，將需求拆解成可執行的任務清單，並在早期對齊目標與範圍。',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
      },
      {
        type: 'image-right',
        title: '視覺與元件同步',
        body: '在設計階段建立元件規範，開發時同步建立對應的組件，減少落差與重工。',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
      },
      {
        type: 'quote',
        quote: '流程清晰，協作就會流暢。',
        author: 'Timmy Lee',
      },
      {
        type: 'full-image',
        title: '交付前的整體檢視',
        body: '在上線前進行整體體驗檢視，確認互動、動效與資訊層級一致。',
        image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1400&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 2,
    title: '提升前端效能的 5 個實戰技巧',
    excerpt: '針對大型專案的載入速度、互動流暢度與可維護性，分享實用的優化手法。',
    date: '2026-01-18',
    tag: 'Performance',
    content:
      '我會從資源載入策略、圖片格式與尺寸控制、模組拆分、延遲載入與快取策略著手，逐步降低首屏時間與互動延遲。同時使用分析工具持續追蹤指標，確保最佳化可以被量化。',
    sections: [
      {
        type: 'image-left',
        title: '拆分模組與延遲載入',
        body: '依照使用路徑拆分頁面資源，讓使用者只載入必要內容。',
        image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1200&auto=format&fit=crop',
      },
      {
        type: 'image-right',
        title: '圖片壓縮與快取',
        body: '優先使用現代格式，搭配 CDN 與快取策略，提升載入速度。',
        image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop',
      },
      {
        type: 'quote',
        quote: '效能優化是一場長期投資，而非一次性任務。',
        author: 'Timmy Lee',
      },
    ],
  },
  {
    id: 3,
    title: '用 Vue 3 + Tailwind 打造一致的設計系統',
    excerpt: '建立可重用元件與樣式規範，讓團隊在開發中維持一致的視覺體驗。',
    date: '2025-12-20',
    tag: 'Design System',
    content:
      '我會先定義色彩、字級、間距等設計規範，再透過元件切分與樣式抽象化，打造可重用的設計系統。搭配 Tailwind 的 @apply 與元件封裝，可以讓視覺一致且易於擴充。',
    sections: [
      {
        type: 'image-left',
        title: '設計規範先行',
        body: '先建立色彩與字級系統，確保整體視覺一致。',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
      },
      {
        type: 'full-image',
        title: '元件化後的效率',
        body: '透過元件化與樣式抽象，能快速擴充並維持一致性。',
        image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop',
      },
    ],
  },
]

export const getPostById = (id: number) => posts.find((post) => post.id === id)
