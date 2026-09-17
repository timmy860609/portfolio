<script setup lang="ts">
import { ref } from 'vue';
import { homeContact } from '../../data/home';
import AppButton from '../AppButton.vue';
import AppToast from '../AppToast.vue';
import { withBase } from '../../utils/basePath';

const copiedValue = ref('');
let resetTimer: ReturnType<typeof setTimeout> | undefined;

function iconStyle(src: string): Record<string, string> {
  return { '--contact-icon': `url("${withBase(src)}")` };
}

async function copyContact(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    copiedValue.value = value;

    if (resetTimer) clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      copiedValue.value = '';
    }, 1800);
  } catch {
    copiedValue.value = '';
  }
}
</script>

<template>
  <section id="contact" class="home-contact" aria-labelledby="home-contact-title" data-node-id="4288:47664">
    <div class="home-contact__inner">
      <div class="home-contact__introduction">
        <h2 id="home-contact-title">{{ homeContact.title }}</h2>
        <p>{{ homeContact.description }}</p>
      </div>

      <div class="home-contact__list">
        <div
          v-for="item in homeContact.items"
          :key="item.label"
          class="home-contact__card"
        >
          <div class="home-contact__details">
            <p>{{ item.title }}</p>
            <a :href="item.href">{{ item.label }}</a>
          </div>

          <div class="home-contact__actions">
            <div class="home-contact__copy">
              <AppToast
                :show="copiedValue === item.value"
                message="已複製"
              />

              <AppButton
                tag="button"
                variant="outline"
                size="s"
                fit-content
                class="home-contact__button"
                :aria-label="item.copyLabel"
                :title="item.copyLabel"
                @click="copyContact(item.value)"
              >
                <template #icon>
                  <span
                    class="home-contact__button-icon"
                    :style="iconStyle('/Image/Home/contact/copy.svg')"
                  />
                </template>
                {{ item.copyLabel }}
              </AppButton>
            </div>

            <AppButton
              :href="item.href"
              variant="primary"
              size="s"
              fit-content
              class="home-contact__button"
            >
              <template #icon>
                <span
                  class="home-contact__button-icon"
                  :style="iconStyle(item.actionIcon)"
                />
              </template>
              {{ item.actionLabel }}
            </AppButton>
          </div>
        </div>
      </div>
    </div>

    <p class="visually-hidden" aria-live="polite">
      {{ copiedValue ? `已複製 ${copiedValue}` : '' }}
    </p>
  </section>
</template>

<style scoped>
.home-contact {
  align-items: center;
  background: #fff;
  display: flex;
  justify-content: center;
  padding-block: 60px;
  position: relative;
  scroll-margin-top: 80px;
  z-index: 1;
}

.home-contact__inner {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: var(--layout-shell-width);
  padding-inline: var(--layout-gutter);
  width: 100%;
}

.home-contact__introduction {
  color: #323232;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.home-contact__introduction h2 {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.home-contact__introduction p {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
}

.home-contact__list {
  display: flex;
  gap: 40px;
}

.home-contact__card {
  align-items: flex-start;
  background: #f3f3f3;
  border-radius: 24px;
  flex-direction: column;
  display: flex;
  gap: 16px;
  justify-content: center;
  min-height: 177px;
  padding: 24px;
  width: 100%;
}

.home-contact__details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.home-contact__details p {
  color: #737373;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
}

.home-contact__details a {
  color: #323232;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  overflow-wrap: anywhere;
  text-decoration: none;
}

.home-contact__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.home-contact__copy {
  display: flex;
  position: relative;
}

.home-contact__button {
  font-size: 18px;
  gap: 10px;
  padding: 7px 12px;
}

.home-contact__button-icon {
  background-color: currentColor;
  display: block;
  height: 20px;
  mask: var(--contact-icon) center / contain no-repeat;
  width: 20px;
  -webkit-mask: var(--contact-icon) center / contain no-repeat;
}

@media (max-width: 900px) {
  .home-contact__introduction h2 {
    font-size: 36px;
  }

  .home-contact__details a {
    font-size: 20px;
  }
}

@media (max-width: 1023px) {
  .home-contact {
    scroll-margin-top: 64px;
  }
}

@media (max-width: 767px) {
  .home-contact {
    padding-block: 48px;
  }

  .home-contact__inner {
    gap: 32px;
  }

  .home-contact__list {
    flex-direction: column;
    gap: 24px;
  }

  .home-contact__introduction h2 {
    font-size: 32px;
  }

  .home-contact__introduction p {
    font-size: 16px;
  }

  .home-contact__card {
    min-height: 0;
    padding: 24px 20px;
  }

  .home-contact__details a {
    font-size: clamp(16px, 4.5vw, 20px);
  }

  .home-contact__details p,
  .home-contact__button {
    font-size: 16px;
  }
}
</style>
