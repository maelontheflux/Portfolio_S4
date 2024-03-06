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

import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      const cursor = document.querySelector('.cursor');
      document.addEventListener('mousemove', e => {
        if (cursor) {
          cursor.setAttribute("style", `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`);
        }
      });
    });

    return {};
  }
};