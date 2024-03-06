<script setup lang="ts">
import { RouterView } from 'vue-router' 
import { onMounted } from 'vue';
// Import components
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';
// Cursor
onMounted(() => {
  const cursor = document.querySelector('.cursor');
  
  document.addEventListener('mousemove', (e) => {
    if (cursor) {
      cursor.setAttribute("style", `top: ${e.pageY - 30}px; left: ${e.pageX - 30}px;`);
    }
  });
});
</script>

<template>
  <header>
    <HeaderPage />
  </header>

  <div>
    <div class="cursor">
      <svg height="64" width="64"><circle cx="32" cy="32" r="16"></circle></svg>
    </div>
  </div>

  <Suspense>
    <RouterView />
  </Suspense>

  <footer>
    <FooterPage />
  </footer>
</template>