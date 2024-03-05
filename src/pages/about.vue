<script setup lang="ts">
import Arrow from '@/components/icons/icon_arrow.vue'

</script>

<template>
    <div>
        <p>Hello, my name is <span>Maël</span> Grosjean, student designer
            based in Montbéliard and Le Locle.
            I create brand identities, design websites.
        </p>
    </div>
    <div>
        <p>In addition to being a <strong>design fan</strong>, I enjoy taking simple <strong>photos</strong> and <strong>videos</strong>, but most of all I like listening to <strong>music</strong> and I'm particularly interested in <strong>album covers</strong>.</p>
    </div>
    <div class="flex">
        <p>What's keeping you?</p>
        <Arrow />
        <RouterLink to="/contact" class="underline">CONTACT ME</RouterLink>
    </div>
</template>