<script setup lang="ts">
import ProjetHome from '@/components/ProjetHome.vue';
import { allProject } from '@/backend';

const projects = await allProject();
</script>

<template>
  <div class="cover__parent">
    <div class="cover__rectangle"></div>
    <div class="cover__mask">
      <ul class="cover__wrapper--hover">
        <li class="cover__hover"><div class="bg-main-black w-full h-full"></div></li>
        <li class="cover__hover"><div class="bg-main-black w-full h-full"></div></li>
        <li class="cover__hover"><div class="bg-main-black w-full h-full"></div></li>
      </ul>
      <img src="/img/GLASS_COLOR_PLANT_OFF.png" alt="">
    </div>
  </div>

  <section id="projets">
    <ProjetHome v-for="project in projects" v-bind="{ ...project }" />
  </section>
</template>

<style scoped>
.cover__mask {
  display: flex;
  justify-content: center;
  mask-image: url('/img/UX_BRAND_GRAPHIC.png');
  mask-size: 100%;
  mask-repeat: no-repeat;
}
.cover__parent {
  position: relative;
  contain: content;
  background-image: url('/img/GLASS_COLOR_PLANT_OFF.png');
  max-width: 100%;
  background-size: cover;
}
.cover__rectangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 71%;
  background-color: #edeae6;
}
.cover__wrapper--hover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: grid;
  grid-template-columns: 2fr 3fr 4fr;
  padding: 25% 4% 16% 4%;
}
.cover__hover {
  max-height: 100%;
  max-width: 100%;
  z-index: 2;
  opacity: 0;
  transition-duration: 500ms;
}
.cover__hover:hover {
  opacity: 1;
}
</style>