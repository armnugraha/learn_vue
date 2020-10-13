import { createApp } from 'vue';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// .use(BootstrapVue).use(IconsPlugin)
createApp(App).use(store).use(router).mount('#app');
