import { createApp } from 'vue';
import App from './app/app.vue';
import appStore from './app/app.store'

const app = createApp(App);

app.use(appStore);

app.mount('#app');
