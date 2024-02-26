<script setup lang="ts">


</script>

<template>

  <div class="parent">
    <div class="rectangle"></div>
    <div class="mask">
      <img src="/Group_15420.png" alt="">
    </div>
  </div>

</template>

<style scoped>
  .mask {
    mask-image: url('/test.png');
    mask-size: 100%;
    mask-repeat: no-repeat;
  }
  .parent {
    position: relative;
    contain: content;
    background-image: url('/Group_15420.png');
    max-width: 100%;
  }
  .rectangle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background-color: #fff;
  }
</style>