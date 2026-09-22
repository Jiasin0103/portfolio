<template>
  <section
    id="about"
    class="bg-[#2a252e] px-8 py-24 text-white md:px-16 lg:px-24"
  >
    <div class="mx-auto max-w-7xl">

      <!-- Section Label -->
      <p
        class="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/50"
      >
        About Me
      </p>

      <!-- Heading -->
      <h2
        class="max-w-3xl text-4xl font-bold leading-tight md:text-6xl"
      >
        A little about me
      </h2>

      <!-- Main Content -->
      <div class="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">

        <!-- Left Column -->
        <div>
          <!-- Profile ID Card -->
          <div class="flex justify-center lg:justify-start">
        <div class="profile-card" tabindex="0">
          <a
            class="mail-link"
            href="mailto:ungjiasin0@gmail.com"
            aria-label="Email Ung Jia Sin"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>

          <div class="profile-picture">
            <img src="/images/profile.jpg" alt="Ung Jia Sin" />
          </div>

          <div class="profile-details">
            <div class="profile-copy">
              <span class="profile-name">Ung Jia Sin</span>
              <span class="profile-role">Computer Science Student</span>
              <span class="profile-about">
                Software Development + Artificial Intelligence
              </span>
            </div>

            <div class="profile-actions">
              <div class="social-links">
                <a
                  href="https://www.linkedin.com/in/jia-sin-ung-495417439/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67H9.34V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.3ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V8.98H7.1v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Jiasin0103"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.41 7.88 10.94.58.1.79-.25.79-.56v-2.16c-3.21.7-3.89-1.54-3.89-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06.97-.31 3.18 1.18 3.18 1.18a11.1 11.1 0 0 1 5.8 0s2.21-1.49 3.18-1.18c.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.27 5.69.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                </a>
              </div>
              <a class="contact-button" href="mailto:ungjiasin0@gmail.com">
                Contact Me
              </a>
            </div>
          </div>
          </div>
          </div>

          <!-- About Text -->
          <div
            class="mt-12 max-w-3xl space-y-6 text-base leading-8 text-white/60 md:text-lg"
          >

          <p>
            Hi, I'm Ung Jia Sin, a Computer Science student majoring in
            Software Development and Artificial Intelligence at Swinburne
            University of Technology, Sarawak Campus.
          </p>

          <p>
            I enjoy building software applications and exploring how
            technology can be used to solve practical problems. Through
            university coursework and personal projects, I have gained
            exposure to programming, web development, databases,
            networking, and artificial intelligence.
          </p>

          <p>
            I'm a curious and patient learner who enjoys learning by 
            trying things out, and I'm currently looking to gain real-world experience through an internship.
          </p>

          </div>
        </div>

        <!-- Education Card -->
        <div
          class="education-card rounded-3xl border p-7"
        >
          <p
            class="text-xs font-medium uppercase tracking-[0.3em] text-white/40"
          >
            Education
          </p>

          <!-- Bachelor Degree -->
          <div class="mt-8">
            <h3 class="text-xl font-semibold">
              Swinburne University of Technology
            </h3>

            <p class="mt-2 text-sm text-white/50">
              Sarawak Campus
            </p>

            <div class="mt-8">
              <p class="text-base font-medium">
                Bachelor of Computer Science
              </p>

              <p class="mt-2 text-sm text-white/50">
                Software Development + Artificial Intelligence
              </p>
            </div>

            <div
              class="mt-8 flex items-end justify-between border-t border-white/10 pt-6"
            >
              <div>
                <p
                  class="text-xs uppercase tracking-[0.2em] text-white/40"
                >
                  Duration
                </p>

                <p class="mt-2 text-sm text-white/70">
                  February 2025 - February 2028
                </p>
              </div>

              <div class="text-right">
                <p
                  class="text-xs uppercase tracking-[0.2em] text-white/40"
                >
                  Current CGPA
                </p>

                <p class="mt-2 text-2xl font-semibold">
                  3.84
                </p>
              </div>
            </div>
          </div>

          <!-- Foundation -->
          <div class="mt-10 border-t border-white/10 pt-8">
            <h3 class="text-xl font-semibold">
              Swinburne University of Technology
            </h3>

            <p class="mt-2 text-sm text-white/50">
              Sarawak Campus
            </p>

            <div class="mt-6">
              <p class="text-base font-medium">
                Foundation in Engineering
              </p>
            </div>

            <div
              class="mt-8 flex items-end justify-between border-t border-white/10 pt-6"
            >
              <div>
                <p
                  class="text-xs uppercase tracking-[0.2em] text-white/40"
                >
                  Duration
                </p>

                <p class="mt-2 text-sm text-white/70">
                  July 2024 - January 2025
                </p>
              </div>

              <div class="text-right">
                <p
                  class="text-xs uppercase tracking-[0.2em] text-white/40"
                >
                  Final CGPA
                </p>

                <p class="mt-2 text-2xl font-semibold">
                  3.88
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.profile-card {
  --accent: #b8a7c4;
  --accent-strong: #9d85ad;
  position: relative;
  width: min(280px, 100%);
  height: 280px;
  padding: 3px;
  overflow: visible;
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 32px;
  background: #f4f0f6;
  box-shadow: 0 36px 36px -28px rgb(0 0 0 / 55%);
  outline: none;
  transition: transform 0.5s ease, border-radius 0.5s ease,
    box-shadow 0.5s ease;
}

