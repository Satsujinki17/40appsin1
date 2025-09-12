import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import tasksView from '@/views/Productivity/tasksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: tasksView
    }
  ],
})

export default router
