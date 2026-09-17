<template>
  <footer class="site-footer" data-node-id="5758:16017">
    <div class="site-footer__decorations" aria-hidden="true">
      <picture class="site-footer__glass">
        <source
          media="(max-width: 767px)"
          srcset="/Image/Footer/footer-mobile-glass.svg"
        />
        <img src="/Image/Footer/footer-glass-light.svg" alt="" />
      </picture>
      <img
        class="site-footer__orb"
        src="/Image/Footer/footer-orb-light.svg"
        alt=""
      />
      <div class="site-footer__triangle">
        <div class="site-footer__triangle-shape">
          <picture>
            <source
              media="(max-width: 767px)"
              srcset="/Image/Footer/footer-mobile-triangle.svg"
            />
            <img src="/Image/Footer/footer-triangle-light.svg" alt="" />
          </picture>
        </div>
      </div>
      <div class="site-footer__glow">
        <img src="/Image/Footer/footer-left-circle.svg" alt="" />
      </div>
    </div>

    <div class="site-footer__inner">
      <div class="site-footer__identity">
        <a class="site-footer__logo" href="/" aria-label="Timmy Lee 首頁">
          <img src="/WebCI/ci-logo.svg" alt="Timmy Lee" width="362" height="28" />
        </a>

        <nav aria-label="頁尾導覽">
          <a href="/">首頁</a>
          <a href="/projects">精選專案</a>
          <a href="/articles">專欄分享</a>
          <a href="/about">關於我</a>
          <a href="/#contact">與我聯繫</a>
          <a href="/Image/About/portfolio.pdf" download="portfolio.pdf">下載簡歷</a>
        </nav>
      </div>

      <div class="site-footer__meta">
        <div class="site-footer__socials" aria-label="社群平台">
          <a href="#" aria-label="LinkedIn">
            <img src="/Image/Footer/linkedin.svg" alt="" width="36" height="36" />
          </a>
          <a href="#" aria-label="社群平台">
            <img src="/Image/Footer/social-02.svg" alt="" width="36" height="36" />
          </a>
          <a href="#" aria-label="104 個人頁面">
            <img src="/Image/Footer/social-03.svg" alt="" width="36" height="36" />
          </a>
        </div>
        <p>COPYRIGHT © 2022 Timmy.Lee</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  --footer-art-unit: clamp(0.65px, 0.0520833333vw, 1px);
  align-items: flex-end;
  background: linear-gradient(180deg, #fff 12.42%, #f3f3f3 100%);
  color: #323232;
  display: flex;
  min-height: calc(348 * var(--footer-art-unit));
  overflow: hidden;
  padding: calc(240 * var(--footer-art-unit)) var(--layout-gutter)
    calc(32 * var(--footer-art-unit));
  position: relative;
}

.site-footer__decorations {
  inset: 0;
  pointer-events: none;
  position: absolute;
}

.site-footer__orb,
.site-footer__triangle,
.site-footer__glow {
  z-index: 0;
}

.site-footer__orb {
  display: block;
  height: calc(500 * var(--footer-art-unit));
  left: calc(50% + 552 * var(--footer-art-unit));
  max-width: none;
  position: absolute;
  top: calc(42 * var(--footer-art-unit));
  width: calc(500 * var(--footer-art-unit));
}

.site-footer__triangle {
  align-items: center;
  display: flex;
  height: calc(747.029 * var(--footer-art-unit));
  justify-content: center;
  left: calc(50% + 197 * var(--footer-art-unit));
  position: absolute;
  top: 0;
  width: calc(638.439 * var(--footer-art-unit));
}

.site-footer__triangle-shape {
  height: calc(486.752 * var(--footer-art-unit));
  position: relative;
  transform: rotate(-41.62deg) skewX(-9.27deg) scaleY(.99);
  transform-origin: center;
  width: calc(505.621 * var(--footer-art-unit));
}

.site-footer__triangle img {
  display: block;
  height: calc(606.36 * var(--footer-art-unit));
  left: calc(-94.25 * var(--footer-art-unit));
  max-width: none;
  position: absolute;
  top: calc(-59.62 * var(--footer-art-unit));
  width: calc(624.851 * var(--footer-art-unit));
}

.site-footer__glow {
  height: calc(471 * var(--footer-art-unit));
  left: calc(50% - 823 * var(--footer-art-unit));
  position: absolute;
  top: calc(99 * var(--footer-art-unit));
  transform: rotate(180deg);
  width: calc(471 * var(--footer-art-unit));
}

