<script setup lang="ts">
import Arrow from '@/components/icons/icon_arrow.vue'
import { shuffle } from '@/animation';

</script>

<template>
    <div class="bg-main-black text-secondary-white font-medium p-5 pt-8 pb-12 sm:p-20 xl:p-40">
        <div class="max-w-[1400px] text-[25px] max-sm:leading-9 sm:text-[36px] lg:leading-[72px] lg:text-[58px]">
            <p>Hello, my name is <span>Maël</span> Grosjean, student designer based in Montbéliard and Le Locle.</p>
            <p>I create brand identities, design websites.</p>
        </div>
        <div class="max-w-[1400px] text-[18px] sm:text-[22px] lg:text-[38px] mt-5 lg:mt-10">
            <p>In addition to being a <span @mouseenter="shuffle($event.target as HTMLElement)" class="font-bold">design fan</span>, 
                I enjoy taking simple <span @mouseenter="shuffle($event.target as HTMLElement)" class="font-bold">photos</span> and <span @mouseenter="shuffle($event.target as HTMLElement)" class="font-bold">videos</span>, 
                but most of all I like listening to <span @mouseenter="shuffle($event.target as HTMLElement)" class="font-bold">music</span> and I'm particularly interested in album <span @mouseenter="shuffle($event.target as HTMLElement)" class="font-bold">covers</span>.
            </p>
        </div>
        <div class="sm:flex items-center sm:gap-10 text-[18px] sm:text-[22px] lg:text-[38px] mt-10 lg:mt-24">
            <p>What's keeping you?</p>
            <div class="max-sm:mt-1 flex items-center gap-3">
                <Arrow class="mt-2 ml-2 mr-1 sm:mr-4 max-lg:w-5"/>
                <div class="sm:opacity-0 hover:opacity-100 duration-500">
                    <RouterLink to="/contact" class="link--contactme">CONTACT ME</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>