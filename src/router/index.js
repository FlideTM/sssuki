import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ClientsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/slaves',
    name: 'slaves',
    component: () => import('../views/SlavesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
