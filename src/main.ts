import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios';
import AuthService from './services/AuthService';
import JobService from './services/JobService';

// import Bugsnag from '@bugsnag/js';
// import BugsnagPluginVue from '@bugsnag/plugin-vue';

import { registerSW } from 'virtual:pwa-register';

import './index.css'; // Tailwind

const swIntervalMS = 60 * 60 * 1000;

const $axios = axios.create({
  baseURL:
    import.meta.env.VITE_STAGE === 'prod'
      ? 'https://diy-backend.herokuapp.com'
      : 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json',
  },
});

const authService = new AuthService($axios);
const jobService = new JobService($axios);

// Bugsnag.start({
//   apiKey: import.meta.env.VITE_BUGSNAG_APIKEY as string,
//   plugins: [new BugsnagPluginVue()],
// });

//const bugsnagVue = Bugsnag.getPlugin('vue');

const app = createApp(App);

// @ts-ignore
app.use(router).use(store).mount('#app'); // .use(bugsnagVue)

app.provide('axios', $axios);
app.provide('authService', authService);
app.provide('jobService', jobService);

const updateSW = registerSW({
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update();
      }, swIntervalMS);
  },
  onNeedRefresh() {},
  onOfflineReady() {},
  //onRegisterError(error) {}
});
