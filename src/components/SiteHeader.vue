<template>
  <header ref="header" class="site-header">
    <div ref="inner" class="header-inner page">
      <a class="brand" href="#top">Zheng Xuan</a>

      <nav class="site-nav" :aria-label="t('nav.label')">
        <button
          class="menu-button"
          type="button"
          popovertarget="site-menu"
          popovertargetaction="toggle"
          aria-controls="site-menu"
        >
          <i class="fa-solid fa-bars" aria-hidden="true"></i>
          <span>{{ t('nav.menu') }}</span>
        </button>

        <ul id="site-menu" ref="menu" class="site-menu" popover="auto">
          <li v-for="item in items" :key="item.id">
            <a :href="`#${item.id}`" @click="closeMenu">{{ t(item.label) }}</a>
          </li>
          <li class="menu-actions">
            <button
              type="button"
              class="lang-button"
              :lang="locale === 'en' ? 'zh-Hans' : 'en'"
              :aria-label="t('nav.switchLangLabel')"
              @click="toggleLanguage"
            >
              {{ t('nav.switchLang') }}
            </button>
            <a v-if="links.resume" class="btn btn--solid" :href="resumeHref" download>
              <i class="fa-solid fa-download" aria-hidden="true"></i>
              {{ t('nav.cv') }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { links } from '@/data/content'

const { t, locale } = useI18n()

const items = [
  { id: 'teach', label: 'nav.teach' },
  { id: 'work', label: 'nav.work' },
  { id: 'experience', label: 'nav.experience' },
  { id: 'reviews', label: 'nav.reviews' },
  { id: 'contact', label: 'nav.contact' },
]

const resumeHref = computed(() => import.meta.env.BASE_URL + links.resume)

const header = ref<HTMLElement>()
const inner = ref<HTMLElement>()
const menu = ref<HTMLElement>()

let lastWidth = 0
let observer: ResizeObserver | undefined

// Show the links inline only when the whole row fits; otherwise keep the popover menu.
function updateLayout() {
  const h = header.value
  const row = inner.value
  const list = menu.value
  if (!h || !row || !list) return

  const isWide = h.classList.contains('is-wide')
  const width = h.clientWidth
  if (!isWide && width <= lastWidth) {
    lastWidth = width
    return
  }
  lastWidth = width

  const wasOpen = list.matches(':popover-open')
  h.classList.add('is-measuring', 'is-wide')
  list.removeAttribute('popover')
  const fits = row.scrollWidth <= row.clientWidth

  if (!fits) {
    h.classList.remove('is-wide')
    list.setAttribute('popover', 'auto')
    if (wasOpen) list.showPopover()
  }
  requestAnimationFrame(() => h.classList.remove('is-measuring'))
}

function closeMenu() {
  const list = menu.value
  if (list?.hasAttribute('popover') && list.matches(':popover-open')) list.hidePopover()
}

function toggleLanguage() {
  locale.value = locale.value === 'en' ? 'zh' : 'en'
}

watch(locale, async () => {
  lastWidth = 0
  await nextTick()
  updateLayout()
})

onMounted(() => {
  observer = new ResizeObserver(() => updateLayout())
  if (header.value) observer.observe(header.value)
  if (menu.value) observer.observe(menu.value)
  updateLayout()
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--paper);
  border-bottom: 1px solid var(--rule);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 4rem;
  overflow: hidden;
}

.header-inner > * {
  flex-shrink: 0;
  white-space: nowrap;
}

.brand {
  font: 800 1.15rem/1 var(--font-display);
  color: var(--graphite);
  text-decoration: none;
}

.menu-button {
  anchor-name: --menu-button;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 44px;
  padding: 0.4rem 0.9rem;
  border: 1.5px solid var(--ink);
  border-radius: 4px;
  background: transparent;
  color: var(--ink);
  font: 500 0.95rem var(--font-body);
  cursor: pointer;
}

/* Collapsed layout: the list is a popover anchored below the menu button */
.site-menu {
  position: fixed;
  inset: auto;
  inset-block-start: 4.5rem;
  inset-block-start: anchor(--menu-button bottom);
  inset-inline-end: 1rem;
  inline-size: min(80dvw, 20rem);
  max-block-size: calc(100dvh - 6rem);
  margin: 0.5rem 0 0;
  padding: 0.75rem;
  overflow: auto;
  list-style: none;
  background: var(--paper);
  border: 1.5px solid var(--ink);
  border-radius: 4px;
  color: var(--graphite);
}

.site-menu:not(:popover-open) {
  display: none;
}

.site-menu:popover-open {
  display: grid;
  gap: 0.25rem;
}

.site-menu a:not(.btn) {
  display: block;
  padding: 0.6rem 0.5rem;
  color: var(--graphite);
  text-decoration: none;
}

.site-menu a:not(.btn):hover {
  color: var(--ink);
  text-decoration: underline;
}

.menu-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  padding-top: 0.5rem;
  border-top: 1px solid var(--rule);
}

.lang-button {
  min-height: 44px;
  padding: 0.4rem 0.75rem;
  border: 0;
  background: transparent;
  color: var(--ink);
  font: 500 0.95rem var(--font-body);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 0.25em;
}

/* Wide layout: the same list sits inline in the header */
.site-header.is-wide .menu-button {
  display: none;
}

.site-header.is-wide .site-menu {
  position: static;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  inline-size: auto;
  max-block-size: none;
  margin: 0;
  padding: 0;
  overflow: visible;
  border: 0;
  background: transparent;
}

.site-header.is-wide .site-menu a:not(.btn) {
  padding: 0.5rem 0.6rem;
  font-size: 0.95rem;
}

.site-header.is-wide .menu-actions {
  padding: 0 0 0 0.75rem;
  border-top: 0;
  flex-wrap: nowrap;
}

.site-header.is-measuring * {
  transition: none !important;
}
</style>
