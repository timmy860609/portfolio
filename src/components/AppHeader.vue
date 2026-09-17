<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { gsap } from 'gsap/dist/gsap';
import { mainNavigation as navigation } from '../data/site';
import { withBase } from '../utils/basePath';
import AppButton from './AppButton.vue';

const props = defineProps<{
  currentPath: string;
}>();

const navigationElement = ref<HTMLElement | null>(null);
const navigationPanelElement = ref<HTMLElement | null>(null);
const menuToggleElement = ref<HTMLButtonElement | null>(null);
const navigationLinks = ref<HTMLElement[]>([]);
const readingProgress = ref(0);
const mobileMenuIsOpen = ref(false);
const showLanguageButton = false;
let progressAnimationFrame = 0;
let mobileMenuTimeline: gsap.core.Timeline | undefined;

const normalizePath = (path: string) =>
  path.length > 1 ? path.replace(/\/+$/, '') : path;

const isDetailPage = computed(() => {
  const currentPath = normalizePath(props.currentPath);
  return (
    (currentPath.startsWith('/projects/') && currentPath !== '/projects') ||
    (currentPath.startsWith('/articles/') && currentPath !== '/articles')
  );
});

const updateReadingProgress = () => {
  progressAnimationFrame = 0;
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  readingProgress.value = scrollableHeight > 0
    ? Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1)
    : 0;
};

const requestReadingProgressUpdate = () => {
  if (progressAnimationFrame) return;
  progressAnimationFrame = window.requestAnimationFrame(updateReadingProgress);
};

const isNavigationActive = (target: string) => {
  const currentPath = normalizePath(props.currentPath);
  const targetPath = normalizePath(target);

  if (targetPath === '/projects' || targetPath === '/articles') {
    return (
      currentPath === targetPath ||
      currentPath.startsWith(`${targetPath}/`)
    );
  }

  return currentPath === targetPath;
};

const updateNavigationIndicator = () => {
  const navigationNode = navigationElement.value;
  const activeLink = navigationLinks.value.find((link) =>
    link.classList.contains('nav-link--active'),
  );

  if (!navigationNode || !activeLink) return;

  navigationNode.style.setProperty(
    '--indicator-x',
    `${activeLink.offsetLeft}px`,
  );
  navigationNode.style.setProperty(
    '--indicator-width',
    `${activeLink.offsetWidth}px`,
  );
};

const setIndicatorFromLink = (
  navigationNode: HTMLElement,
  link: HTMLElement,
) => {
  navigationNode.style.setProperty(
    '--indicator-x',
    `${link.offsetLeft}px`,
  );
  navigationNode.style.setProperty(
    '--indicator-width',
    `${link.offsetWidth}px`,
  );
};

const rememberCurrentNavigation = () => {
  const activeLink = navigationLinks.value.find((link) =>
    link.classList.contains('nav-link--active'),
  );

  if (activeLink) {
    sessionStorage.setItem(
      'portfolio-previous-navigation',
      activeLink.getAttribute('href') ?? '/',
    );
  }
};

const closeMobileMenu = () => {
  mobileMenuIsOpen.value = false;
};

const getMobileActionGroup = () =>
  navigationPanelElement.value?.querySelector<HTMLElement>('.header-actions');

const getMobileMenuItems = () => {
  const actionGroup = getMobileActionGroup();

  return [
    ...navigationLinks.value,
    ...(actionGroup ? [actionGroup] : []),
  ];
};