.profile-card:hover,
.profile-card:focus-within {
  border-top-left-radius: 55px;
  box-shadow: 0 42px 44px -26px rgb(0 0 0 / 65%);
  transform: translateY(-6px);
}

.profile-card:focus-visible {
  box-shadow: 0 0 0 3px rgb(184 167 196 / 45%),
    0 42px 44px -26px rgb(0 0 0 / 65%);
}

.mail-link {
  position: absolute;
  z-index: 4;
  top: 20px;
  right: 28px;
  color: var(--accent-strong);
}

.mail-link svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: color 0.25s ease, transform 0.25s ease;
}

.mail-link:hover svg,
.mail-link:focus-visible svg {
  color: #6f587e;
  transform: scale(1.12);
}

.profile-picture {
  position: absolute;
  z-index: 1;
  inset: 3px;
  overflow: hidden;
  border: 0 solid var(--accent);
  border-radius: 29px;
  transition: inset 0.5s ease 0.2s, width 0.5s ease 0.2s,
    height 0.5s ease 0.2s, border 0.5s ease,
    border-radius 0.5s ease, box-shadow 0.5s ease, z-index 0.5s ease;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  transition: transform 0.5s ease 0.15s, object-position 0.5s ease;
}

.profile-details {
  position: absolute;
  z-index: 2;
  inset: 80% 3px 3px;
  overflow: hidden;
  border-radius: 29px;
  background: var(--accent);
  box-shadow: inset 0 5px 8px rgb(74 58 82 / 18%);
  transition: top 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),
    border-radius 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.profile-copy {
  position: absolute;
  top: 68px;
  right: 24px;
  bottom: 57px;
  left: 24px;
  color: white;
}

.profile-name,
.profile-role,
.profile-about {
  display: block;
}

.profile-name {
  font-size: 1.2rem;
  font-weight: 700;
}

.profile-role {
  margin-top: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.75;
}

.profile-about {
  margin-top: 14px;
  font-size: 0.84rem;
  line-height: 1.45;
}

.profile-actions {
  position: absolute;
  right: 24px;
  bottom: 16px;
  left: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.social-links {
  display: flex;
  gap: 13px;
}

.social-links a {
  color: white;
  transition: color 0.25s ease, transform 0.25s ease;
}

.social-links svg {
  width: 19px;
  height: 19px;
  fill: currentColor;
  filter: drop-shadow(0 5px 5px rgb(74 58 82 / 18%));
}

.social-links a:hover,
.social-links a:focus-visible {
  color: #5f4a6b;
  transform: translateY(-2px) scale(1.12);
}

.contact-button {
  border-radius: 999px;
  background: white;
  color: #816d8e;
  padding: 7px 11px;
  font-size: 0.65rem;
  font-weight: 700;
  box-shadow: 0 5px 8px rgb(74 58 82 / 15%);
  transition: background 0.25s ease, color 0.25s ease,
    transform 0.25s ease;
}

.contact-button:hover,
.contact-button:focus-visible {
  background: #5f4a6b;
  color: white;
  transform: translateY(-2px);
}

.profile-card:hover .profile-details,
.profile-card:focus-within .profile-details {
  top: 20%;
  border-radius: 80px 29px 29px 29px;
  transition-delay: 0.2s;
}

.profile-card:hover .profile-picture,
.profile-card:focus-within .profile-picture {
  z-index: 5;
  inset: 10px auto auto 10px;
  width: 100px;
  height: 100px;
  border: 7px solid var(--accent);
  border-radius: 50%;
  box-shadow: 0 5px 8px rgb(74 58 82 / 20%);
  transition-delay: 0s;
}

.profile-card:hover .profile-picture img,
.profile-card:focus-within .profile-picture img {
  object-position: center 18%;
  transform: scale(1.08);
}

.profile-card:hover .profile-picture:hover {
  z-index: 6;
  border-radius: 12px;
  transform: scale(1.3);
}

.education-card {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-color: rgba(196, 167, 255, 0.16);
  background-color: #0f0d12;
  background-image: linear-gradient(
    135deg,
    rgba(196, 167, 255, 0.045),
    transparent 42%
  );
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);
  transition: transform 300ms ease, border-color 300ms ease,
    background-color 300ms ease, box-shadow 300ms ease;
}

.education-card::before {
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

.education-card:hover {
  transform: translateY(-0.25rem);
  border-color: rgba(196, 167, 255, 0.52);
  background-color: #121016;
  box-shadow: 0 18px 55px rgba(124, 86, 177, 0.13);
}

.education-card:hover::before {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .profile-card,
  .profile-card *,
  .profile-card *::before,
  .profile-card *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }

  .education-card,
  .education-card::before {
    transition: none;
  }
}
</style>
