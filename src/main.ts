import { createApp } from 'vue';
import App from './app/app.vue';
import appRouter from './app/app.router';


const app = createApp(App);

app.use(appRouter);

app.mount('#app');
