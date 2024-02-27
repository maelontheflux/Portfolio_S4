<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { currentTime } from '@/backend'

</script>

<template>
  <div class="p-5 flex justify-between items-center">
    <div>Maël Grosjean</div>
    <div>{{ currentTime }}</div>
    <div class="menu__parent cursor-pointer m-2" onclick="document.body.classList.toggle('menu-open')" tabindex="0">
      <div class="menu__nav-toggle">
        <div class="menu__nav-toggle-bar"></div>
      </div>
    </div>
  </div>
  <nav class="menu bg-secondary-white">
    <ul class="menu menu__list">
      <li class="menu__item">
        <RouterLink to="" class="menu__link">Projets</RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink to="" class="menu__link">About</RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink to="" class="menu__link">Notes</RouterLink>
      </li>
      <li class="menu__item">
        <a href="mailto:mael.gsn01@gmail.com" class="menu__link">Contact</a>
      </li>
    </ul>
    <div class="menu__center-pts bg-secondary-white"></div>
  </nav>
</template>
