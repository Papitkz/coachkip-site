import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue'; // Import additional views as needed
import Sitemap from '../../public/sitemap.xml';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'COACH KIP',
      description: 'Welcome to the home page of our website.',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: {
      title: 'About Us',
      description: 'Learn more about us on this page.',
    },
  },{
    path: '/sitemap.xml', // Route for the sitemap
    name: 'Sitemap',
    component: Sitemap,
    meta: {
      title: 'Sitemap',
      description: 'A list of all pages on our website.',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;