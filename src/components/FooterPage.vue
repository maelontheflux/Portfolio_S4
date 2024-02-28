<script setup lang="ts">
import { currentTime } from '@/backend'

import icon_world from '@/components/icons/icon_world.vue'

</script>

<template>
  <div class="footer__class font-semibold">
    <div class="justify-end font-medium text-lg ml-2 rotate-[-90deg] origin-left flex items-center gap-2">
      <icon_world class="w-8 h-8" />
      {{ currentTime }}
    </div>
    <div class="grid mt-[10%] mb-[15%] lg:grid-cols-2 lg:gap-20">
      <div class="text-[80px]">
        <p>Maël</p>
        <p class="-mt-6">Grosjean</p>
      </div>
      <div class="text-base self-end lg:mt-[40%]">
        <p>Want to know more or have a</p>
        <p class="-mt-2 -mb-2">project in mind ?</p>
        <a href="mailto:mael.gsn01@gmail.com" class="underline">Let's Connect</a>
      </div>
    </div>
    <div class="text-end">
      <span>EN</span>
      <div class="mt-[100%]">
        <p class="text-start origin-right rotate-[-90deg]">FOLLOW THE CONTENT</p>
        <nav>
          <ul>
            <li>
              <a href="">instagram</a>
            </li>
            <li>
              <a href="">behance</a>
            </li>
            <li>
              <a href="">linkedIn</a>
            </li>
            <li>
              <a href="">twitter</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <div class="p-5 pl-[22%] font-semibold">
    <a href="">DOWNLOAD MY RESUME</a>
  </div>
</template>