<template>
  <div class="min-h-screen bg-[#F5F0E6] font-sans">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-amber-100">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-gradient-to-br from-[#8B4513] to-[#D2691E] rounded-lg flex items-center justify-center text-white font-bold text-lg">Y</div>
          <span class="text-lg font-bold text-[#3D2B1F]">Zheng Xuan</span>
        </div>

        <div class="hidden md:flex items-center gap-8 text-sm font-medium text-[#5D4E37]">
          <a href="#about" class="hover:text-[#8B4513] transition-colors">{{ $t('nav.about') }}</a>
          <a href="#skills" class="hover:text-[#8B4513] transition-colors">{{ $t('nav.skills') }}</a>
          <a href="#experience" class="hover:text-[#8B4513] transition-colors">{{ $t('nav.experience') }}</a>
          <a href="#workshops" class="hover:text-[#8B4513] transition-colors">{{ $t('nav.workshops') }}</a>
          <a href="#outcomes" class="hover:text-[#8B4513] transition-colors">{{ $t('sections.outcomes') }}</a>
          <a href="#reviews" class="hover:text-[#8B4513] transition-colors">{{ $t('sections.reviews') }}</a>
          <a href="#contact" class="hover:text-[#8B4513] transition-colors">{{ $t('nav.contact') }}</a>
        </div>

        <div class="flex items-center gap-3">
          <button @click="toggleLanguage" class="px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2" :class="locale === 'en' ? 'bg-[#8B4513] text-white' : 'bg-[#F5F0E6] text-[#8B4513] border border-amber-200'">
            <i class="fa-solid fa-globe"></i>
            {{ locale === 'en' ? 'EN' : '中文' }}
          </button>

          <button @click="downloadResume" class="hidden md:flex px-5 py-2 bg-[#8B4513] text-white rounded-lg text-sm font-medium hover:bg-[#6B3410] transition-colors items-center gap-2">
            <i class="fa-solid fa-download text-xs"></i>
            {{ $t('nav.resume') }}
          </button>

          <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-2xl text-[#3D2B1F]">
            <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
          </button>
        </div>
      </div>

      <div v-if="isMenuOpen" class="md:hidden bg-white border-t border-amber-100 px-6 py-4">
        <div class="flex flex-col gap-4 text-base font-medium text-[#5D4E37]">
          <a href="#about" @click="isMenuOpen = false">{{ $t('nav.about') }}</a>
          <a href="#skills" @click="isMenuOpen = false">{{ $t('nav.skills') }}</a>
          <a href="#experience" @click="isMenuOpen = false">{{ $t('nav.experience') }}</a>
          <a href="#workshops" @click="isMenuOpen = false">{{ $t('nav.workshops') }}</a>
          <a href="#outcomes" @click="isMenuOpen = false">{{ $t('sections.outcomes') }}</a>
          <a href="#contact" @click="isMenuOpen = false">{{ $t('nav.contact') }}</a>
          <button @click="toggleLanguage; isMenuOpen = false" class="text-left px-3 py-2 rounded-lg" :class="locale === 'en' ? 'bg-[#8B4513] text-white' : 'bg-amber-100 text-[#8B4513]'">
            <i class="fa-solid fa-globe mr-2"></i>{{ locale === 'en' ? 'English' : '中文' }}
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="about" class="pt-32 pb-20 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div class="text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
            <i class="fa-solid fa-certificate"></i>
            {{ $t('hero.badge') }}
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold text-[#3D2B1F] leading-tight mb-4">
            {{ $t('hero.title') }}<br>
            <span class="text-[#8B4513]">{{ $t('hero.name') }}</span>
          </h1>
          
          <p class="text-xl text-[#6B5B4F] mb-8 leading-relaxed" v-html="$t('hero.subtitle')">
          </p>

          <div class="flex flex-wrap gap-4 justify-center">
            <a href="#skills" class="px-6 py-3 bg-[#8B4513] text-white rounded-lg font-semibold hover:bg-[#6B3410] transition-colors shadow-lg">
              {{ $t('hero.exploreSkills') }}
            </a>
            <a href="#contact" class="px-6 py-3 border-2 border-[#8B4513] text-[#8B4513] rounded-lg font-semibold hover:bg-[#8B4513] hover:text-white transition-colors">
              {{ $t('hero.getInTouch') }}
            </a>
          </div>

          <div class="mt-10 flex items-center justify-center gap-3">
            <span class="text-sm font-medium text-[#6B5B4F]">{{ $t('hero.trustedBy') }}</span>
          </div>
        </div>

        <div class="relative">
          <div class="w-72 h-72 md:w-96 md:h-96 mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#8B4513]/20">
            <img src="./assets/profile.jpg" alt="Zheng Xuan" class="w-full h-full object-cover">
          </div>
          <div class="absolute -bottom-4 -right-4 bg-white rounded-xl px-5 py-3 shadow-xl border border-amber-100">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-location-dot text-[#8B4513]"></i>
              <span class="font-medium text-[#3D2B1F]">Singapore</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="px-6 -mt-10 mb-16">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div class="p-3 sm:p-4 group cursor-default relative">
            <div class="text-3xl sm:text-4xl font-bold text-[#8B4513]">130+</div>
            <div class="text-xs sm:text-sm text-[#6B5B4F] mt-1">{{ $t('stats.students') }}</div>
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#3D2B1F] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              <div v-html="$t('stats.studentsTooltip')"></div>
            </div>
          </div>
          <div class="p-3 sm:p-4 sm:border-x border-amber-100 group cursor-default relative">
            <div class="text-3xl sm:text-4xl font-bold text-[#8B4513]">4×</div>
            <div class="text-xs sm:text-sm text-[#6B5B4F] mt-1">{{ $t('stats.champion') }}</div>
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#3D2B1F] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              <div v-html="$t('stats.championTooltip')"></div>
            </div>
          </div>
          <div class="p-3 sm:p-4 sm:border-x border-amber-100 group cursor-default relative">
            <div class="text-3xl sm:text-4xl font-bold text-[#8B4513]">5</div>
            <div class="text-xs sm:text-sm text-[#6B5B4F] mt-1">{{ $t('stats.workshops') }}</div>
          </div>
          <div class="p-3 sm:p-4 sm:border-x border-amber-100 group cursor-default relative">
            <div class="text-3xl sm:text-4xl font-bold text-[#8B4513]">95%</div>
            <div class="text-xs sm:text-sm text-[#6B5B4F] mt-1">{{ $t('stats.retention') }}</div>
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#3D2B1F] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              <div v-html="$t('stats.retentionTooltip')"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 px-6 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-[#3D2B1F] mb-3">{{ $t('skills.title') }}</h2>
          <p class="text-[#6B5B4F]">{{ $t('skills.subtitle') }}</p>
        </div>

        <!-- Tab Buttons -->
        <div class="flex justify-center gap-3 mb-4 flex-wrap">
          <button 
            v-for="(cat, idx) in categories" 
            :key="cat.title"
            @click="activeCategory = idx; activeSubCategory = 0"
            class="px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2"
            :class="activeCategory === idx 
              ? 'bg-[#8B4513] text-white shadow-md' 
              : 'bg-[#F5F0E6] text-[#5D4E37] hover:bg-[#EDE8DC]'"
          >
            <span class="text-lg">{{ cat.emoji }}</span>
            {{ cat.title === 'Robotics' ? $t('skills.robotics') : cat.title === 'Programming' ? $t('skills.programming') : cat.title === 'Game & 3D' ? $t('skills.game3d') : cat.title }}
          </button>
        </div>

        <!-- Sub Tab Buttons (for Programming) -->
        <div v-if="categories[activeCategory]?.isParent" class="flex justify-center gap-4 mb-8">
          <button 
            v-for="(sub, idx) in categories[activeCategory]?.subCategories" 
            :key="sub.name"
            @click="activeSubCategory = idx"
            class="relative px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
            :class="activeSubCategory === idx 
              ? 'bg-[#8B4513] text-white shadow-lg scale-105' 
              : 'bg-white text-[#5D4E37] border-2 border-amber-200 hover:border-[#8B4513]'"
          >
            <span class="text-lg">{{ sub.icon }}</span>
            {{ sub.name === 'Blocks' ? $t('skills.blocks') : sub.name === 'Code' ? $t('skills.code') : sub.name }}
            <div v-if="activeSubCategory === idx" class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>

        <!-- Skills Grid -->
        <div class="bg-[#F5F0E6] rounded-2xl p-8 border border-amber-100">
          <h3 class="text-xl font-bold text-[#3D2B1F] mb-6 text-center flex items-center justify-center gap-2">
            <span v-if="categories[activeCategory]?.isParent" class="text-2xl">
              {{ categories[activeCategory]?.subCategories?.[activeSubCategory]?.icon }}
            </span>
            {{ categories[activeCategory]?.isParent 
                ? (categories[activeCategory]?.subCategories?.[activeSubCategory]?.name === 'Blocks' ? $t('skills.blocks') : categories[activeCategory]?.subCategories?.[activeSubCategory]?.name === 'Code' ? $t('skills.code') : categories[activeCategory]?.subCategories?.[activeSubCategory]?.name)
                : (categories[activeCategory]?.title === 'Robotics' ? $t('skills.robotics') : categories[activeCategory]?.title === 'Programming' ? $t('skills.programming') : categories[activeCategory]?.title === 'Game & 3D' ? $t('skills.game3d') : categories[activeCategory]?.subtitle) }}
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div 
              v-for="(skill) in (categories[activeCategory]?.isParent 
                ? categories[activeCategory]?.subCategories?.[activeSubCategory]?.skills 
                : categories[activeCategory]?.skills)" 
              :key="skill.name"
              class="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-amber-100 cursor-pointer"
            >
              <div class="text-3xl mb-2">{{ skill.icon }}</div>
              <div class="text-sm font-semibold text-[#3D2B1F]">{{ skill.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 px-6 bg-[#EDE8DC]">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center text-[#3D2B1F] mb-12">{{ $t('experience.title') }}</h2>
        
        <div class="space-y-6">
          <!-- Empire AI -->
          <div class="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
            <div class="flex flex-col md:flex-row md:items-start gap-6">
              <div class="md:w-1/3">
                <span class="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-3">{{ $t('experience.current') }}</span>
                <h3 class="text-2xl font-bold text-[#3D2B1F]">{{ $t('experience.empire.role') }}</h3>
                <p class="text-[#8B4513] font-medium">{{ $t('experience.empire.company') }}</p>
                <p class="text-sm text-[#6B5B4F] mt-2">{{ $t('experience.empire.period') }}</p>
              </div>
              <div class="md:w-2/3">
                <p class="text-[#5D4E37]">{{ $t('experience.empire.desc') }}</p>
                <div class="mt-4 h-40 rounded-xl overflow-hidden border border-amber-200">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819!2d103.85!3d1.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190f8f3b5e3d%3A0x8a8b8b8b8b8b8b8b!2sSingapore!5e0!3m2!1sen!2ssg!4v1746350000000" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>

          <!-- Gummy Code -->
          <div class="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
            <div class="flex flex-col md:flex-row md:items-start gap-6">
              <div class="md:w-1/3">
                <span class="inline-block px-3 py-1 bg-amber-100 text-amber-600 text-xs font-semibold rounded-full mb-3">{{ $t('experience.past') }}</span>
                <h3 class="text-2xl font-bold text-[#3D2B1F]">{{ $t('experience.gummy.role') }}</h3>
                <p class="text-[#8B4513] font-medium">{{ $t('experience.gummy.company') }}</p>
                <p class="text-sm text-[#6B5B4F] mt-2">{{ $t('experience.gummy.period') }}</p>
              </div>
              <div class="md:w-2/3">
                <ul class="space-y-3 text-[#5D4E37]">
                  <li class="flex items-start gap-3">
                    <i class="fa-solid fa-check-circle text-green-600 mt-1"></i>
                    <span>{{ $t('experience.gummy.tasks[0]') }}</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fa-solid fa-check-circle text-green-600 mt-1"></i>
                    <span>{{ $t('experience.gummy.tasks[1]') }}</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fa-solid fa-trophy text-yellow-500 mt-1"></i>
                    <span>{{ $t('experience.gummy.tasks[2]') }}</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fa-solid fa-language text-[#8B4513] mt-1"></i>
                    <span>{{ $t('experience.gummy.tasks[3]') }}</span>
                  </li>
                </ul>
                <div class="mt-4 h-40 rounded-xl overflow-hidden border border-amber-200">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d103.55!3d1.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b0b0b0b0b0b%3A0x0!2sKulai%2C+Johor%2C+Malaysia!5e0!3m2!1sen!2ssg!4v1746350000000" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Coaching -->
    <section class="py-16 px-6 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-[#3D2B1F] mb-8">{{ $t('coaching.title') }}</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div v-for="item in coachingItems" :key="item.name" class="bg-[#F5F0E6] rounded-xl p-4 text-center hover:bg-amber-100 transition-colors">
            <div class="text-3xl mb-2">{{ item.icon }}</div>
            <div class="font-semibold text-[#3D2B1F]">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Workshops -->
    <section id="workshops" class="py-20 px-6 bg-[#EDE8DC]">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-[#3D2B1F] mb-3">{{ $t('workshops.title') }}</h2>
          <p class="text-[#6B5B4F]">{{ $t('workshops.subtitle') }}</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-amber-100">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-[#8B4513]/10 text-[#8B4513] text-sm font-semibold rounded-full">2026</span>
              <i class="fa-solid fa-robot text-amber-300 text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-[#3D2B1F] mb-2">{{ $t('workshops.workshop1.title') }}</h3>
            <p class="text-sm text-[#8B4513] mb-2">{{ $t('workshops.workshop1.school') }}</p>
            <p class="text-sm text-[#6B5B4F]">{{ $t('workshops.workshop1.desc') }}</p>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-amber-100">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-[#8B4513]/10 text-[#8B4513] text-sm font-semibold rounded-full">2026</span>
              <i class="fa-solid fa-palette text-amber-300 text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-[#3D2B1F] mb-2">{{ $t('workshops.workshop2.title') }}</h3>
            <p class="text-sm text-[#8B4513] mb-2">{{ $t('workshops.workshop2.school') }}</p>
            <p class="text-sm text-[#6B5B4F]">{{ $t('workshops.workshop2.desc') }}</p>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-amber-100">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-amber-100 text-amber-600 text-sm font-semibold rounded-full">2025</span>
              <i class="fa-solid fa-cubes text-amber-300 text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-[#3D2B1F] mb-2">{{ $t('workshops.workshop3.title') }}</h3>
            <p class="text-sm text-[#8B4513] mb-2">{{ $t('workshops.workshop3.school') }}</p>
            <p class="text-sm text-[#6B5B4F]">{{ $t('workshops.workshop3.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Teaching Cases & Outcomes -->
    <section id="outcomes" class="py-20 px-6 bg-[#F5F0E6]">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-[#3D2B1F] mb-3">{{ $t('outcomes.title') }}</h2>
          <p class="text-[#6B5B4F] max-w-2xl mx-auto">{{ $t('outcomes.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div class="bg-white rounded-2xl p-8 border border-amber-100 hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">👦</div>
            <div class="text-sm uppercase tracking-widest text-[#8B4513] font-medium mb-1">Age 8 • Beginner</div>
            <h3 class="text-xl font-bold text-[#3D2B1F] mb-3">{{ $t('outcomes.case1.title') }}</h3>
            <p class="text-[#5D4E37] leading-relaxed">{{ $t('outcomes.case1.desc') }}</p>
            <div class="mt-6 pt-6 border-t border-amber-200">
              <div class="text-[#8B4513] text-sm font-medium">{{ $t('outcomes.result') }}</div>
              <ul class="mt-3 space-y-2 text-sm text-[#5D4E37]">
                <li class="flex items-start gap-2"><span class="text-green-600 mt-1">→</span> {{ $t('outcomes.case1.result1') }}</li>
                <li class="flex items-start gap-2"><span class="text-green-600 mt-1">→</span> {{ $t('outcomes.case1.result2') }}</li>
              </ul>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 border border-amber-100 hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">🤖</div>
            <div class="text-sm uppercase tracking-widest text-[#8B4513] font-medium mb-1">Age 12–13 • Robotics</div>
            <h3 class="text-xl font-bold text-[#3D2B1F] mb-3">{{ $t('outcomes.case2.title') }}</h3>
            <p class="text-[#5D4E37] leading-relaxed">{{ $t('outcomes.case2.desc') }}</p>
            <div class="mt-6 pt-6 border-t border-amber-200">
              <div class="text-[#8B4513] text-sm font-medium">{{ $t('outcomes.result') }}</div>
              <ul class="mt-3 space-y-2 text-sm text-[#5D4E37]">
                <li class="flex items-start gap-2"><span class="text-green-600 mt-1">→</span> {{ $t('outcomes.case2.result1') }}</li>
                <li class="flex items-start gap-2"><span class="text-green-600 mt-1">→</span> {{ $t('outcomes.case2.result2') }}</li>
              </ul>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 border border-amber-100 hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">🧠</div>
            <div class="text-sm uppercase tracking-widest text-[#8B4513] font-medium mb-1">Age 9–12 • AI Introduction</div>
            <h3 class="text-xl font-bold text-[#3D2B1F] mb-3">{{ $t('outcomes.case3.title') }}</h3>
            <p class="text-[#5D4E37] leading-relaxed">{{ $t('outcomes.case3.desc') }}</p>
            <div class="mt-6 pt-6 border-t border-amber-200">
              <div class="text-[#8B4513] text-sm font-medium">{{ $t('outcomes.result') }}</div>
              <ul class="mt-3 space-y-2 text-sm text-[#5D4E37]">
                <li class="flex items-start gap-2"><span class="text-green-600 mt-1">→</span> {{ $t('outcomes.case3.result1') }}</li>
                <li class="flex items-start gap-2"><span class="text-green-600 mt-1">→</span> {{ $t('outcomes.case3.result2') }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="text-center mt-12 text-sm text-[#6B5B4F]">
          * All cases are anonymised to protect student privacy.
        </div>
      </div>
    </section>

    <!-- Reviews -->
    <section id="reviews" class="py-20 px-6 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center text-[#3D2B1F] mb-12">{{ $t('reviews.title') }}</h2>
        <div class="columns-1 md:columns-3 gap-6 space-y-6">
          <img 
            v-for="(img, idx) in reviewImages" 
            :key="idx"
            :src="img"
            @click="selectedImage = img"
            class="w-full rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
            :alt="`Parent Feedback ${idx + 1}`"
          >
        </div>
      </div>
    </section>

    <!-- Contact / Footer -->
<footer id="contact" class="bg-[#2C2416] text-white py-16 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold text-white mb-2">{{ $t('footer.title') }}</h2>
          <p class="text-amber-200">{{ $t('footer.subtitle') }} </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6 mb-10">
          <a href="mailto:lowxuan0218@gmail.com" class="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
            <div class="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center mx-auto mb-3">
              <i class="fa-solid fa-envelope text-xl text-white"></i>
            </div>
            <p class="text-amber-200 text-sm mb-1">{{ $t('footer.email') }}</p>
            <p class="font-semibold">lowxuan0218@gmail.com</p>
          </a>
          <a href="https://wa.me/6588974632" target="_blank" class="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
            <div class="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center mx-auto mb-3">
              <i class="fa-brands fa-whatsapp text-xl text-white"></i>
            </div>
            <p class="text-amber-200 text-sm mb-1">{{ $t('footer.whatsapp') }}</p>
            <p class="font-semibold">+65 88974632</p>
          </a>
          <div class="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
            <div class="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center mx-auto mb-3">
              <i class="fa-solid fa-location-dot text-xl text-white"></i>
            </div>
            <p class="text-amber-200 text-sm mb-1">{{ $t('footer.location') }}</p>
            <p class="font-semibold">Singapore</p>
          </div>
        </div>
        
        <div class="flex justify-center gap-4 mb-8">
          <a href="https://www.linkedin.com/in/zheng-xuan-low/" target="_blank" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#8B4513] transition-all">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        
        <div class="border-t border-white/10 pt-8 text-center">
          <p class="text-amber-300">© 2026 Zheng Xuan • {{ $t('footer.copyright') }}</p>
        </div>
      </div>
    </footer>

    <!-- Image Lightbox Modal -->
    <div v-if="selectedImage" class="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4" @click="selectedImage = ''">
      <button class="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 text-white text-2xl flex items-center justify-center hover:bg-white/30 transition-colors">
        <i class="fa-solid fa-times"></i>
      </button>
      <img :src="selectedImage" class="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl" @click.stop>
    </div>

    <!-- Section Navigation (Right Middle) -->
    <div class="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:block" :class="(isScrolling || isHovering) ? 'opacity-100' : 'opacity-0 pointer-events-none'" style="transition: opacity 0.3s ease;">
      <div @mouseenter="isHovering = true" @mouseleave="isHovering = false" class="flex flex-col gap-3 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-amber-100">
        <a v-for="(section, idx) in sections" :key="section.id"
           :href="`#${section.id}`"
           class="group relative flex items-center justify-center"
        >
          <span class="w-3 h-3 rounded-full transition-all duration-300"
                :class="activeSection === idx ? 'bg-[#8B4513] scale-125' : 'bg-amber-300 hover:bg-amber-400'">
          </span>
          <span class="absolute right-8 bg-[#3D2B1F] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {{ section.label }}
          </span>
        </a>
      </div>
    </div>

    <!-- Back to Top Button (Right Bottom) -->
    <button @click="scrollToTop" 
            v-show="activeSection > 0"
            class="fixed right-6 bottom-6 z-40 w-12 h-12 bg-[#8B4513] text-white rounded-full flex items-center justify-center hover:bg-[#6B3410] transition-colors shadow-lg">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted} from 'vue'
import { useI18n } from 'vue-i18n'

import review1 from '@/assets/review1.png'
import review2 from '@/assets/review2.png'
import review3 from '@/assets/review3.png'
import review4 from '@/assets/review4.png'
import review5 from '@/assets/review5.png'

const { locale } = useI18n()
const isMenuOpen = ref(false)
const activeCategory = ref(0)
const activeSubCategory = ref(0)
const selectedImage = ref('')
const activeSection = ref(0)
const isScrolling = ref(false)
const isHovering = ref(false)
let scrollTimer: number

const onScroll = () => {
  if (!isHovering.value) {
    isScrolling.value = true
    clearTimeout(scrollTimer)
    scrollTimer = setTimeout(() => {
      isScrolling.value = false
    }, 1000)
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const updateActiveSection = () => {
  const scrollPos = window.scrollY + 150
  let current = 0
  sections.forEach((section, idx) => {
    const element = document.getElementById(section.id)
    if (element) {
      const top = element.offsetTop
      if (scrollPos >= top - 50) {
        current = idx
      }
    }
  })
  activeSection.value = current
}

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'zh' : 'en'
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  window.addEventListener('scroll', onScroll)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
  window.removeEventListener('scroll', onScroll)
})

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/YourName_Resume.pdf'
  link.download = 'YourName_Resume.pdf'
  link.click()
}

const reviewImages = [review1, review2, review3, review4, review5]

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'workshops', label: 'Workshops' },
  { id: 'outcomes', label: 'Outcomes' },
  { id: 'reviews', label: 'Feedback' },
  { id: 'contact', label: 'Contact' }
]

const categories = [
  {
    title: 'Robotics',
    emoji: '🤖',
    subtitle: 'Hardware & Physical Computing',
    skills: [
      { name: 'LEGO Spike Prime', icon: '🧱' },
      { name: 'LEGO Spike Essential', icon: '🧱' },
      { name: 'Micro:bit', icon: '🔵' },
      { name: 'Arduino', icon: '⚡' },
    ]
  },
  {
    title: 'Programming',
    emoji: '💻',
    subtitle: 'Software Development',
    isParent: true,
    subCategories: [
      { name: 'Blocks', icon: '🧩', skills: [
        { name: 'Scratch', icon: '🧩' },
        { name: 'PictoBlox', icon: '🎨' },
        { name: 'MIT App Inventor', icon: '📱' },
        { name: 'Thunkable', icon: '⚙️' },
        { name: 'AI Education', icon: '🤖' },
      ]},
      { name: 'Code', icon: '⌨️', skills: [
        { name: 'Python', icon: '🐍' },
        { name: 'PyQt', icon: '🖥️' },
        { name: 'Python Data Analytics', icon: '📈' },
        { name: 'Web Development', icon: '🌐' },
      ]}
    ]
  },
  {
    title: 'Game & 3D',
    emoji: '🎮',
    subtitle: 'Creative Design Tools',
    skills: [
      { name: 'Minecraft EDU', icon: '⛏️' },
      { name: 'Roblox', icon: '🎮' },
      { name: 'Unity 2D/3D', icon: '🎲' },
      { name: 'Tinkercad', icon: '📦' },
      { name: 'Blender', icon: '🧊' },
    ]
  }
]

const coachingItems = [
  { name: 'FLL', icon: '🤖' },
  { name: 'NRC', icon: '🏁' },
  { name: 'HCIC', icon: '🎯' },
  { name: 'Code Monkey', icon: '🐵' },
  { name: 'Global Appathon', icon: '🌍' },
   { name: 'Technovation Girls', icon: '👩‍💻' },
]
</script>