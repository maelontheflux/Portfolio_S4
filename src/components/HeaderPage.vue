<script setup lang="ts">
import { currentTime } from '@/backend'

</script>

<template>
  <div class="flex justify-between">
    <div>Maël Grosjean</div>
    <div>{{ currentTime }}</div>
    <div class="menu__nav-toggle" onclick="document.body.classList.toggle('menu-open')" tabindex="0">
      <div class="menu__nav-toggle-bar"></div>
    </div>
  </div>
</template>
