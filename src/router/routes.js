import HomePage from '@/components/ HomePage.vue'
import Events from '@/components/Events.vue'
import FormHandling from '@/components/FormHandling.vue'
import ListRender from '@/components/ListRender.vue'
import Methods from '@/components/Methods.vue'
import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/list-render',
      name: 'list-render',
      component: ListRender
    },
    {
      path: '/methods',
      name: 'methods',
      component: Methods
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/form-handling',
      name: 'form-handling',
      component: FormHandling
    },
  ],
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
})

router.afterEach(() => {
  NProgress.done();
})

export default router
