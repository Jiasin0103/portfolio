<template>
  <footer class="border-t border-white/10 bg-black px-8 py-10 text-white md:px-16 lg:px-24">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

        <!-- Left -->
        <div>
          <p class="text-lg font-semibold">
            Ung Jia Sin
          </p>

          <p class="mt-2 text-sm text-white/40">
            Computer Science Student
          </p>

          <p class="mt-1 text-sm text-white/30">
            Software Development + Artificial Intelligence
          </p>
        </div>

        <!-- Navigation -->
        <nav class="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/40">
          <a href="#about" class="transition hover:text-white">
            About
          </a>

          <a href="#projects" class="transition hover:text-white">
            Projects
          </a>

          <a href="#skills" class="transition hover:text-white">
            Skills
          </a>

          <a href="#certifications" class="transition hover:text-white">
            Certifications
          </a>

          <a href="#resume" class="transition hover:text-white">
            CV
          </a>

          <a href="#contact" class="transition hover:text-white">
            Contact
          </a>
        </nav>
      </div>

      <!-- Bottom -->
      <div class="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
        <p>
          © {{ new Date().getFullYear() }} Ung Jia Sin. All rights reserved.
        </p>

        <p>
          Built with Vue.js
        </p>
      </div>
    </div>
  </footer>
</template>