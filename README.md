# Design Portfolio

以 Astro、Vue 與 TypeScript 建立的設計作品集起始專案。

## 開始使用

需要 Node.js 22.23.4 以上。建議先執行 `nvm use`，使用 `.nvmrc` 指定的版本。

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

## Project videos

`FFMPEG=/path/to/ffmpeg python3 scripts/compress-videos.py` creates delivery
copies from `source-media/project-videos/` in `public/Video/`. Commit the source
MOV files, delivery MP4s, and WebP posters; FFmpeg is not required during the
Pages build. The copies use H.264/yuv420p, 30fps, 768px and 1280px widths, a
two-second keyframe interval, and fast-start metadata. Keeping the source MOV
files outside `public/` prevents them from being included in the deployed site.

The shared video loader selects the mobile copy before the first request,
preloads nearby autoplay videos within 1200px, and plays only when visible.
Offscreen videos pause without seeking. Save-Data/reduced-motion users receive
manual controls and metadata-only preloading. Manual article videos retain audio
and use their original sources.
