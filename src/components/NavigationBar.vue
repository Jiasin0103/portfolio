<template>
  <div class="hidden gap-8 text-sm text-gray-300 md:flex">
    <a href="#about" class="nav-link hover:text-white">About</a>

    <a href="#projects" class="nav-link hover:text-white">Projects</a>

    <a href="#skills" class="nav-link hover:text-white">Skills</a>

    <a href="#certifications" class="nav-link hover:text-white">
      Certifications
    </a>

    <RouterLink to="/resume" class="nav-link hover:text-white">
      CV
    </RouterLink>

    <a href="#contact" class="nav-link hover:text-white">Contact</a>
  </div>
</template>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 0.35rem;
  transition: color 200ms ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  border-radius: 9999px;
  background: linear-gradient(90deg, #ffffff, #c4a7ff);
  box-shadow: 0 0 8px rgba(196, 167, 255, 0.65);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 250ms ease;
}

.nav-link:hover::after,
.nav-link:focus-visible::after {
  transform: scaleX(1);
  transform-origin: left;
}

@media (prefers-reduced-motion: reduce) {
  .nav-link,
  .nav-link::after {
    transition: none;
  }
}
</style>
