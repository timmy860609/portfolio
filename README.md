# Design Portfolio

以 Astro、Vue 與 TypeScript 建立的設計作品集起始專案。

## 開始使用

需要 Node.js 20.11 以上（或 Node.js 22.12 以上）。

```sh
npm install
npm run dev
```

開發伺服器預設位於 `http://localhost:4321`。

## 常用指令

| 指令 | 用途 |
| --- | --- |
| `npm run dev` | 啟動開發伺服器 |
| `npm run check` | 執行 Astro 與 TypeScript 檢查 |
| `npm run build` | 檢查並建立正式版 |
| `npm run preview` | 預覽正式版 |

首頁在 `src/pages/index.astro`，目前保留為空白頁面，可由此開始加入內容。

## Responsive images

`npm run dev`, `npm run check`, and `npm run build` generate WebP variants and
32px blurred previews from `public/Image/` with Sharp. Generated files live in
`public/Image/Responsive/` and `src/generated/` and are not committed. Source
image content and encoder settings determine the output URL, so replacing an
image also changes its cache key. Run `npm run images` after editing an image
while the dev server is running.

Use `responsiveImage(sourcePath, sizes)` on content images, keeping `sizes`
aligned with the rendered layout. Images retain real `src`/`srcset` attributes
and native lazy loading without JavaScript. The shared page script promotes
images within 2000px to eager loading and removes the inline preview after
image decoding; it reconnects after Astro navigation. Page transitions wait
only for the destination HTML and the transition animation, not image downloads.
