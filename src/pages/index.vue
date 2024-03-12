<script setup lang="ts">
import ProjetHome from '@/components/ProjetHome.vue';
import { allProject } from '@/backend';

const projects = await allProject();
</script>

<template>
  <div class="cover__parent">
    <div class="cover__rectangle"></div>
    <div class="cover__mask">
      <img src="/img/GLASS_COLOR_PLANT_OFF.png" alt="">
    </div>
  </div>

  <section id="projets">
    <ProjetHome v-for="project in projects" v-bind="{ ...project }"/>
  </section>
</template>