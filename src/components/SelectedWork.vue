<template>
  <div class="work">
    <article v-for="key in workItems" :key="key" class="item" :class="{ 'item--media': workImages[key] }">
      <div class="text">
        <h3>{{ t(`work.items.${key}.title`) }}</h3>
        <p class="where">{{ t(`work.items.${key}.where`) }}</p>
        <p class="body">{{ t(`work.items.${key}.body`) }}</p>
        <p v-if="te(`work.items.${key}.tools`) && t(`work.items.${key}.tools`)" class="tools">
          <span class="tools-label">{{ t('work.tools') }}</span>
          {{ t(`work.items.${key}.tools`) }}
        </p>
      </div>

      <figure v-if="workImages[key]" class="media">
        <button type="button" class="thumb" :aria-label="t('work.enlarge')" @click="open(key)">
          <img
            :src="workImages[key]"
            :alt="t(`work.items.${key}.imageAlt`)"
            loading="lazy"
            decoding="async"
          />
        </button>
        <figcaption>{{ t(`work.items.${key}.imageCaption`) }}</figcaption>
      </figure>
    </article>
    <p class="more">{{ t('work.more') }}</p>

    <dialog
      ref="dialog"
      class="viewer"
      closedby="any"
      :aria-label="current ? t(`work.items.${current}.imageAlt`) : undefined"
      @close="current = ''"
    >
      <form method="dialog" class="close-row">
        <button type="submit" class="btn">
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>
          {{ t('reviews.close') }}
        </button>
      </form>
      <img v-if="current" :src="workImages[current]" :alt="t(`work.items.${current}.imageAlt`)" />
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { workItems, type WorkItem } from '@/data/content'
import ooyKeepsake from '@/assets/ooy-keepsake.webp'

const { t, te } = useI18n()

const workImages: Partial<Record<WorkItem, string>> = {
  ooy: ooyKeepsake,
}

const dialog = ref<HTMLDialogElement>()
const current = ref<WorkItem | ''>('')

function open(key: WorkItem) {
  current.value = key
  dialog.value?.showModal()
}

// Light-dismiss fallback for browsers without <dialog closedby> (Safari).
onMounted(() => {
  const el = dialog.value
  if (!el || 'closedBy' in HTMLDialogElement.prototype) return
  el.addEventListener('click', (event) => {
    if (event.target !== el) return
    const r = el.getBoundingClientRect()
    const inside =
      r.top <= event.clientY && event.clientY <= r.bottom && r.left <= event.clientX && event.clientX <= r.right
    if (!inside) el.close()
  })
})
</script>

<style scoped>
.work {
  display: grid;
  gap: 0;
}

.item {
  padding-block: 1.5rem;
  border-bottom: 1px solid var(--rule);
}

.item:first-child {
  padding-top: 0;
}

.text {
  max-inline-size: var(--measure);
}

.item--media {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.25rem;
}

@media (width >= 640px) {
  .item--media {
    grid-template-columns: minmax(0, 1fr) 11rem;
    gap: 2rem;
    align-items: start;
  }
}

h3 {
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.25;
}

.where {
  margin: 0.25rem 0 0;
  color: var(--ink);
  font-size: 0.9rem;
}

.body {
  margin: 0.75rem 0 0;
}

.tools {
  margin: 0.75rem 0 0;
  font-size: 0.875rem;
  color: var(--graphite-soft);
}

.tools-label {
  margin-inline-end: 0.5rem;
  color: var(--graphite);
  font-weight: 500;
}

.media {
  margin: 0;
  max-inline-size: 14rem;
}

.thumb {
  display: block;
  inline-size: 100%;
  padding: 0;
  border: 1px solid var(--rule);
  border-radius: 4px;
  background: #fff;
  cursor: zoom-in;
  overflow: hidden;
}

.thumb:hover {
  border-color: var(--ink);
}

.thumb img {
  display: block;
  inline-size: 100%;
  block-size: auto;
}

.media figcaption {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--graphite-soft);
}

.more {
  margin: 1.25rem 0 0;
  font-size: 0.9rem;
  color: var(--graphite-soft);
}

.viewer {
  max-inline-size: min(92dvw, 900px);
  max-block-size: 92dvh;
  padding: 1rem;
  border: 1.5px solid var(--ink);
  border-radius: 4px;
  background: var(--paper);
}

.viewer::backdrop {
  background: rgb(20 24 40 / 0.6);
}

.close-row {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.75rem;
}

.viewer img {
  display: block;
  max-inline-size: 100%;
  max-block-size: calc(92dvh - 6rem);
  margin-inline: auto;
}
</style>
