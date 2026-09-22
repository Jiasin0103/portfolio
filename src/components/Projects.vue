<script setup lang="ts">
import { ref } from 'vue'

const showKtvImage = ref(false)
const showSkybannerVideo = ref(false)

</script>

<template>
  <section
    id="projects"
    class="bg-black px-8 py-24 text-white md:px-16 lg:px-24"
  >
    <div class="mx-auto max-w-7xl">

      <!-- Section Label -->
      <p
        class="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/50"
      >
        Selected Projects
      </p>

      <!-- Heading -->
      <h2
        class="max-w-3xl text-4xl font-bold leading-tight md:text-6xl"
      >
        Things I've built
      </h2>

      <!-- Description -->
      <p
        class="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg"
      >
        A collection of academic and personal projects where I have explored
        software development, web applications, databases, game development,
        and artificial intelligence.
      </p>

      <!-- Projects Grid -->
      <div class="mt-16 grid gap-6 md:grid-cols-2">

        <!-- Project 1 -->
        <div
          class="project-card group cursor-pointer rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1"
          @click="showKtvImage = true"
        >
          <div class="flex items-start justify-between">
            <span
              class="project-badge rounded-full border px-3 py-1 text-xs"
            >
              School Project
            </span>
          </div>

          <h3
            class="mt-10 text-2xl font-semibold leading-tight md:text-3xl"
          >
            KTV Management System
          </h3>

          <p
            class="mt-5 text-sm leading-7 text-white/50 md:text-base"
          >
            A management system developed as a university programming
            project to demonstrate fundamental software development and
            programming concepts.
          </p>

          <div class="mt-8 flex flex-wrap gap-2">
            <span
              class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50"
            >
              Python
            </span>

            <span
              class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50"
            >
              Programming
            </span>

            <span
              class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50"
            >
              Software
            </span>
          </div>

        </div>



        <!-- Project 2 -->
        <div
          class="project-card group cursor-pointer rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1"
          @click="showSkybannerVideo = true"
        >
          <div class="flex items-start justify-between">
            <span
              class="project-badge rounded-full border px-3 py-1 text-xs"
            >
              School Project
            </span>
          </div>

          <h3
            class="mt-10 text-2xl font-semibold leading-tight md:text-3xl"
          >
            Skybanner Run
          </h3>

          <p
            class="mt-5 text-sm leading-7 text-white/50 md:text-base"
          >
            A 2D platformer game featuring player movement, collision,
            enemies, hazards, multiple difficulty levels, and score saving.
          </p>

          <div class="mt-8 flex flex-wrap gap-2">
            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              C
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Raylib
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Game Development
            </span>
          </div>

          <!-- Hover Link -->
          <div
            class="project-action mt-8 flex items-center justify-between pt-5"
          >
            <span
              class="text-xs uppercase tracking-[0.2em] text-white/30 transition group-hover:text-white/60"
            >
              Watch Video
            </span>

            <span
              class="text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
            >
              ↗
            </span>
          </div>
        </div>


        <!-- Project 3 -->
        <div
          class="project-card group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1"
        >
          <div class="flex items-start justify-between">
            <span
              class="project-badge rounded-full border px-3 py-1 text-xs"
            >
              School Project
            </span>
          </div>

          <h3
            class="mt-10 text-2xl font-semibold leading-tight md:text-3xl"
          >
            Brew Coffee Website
          </h3>

          <p
            class="mt-5 text-sm leading-7 text-white/50 md:text-base"
          >
            A coffee-themed website developed to practise fundamental
            front-end web development, page structure, styling, and layout.
          </p>

          <div class="mt-8 flex flex-wrap gap-2">
            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              HTML
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              CSS
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Web Development
            </span>
          </div>
        </div>


        <!-- Project 4 -->
        <div
          class="project-card group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1"
        >
          <div class="flex items-start justify-between">
            <span
              class="project-badge rounded-full border px-3 py-1 text-xs"
            >
              School Project
            </span>
          </div>

          <h3
            class="mt-10 text-2xl font-semibold leading-tight md:text-3xl"
          >
            OOP Shape Graphics Project
          </h3>

          <p
            class="mt-5 text-sm leading-7 text-white/50 md:text-base"
          >
            A graphical programming project exploring object-oriented
            programming through graphical shapes, keyboard interaction,
            and changing object names and colours.
          </p>

          <div class="mt-8 flex flex-wrap gap-2">
            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              C#
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              OOP
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Graphics
            </span>
          </div>
        </div>


        <!-- Project 5 -->
        <a
          href="https://www.youtube.com/watch?v=JnQydX8nPnQ"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card group block rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1"
        >
          <div class="flex items-start justify-between">
            <span
              class="project-badge rounded-full border px-3 py-1 text-xs"
            >
              School Project
            </span>
          </div>

          <h3
            class="mt-10 text-2xl font-semibold leading-tight md:text-3xl"
          >
            Pet Adoption Management System
          </h3>

          <p
            class="mt-5 text-sm leading-7 text-white/50 md:text-base"
          >
            A pet adoption website developed with frontend, backend,
            and database components to support the management and
            presentation of pet adoption information.
          </p>

          <div class="mt-8 flex flex-wrap gap-2">
            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Vue.js
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Java
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              HTML
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              CSS
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              MySQL
            </span>
          </div>

          <!-- Hover Link -->
          <div
            class="project-action mt-8 flex items-center justify-between pt-5"
          >
            <span
              class="text-xs uppercase tracking-[0.2em] text-white/30 transition group-hover:text-white/60"
            >
              View Project
            </span>

            <span
              class="text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
            >
              ↗
            </span>
          </div>
        </a>


        <!-- Project 6 -->
        <div
          class="project-card group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1"
        >
          <div class="flex items-start justify-between">
            <span
              class="project-badge rounded-full border px-3 py-1 text-xs"
            >
              School Project
            </span>
          </div>

          <h3
            class="mt-10 text-2xl font-semibold leading-tight md:text-3xl"
          >
            Patient Management System
          </h3>

          <p
            class="mt-5 text-sm leading-7 text-white/50 md:text-base"
          >
            A medical and patient record management database project
            focusing on database design, relationships, and structured
            management of patient-related information.
          </p>

          <div class="mt-8 flex flex-wrap gap-2">
            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              MySQL
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Database Design
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              ERD
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              SQL
            </span>
          </div>
        </div>

        <!-- Project 7 -->
        <a
          href="https://github.com/JN-06/Assingment2B"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card group block rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1"
        >
          <div class="flex items-start justify-between">
            <span
              class="project-badge rounded-full border px-3 py-1 text-xs"
            >
              School Project
            </span>
          </div>

          <h3
            class="mt-10 text-2xl font-semibold leading-tight md:text-3xl"
          >
            AI Traffic Prediction & Route Guidance
          </h3>

          <p
            class="mt-5 text-sm leading-7 text-white/50 md:text-base"
          >
            An artificial intelligence project exploring traffic prediction
            and route guidance using machine learning, graph-based
            representations, and search techniques.
          </p>

          <div class="mt-8 flex flex-wrap gap-2">
            <span
              class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50"
            >
              LSTM
            </span>

            <span
              class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50"
            >
              GRU
            </span>

            <span
              class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50"
            >
              Decision Tree
            </span>

            <span
              class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50"
            >
              Graph
            </span>

            <span
              class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50"
            >
              IDA*
            </span>
          </div>

          <!-- View Project -->
          <div
            class="project-action mt-8 flex items-center justify-between pt-5"
          >
            <span
              class="text-xs uppercase tracking-[0.2em] text-white/30 transition group-hover:text-white/60"
            >
              View Project
            </span>

            <span
              class="text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
            >
              ↗
            </span>
          </div>
        </a>


        <!-- Project 8 -->
        <div
          class="project-card group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1"
        >
          <div class="flex items-start justify-between">
            <span
              class="project-badge rounded-full border px-3 py-1 text-xs"
            >
              School Project
            </span>
          </div>

          <h3
            class="mt-10 text-2xl font-semibold leading-tight md:text-3xl"
          >
            Intelligent Delivery Vehicle Routing System
          </h3>

          <p
            class="mt-5 text-sm leading-7 text-white/50 md:text-base"
          >
            A multi-agent delivery routing project exploring route
            optimisation using different intelligent search and
            optimisation approaches.
          </p>

          <div class="mt-8 flex flex-wrap gap-2">
            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Java
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              JADE
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              GA
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              ACO
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              SA
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Greedy
            </span>
          </div>
        </div>


        <!-- Project 9 -->
        <div
          class="project-card group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1"
        >
          <div class="flex items-start justify-between">
            <span
              class="project-badge rounded-full border px-3 py-1 text-xs"
            >
              Current Project
            </span>
          </div>

          <h3
            class="mt-10 text-2xl font-semibold leading-tight md:text-3xl"
          >
            Smart Ground-Truthing & Digital Biodiversity System
          </h3>

          <p
            class="mt-5 text-sm leading-7 text-white/50 md:text-base"
          >
            An ongoing university project focused on digital biodiversity
            documentation, supporting plant species recording, QR tagging,
            GPS-assisted tracking, offline data collection, and biodiversity
            data management.
          </p>

          <div class="mt-8 flex flex-wrap gap-2">
            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              React Native
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Node.js
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              MySQL
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Mobile
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Web
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Biodiversity
            </span>
          </div>
        </div>


        <!-- Project 10 -->
        <a
          href="https://unique-one-stop-otomobil.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card group block rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1"
        >
          <div class="flex items-start justify-between">
            <span
              class="project-badge rounded-full border px-3 py-1 text-xs"
            >
              Personal Project
            </span>
          </div>

          <h3
            class="mt-10 text-2xl font-semibold leading-tight md:text-3xl"
          >
            Second-Hand Car Dealership Website
          </h3>

          <p
            class="mt-5 text-sm leading-7 text-white/50 md:text-base"
          >
            A personal full-stack web project created for a second-hand
            car dealership, featuring vehicle listings, customer-facing
            pages, backend services, and database integration.
          </p>

          <div class="mt-8 flex flex-wrap gap-2">
            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Vue.js
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Node.js
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              MySQL
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Cloudinary
            </span>
          </div>

          <!-- Hover Link -->
          <div
            class="project-action mt-8 flex items-center justify-between pt-5"
          >
            <span
              class="text-xs uppercase tracking-[0.2em] text-white/30 transition group-hover:text-white/60"
            >
              View Project
            </span>

            <span
              class="text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
            >
              ↗
            </span>
          </div>
        </a>


        <!-- Project 11 -->
        <div
          class="project-card group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1"
        >
          <div class="flex items-start justify-between">
            <span
              class="project-badge rounded-full border px-3 py-1 text-xs"
            >
              Current Project
            </span>
          </div>

          <h3
            class="mt-10 text-2xl font-semibold leading-tight md:text-3xl"
          >
            Treasure Island - Strategy & Puzzle Game
          </h3>

          <p
            class="mt-5 text-sm leading-7 text-white/50 md:text-base"
          >
            A 2D strategy and puzzle game currently being developed in C++,
            focusing on gameplay mechanics, map-based interactions, and
            puzzle-solving elements.
          </p>

          <div class="mt-8 flex flex-wrap gap-2">
            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              C++
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Game Development
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              2D
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Strategy
            </span>

            <span class="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              Puzzle
            </span>
          </div>
        </div>

      </div>

    </div>
    

    <!-- KTV Image Modal -->
    <div
      v-if="showKtvImage"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
      @click.self="showKtvImage = false"
    >
      <div class="relative max-h-[90vh] max-w-5xl">

        <button
          class="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#2a252e] text-xl text-white transition hover:bg-white hover:text-black"
          @click="showKtvImage = false"
        >
          ×
        </button>

        <img
          src="/images/ktv-management-system.jpeg"
          alt="KTV Management System"
          class="max-h-[90vh] max-w-full rounded-2xl object-contain"
        />

      </div>
    </div>

    <!-- Skybanner Video Modal -->
    <div
      v-if="showSkybannerVideo"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
      @click.self="showSkybannerVideo = false"
    >
      <div class="relative w-full max-w-5xl">

        <!-- Close Button -->
        <button
          class="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#2a252e] text-xl text-white transition hover:bg-white hover:text-black"
          @click="showSkybannerVideo = false"
          aria-label="Close video"
        >
          ×
        </button>

        <!-- Video -->
        <video
          src="/videos/skybanner_video.mp4"
          controls
          autoplay
          class="w-full rounded-2xl border border-white/10 bg-black object-contain shadow-2xl"
        >
          Your browser does not support the video tag.
        </video>

      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-color: rgba(196, 167, 255, 0.16);
  background-color: #0f0d12;
  background-image: linear-gradient(135deg, rgba(196, 167, 255, 0.045), transparent 42%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);
}

