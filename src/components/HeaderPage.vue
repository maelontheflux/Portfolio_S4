<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { currentTime } from '@/backend'
import { useWindowScroll } from '@vueuse/core'

import icon_world from '@/components/icons/icon_world.vue'

// Variable etat du menu
const activeMenu = ref(false)
// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
  activeMenu.value = !activeMenu.value;
  document.body.classList.toggle('menu-open');
}
// Fonction pour affciher le header au scroll vers le haut
const { y } = useWindowScroll()
const underLimit = computed(() => y.value < 400)

const dirTop = ref(true)
watch(y, (y, oldY) => {
  dirTop.value = y < oldY
})

const isIOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);

</script>

<template>
  <header class="z-50 fixed w-full transition-all duration-500 ease-in-out" :class="{
    '!-translate-y-full !bg-transparent': !dirTop,
    '!bg-transparent': underLimit,
  }">
    <div class="p-5 sm:px-10 flex justify-between flex-wrap items-center font-bold sm:text-lg">
      <RouterLink to="/">Maël Grosjean</RouterLink>
      <div class="max-sm:hidden current-time flex items-center gap-2 font-medium">
        <icon_world class="w-6 h-6 sm:w-8 sm:h-8" />
        {{ currentTime }}
      </div>
      <div class="menu__parent m-2" @click="toggleMenu" tabindex="0">
        <div class="menu__nav-toggle">
          <div class="menu__nav-toggle-bar"></div>
        </div>
      </div>
    </div>
    <nav class="h-full">
      <ul class="menu bg-secondary-white text-main-black" v-scroll-lock="activeMenu">
        <li class="sm:hidden absolute top-10 left-[50%] center flex items-center gap-2 font-medium">
          <icon_world class="w-6 h-6 sm:w-8 s:h-8" />
          {{ currentTime }}
        </li>
        <li class="menu__item sm:text-xl">
          <RouterLink to="/#projects" class="menu__link" @click="toggleMenu">Projects</RouterLink>
        </li>
        <li class="menu__item sm:text-xl">
          <RouterLink to="/about" class="menu__link" @click="toggleMenu">About</RouterLink>
        </li>
        <li class="menu__item sm:text-xl">
          <RouterLink to="/notes" class="menu__link" @click="toggleMenu">Notes</RouterLink>
        </li>
        <li class="menu__item sm:text-xl">
          <RouterLink to="/contact" class="menu__link" @click="toggleMenu">Contact</RouterLink>
        </li>
        <li class="max-sm:hidden menu__center-pts bg-secondary-white"></li>
      </ul>
    </nav>
  </header>
</template>

<style>
/* Style spécifique pour iOS avec le header fixé */
.fixed-ios {
  position: -webkit-sticky; /* Position fixe */
  position: sticky; /* Position fixe pour les autres navigateurs */
  top: 0;
}
</style>