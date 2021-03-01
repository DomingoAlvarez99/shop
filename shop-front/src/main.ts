import { createApp } from 'vue';
import App from '@//ui/components/App.vue';
import router from './router';
import { primeVue } from './prime-vue';

createApp(App)
  .use(primeVue)
  .use(router)
  .mount('#app');