<template>
  <div>
    <button type="button" class="btn open-button" @click="open">
      <i class="fa-solid fa-bug" aria-hidden="true"></i>
      {{ t('debug.open') }}
    </button>

    <dialog ref="dialog" class="debug-dialog" closedby="any" aria-labelledby="debug-title" @close="isOpen = false">
      <div class="head">
        <h2 id="debug-title">{{ t('debug.title') }}</h2>
        <form method="dialog">
          <button type="submit" class="btn close" :aria-label="t('debug.close')">
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
            <span class="close-text">{{ t('debug.close') }}</span>
          </button>
        </form>
      </div>
      <!-- Re-mount on each open so the challenge starts fresh -->
      <DebugChallenge v-if="isOpen" />
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import DebugChallenge from '@/components/DebugChallenge.vue'

const { t } = useI18n()
const dialog = ref<HTMLDialogElement>()
const isOpen = ref(false)

function open() {
  isOpen.value = true
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
.open-button {
  margin-top: 1.5rem;
}

.debug-dialog {
  inline-size: min(92dvw, 760px);
  max-block-size: 92dvh;
  /* Pin near the top so the window doesn't jump as hints appear */
  margin-block: 4dvh auto;
  padding: clamp(1.25rem, 3vw, 2rem);
  overflow: auto;
  overscroll-behavior: contain;
  border: 1.5px solid var(--ink);
  border-radius: 4px;
  background: var(--paper);
  color: var(--graphite);
}

.debug-dialog::backdrop {
  background: rgb(20 24 40 / 0.6);
}

.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.head h2 {
  margin: 0;
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: 800;
}

@media (width < 480px) {
  .close-text {
    display: none;
  }
}
</style>
