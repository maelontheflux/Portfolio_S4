<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
// Import components
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';
// 
const isLoading = ref(false);
const router = useRouter();

// Loader
// setTimeout(() => {
//   isLoading.value = false;
// }, 1200);

onMounted(() => {
  // Cursor
  const cursor = document.querySelector('.cursor');

  // Déplacer le curseur avec la souris
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
  const interactiveElements = document.querySelectorAll('a, button, .menu__parent, .cursor-interaction');

  // Appliquer les écouteurs d'événements à chaque élément
  interactiveElements.forEach(function (element) {
    element.addEventListener('mouseenter', cursorHover);
    element.addEventListener('mouseleave', resetCursor);
  });
});
</script>

<template>
  <div>
    <div v-if="isLoading" class="loader">
      Chargement en cours...
    </div>

    <div v-else>
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
    </div>
  </div>
</template>

<style scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
</style>