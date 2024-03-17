<script setup lang="ts">
import { onMounted } from 'vue';
// Import components
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';
// Cursor
onMounted(() => {
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
    if (cursor) {
      cursor.setAttribute("style", `top: ${e.pageY - window.scrollY - 30}px; left: ${e.pageX - 30}px;`);
    }
  });

  // Fonction pour agrandir le curseur
  function cursorHover() {
    if (cursor) {
      cursor.classList.add('large');
    }
  }
  // Fonction pour rétablir la taille normale du curseur
  function resetCursor() {
    if (cursor) {
      cursor.classList.remove('large');
    }
  }

  // Liste des éléments
  const interactiveElements = document.querySelectorAll('a, button, .interactive');

  // Appliquer les écouteurs d'événements à chaque élément
  interactiveElements.forEach(function (element) {
    element.addEventListener('mouseenter', cursorHover);
    element.addEventListener('mouseleave', resetCursor);
  });
});
</script>

<template>
  <HeaderPage />

  <div>
    <div class="cursor">
      <svg height="64" width="64">
        <circle cx="32" cy="32" r="16"></circle>
      </svg>
    </div>
  </div>

  <Suspense>
      <RouterView />
  </Suspense>

  <footer>
    <FooterPage />
  </footer>
</template>