.project-card::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: -1px;
  left: 12%;
  width: 58%;
  height: 2px;
  opacity: 0;
  background: linear-gradient(90deg, transparent, #c4a7ff, transparent);
  box-shadow: 0 0 18px rgba(196, 167, 255, 0.7);
  transition: opacity 300ms ease;
}

.project-card::after {
  content: '';
  position: absolute;
  top: 14px;
  right: 14px;
  width: 16px;
  height: 16px;
  border-top: 2px solid rgba(196, 167, 255, 0.75);
  border-right: 2px solid rgba(196, 167, 255, 0.75);
  transition: width 300ms ease, height 300ms ease, border-color 300ms ease;
}

.project-card:hover {
  border-color: rgba(196, 167, 255, 0.52);
  background-color: #121016;
  box-shadow: 0 18px 55px rgba(124, 86, 177, 0.13);
}

.project-card:hover::before {
  opacity: 1;
}

.project-card:hover::after {
  width: 22px;
  height: 22px;
  border-color: #d9c7ff;
}

.project-badge {
  border-color: rgba(196, 167, 255, 0.4);
  background: rgba(196, 167, 255, 0.07);
  color: #cbb5f6;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  text-transform: uppercase;
  letter-spacing: 0.16em;
}

.project-card h3,
.project-card > p,
.project-card > div {
  position: relative;
  z-index: 1;
}

.project-card > .mt-8.flex.flex-wrap.gap-2 > span {
  border: 1px solid rgba(196, 167, 255, 0.16);
  background: rgba(196, 167, 255, 0.045);
  color: rgba(226, 213, 255, 0.62);
}

.project-action {
  border-top: 1px solid rgba(196, 167, 255, 0.14);
}

.project-action > span:last-child {
  display: inline-flex;
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(196, 167, 255, 0.34);
  border-radius: 9999px;
  color: rgba(226, 213, 255, 0.72);
  transition: transform 300ms ease, background-color 300ms ease, color 300ms ease;
}

.project-card:hover .project-action > span:last-child {
  transform: translate(2px, -2px);
  background: rgba(196, 167, 255, 0.13);
  color: #f4efff;
}

@media (prefers-reduced-motion: reduce) {
  .project-card,
  .project-card::before,
  .project-card::after,
  .project-action > span:last-child {
    transition: none;
  }
}
</style>
