<template>
  <div class="min-h-screen bg-[#F5F0E6]">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-amber-100">
      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-gradient-to-br from-[#8B4513] to-[#D2691E] rounded-lg flex items-center justify-center text-white font-bold text-lg">Y</div>
          <span class="text-lg font-bold text-[#3D2B1F]">Your Name</span>
        </div>

        <div class="hidden md:flex items-center gap-8 text-sm font-medium text-[#5D4E37]">
          <a href="#about" class="hover:text-[#8B4513] transition-colors">About</a>
          <a href="#skills" class="hover:text-[#8B4513] transition-colors">Skills</a>
          <a href="#experience" class="hover:text-[#8B4513] transition-colors">Experience</a>
          <a href="#workshops" class="hover:text-[#8B4513] transition-colors">Workshops</a>
          <a href="#contact" class="hover:text-[#8B4513] transition-colors">Contact</a>
        </div>

        <button @click="downloadResume" class="hidden md:flex px-5 py-2 bg-[#8B4513] text-white rounded-lg text-sm font-medium hover:bg-[#6B3410] transition-colors">
          Download CV
        </button>

        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-2xl text-[#3D2B1F]">
          <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </button>
      </div>

      <div v-if="isMenuOpen" class="md:hidden bg-white border-t border-amber-100 px-6 py-4">
        <div class="flex flex-col gap-4 text-base font-medium text-[#5D4E37]">
          <a href="#about" @click="isMenuOpen = false">About</a>
          <a href="#skills" @click="isMenuOpen = false">Skills</a>
          <a href="#experience" @click="isMenuOpen = false">Experience</a>
          <a href="#workshops" @click="isMenuOpen = false">Workshops</a>
          <a href="#contact" @click="isMenuOpen = false">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="about" class="pt-32 pb-20 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div class="text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for Coaching
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold text-[#3D2B1F] leading-tight mb-4">
            Hello, I'm<br>
            <span class="text-[#8B4513]">Your Name</span>
          </h1>
          
          <p class="text-xl text-[#6B5B4F] mb-8 leading-relaxed">
            Coding educator with a Master's in Educational Technology. 
            I help students understand not just <strong>how</strong> to code, but <strong>why</strong> it works.
          </p>

          <div class="flex flex-wrap gap-4 justify-center">
            <a href="#skills" class="px-6 py-3 bg-[#8B4513] text-white rounded-lg font-semibold hover:bg-[#6B3410] transition-colors shadow-lg">
              Explore Skills
            </a>
            <a href="#contact" class="px-6 py-3 border-2 border-[#8B4513] text-[#8B4513] rounded-lg font-semibold hover:bg-[#8B4513] hover:text-white transition-colors">
              Get in Touch
            </a>
          </div>

          <div class="mt-10 flex items-center justify-center gap-4">
            <div class="flex -space-x-2">
              <img v-for="n in 3" :key="n" :src="`https://via.placeholder.com/40?text=${n}`" class="w-10 h-10 rounded-full border-2 border-white">
            </div>
            <span class="text-sm text-[#6B5B4F]">30+ students mentored</span>
          </div>
        </div>

        <div class="relative">
          <div class="w-72 h-72 md:w-96 md:h-96 mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#8B4513]/20">
            <img src="https://via.placeholder.com/800x800/8B4513/ffffff?text=Your+Photo" alt="Your Photo" class="w-full h-full object-cover">
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
        <div class="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-3 gap-8 text-center">
          <div class="p-4">
            <div class="text-4xl font-bold text-[#8B4513]">30+</div>
            <div class="text-sm text-[#6B5B4F] mt-1">Students</div>
          </div>
          <div class="p-4 border-x border-amber-100">
            <div class="text-4xl font-bold text-[#8B4513]">3×</div>
            <div class="text-sm text-[#6B5B4F] mt-1">Champion</div>
          </div>
          <div class="p-4">
            <div class="text-4xl font-bold text-[#8B4513]">5</div>
            <div class="text-sm text-[#6B5B4F] mt-1">Workshops</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 px-6 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-[#3D2B1F] mb-3">What I Teach</h2>
          <p class="text-[#6B5B4F]">Click a category to explore</p>
        </div>

        <!-- Tab Buttons -->
        <div class="flex justify-center gap-3 mb-8 flex-wrap">
          <button 
            v-for="(cat, idx) in categories" 
            :key="cat.title"
            @click="activeCategory = idx"
            class="px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2"
            :class="activeCategory === idx 
              ? 'bg-[#8B4513] text-white shadow-md' 
              : 'bg-[#F5F0E6] text-[#5D4E37] hover:bg-[#EDE8DC]'"
          >
            <span class="text-lg">{{ cat.emoji }}</span>
            {{ cat.title }}
          </button>
        </div>

        <!-- Skills Grid -->
        <div class="bg-[#F5F0E6] rounded-2xl p-8 border border-amber-100">
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div 
              v-for="(skill, i) in categories[activeCategory].skills" 
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
        <h2 class="text-4xl font-bold text-center text-[#3D2B1F] mb-12">Teaching Experience</h2>
        
        <div class="space-y-6">
          <!-- Empire AI -->
          <div class="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
            <div class="flex flex-col md:flex-row md:items-start gap-6">
              <div class="md:w-1/3">
                <span class="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-3">Current</span>
                <h3 class="text-2xl font-bold text-[#3D2B1F]">Coding & Robotics Trainer</h3>
                <p class="text-[#8B4513] font-medium">Empire AI, Singapore</p>
                <p class="text-sm text-[#6B5B4F] mt-2">July 2025 — Present</p>
              </div>
              <div class="md:w-2/3">
                <p class="text-[#5D4E37]">Full-time trainer delivering coding and robotics programs with AI integration. Teaching students aged 6-14 various programming languages and robotics fundamentals.</p>
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
                <span class="inline-block px-3 py-1 bg-amber-100 text-amber-600 text-xs font-semibold rounded-full mb-3">Past</span>
                <h3 class="text-2xl font-bold text-[#3D2B1F]">Robotics Trainer</h3>
                <p class="text-[#8B4513] font-medium">Gummy Code @ Kulai</p>
                <p class="text-sm text-[#6B5B4F] mt-2">June 2023 — June 2025</p>
              </div>
              <div class="md:w-2/3">
                <ul class="space-y-3 text-[#5D4E37]">
                  <li class="flex items-start gap-3">
                    <i class="fa-solid fa-check-circle text-green-600 mt-1"></i>
                    <span>Taught Scratch, Python and LEGO robotics to over 30 students</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fa-solid fa-check-circle text-green-600 mt-1"></i>
                    <span>Guided 3 students from beginner to graduation over 2 years</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fa-solid fa-trophy text-yellow-500 mt-1"></i>
                    <span>Coached teams that won Overall Champion and Best Coding Awards</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fa-solid fa-language text-[#8B4513] mt-1"></i>
                    <span>Conducted lessons in English, Mandarin, and Malay</span>
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
        <h2 class="text-3xl font-bold text-center text-[#3D2B1F] mb-8">Coaching Achievements</h2>
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
          <h2 class="text-4xl font-bold text-[#3D2B1F] mb-3">MoE Workshops</h2>
          <p class="text-[#6B5B4F]">Ministry of Education Recognised</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-amber-100">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-[#8B4513]/10 text-[#8B4513] text-sm font-semibold rounded-full">2026</span>
              <i class="fa-solid fa-robot text-amber-300 text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-[#3D2B1F] mb-2">PictoBlox with AI</h3>
            <p class="text-sm text-[#8B4513] mb-2">Anglo-Chinese School (Junior)</p>
            <p class="text-sm text-[#6B5B4F]">Block-based coding with AI, facial & speech recognition.</p>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-amber-100">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-amber-100 text-amber-600 text-sm font-semibold rounded-full">2025</span>
              <i class="fa-solid fa-palette text-amber-300 text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-[#3D2B1F] mb-2">Google Slides & Canva</h3>
            <p class="text-sm text-[#8B4513] mb-2">Greenwood Primary School</p>
            <p class="text-sm text-[#6B5B4F]">Creating engaging presentations with design tools.</p>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-amber-100">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 bg-amber-100 text-amber-600 text-sm font-semibold rounded-full">2025</span>
              <i class="fa-solid fa-cubes text-amber-300 text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-[#3D2B1F] mb-2">Minecraft Education</h3>
            <p class="text-sm text-[#8B4513] mb-2">Anderson Primary School</p>
            <p class="text-sm text-[#6B5B4F]">Designing sustainable eco-spaces in Ang Mo Kio.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center text-[#3D2B1F] mb-12">Parent Feedback</h2>
        <div class="columns-1 md:columns-3 gap-6 space-y-6">
          <img v-for="n in 6" :key="n" 
               src="https://via.placeholder.com/600x400?text=Feedback" 
               class="w-full rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all" alt="Feedback">
        </div>
      </div>
    </section>

    <!-- Contact / Footer -->
    <footer id="contact" class="bg-[#3D2B1F] text-white py-16 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">Let's Connect</h2>
        <p class="text-amber-200 mb-8">Interested in coding lessons or coaching? Get in touch!</p>
        
        <div class="flex justify-center gap-6 mb-8">
          <a href="#" class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#8B4513] transition-colors">
            <i class="fa-brands fa-linkedin-in text-lg"></i>
          </a>
          <a href="#" class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#8B4513] transition-colors">
            <i class="fa-brands fa-github text-lg"></i>
          </a>
          <a href="#" class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#8B4513] transition-colors">
            <i class="fa-brands fa-instagram text-lg"></i>
          </a>
          <a href="#" class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#8B4513] transition-colors">
            <i class="fa-solid fa-envelope text-lg"></i>
          </a>
        </div>
        
        <p class="text-amber-300/60 text-sm">© 2026 Your Name • Singapore</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
const activeCategory = ref(0)

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/YourName_Resume.pdf'
  link.download = 'YourName_Resume.pdf'
  link.click()
}

const categories = [
  {
    title: 'Robotics',
    emoji: '🤖',
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
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'Scratch', icon: '🧩' },
      { name: 'PictoBlox', icon: '🎨' },
      { name: 'AI Education', icon: '🤖' },
      { name: 'MIT App Inventor', icon: '📱' },
      { name: 'PyQt', icon: '🖥️' },
    ]
  },
  {
    title: 'Game & 3D',
    emoji: '🎮',
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
  { name: 'In-house', icon: '🏅' },
  { name: 'HCIC', icon: '🎯' },
  { name: 'Code Monkey', icon: '🐵' },
  { name: 'Global Appathon', icon: '🌍' },
]
</script>