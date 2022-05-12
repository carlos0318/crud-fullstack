import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/CommandersView.vue')
  },
  {
    path: '/missionCommander/:id',
    name: 'missionCommander',
    component: () => import(/* webpackChunkName: "about" */ '../views/CommanderView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