const animateMobileMenu = (isOpen: boolean, immediate = false) => {
  const panel = navigationPanelElement.value;
  if (!panel || window.innerWidth >= 1024) return;

  const items = getMobileMenuItems();
  const actionGroup = getMobileActionGroup();
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  mobileMenuTimeline?.kill();

  if (immediate || reduceMotion) {
    gsap.set(panel, {
      autoAlpha: isOpen ? 1 : 0,
      clipPath: isOpen ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)',
      y: isOpen ? 0 : -12,
    });
    gsap.set(items, {
      autoAlpha: isOpen ? 1 : 0,
      y: isOpen ? 0 : 12,
    });
    return;
  }

  mobileMenuTimeline = gsap.timeline({
    defaults: { overwrite: 'auto' },
  });

  if (isOpen) {
    mobileMenuTimeline
      .set(panel, { visibility: 'visible' })
      .fromTo(
        panel,
        {
          autoAlpha: 0,
          clipPath: 'inset(0% 0% 100% 0%)',
          scale: 0.985,
          y: -12,
        },
        {
          autoAlpha: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.46,
          ease: 'power3.out',
          scale: 1,
          y: 0,
        },
      )
      .addLabel('menu-items', '-=0.38')
      .fromTo(
        navigationLinks.value,
        { autoAlpha: 0, y: 14 },
        {
          autoAlpha: 1,
          duration: 0.32,
          ease: 'power3.out',
          stagger: 0.03,
          y: 0,
        },
        'menu-items',
      );

    if (actionGroup) {
      mobileMenuTimeline.fromTo(
        actionGroup,
        { autoAlpha: 0, y: 14 },
        {
          autoAlpha: 1,
          duration: 0.32,
          ease: 'power3.out',
          y: 0,
        },
        'menu-items+=0.09',
      );
    }
  } else {
    mobileMenuTimeline
      .to(items, {
        autoAlpha: 0,
        duration: 0.18,
        ease: 'power2.in',
        stagger: { each: 0.025, from: 'end' },
        y: -8,
      })
      .to(
        panel,
        {
          autoAlpha: 0,
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.36,
          ease: 'power3.inOut',
          scale: 0.985,
          y: -12,
        },
        '-=0.08',
      );
  }
};

const handleNavigationClick = () => {
  rememberCurrentNavigation();
  closeMobileMenu();
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeMobileMenu();
};

const handleDocumentPointerDown = (event: PointerEvent) => {
  if (!mobileMenuIsOpen.value || !(event.target instanceof Node)) return;

  if (
    navigationPanelElement.value?.contains(event.target) ||
    menuToggleElement.value?.contains(event.target)
  ) {
    return;
  }

  closeMobileMenu();
};

const handleResize = () => {
  updateNavigationIndicator();
  if (window.innerWidth >= 1024) {
    closeMobileMenu();
    mobileMenuTimeline?.kill();
    gsap.set(navigationPanelElement.value, { clearProps: 'all' });
    gsap.set(getMobileMenuItems(), { clearProps: 'all' });
  } else {
    animateMobileMenu(mobileMenuIsOpen.value, true);
  }
};

watch(mobileMenuIsOpen, (isOpen) => {
  animateMobileMenu(isOpen);
});

