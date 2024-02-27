<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { currentTime } from '@/backend'

// Variable etat du menu
const activeMenu = ref(false)
// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
    activeMenu.value = !activeMenu.value;
    document.body.classList.toggle('menu-open');
}
</script>

<template>
  <div class="p-5 flex justify-between items-center">
    <div>Maël Grosjean</div>
    <div>{{ currentTime }}</div>
    <div class="menu__parent cursor-pointer m-2" @click="toggleMenu" tabindex="0">
      <div class="menu__nav-toggle">
        <div class="menu__nav-toggle-bar"></div>
      </div>
    </div>
  </div>
  <nav class="menu bg-secondary-white">
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
      <li class="menu__item text-xl">
        <a href="mailto:mael.gsn01@gmail.com" class="menu__link underline" @click="toggleMenu">Contact</a>
      </li>
    </ul>
    <div class="menu__center-pts bg-secondary-white"></div>
  </nav>
</template>
