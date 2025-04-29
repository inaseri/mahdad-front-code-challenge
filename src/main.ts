import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import 'vue3-toastify/dist/index.css';

import piniaPersist from 'pinia-plugin-persistedstate'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()
pinia.use(piniaPersist)

app.use(vuetify)
app.use(pinia)
app.use(router)
app.use(Vue3Toastify, {
  autoClose: 3000,
} as ToastContainerOptions);

app.mount('#app')
