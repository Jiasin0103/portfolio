<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import GlowCursor from './GlowCursor.vue'
import NavigationBar from './NavigationBar.vue'


const video = ref<HTMLVideoElement | null>(null)

let lastMouseX = 0
let targetTime = 0
let animationFrameId: number | null = null

const SENSITIVITY = 0.8

const handleMouseMove = (event: MouseEvent) => {
  // Calculate how far the mouse actually moved
  const deltaX = event.clientX - lastMouseX

  // Remember the current mouse position
  lastMouseX = event.clientX

  if (!video.value || !video.value.duration) return

  const screenWidth = window.innerWidth

  // Convert mouse movement into video timeline movement
  const movement =
    (deltaX / screenWidth) *
    video.value.duration *
    SENSITIVITY

  targetTime += movement

  // Keep the video time inside its valid range
  targetTime = Math.max(
    0,
    Math.min(targetTime, video.value.duration)
  )

  scheduleVideoUpdate()
}

const updateVideoTime = () => {
  animationFrameId = null

  if (
    video.value &&
    Math.abs(video.value.currentTime - targetTime) > 0.001
  ) {
    video.value.currentTime = targetTime
  }
}

const scheduleVideoUpdate = () => {
  if (animationFrameId === null) {
    animationFrameId = requestAnimationFrame(updateVideoTime)
  }
}

onMounted(() => {
  // Start tracking from the current mouse position
  lastMouseX = window.innerWidth / 2

  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)

  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<template>
  <!-- Hero -->
  <section id="hero" class="relative min-h-screen overflow-hidden">

    <!-- Background Video -->
    <video
      ref="video"
      class="absolute inset-0 h-full w-full object-cover"
      src="/videos/my_character_p.mp4"
      muted
      playsinline
    ></video>

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Glow cursor -->
    <GlowCursor
      color="#FFFFFF"
      secondary-color="#A78BFA"
      :trail-length="40"
      :trail-width="8"
      :trail-taper="0.8"
      :follow-speed="0.16"
      :glow-intensity="1.9"
      :glow-spread="1.2"
      :hotspot="0.65"
      :brightness="1.25"
      :opacity="1"
      :pulse-speed="1.1"
      :noise-strength="0.035"
      idle-fade
      :idle-timeout="700"
      :fade-duration="900"
      blend-mode="screen"
    />

    <!-- Content -->
    <div class="relative z-10">

      <!-- Navbar -->
      <nav class="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-black/40 px-8 py-6 backdrop-blur-md">
        <RouterLink
          :to="{ name: 'Home', hash: '#hero' }"
          class="text-xl font-bold text-white transition hover:text-white/70"
          aria-label="Go to the home hero section"
        >
          JIA SIN
        </RouterLink>

        <NavigationBar />

        <a
          href="#contact"
          class="text-white rounded-full border border-white/30 px-5 py-2 text-sm hover:bg-white hover:text-black transition"
        >
          Let's talk
        </a>
      </nav>

      <!-- Hero Content -->
      <div class="flex min-h-[calc(100vh-100px)] items-center px-8">
        <div class="max-w-4xl">

          <!-- Internship Status -->
          <div
            class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gray-200 backdrop-blur-sm"
          >
            <span class="h-2 w-2 rounded-full bg-green-400"></span>
            Open to Internship Opportunities
          </div>

          <p class="mb-6 text-sm uppercase tracking-[0.3em] text-gray-300">
            Computer Science Student
          </p>

          <p class="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/60">
            Software Development · Artificial Intelligence
          </p>

          <h1 class="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Hi, I'm
            <span class="text-gray-300">Jia Sin UNG.</span>
          </h1>

          <p class="mt-8 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
            I'm a Computer Science student at Swinburne University of Technology
            with interests in software development, web applications, databases,
            and artificial intelligence.
          </p>

          <div class="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              class="rounded-full bg-white px-6 py-3 text-black font-medium hover:bg-gray-200 transition"
            >
              View my projects
            </a>

            <RouterLink
              to="/resume"
              class="text-white rounded-full border border-white/30 px-6 py-3 font-medium hover:bg-white hover:text-black transition"
            >
              Download my CV
            </RouterLink>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>
