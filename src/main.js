import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import App from './App.vue';
import router from './router';
import Vuetify from './plugins/vuetify';
import './../firebase-config';
import { createHead } from '@vueuse/head';  // Import VueUse Head

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

const app = createApp(App);

// Use plugins BEFORE mounting
app.use(router);
app.use(pinia);
app.use(Vuetify);
app.use(createHead()); // Use @vueuse/head

// Define gtag function for convenience
function gtag(...args) {
  if (window.gtag) {
    window.gtag(...args);
  }
}

app.mount('#app');

// Update route meta info and send GA pageview
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || '');
  }

  // Send pageview to GA
  if (typeof gtag === 'function') {
    gtag('event', 'page_view', {
      page_title: document.title,
      page_path: to.fullPath,
    });
  }
});