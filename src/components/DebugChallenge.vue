<template>
  <div class="challenge">
    <p class="task">{{ t('debug.task') }}</p>

    <div class="grid">
      <div class="code-side">
        <div class="mode" role="group" :aria-label="t('debug.viewLabel')">
          <button type="button" :aria-pressed="mode === 'blocks'" @click="mode = 'blocks'">
            {{ t('debug.blocks') }}
          </button>
          <button type="button" :aria-pressed="mode === 'python'" @click="mode = 'python'">
            {{ t('debug.python') }}
          </button>
        </div>

        <div v-if="mode === 'blocks'" class="blocks">
          <div class="block block--hat">{{ t('debug.whenFlag') }}</div>
          <div class="block block--loop">
            <div class="loop-head">{{ t('debug.repeat', { n: SIDES }) }}</div>
            <div class="block block--inner">{{ t('debug.move', { n: STEP }) }}</div>
            <label class="block block--inner turn">
              {{ t('debug.turnBefore') }}
              <input
                v-model.number="angleInput"
                class="angle"
                type="number"
                inputmode="numeric"
                min="1"
                max="179"
                step="1"
                @change="normalize"
              />
              {{ t('debug.turnAfter') }}
            </label>
          </div>
        </div>

        <div v-else class="python">
          <label class="sr-only" for="py-angle">{{ t('debug.angleLabel') }}</label>
          <pre><code><span class="kw">for</span> i <span class="kw">in</span> range({{ SIDES }}):
    t.forward({{ STEP }})
    t.right(<input
            id="py-angle"
            v-model.number="angleInput"
            class="angle angle--code"
            type="number"
            inputmode="numeric"
            min="1"
            max="179"
            step="1"
            @change="normalize"
          />)</code></pre>
        </div>

        <p class="status" :class="{ 'status--fixed': fixed }" aria-live="polite">
          {{ fixed ? t('debug.fixed') : t('debug.status', { n: SIDES, deg: angle, total }) }}
        </p>
      </div>

      <svg :viewBox="viewBox" class="canvas" role="img" :aria-label="t('debug.drawingLabel')">
        <polyline
          :key="angle"
          class="path"
          :class="{ 'path--fixed': fixed }"
          :points="points"
          pathLength="100"
          :stroke-width="strokeWidth"
          fill="none"
        />
        <circle cx="0" cy="0" :r="strokeWidth * 1.3" class="start" />
      </svg>
    </div>

    <div class="guide">
      <h3 class="guide-title">{{ t('debug.guideTitle') }}</h3>
      <ol class="hints">
        <li v-for="(hint, i) in shownHints" :key="i">{{ hint }}</li>
      </ol>
      <p v-if="fixed" class="lesson">{{ t('debug.lesson') }}</p>
      <div class="actions">
        <button v-if="!fixed && hintsShown < hints.length" type="button" class="btn" @click="hintsShown++">
          {{ hintsShown === 0 ? t('debug.hint') : t('debug.moreHint') }}
        </button>
        <button type="button" class="btn btn--ghost" @click="reset">{{ t('debug.reset') }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()

const SIDES = 4
const STEP = 60
const BUGGY_ANGLE = 80

const mode = ref<'blocks' | 'python'>('blocks')
const angleInput = ref<number | ''>(BUGGY_ANGLE)
const hintsShown = ref(0)

const angle = computed(() => {
  const n = Math.round(Number(angleInput.value))
  if (!Number.isFinite(n)) return 1
  return Math.min(179, Math.max(1, n))
})
const total = computed(() => SIDES * angle.value)
const fixed = computed(() => angle.value === 90)

function normalize() {
  angleInput.value = angle.value
}

function reset() {
  angleInput.value = BUGGY_ANGLE
  hintsShown.value = 0
}

// Guiding questions, revealed one at a time instead of giving the answer.
const hints = computed(() => {
  const raw = tm('debug.hints') as unknown[]
  return raw.map((h) => (typeof h === 'string' ? h : rt(h as Parameters<typeof rt>[0])))
})
const shownHints = computed(() => hints.value.slice(0, fixed.value ? hints.value.length : hintsShown.value))

// Turtle walk: start at the origin heading right, move then turn right.
const vertices = computed(() => {
  const pts: [number, number][] = [[0, 0]]
  let x = 0
  let y = 0
  let heading = 0
  for (let i = 0; i < SIDES; i++) {
    x += STEP * Math.cos((heading * Math.PI) / 180)
    y += STEP * Math.sin((heading * Math.PI) / 180)
    pts.push([x, y])
    heading += angle.value
  }
  return pts
})

const points = computed(() => vertices.value.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(' '))

const box = computed(() => {
  const xs = vertices.value.map((p) => p[0])
  const ys = vertices.value.map((p) => p[1])
  const pad = 18
  const w = Math.max(...xs) - Math.min(...xs) + pad * 2
  const h = Math.max(...ys) - Math.min(...ys) + pad * 2
  const size = Math.max(w, h, 100)
  const cx = (Math.max(...xs) + Math.min(...xs)) / 2
  const cy = (Math.max(...ys) + Math.min(...ys)) / 2
  return { x: cx - size / 2, y: cy - size / 2, size }
})

const viewBox = computed(() => {
  const { x, y, size } = box.value
  return `${x.toFixed(1)} ${y.toFixed(1)} ${size.toFixed(1)} ${size.toFixed(1)}`
})

const strokeWidth = computed(() => box.value.size / 85)
</script>

<style scoped>
.task {
  margin: 0 0 1.25rem;
  max-inline-size: 52ch;
}

.grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.25rem;
  padding: 1.25rem;
  background-color: var(--paper);
  background-image:
    linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 22px 22px;
  border: 1.5px solid var(--ink);
  border-radius: 4px;
}

