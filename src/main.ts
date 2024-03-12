import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import V3ScrollLock from 'v3-scroll-lock'
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App)

app.use(
    createRouter({
        history: createWebHistory(),
        routes
    })
)

app.use(V3ScrollLock, {})

app.use(VueSmoothScroll)

app.mount('#app')