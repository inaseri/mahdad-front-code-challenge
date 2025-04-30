import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/layouts/main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/HomeView.vue'),
      meta: { layout: Main },
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Products.vue'),
      meta: { layout: Main },
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/Checkout.vue'),
      meta: { layout: Main },
    },
    {
      path: '/purchases',
      name: 'purchases',
      component: () => import('../views/Purchases.vue'),
      meta: { layout: Main },
    },
    {
      path: '/logs',
      name: 'logs',
      component: () => import('../views/Logs.vue'),
      meta: { layout: Main },
    },
  ],
})

export default router
