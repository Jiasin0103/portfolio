<template>
  <section
    id="contact"
    class="bg-[#4a4151] px-8 py-24 text-white md:px-16 lg:px-24"
  >
    <div class="mx-auto max-w-7xl">
      <p
        class="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/50"
      >
        Contact
      </p>

      <div
        class="flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
      >
        <!-- Text -->
        <div class="max-w-3xl">
          <h2 class="text-4xl font-bold leading-tight md:text-6xl">
            Let's work together.
          </h2>

          <p class="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            I'm currently looking for internship opportunities where I can
            strengthen my software development and AI skills while gaining
            real-world experience.
          </p>
        </div>

        <!-- Email Button -->
        <a
          href="mailto:ungjiasin0@gmail.com"
          class="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-white/80"
        >
          Get in Touch

          <span class="contact-arrow" aria-hidden="true">
            ↗︎
          </span>
        </a>
      </div>

      <!-- Contact Details -->
      <div class="mt-16 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-3">
        <!-- Email -->
        <a
          href="mailto:ungjiasin0@gmail.com"
          class="group"
        >
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            Email
          </p>

          <p
            class="mt-3 text-sm text-white/60 transition group-hover:text-white"
          >
            ungjiasin0@gmail.com
          </p>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/jia-sin-ung-495417439/"
          target="_blank"
          rel="noopener noreferrer"
          class="group"
        >
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            LinkedIn
          </p>

          <p
            class="mt-3 text-sm text-white/60 transition group-hover:text-white"
          >
            https://www.linkedin.com/in/jia-sin-ung-495417439/
          </p>
        </a>

        <!-- GitHub -->
        <a
          href="https://github.com/Jiasin0103"
          target="_blank"
          rel="noopener noreferrer"
          class="group"
        >
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            GitHub
          </p>

          <p
            class="mt-3 text-sm text-white/60 transition group-hover:text-white"
          >
            github.com/Jiasin0103
          </p>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-arrow {
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
}
</style>
