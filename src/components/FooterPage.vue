<script setup lang="ts">
import { ref } from 'vue'
import { currentTime } from '@/backend'

import icon_world from '@/components/icons/icon_world.vue'

// Variable etat du menu
const activeMenu = ref(false)
// Fonction pour ouvrir/fermer le menu
function activateMenu() {
    activeMenu.value = true;
}
function deactivateMenu() {
    activeMenu.value = false;
}
</script>

<template>
  <div class="footer__class font-semibold relative contents">
    <div class="absolute top-36 sm:top-44 left-10">
      <div class="font-medium sm:text-lg sm:ml-2 rotate-[-90deg] origin-left flex items-center gap-2">
        <icon_world class="w-6 h-6 sm:w-8 sm:h-8" />
        {{ currentTime }}
      </div>
    </div>
    <div class="grid ml-[22%] mt-[8%] mb-[15%] lg:grid-cols-2 lg:gap-20">
      <div class="text-[50px] sm:text-[80px]">
        <p>Maël</p>
        <p class="-mt-6">Grosjean</p>
      </div>
      <div class="sm:text-base self-end lg:mt-[40%]">
        <p class="max-w-[300px]">Want to know more or have a project in mind ?</p>
        <a href="mailto:mael.gsn01@gmail.com" class="underline link">Let's Connect</a>
      </div>
    </div>
    <div class="text-end relative">
      <div class="w-max absolute sm:bottom-0 right-0 items-center">
        <p class="text-start origin-bottom-right rotate-[-90deg] sm:text-base ease-in duration-500 opacity-100" @mouseenter="activateMenu" @mouseleave="deactivateMenu" :class="{ '!opacity-0' : activeMenu }">FOLLOW THE CONTENT</p>
        <nav class="invisible opacity-0 ease-in duration-500" :class="{ '!visible opacity-100' : activeMenu }">
          <ul class="grid gap-6 sm:gap-12" @mouseenter="activateMenu" @mouseleave="deactivateMenu">
            <li>
              <a href="https://www.instagram.com/kimuraka.art/" class="underline link">instagram</a>
            </li>
            <li>
              <a href="https://www.behance.net/3f9a52a9?locale=fr_FR" class="underline link">behance</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ma%C3%ABl-grosjean-5251a7253/" class="underline link">linkedIn</a>
            </li>
            <li>
              <a href="https://twitter.com/maelonthefluxv1" class="underline link">twitter</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <div class="max-sm:pt-0 pb-5 p-5 pl-[22%] font-semibold sm:text-[18px]">
    <a href="/file/CV_UX_DESIGNER_MAEL_GROSJEAN.pdf" download="CV_UX_DESIGNER_MAEL_GROSJEAN.pdf" class="link">DOWNLOAD MY RESUME</a>
  </div>
</template>