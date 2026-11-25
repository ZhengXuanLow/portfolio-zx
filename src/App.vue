<template>
  <SiteHeader />

  <main id="top">
    <section class="hero page" aria-labelledby="hero-title">
      <div class="hero__text">
        <p class="hero__hello">{{ t('hero.hello') }}</p>
        <h1 id="hero-title">{{ t('hero.headline') }}</h1>
        <p class="hero__lead">{{ t('hero.lead') }}</p>
        <div class="hero__actions">
          <a class="btn btn--solid" href="#contact">{{ t('hero.contact') }}</a>
          <a v-if="links.resume" class="btn" :href="resumeHref" download>
            <i class="fa-solid fa-download" aria-hidden="true"></i>
            {{ t('nav.cv') }}
          </a>
        </div>
      </div>
      <figure class="hero__portrait">
        <img
          :src="profile"
          :alt="t('hero.portraitAlt')"
          width="480"
          height="560"
          fetchpriority="high"
          decoding="async"
        />
        <figcaption>
          <span class="note note--marked">{{ t('hero.noteMoe') }}</span>
          <span class="note">{{ t('hero.noteStudents') }}</span>
        </figcaption>
      </figure>
    </section>

    <section class="section page philosophy" aria-labelledby="philosophy-title">
      <div class="section__head">
        <h2 id="philosophy-title">{{ t('philosophy.label') }}</h2>
      </div>
      <div>
        <blockquote class="philosophy__quote">
          <p>{{ t('philosophy.quote') }}</p>
        </blockquote>
        <DebugDialog />
      </div>
    </section>

    <section id="teach" class="section page" aria-labelledby="teach-title">
      <div class="section__head">
        <h2 id="teach-title">{{ t('teach.title') }}</h2>
        <p>{{ t('teach.intro') }}</p>
      </div>
      <TeachingRange />
    </section>

    <section id="work" class="section page" aria-labelledby="work-title">
      <div class="section__head">
        <h2 id="work-title">{{ t('work.title') }}</h2>
        <p>{{ t('work.intro') }}</p>
      </div>
      <SelectedWork />
    </section>

    <section id="experience" class="section page" aria-labelledby="exp-title">
      <div class="section__head">
        <h2 id="exp-title">{{ t('experience.title') }}</h2>
        <p>{{ t('experience.intro') }}</p>
      </div>
      <ExperienceList />
    </section>

    <section id="reviews" class="section page" aria-labelledby="reviews-title">
      <div class="section__head">
        <h2 id="reviews-title">{{ t('reviews.title') }}</h2>
        <p>{{ t('reviews.intro') }}</p>
      </div>
      <ReviewGallery />
    </section>
  </main>

  <footer id="contact" class="contact">
    <div class="section page">
      <div class="section__head">
        <h2>{{ t('contact.title') }}</h2>
        <p>{{ t('contact.intro') }}</p>
      </div>
      <div class="contact__body">
        <dl class="contact__list">
          <div>
            <dt>{{ t('contact.email') }}</dt>
            <dd><a :href="`mailto:${links.email}`">{{ links.email }}</a></dd>
          </div>
          <div>
            <dt>{{ t('contact.linkedin') }}</dt>
            <dd><a :href="links.linkedin" target="_blank" rel="noopener">zheng-xuan-low</a></dd>
          </div>
          <div>
            <dt>{{ t('contact.whatsapp') }}</dt>
            <dd><a :href="links.whatsapp" target="_blank" rel="noopener">{{ links.whatsappLabel }}</a></dd>
          </div>
        </dl>
      </div>
      <p class="colophon">© {{ year }} Zheng Xuan, {{ t('contact.location') }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import SiteHeader from '@/components/SiteHeader.vue'
import DebugDialog from '@/components/DebugDialog.vue'
import TeachingRange from '@/components/TeachingRange.vue'
import SelectedWork from '@/components/SelectedWork.vue'
import ExperienceList from '@/components/ExperienceList.vue'
import ReviewGallery from '@/components/ReviewGallery.vue'
import profile from '@/assets/profile.jpg'
import { links } from '@/data/content'

const { t, locale } = useI18n()
const year = new Date().getFullYear()
const resumeHref = computed(() => import.meta.env.BASE_URL + links.resume)

watchEffect(() => {
  document.documentElement.lang = locale.value === 'zh' ? 'zh-Hans' : 'en'
  document.title = t('meta.title')
})
</script>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2.5rem;
  padding-block: clamp(3rem, 8vw, 6rem) clamp(3.5rem, 8vw, 6rem);
  align-items: center;
}

