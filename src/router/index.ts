import { createRouter, createWebHistory } from 'vue-router'
import TheLayout from '@/components/TheLayout/TheLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: TheLayout,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: () => import('@/views/Dashboard/DashboardView.vue'),
        },
        {
          path: '/meetings',
          name: 'meetings',
          component: () => import('@/views/Meetings/MeetingsView.vue'),
        },
        {
          path: '/tasks',
          name: 'tasks',
          component: () => import('@/views/Tasks/TasksView.vue'),
        },
      ],
    },
  ],
})

export default router
