<script setup lang="ts">
import { ref } from 'vue'

const showCiscoCertificate = ref(false)
const showIBMCertificate = ref(false)
</script>

<template>
  <section
    id="Certifications"
    class="bg-[#2a252e] px-8 py-24 text-white md:px-16 lg:px-24"
  >
    <div class="mx-auto max-w-6xl">
      <!-- Section Header -->
      <div>
        <p
          class="text-xs font-medium uppercase tracking-[0.3em] text-white/40"
        >
          Certifications
        </p>

        <h2
          class="mt-4 text-4xl font-semibold tracking-tight md:text-5xl"
        >
          Certifications &amp; Learning
        </h2>

        <p
          class="mt-6 max-w-2xl text-sm leading-7 text-white/50 md:text-base"
        >
          Certifications and learning achievements that support my
          technical knowledge and continuous development.
        </p>
      </div>

      <!-- Certifications -->
      <div class="mt-16 grid gap-6 md:grid-cols-2">

        <!-- Cisco -->
        <div
          class="certification-card group"
          tabindex="0"
        >
          <div
            class="certificate-face cursor-pointer"
            @click="showCiscoCertificate = true"
          >
            <img
              src="/certifications/cisco-ccna.png"
              alt="Cisco CCNA Introduction to Networks Certificate"
              class="certificate-image"
            />
          </div>

          <div class="certificate-content">
            <p class="text-xs font-medium uppercase tracking-[0.25em] text-[#cbb5f6]">
              Cisco Networking Academy
            </p>

            <h3 class="mt-4 text-2xl font-semibold leading-tight">
              CCNA: Introduction to Networks
            </h3>

            <p class="mt-4 text-sm leading-7 text-white/55">
              A foundational networking certification covering network
              architecture, IP addressing, Ethernet, and basic router and
              switch configuration.
            </p>

            <p class="mt-5 text-sm text-white/50">
              Issued March 2026
            </p>

            <button
              type="button"
              class="certificate-button mt-auto"
              @click="showCiscoCertificate = true"
            >
              View Certificate
              <span
                class="certificate-arrow text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
                aria-hidden="true"
              >
                ↗︎
              </span>
            </button>
          </div>
        </div>

        <!-- IBM -->
        <div
          class="certification-card group"
          tabindex="0"
        >
          <div
            class="certificate-face cursor-pointer"
            @click="showIBMCertificate = true"
          >
            <img
              src="/certifications/ibm-prompt-engineering.png"
              alt="IBM SkillsBuild Craft Precise Prompts for AI Models Certificate"
              class="certificate-image"
            />
          </div>

          <div class="certificate-content">
            <p class="text-xs font-medium uppercase tracking-[0.25em] text-[#cbb5f6]">
              IBM SkillsBuild
            </p>

            <h3 class="mt-4 text-2xl font-semibold leading-tight">
              Craft Precise Prompts for AI Models
            </h3>

            <p class="mt-4 text-sm leading-7 text-white/55">
              A practical learning credential focused on structuring precise
              prompts and improving the relevance and reliability of AI model
              responses.
            </p>

            <p class="mt-5 text-sm text-white/50">
              Issued September 2026
            </p>

            <button
              type="button"
              class="certificate-button mt-auto"
              @click="showIBMCertificate = true"
            >
              View Certificate
              <span
                class="certificate-arrow text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
                aria-hidden="true"
              >
                ↗︎
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- Cisco Certificate Modal -->
    <div
      v-if="showCiscoCertificate"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
      @click.self="showCiscoCertificate = false"
    >
      <div class="relative max-h-[90vh] max-w-5xl">
        <button
          type="button"
          class="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#2a252e] text-xl text-white transition hover:bg-white hover:text-black"
          @click="showCiscoCertificate = false"
          aria-label="Close certificate"
        >
          ×
        </button>

        <img
          src="/certifications/cisco-ccna.png"
          alt="Cisco CCNA Introduction to Networks Certificate"
          class="max-h-[90vh] max-w-full rounded-2xl object-contain"
        />
      </div>
    </div>

    <!-- IBM Certificate Modal -->
    <div
      v-if="showIBMCertificate"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
      @click.self="showIBMCertificate = false"
    >
      <div class="relative max-h-[90vh] max-w-5xl">
        <button
          type="button"
          class="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#2a252e] text-xl text-white transition hover:bg-white hover:text-black"
          @click="showIBMCertificate = false"
          aria-label="Close certificate"
        >
          ×
        </button>

        <img
          src="/certifications/ibm-prompt-engineering.png"
          alt="IBM SkillsBuild Craft Precise Prompts for AI Models Certificate"
          class="max-h-[90vh] max-w-full rounded-2xl object-contain"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.certification-card {
  position: relative;
  height: 430px;
  overflow: hidden;
  border: 1px solid rgba(196, 167, 255, 0.26);
  border-radius: 1.5rem;
  background: #0f0d12;
  perspective: 1000px;
  box-shadow: 0 0 0 4px rgba(196, 167, 255, 0.06);
  outline: none;
  transition: transform 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    border-color 600ms ease, box-shadow 600ms ease;
}

.certificate-face,
.certificate-content {
  position: absolute;
  inset: 0;
}

.certificate-face {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.75rem;
  background:
    radial-gradient(circle at 50% 45%, rgba(196, 167, 255, 0.13), transparent 48%),
    linear-gradient(135deg, rgba(196, 167, 255, 0.06), transparent 55%),
    #0f0d12;
}

.certificate-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 18px 24px rgba(0, 0, 0, 0.34));
  transition: transform 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 400ms ease;
}

.certificate-content {
  z-index: 2;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2rem;
  background:
    radial-gradient(circle at 85% 10%, rgba(196, 167, 255, 0.16), transparent 35%),
    linear-gradient(145deg, #17121d, #0d0b10 70%);
  transform: rotateX(-90deg);
  transform-origin: bottom;
  backface-visibility: hidden;
  transition: transform 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.certification-card:hover,
.certification-card:focus-within,
.certification-card:focus-visible {
  transform: scale(1.035);
  border-color: rgba(196, 167, 255, 0.65);
  box-shadow: 0 16px 40px rgba(15, 10, 22, 0.45),
    0 0 28px rgba(196, 167, 255, 0.16);
}

.certification-card:hover .certificate-content,
.certification-card:focus-within .certificate-content,
.certification-card:focus-visible .certificate-content {
  transform: rotateX(0deg);
}

.certification-card:hover .certificate-image,
.certification-card:focus-within .certificate-image,
.certification-card:focus-visible .certificate-image {
  transform: scale(0.72);
  opacity: 0;
}

.certificate-button {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border: 1px solid rgba(196, 167, 255, 0.42);
  border-radius: 9999px;
  padding: 0.75rem 1.1rem;
  color: #e2d5ff;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: transform 250ms ease, background-color 250ms ease,
    color 250ms ease;
}

.certificate-button:hover,
.certificate-button:focus-visible {
  transform: translateY(-2px);
  background: #c4a7ff;
  color: #0b0910;
}

.certificate-arrow {
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
}

@media (prefers-reduced-motion: reduce) {
  .certification-card,
  .certificate-image,
  .certificate-content,
  .certificate-button {
    transition: none;
  }
}
</style>
