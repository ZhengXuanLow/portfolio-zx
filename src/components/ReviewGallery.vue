<template>
  <div>
    <ul class="gallery">
      <li v-for="(img, i) in images" :key="img">
        <button type="button" class="thumb" :aria-label="t('reviews.open', { n: i + 1 })" @click="open(i)">
          <img :src="img" :alt="t('reviews.alt', { n: i + 1 })" loading="lazy" decoding="async" />
        </button>
      </li>
    </ul>

    <dialog
      ref="dialog"
      class="viewer"
      closedby="any"
      :aria-label="current >= 0 ? t('reviews.alt', { n: current + 1 }) : undefined"
      @close="current = -1"
    >
      <form method="dialog" class="close-row">
        <button type="submit" class="btn">
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>
          {{ t('reviews.close') }}
        </button>
      </form>
      <img v-if="current >= 0" :src="images[current]" :alt="t('reviews.alt', { n: current + 1 })" />
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import kidsPresentation from '@/assets/review5.png'
import suggestions from '@/assets/review4.png'
import stepByStep from '@/assets/review-step-by-step.png'
import easyToUnderstand from '@/assets/review3.png'
import patient from '@/assets/review-patient.png'
import incredible from '@/assets/review1.png'

const { t } = useI18n()
// Shown in this order. Blank out names of students and parents before adding a screenshot.
const images = [kidsPresentation, suggestions, stepByStep, easyToUnderstand, patient, incredible]
const dialog = ref<HTMLDialogElement>()
const current = ref(-1)

function open(i: number) {
  current.value = i
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
.gallery {
  list-style: none;
  margin: 0;
  padding: 0;
  columns: 2 260px;
  column-gap: 1rem;
}

.gallery li {
  break-inside: avoid;
  margin-bottom: 1rem;
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
