<template>
  <div class="min-h-screen bg-black text-white">

    <!-- Header -->
    <header class="border-b border-white/10 bg-black/90">
      <div
        class="mx-auto flex max-w-7xl items-center justify-between px-8 py-6 md:px-16 lg:px-24"
      >
        <!-- Logo / Name -->
        <a
          href="/"
          class="text-sm font-semibold tracking-wide text-white transition hover:text-white/70"
        >
          Jia Sin
        </a>

        <!-- Back to Portfolio -->
        <a
          href="/"
          class="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          Back to Portfolio
        </a>
      </div>
    </header>

    <!-- Resume -->
    <main class="px-6 py-16 md:px-12 md:py-20 lg:px-24">
      <div class="mx-auto max-w-6xl">

        <!-- Heading -->
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              class="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/40"
            >
              Curriculum Vitae
            </p>

            <h1 class="text-4xl font-bold leading-tight md:text-6xl">
              My CV
            </h1>

            <p class="mt-5 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
              View my CV to learn more about my education, technical
              skills, projects, certifications, and experience.
            </p>
          </div>

          <!-- Download Button -->
          <a
            href="/resume/Ung_Jia_Sin.pdf"
            download="Ung_Jia_Sin.pdf"
            class="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/80"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              class="h-4 w-4"
            >
              <path
                d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            Download CV
          </a>
        </div>

        <!-- PDF Viewer -->
        <div class="mt-12">
          <div
            class="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-2 shadow-2xl md:p-4"
          >
            <div class="overflow-hidden rounded-2xl bg-white">
              <iframe
                src="/resume/Ung_Jia_Sin.pdf"
                title="Ung Jia Sin CV"
                class="h-[800px] w-full md:h-[1100px] lg:h-[1200px]"
              ></iframe>
            </div>
          </div>
        </div>

        <!-- Bottom Actions -->
        <div class="mt-8 flex flex-wrap items-center justify-between gap-4">
          <a
            href="/"
            class="text-sm text-white/40 transition hover:text-white"
          >
            ← Back to Portfolio
          </a>

          <a
            href="/resume/Ung_Jia_Sin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-white/40 transition hover:text-white"
          >
            Open PDF in new tab ↗
          </a>
        </div>

      </div>
    </main>

    <!-- Footer -->
    <footer class="border-t border-white/10 px-8 py-8 md:px-16 lg:px-24">
      <div
        class="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-white/30 md:flex-row md:items-center md:justify-between"
      >
        <p>
          © {{ new Date().getFullYear() }} Ung Jia Sin. All rights reserved.
        </p>

        <p>
          Computer Science Student · Software Development + AI
        </p>
      </div>
    </footer>

  </div>
</template>