.site-footer__glow img {
  display: block;
  height: calc(591 * var(--footer-art-unit));
  left: calc(-95 * var(--footer-art-unit));
  max-width: none;
  position: absolute;
  top: calc(-60 * var(--footer-art-unit));
  width: calc(591 * var(--footer-art-unit));
}

.site-footer__glass {
  display: block;
  height: calc(204 * var(--footer-art-unit));
  left: 0;
  max-width: none;
  position: absolute;
  right: 0;
  top: calc(144 * var(--footer-art-unit));
  width: 100%;
  z-index: 1;
}

.site-footer__glass img {
  display: block;
  height: 100%;
  width: 100%;
}

.site-footer__inner {
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-inline: auto;
  max-width: calc(1200 * var(--footer-art-unit));
  position: relative;
  width: 100%;
  z-index: 2;
}

.site-footer__identity {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: calc(24 * var(--footer-art-unit));
}

.site-footer__logo {
  display: block;
  height: calc(28 * var(--footer-art-unit));
  line-height: 0;
  width: calc(362.1 * var(--footer-art-unit));
}

.site-footer__logo img {
  display: block;
  height: calc(28 * var(--footer-art-unit));
  width: calc(362.1 * var(--footer-art-unit));
}

.site-footer nav {
  align-items: center;
  display: flex;
  gap: calc(24 * var(--footer-art-unit));
}

.site-footer nav a {
  color: #323232;
  font-size: calc(16 * var(--footer-art-unit));
  font-weight: 500;
  line-height: 1.5;
  min-width: calc(120 * var(--footer-art-unit));
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
}

@media (min-width: 1024px) {
  .site-footer nav a {
    font-size: calc(18 * var(--footer-art-unit));
  }
}

.site-footer nav a,
.site-footer__socials a {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.site-footer nav a:hover {
  opacity: 0.7;
}

.site-footer__meta {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: calc(12 * var(--footer-art-unit));
}

.site-footer__socials {
  display: flex;
  gap: calc(12 * var(--footer-art-unit));
}

.site-footer__socials a,
.site-footer__socials img {
  display: block;
  height: calc(36 * var(--footer-art-unit));
  width: calc(36 * var(--footer-art-unit));
}

.site-footer__socials a:hover {
  transform: translateY(-2px);
}

.site-footer__meta p {
  font-family: 'Montserrat', 'Noto Sans TC', sans-serif;
  font-size: calc(16 * var(--footer-art-unit));
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
  white-space: nowrap;
}

@media (max-width: 900px) {
  .site-footer {
    padding-top: calc(200 * var(--footer-art-unit));
  }

  .site-footer__inner {
    gap: calc(40 * var(--footer-art-unit));
  }

  .site-footer nav {
    flex-wrap: wrap;
    gap: calc(12 * var(--footer-art-unit)) calc(20 * var(--footer-art-unit));
  }
}

@media (max-width: 767px) {
  .site-footer {
    align-items: stretch;
    min-height: 320px;
    padding: 32px 24px;
  }

  .site-footer__glass {
    bottom: auto;
    height: 128.945px;
    left: 0;
    right: 0;
    top: 191px;
    width: 100%;
  }

  .site-footer__inner {
    align-items: flex-start;
    flex-direction: column;
    gap: 32px;
  }

  .site-footer__identity {
    gap: 32px;
    width: 100%;
  }

  .site-footer__logo {
    height: 20px;
    width: 258px;
  }

  .site-footer__logo img {
    height: 20px;
    width: 258px;
  }

  .site-footer nav {
    align-items: start;
    column-gap: 12px;
    display: grid;
    grid-template-columns: repeat(2, 120px);
    row-gap: 12px;
  }

  .site-footer nav a {
    font-size: 16px;
    line-height: 24px;
    min-width: 120px;
    text-align: left;
  }

  .site-footer__meta {
    align-items: flex-start;
    gap: 16px;
  }

  .site-footer__socials {
    gap: 12px;
  }

  .site-footer__socials a,
  .site-footer__socials img {
    height: 36px;
    width: 36px;
  }

  .site-footer__meta p {
    font-size: 16px;
  }

  .site-footer__triangle {
    height: 504.686px;
    left: auto;
    right: 0;
    top: 93px;
    width: 431.323px;
  }

  .site-footer__triangle-shape {
    height: 328.845px;
    transform: rotate(-41.62deg) skewX(-9.27deg) scaleY(.99);
    width: 341.593px;
  }

  .site-footer__triangle img {
    height: 448.453px;
    left: -94.25px;
    top: -59.62px;
    width: 460.823px;
  }

  .site-footer__glow,
  .site-footer__orb {
    display: none;
  }
}
</style>