@media (width >= 600px) {
  .grid {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    align-items: center;
  }
}

.mode {
  display: inline-flex;
  margin-bottom: 1rem;
  border: 1.5px solid var(--ink);
  border-radius: 4px;
  overflow: hidden;
}

.mode button {
  min-height: 40px;
  padding: 0.35rem 1rem;
  border: 0;
  background: var(--paper);
  color: var(--ink);
  font: 500 0.9rem var(--font-body);
  cursor: pointer;
}

.mode button[aria-pressed='true'] {
  background: var(--ink);
  color: #fff;
}

.blocks {
  color: var(--ink);
  font-size: 0.95rem;
}

.block {
  padding: 0.35rem 0.75rem;
  border: 1.5px solid var(--ink);
  background: var(--paper);
  width: fit-content;
}

.block--hat {
  border-radius: 12px 12px 2px 2px;
  border-color: var(--graphite);
  color: var(--graphite);
}

.block--loop {
  margin-top: 0.35rem;
  padding: 0.5rem 0.75rem 0.75rem;
  min-width: min(100%, 15rem);
}

.loop-head {
  margin-bottom: 0.35rem;
}

.block--inner {
  margin: 0.35rem 0 0 1rem;
  border-width: 1.2px;
}

.turn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.angle {
  inline-size: 3.4em;
  min-height: 36px;
  padding: 0.1rem 0.3rem;
  border: 1.5px solid var(--graphite);
  border-radius: 3px;
  background: var(--highlight);
  color: var(--graphite);
  font: 700 1rem var(--font-code);
  text-align: center;
  appearance: textfield;
}

.angle::-webkit-inner-spin-button,
.angle::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}

.angle--code {
  min-height: 30px;
  font-size: 0.95rem;
}

.python pre {
  margin: 0;
  font-family: var(--font-code);
  font-size: 0.95rem;
  line-height: 2;
  color: var(--graphite);
  white-space: pre;
  overflow-x: auto;
  font-size-adjust: from-font;
}

.kw {
  color: var(--ink);
}

.status {
  margin: 1rem 0 0;
  font-size: 0.9rem;
  color: var(--graphite-soft);
}

.status--fixed {
  color: var(--ink);
  font-weight: 700;
}

.canvas {
  justify-self: center;
  inline-size: min(100%, 240px);
  aspect-ratio: 1;
  background: color-mix(in srgb, #fff 70%, transparent);
  border: 1px dashed var(--rule);
}

.path {
  stroke: #b8423a;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-dasharray: 100;
  stroke-dashoffset: 0;
  animation: draw 0.9s ease-out;
}

.path--fixed {
  stroke: var(--ink);
}

.start {
  fill: var(--graphite);
}

@keyframes draw {
  from {
    stroke-dashoffset: 100;
  }
}

.guide {
  margin-top: 1.5rem;
}

.guide-title {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
}

.hints {
  margin: 0.5rem 0 0;
  padding-inline-start: 1.25rem;
  list-style: decimal;
}

.hints li {
  margin-top: 0.4rem;
}

.hints:empty {
  display: none;
}

.lesson {
  margin: 1rem 0 0;
  padding: 0.75rem 1rem;
  background: var(--ink-soft);
  border-inline-start: 3px solid var(--ink);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.btn--ghost {
  border-color: var(--rule);
  color: var(--graphite-soft);
}

@media (prefers-reduced-motion: reduce) {
  .path {
    animation: none;
  }
}
</style>
