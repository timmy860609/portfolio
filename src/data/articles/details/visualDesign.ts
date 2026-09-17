import type { ArticleDetailGalleryData } from '../types';

const imageRoot = '/Image/Articles/visaul-deisgn';

const imageHeights: Record<number, number> = {
  1: 768,
  2: 768,
  3: 768,
  4: 768,
  5: 768,
  6: 2530,
  7: 1071,
  8: 538,
  9: 504,
  10: 1002,
  11: 256,
  12: 422,
  13: 422,
  14: 422,
  15: 422,
  16: 266,
  17: 2128,
  18: 1656,
  19: 768,
  20: 768,
  21: 768,
  22: 500,
  23: 1088,
  24: 768,
  25: 1088,
  26: 1002,
  27: 1002,
  28: 1002,
};

const image = (number: number, alt: string) => ({
  src: `${imageRoot}/pic-${number}.webp`,
  alt,
  width: 768,
  height: imageHeights[number],
});

export const visualDesignGallery: ArticleDetailGalleryData = {
  columns: [
    [
      image(7, 'ACD 電子報視覺設計'),
      image(19, '媒體規劃介面示意圖一'),
      image(27, '金控春節賀卡 B 款'),
      image(2, '社群圖文視覺設計一'),
      image(25, '數位閱讀故事轉譯視覺設計'),
      image(13, '端午佳節愉快視覺設計'),
      image(17, '人壽 iCare 新功能上線電子報'),
      image(24, '證券金融主題視覺設計'),
    ],
    [
      image(11, '數位服務宣傳橫幅'),
      image(21, '媒體規劃介面示意圖三'),
      image(28, '金控春節賀卡視覺設計'),
      image(16, '金融服務橫幅視覺設計'),
      image(26, '金控品牌視覺設計'),
      image(4, '社群圖文視覺設計三'),
      image(12, '投資節主題視覺設計'),
      image(18, '人壽定期保費變更電子報'),
      image(23, '數位虛擬人應用演講海報'),
      image(1, '社群圖文視覺設計'),
    ],
    [
      image(9, '金融服務 Banner 視覺設計'),
      image(20, '媒體規劃介面示意圖二'),
      image(8, '金融服務行動版 Banner'),
      image(10, '春節品牌賀卡 B 款'),
      image(5, '社群圖文視覺設計四'),
      image(22, '官方網站手機版展示'),
      image(3, '社群圖文視覺設計二'),
      image(15, '中秋佳節視覺設計'),
      image(6, '2026 年資訊人才招募視覺設計'),
      image(14, '品牌節慶橫幅視覺設計'),
    ],
  ],
};
