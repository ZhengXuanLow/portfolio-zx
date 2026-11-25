<template>
  <div class="experience">
    <ol class="timeline">
      <li v-for="key in jobs" :key="key" class="row">
        <p class="period">{{ t(`experience.jobs.${key}.period`) }}</p>
        <div>
          <h3>{{ t(`experience.jobs.${key}.role`) }}</h3>
          <p class="org">{{ t(`experience.jobs.${key}.org`) }}</p>
          <ul class="points">
            <li v-for="(point, i) in points(key)" :key="i">{{ point }}</li>
          </ul>
        </div>
      </li>
    </ol>

    <div class="block">
      <h3 class="block-title">{{ t('experience.educationTitle') }}</h3>
      <ul class="plain">
        <li v-for="key in degrees" :key="key" class="row">
          <p class="period">{{ optional(`experience.edu.${key}.period`) }}</p>
          <div>
            <p class="item-name">{{ t(`experience.edu.${key}.degree`) }}</p>
            <p v-if="optional(`experience.edu.${key}.school`)" class="org">
              {{ optional(`experience.edu.${key}.school`) }}
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div class="block">
      <h3 class="block-title">{{ t('experience.certsTitle') }}</h3>
      <ul class="plain">
        <li v-for="key in certs" :key="key" class="row">
          <p class="period">{{ optional(`experience.certs.${key}.year`) }}</p>
          <div>
            <p class="item-name">{{ t(`experience.certs.${key}.name`) }}</p>
            <p v-if="optional(`experience.certs.${key}.issuer`)" class="org">
              {{ optional(`experience.certs.${key}.issuer`) }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, te, tm, rt } = useI18n()
const jobs = ['empire', 'gummy'] as const
const degrees = ['master', 'bachelor'] as const
const certs = ['moe', 'codeai'] as const

function asStrings(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  return value.map((v) => (typeof v === 'string' ? v : rt(v)))
}

// Fields like school or year can be left empty in the locale files until they're known.
function optional(key: string): string {
  return te(key) ? t(key) : ''
}

const points = (key: (typeof jobs)[number]) => asStrings(tm(`experience.jobs.${key}.points`))
</script>

<style scoped>
.timeline,
.plain {
  list-style: none;
  margin: 0;
  padding: 0;
}

.row {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.25rem 2rem;
  padding-block: 0 1.75rem;
  max-inline-size: 52rem;
}

.plain .row {
  padding-block-end: 1rem;
}

@media (width >= 640px) {
  .row {
    grid-template-columns: 11rem minmax(0, 1fr);
  }
}

.period {
  margin: 0.2rem 0 0;
  font-size: 0.9rem;
  color: var(--graphite-soft);
}

.period:empty {
  display: none;
}

@media (width >= 640px) {
  .period:empty {
    display: block;
  }
}

h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
}

.item-name {
  margin: 0;
  font-weight: 500;
}

.org {
  margin: 0.1rem 0 0;
  color: var(--ink);
  font-size: 0.95rem;
}

.points {
  list-style: disc;
  margin: 0.6rem 0 0;
  padding-inline-start: 1.1rem;
  max-inline-size: var(--measure);
}

.points li + li {
  margin-top: 0.25rem;
}

.block {
  margin-top: 0.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--rule);
}

.block-title {
  margin-bottom: 1rem;
}
</style>
