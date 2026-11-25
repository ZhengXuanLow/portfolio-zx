<template>
  <table class="range">
    <caption class="sr-only">{{ t('teach.title') }}</caption>
    <thead>
      <tr>
        <th scope="col"><span class="sr-only">{{ t('work.tools') }}</span></th>
        <th scope="col">
          <span class="sr-only">{{ t('teach.ageAxis') }}</span>
          <span class="axis" aria-hidden="true">
            <span
              v-for="age in ticks"
              :key="age"
              :class="{ minor: !majorTicks.includes(age) }"
              :style="{ '--at': age - AGE_MIN }"
              >{{ age }}</span
            >
          </span>
        </th>
      </tr>
    </thead>
    <tbody v-for="g in teaching" :key="g.group">
      <tr class="group-row">
        <th scope="rowgroup" colspan="2">{{ t(`teach.groups.${g.group}`) }}</th>
      </tr>
      <tr v-for="tool in g.tools" :key="tool.name">
        <th scope="row" class="tool">{{ tool.name }}</th>
        <td>
          <div class="cell">
          <span class="track">
            <span
              class="bar"
              :style="{ '--from': tool.from - AGE_MIN, '--to': tool.to - AGE_MIN }"
            ></span>
          </span>
          <span class="ages">{{ t('teach.ages', { from: tool.from, to: tool.to }) }}</span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { AGE_MAX, AGE_MIN, teaching } from '@/data/content'

const { t } = useI18n()
const ticks = [4, 6, 8, 10, 12, 14, 16, 18].filter((a) => a >= AGE_MIN && a <= AGE_MAX)
const majorTicks = [AGE_MIN, 8, 12, AGE_MAX]
const span = AGE_MAX - AGE_MIN
</script>

<style scoped>
.range {
  --span: v-bind(span);
  inline-size: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

th,
td {
  padding: 0.45rem 0;
  text-align: start;
  vertical-align: middle;
  font-weight: 400;
}

thead th {
  padding-bottom: 0.75rem;
}

.axis {
  position: relative;
  display: block;
  block-size: 1.2em;
  margin-inline: 0 4.5rem;
  color: var(--graphite-soft);
  font-size: 0.8rem;
}

.axis span {
  position: absolute;
  inset-inline-start: calc(var(--at) / var(--span) * 100%);
  translate: -50% 0;
}

.group-row th {
  padding-top: 1.5rem;
  font: 700 1.05rem var(--font-display);
  color: var(--ink);
  border-bottom: 1px solid var(--rule);
}

tbody:first-of-type .group-row th {
  padding-top: 0.25rem;
}

.tool {
  inline-size: 38%;
  padding-inline-end: 1rem;
  color: var(--graphite);
}

.cell {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.track {
  position: relative;
  flex: 1;
  block-size: 10px;
  background-image: linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: calc(100% / var(--span) * 2) 100%;
}

.bar {
  position: absolute;
  inset-block: 0;
  inset-inline-start: calc(var(--from) / var(--span) * 100%);
  inline-size: calc((var(--to) - var(--from)) / var(--span) * 100%);
  background: var(--ink);
  border-radius: 5px;
}

.ages {
  inline-size: 3.75rem;
  flex-shrink: 0;
  font-size: 0.8rem;
  color: var(--graphite-soft);
  white-space: nowrap;
}

@media (width < 560px) {
  .axis .minor {
    display: none;
  }

  .tool {
    inline-size: 45%;
    font-size: 0.875rem;
  }
}

@media (forced-colors: active) {
  .bar {
    background: CanvasText;
  }
}
</style>
