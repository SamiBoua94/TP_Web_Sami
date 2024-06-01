import { createApp } from 'vue';
import App from './App.vue';
import BootstrapVueNext from 'bootstrap-vue-next';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

const app = createApp(App);

// Make BootstrapVueNext available throughout your project
app.use(BootstrapVueNext);

app.mount('#app');