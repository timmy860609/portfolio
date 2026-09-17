<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string;
    tag?: 'a' | 'button';
    variant?: 'outline' | 'primary' | 'light-outline';
    size?: 'm' | 's' | 's-wide';
    fitContent?: boolean;
    mobileFull?: boolean;
    download?: string;
  }>(),
  {
    href: undefined,
    tag: 'a',
    variant: 'outline',
    size: 'm',
    fitContent: false,
    mobileFull: false,
    download: undefined,
  },
);
</script>

<template>
  <component
    :is="tag"
    class="app-button"
    :class="[
      `app-button--${variant}`,
      `app-button--${size}`,
      {
        'app-button--fit': fitContent,
        'app-button--mobile-full': mobileFull,
        'app-button--has-icon': $slots.icon,
      },
    ]"
    :href="tag === 'a' ? href : undefined"
    :download="tag === 'a' ? download : undefined"
    :type="tag === 'button' ? 'button' : undefined"
  >
    <span class="app-button__content">
      <span v-if="$slots.icon" class="app-button__icon" aria-hidden="true">
        <slot name="icon" />
      </span>
      <slot />
    </span>
  </component>
</template>

<style scoped>
.app-button {
  align-items: center;
  border: 1px solid transparent;
  border-radius: 999px;
  color: #323232;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  font-weight: 500;
  justify-content: center;
  line-height: 1.5;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  transition:
    background-color 160ms ease,
    border-color 160ms ease,
    transform 160ms ease;
  width: 320px;
}

.app-button__content {
  align-items: center;
  display: flex;
  justify-content: center;
}

.app-button--has-icon .app-button__content {
  gap: 10px;
}

.app-button__icon {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  height: 20px;
  justify-content: center;
  width: 20px;
}

.app-button__icon :deep(img),
.app-button__icon :deep(svg) {
  display: block;
  height: 100%;
  width: 100%;
}

.app-button.app-button--fit {
  width: fit-content;
}

.app-button--s {
  padding: 8px 16px;
}

.app-button--s-wide {
  padding: 8px 24px;
}

.app-button--outline {
  border-color: #323232;
}

.app-button--primary {
  background: #00d3f8;
}

.app-button--light-outline {
  border-color: #fff;
  color: #fff;
}

.app-button:hover {
  transform: translateY(-2px);
}

.app-button--outline:hover {
  background: #323232;
  color: #fff;
  transform: none;
}

.app-button--primary:hover {
  background: #00c4e7;
  transform: none;
}

.app-button--light-outline:hover {
  background: #fff;
  color: #323232;
  transform: none;
}

.app-button:focus-visible {
  outline: 3px solid #323232;
  outline-offset: 3px;
}

@media (max-width: 767px) {
  .app-button {
    font-size: 16px;
    max-width: 320px;
    width: 100%;
  }

  .app-button.app-button--mobile-full {
    max-width: none;
    width: 100%;
  }
}
</style>