const initializeNavigationIndicator = () => {
  const navigationNode = navigationElement.value;
  const activeLink = navigationLinks.value.find((link) =>
    link.classList.contains('nav-link--active'),
  );

  if (!navigationNode || !activeLink) return;

  const previousPath = sessionStorage.getItem(
    'portfolio-previous-navigation',
  );
  sessionStorage.removeItem('portfolio-previous-navigation');

  const previousLink = navigationLinks.value.find(
    (link) => normalizePath(link.getAttribute('href') ?? '/') === previousPath,
  );

  navigationNode.classList.add('navigation--no-transition');
  setIndicatorFromLink(navigationNode, previousLink ?? activeLink);
  navigationNode.classList.add('navigation--indicator-ready');
  void navigationNode.offsetWidth;
  navigationNode.classList.remove('navigation--no-transition');

  if (previousLink && previousLink !== activeLink) {
    requestAnimationFrame(updateNavigationIndicator);
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize, {
    passive: true,
  });
  window.addEventListener('keydown', handleKeydown);
  document.addEventListener('pointerdown', handleDocumentPointerDown);

  if (isDetailPage.value) {
    updateReadingProgress();
    window.addEventListener('scroll', requestReadingProgressUpdate, {
      passive: true,
    });
    window.addEventListener('resize', requestReadingProgressUpdate, {
      passive: true,
    });
  }

  nextTick(() => {
    animateMobileMenu(false, true);
    requestAnimationFrame(initializeNavigationIndicator);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('keydown', handleKeydown);
  document.removeEventListener('pointerdown', handleDocumentPointerDown);
  window.removeEventListener('scroll', requestReadingProgressUpdate);
  window.removeEventListener('resize', requestReadingProgressUpdate);
  if (progressAnimationFrame) {
    window.cancelAnimationFrame(progressAnimationFrame);
  }
  mobileMenuTimeline?.kill();
});

</script>

<template>
  <header
    class="site-header"
    data-node-id="1558:45412"
  >
    <div class="header-inner">
      <a class="logo-link" :href="withBase('/')" aria-label="Timmy Lee 首頁">
        <img :src="withBase('/WebCI/ci-logo.svg')" alt="Timmy Lee" width="233" height="18" />
      </a>

      <button
        ref="menuToggleElement"
        class="menu-toggle"
        :class="{ 'menu-toggle--open': mobileMenuIsOpen }"
        type="button"
        aria-controls="main-navigation"
        :aria-expanded="mobileMenuIsOpen"
        :aria-label="mobileMenuIsOpen ? '關閉主選單' : '開啟主選單'"
        @click="mobileMenuIsOpen = !mobileMenuIsOpen"
      >
        <img :src="withBase('/WebCI/menu-line-outer.svg')" alt="" />
        <img :src="withBase('/WebCI/menu-line-middle.svg')" alt="" />
        <img :src="withBase('/WebCI/menu-line-outer.svg')" alt="" />
      </button>

      <div
        ref="navigationPanelElement"
        class="navigation-panel"
        :class="{ 'navigation-panel--open': mobileMenuIsOpen }"
      >
        <nav
          id="main-navigation"
          ref="navigationElement"
          :class="{ 'navigation--open': mobileMenuIsOpen }"
          aria-label="主要導覽"
        >
          <a
            v-for="item in navigation"
            :key="item.to"
            ref="navigationLinks"
            :href="withBase(item.to)"
            class="nav-link"
            :class="{ 'nav-link--active': isNavigationActive(item.to) }"
            :aria-current="isNavigationActive(item.to) ? 'page' : undefined"
            @click="handleNavigationClick"
          >
            {{ item.label }}
          </a>
        </nav>

        <div
          class="header-actions"
          :class="{ 'header-actions--open': mobileMenuIsOpen }"
        >
          <button
            v-if="showLanguageButton"
            class="language-button"
            type="button"
            aria-label="切換為英文"
          >
            EN
          </button>
          <AppButton
            href="/#contact"
            variant="primary"
            fit-content
            class="contact-button"
            @click="closeMobileMenu"
          >
            與我聯繫
          </AppButton>
        </div>
      </div>
    </div>

    <div
      v-if="isDetailPage"
      class="site-header__progress"
      role="progressbar"
      aria-label="頁面閱讀進度"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="Math.round(readingProgress * 100)"
      :style="{ transform: `scaleX(${readingProgress})` }"
    ></div>
  </header>
</template>

<style scoped>
.site-header {
  -webkit-backdrop-filter: blur(20px);
  align-items: center;
  backdrop-filter: blur(20px);
  background: rgb(250 250 250 / 80%);
  display: flex;
  left: 0;
  justify-content: center;
  min-height: 60px;
  overflow: hidden;
  padding: 13px 24px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.header-inner {
  align-items: center;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  position: relative;
  width: 100%;
  z-index: 1;
}

.site-header__progress {
  background: #00d9ff;
  bottom: 0;
  height: 3px;
  left: 0;
  position: absolute;
  transform-origin: left center;
  width: 100%;
  z-index: 2;
}

.logo-link {
  display: block;
  flex: 0 0 auto;
  height: 18px;
  line-height: 0;
  width: 233px;
}

.logo-link img {
  display: block;
  height: 18px;
  transition: filter 180ms ease;
  width: 233px;
}

.menu-toggle {
  display: none;
}

.navigation-panel {
  display: contents;
}

nav {
  --indicator-width: 64px;
  --indicator-x: 0px;

  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 16px;
  position: relative;
}

nav::before {
  background: #ededed;
  border-radius: 999px;
  bottom: 0;
  content: '';
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transform: translateX(var(--indicator-x));
  transition:
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
    width 420ms cubic-bezier(0.22, 1, 0.36, 1);
  width: var(--indicator-width);
}

nav.navigation--indicator-ready::before {
  opacity: 1;
}

nav.navigation--no-transition::before {
  transition: none;
}

.nav-link {
  align-items: center;
  color: #000;
  display: flex;
  font-size: 18px;
  font-weight: 400;
  justify-content: center;
  line-height: 1.5;
  padding: 8px 12px;
  position: relative;
  text-decoration: none;
  transition: color 160ms ease;
  white-space: nowrap;
  z-index: 1;
}

.nav-link:hover {
  color: #323232;
}

.nav-link--active {
  color: #000;
  font-weight: 500;
  padding-inline: 16px;
}

.header-actions {
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
}

.language-button {
  align-items: center;
  border-radius: 999px;
  color: #323232;
  display: flex;
  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  justify-content: center;
  line-height: 1.5;
  text-decoration: none;
}

.language-button {
  background: transparent;
  border: 1px solid #323232;
  cursor: pointer;
  height: 44px;
  padding: 0;
  width: 44px;
}

.contact-button {
  font-size: 18px;
  padding: 12px 24px;
  white-space: nowrap;
}

.language-button:focus-visible {
  outline: 3px solid #323232;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  nav::before {
    transition: none;
  }
}

@media (max-width: 1023px) {
  .site-header {
    -webkit-backdrop-filter: none;
    align-items: center;
    backdrop-filter: none;
    background: #fff;
    min-height: 44px;
    overflow: visible;
    padding: 16px;
  }

  .header-inner {
    align-items: center;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .navigation-panel {
    -webkit-backdrop-filter: blur(20px);
    align-items: center;
    backdrop-filter: blur(20px);
    background: #fff;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    left: 16px;
    opacity: 0;
    padding: 24px 32px;
    pointer-events: none;
    position: fixed;
    right: 16px;
    top: 64px;
    transform-origin: top right;
    visibility: hidden;
    width: auto;
    will-change: clip-path, opacity, transform;
  }

  .navigation-panel--open {
    pointer-events: auto;
  }

  .header-actions {
    align-items: center;
    display: flex;
    gap: 16px;
    justify-content: center;
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  }

  .language-button {
    font-size: 16px;
    height: 40px;
    order: 2;
    width: 40px;
  }

  .contact-button {
    font-size: 16px;
    line-height: 1.5;
    order: 1;
    padding: 8px;
  }

  nav {
    align-items: center;
    flex-direction: column;
    gap: 16px;
    max-height: none;
    opacity: 1;
    overflow: visible;
    pointer-events: auto;
    transform: none;
    visibility: visible;
    width: 100%;
  }

  nav.navigation--open {
    padding-top: 0;
  }

  nav::before {
    display: none;
  }

  .nav-link {
    border-radius: 999px;
    font-size: 16px;
    padding: 8px 12px;
  }

  .nav-link--active {
    background: transparent;
    font-weight: 400;
    padding-inline: 12px;
  }

  .menu-toggle {
    align-items: center;
    background: transparent;
    border: 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 0;
    height: 20px;
    justify-content: center;
    padding: 0;
    position: relative;
    width: 20px;
  }

  .menu-toggle::before {
    content: '';
    inset: -12px;
    position: absolute;
  }

  .menu-toggle img {
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    transition:
      opacity 180ms ease,
      transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
    width: 20px;
  }

  .menu-toggle img:first-child {
    top: 3px;
  }

  .menu-toggle img:nth-child(2) {
    top: 9px;
  }

  .menu-toggle img:last-child {
    top: 15px;
  }

  .menu-toggle--open img:first-child {
    transform: translateY(6px) rotate(45deg);
  }

  .menu-toggle--open img:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle--open img:last-child {
    transform: translateY(-6px) rotate(-45deg);
  }

  .logo-link,
  .logo-link img {
    height: 12px;
    width: 155.186px;
  }
}
</style>
