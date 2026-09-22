import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: '/resume',
      name: 'Resume',
      component: Resume,
    },
  ],
})

export default router
