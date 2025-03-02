import { createRouter, createWebHistory } from 'vue-router'


import HomeView from '../views/HomeView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/Home' }, // Default path redirect
    { path: '/Home', name: 'Home', component: HomeView },
  ]
})

export default router