@media (width >= 820px) {
  .hero {
    grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
    gap: 4rem;
  }
}

.hero__hello {
  margin: 0 0 0.75rem;
  font: 700 clamp(1.15rem, 2vw, 1.4rem) / 1.3 var(--font-display);
  color: var(--ink);
}

.hero h1 {
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 3.3rem);
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.02em;
  max-inline-size: 19ch;
}

:lang(zh-Hans) .hero h1 {
  font-size: clamp(2.3rem, 5.2vw, 3.9rem);
  /* Break only at the zero-width space in the copy, not inside words like 工程师 */
  word-break: keep-all;
  overflow-wrap: anywhere;
  max-inline-size: 12em;
  line-height: 1.2;
  letter-spacing: 0;
}

.hero__lead {
  margin: 1.5rem 0 0;
  font-size: 1.05rem;
  max-inline-size: 46ch;
  color: var(--graphite-soft);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.hero__portrait {
  position: relative;
  margin: 0 auto;
  inline-size: min(100%, 22rem);
}

.hero__portrait img {
  display: block;
  inline-size: 100%;
  block-size: auto;
  aspect-ratio: 6 / 7;
  object-fit: cover;
  object-position: 50% 30%;
  border: 1.5px solid var(--ink);
  border-radius: 4px;
  background: var(--ink-soft);
}

/* Notebook-style notes pinned to the photo */
.hero__portrait figcaption {
  position: absolute;
  inset: auto -0.75rem 1.25rem auto;
  display: grid;
  justify-items: end;
  gap: 0.4rem;
}

.note {
  padding: 0.2rem 0.6rem;
  border: 1.5px solid var(--ink);
  background: var(--paper);
  color: var(--ink);
  font-size: 0.85rem;
  font-weight: 500;
}

.note--marked {
  background: var(--highlight);
  border-color: var(--graphite);
  color: var(--graphite);
}

@media (width < 820px) {
  .hero__portrait figcaption {
    inset-inline-end: -0.25rem;
  }
}

.philosophy__quote {
  margin: 0;
  padding-inline-start: 1.25rem;
  border-inline-start: 3px solid var(--ink);
}

.philosophy__quote p {
  margin: 0;
  max-inline-size: 30ch;
  font: 700 clamp(1.4rem, 2.8vw, 2rem) / 1.35 var(--font-display);
  color: var(--graphite);
  text-wrap: balance;
}

:lang(zh-Hans) .philosophy__quote p {
  max-inline-size: 20em;
  line-height: 1.55;
  /* Break only at punctuation so phrases like 第一次 stay together */
  word-break: keep-all;
  overflow-wrap: anywhere;
}

.contact {
  background: var(--paper-deep);
}

.contact__body {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
}

.contact__list {
  display: grid;
  gap: 0.75rem;
  margin: 0;
}

.contact__list div {
  display: grid;
  grid-template-columns: 6.5rem minmax(0, 1fr);
  gap: 1rem;
}

.contact__list dt {
  color: var(--graphite-soft);
}

.contact__list dd {
  margin: 0;
  overflow-wrap: anywhere;
}

.colophon {
  grid-column: 1 / -1;
  margin: 1rem 0 0;
  font-size: 0.85rem;
  color: var(--graphite-soft);
}
</style>
