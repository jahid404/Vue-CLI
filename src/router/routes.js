import HomePage from "@/pages/ HomePage.vue";
import NProgress from "nprogress";
import { createRouter, createWebHistory } from "vue-router";

const routeList = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    routeName: "Home",
    icon: "bi-house",
  },
  {
    path: "/list",
    name: "list",
    component: () => import("@/pages/ListRender.vue"),
    routeName: "List",
    icon: "bi-list",
  },
  {
    path: "/methods",
    name: "methods",
    component: () => import("@/pages/Methods.vue"),
    routeName: "Methods",
    icon: "bi-gear",
  },
  {
    path: "/events",
    name: "events",
    component: () => import("@/pages/Events.vue"),
    routeName: "Events",
    icon: "bi-calendar-event",
  },
  {
    path: "/form",
    name: "form",
    component: () => import("@/pages/FormHandling.vue"),
    routeName: "Form",
    icon: "bi-file-text",
  },
  {
    path: "/watch",
    name: "watch",
    component: () => import("@/pages/Events.vue"),
    routeName: "Watch",
    icon: "bi-eye",
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/pages/Cart.vue"),
    routeName: "Cart",
    icon: "bi-cart",
  },
];

// initiate router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeList,
});

// nprogress config & bind with router
NProgress.configure({
  minimum: 0.1,
  easing: "ease",
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  parent: "body",
});
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});
router.afterEach(() => {
  NProgress.done();
});

export { routeList };
export default router;
