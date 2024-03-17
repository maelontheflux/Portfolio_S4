<script setup lang="ts">
import { onMounted } from 'vue';
// Import components
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';
import Loader from './components/Loader.vue';
// 
onMounted(() => {
  // Cursor
  const cursor = document.querySelector('.cursor');

  // Déplacer le curseur avec la souris
  document.addEventListener('mousemove', e => {
    if (cursor) {
      cursor.setAttribute("style", `top: ${e.pageY - window.scrollY - 30}px; left: ${e.pageX - 30}px;`);
    }
    else {
      document.querySelectorAll('body, a, button').forEach(el => {
        (el as HTMLElement).style.cursor = 'auto';
      });
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

<style scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  transition: visibility .2s linear 0s, opacity .2s cubic-bezier(.47, 0, .745, .715) 0s
}

.loading.isShow {
  visibility: visible;
  opacity: 1;
  transition: visibility .8s linear 0s, opacity .8s cubic-bezier(.47, 0, .745, .715) 0s
}

.loading_name {
  position: absolute;
  bottom: calc(50% + 25px);
  left: 0;
  width: 100%;
  text-align: center
}

.loading_bar {
  position: absolute;
  top: 50%;
  left: calc(50% - 100px);
  width: 200px;
  height: 1px;
  overflow: hidden
}

.loading_bar:before {
  content: "";
  position: absolute;
  width: 2400px;
  height: 1px;
  background: linear-gradient(to right, transparent 0, transparent 5.5555555556%, black 11.1111111111%, black 16.6666666667%, transparent 22.2222222222%, transparent 27.7777777778%, black 33.3333333333%, black 38.8888888889%, transparent 44.4444444444%, transparent 50%, transparent 55.5555555556%, black 61.1111111111%, black 66.6666666667%, transparent 72.2222222222%, transparent 77.7777777778%, black 83.3333333333%, black 88.8888888889%, transparent 94.4444444444%, transparent 100%);
  animation: loading_bar 2s linear 0s infinite
}

.loading.isFinish .loading_bar {
  visibility: hidden;
  opacity: 0;
  transition: visibility .1s linear 0s, opacity .1s cubic-bezier(.39, .575, .565, 1) 0s
}

.loading:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #000;
  -ms-transform: scaleX(0);
  transform: scaleX(0);
  transition: transform 1s cubic-bezier(.645, .045, .175, 1) 0s
}

.loading.isFinish:after {
  -ms-transform: scaleX(1);
  transform: scaleX(1)
}

@keyframes loading_bar {
  0% {
    transform: translateX(-1200px)
  }

  100% {
    transform: none
  }
}
</style>