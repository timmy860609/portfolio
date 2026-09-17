export type NavigationItem = {
  label: string;
  to: string;
  hidden?: boolean;
};

const navigationItems: NavigationItem[] = [
  { label: '首頁', to: '/' },
  { label: '精選案例', to: '/projects' },
  { label: '專欄分享', to: '/articles' },
  { label: '關於我', to: '/about' },
];

export const mainNavigation = navigationItems.filter(
  (item) => !item.hidden,
);
