<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { currentTime } from '@/backend'

import icon_world from '@/components/icons/icon_world.vue'

// Variable etat du menu
const activeMenu = ref(false)
// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
    activeMenu.value = !activeMenu.value;
    document.body.classList.toggle('menu-open');
}
</script>

<template>
  <div class="p-5 sm:px-10 flex justify-between flex-wrap items-center font-bold text-lg">
    <a href="/">Maël Grosjean</a>
    <div class="sm:current-time flex items-center gap-2 font-medium">
      <icon_world class="w-8 h-8" />
      {{ currentTime }}
    </div>
    <div class="menu__parent cursor-pointer m-2" @click="toggleMenu" tabindex="0">
      <div class="menu__nav-toggle">
        <div class="menu__nav-toggle-bar"></div>
      </div>
    </div>
  </div>
  <nav class="menu bg-secondary-white text-main-black">
    <ul class="menu menu__list" v-scroll-lock="activeMenu">
      <li class="menu__item text-xl">
        <RouterLink to="" class="menu__link" @click="toggleMenu">Projets</RouterLink>
      </li>
      <li class="menu__item text-xl">
        <RouterLink to="" class="menu__link" @click="toggleMenu">About</RouterLink>
      </li>
      <li class="menu__item text-xl">
        <RouterLink to="" class="menu__link" @click="toggleMenu">Notes</RouterLink>
      </li>
      <li class="menu__item text-xl underline">
        <a href="mailto:mael.gsn01@gmail.com" class="menu__link" @click="toggleMenu">Contact</a>
      </li>
    </ul>
    <div class="max-sm:hidden menu__center-pts bg-secondary-white"></div>
  </nav>
</template>
