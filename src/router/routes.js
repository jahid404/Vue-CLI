import HomePage from '@/components/ HomePage.vue';
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
      path: '/list',
      name: 'list-render',
      component: () => import('@/components/ListRender.vue')
    },
    {
      path: '/methods',
      name: 'methods',
      component: () => import('@/components/Methods.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('@/components/Events.vue')
    },
    {
      path: '/form',
      name: 'form-handling',
      component: () => import('@/components/FormHandling.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/components/Cart.vue')
    },
  ],
})

// nprogress config & bind with router
NProgress.configure({
  minimum: 0.1,
  easing: 'ease',
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  parent: 'body',
});
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
