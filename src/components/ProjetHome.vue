<script setup lang="ts">
import { pb } from '@/backend';
import type { ProjetsResponse } from '@/pocketbase-types';

const props: ProjetsResponse = defineProps<ProjetsResponse>();
const img0 = props.image_hero;
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '400x400' });

const img_loop = props.image_loop;
const urlImg_loop = img_loop && pb.getFileUrl(props, img_loop, { thumb: '400x400' });

const img_banner = props.image_banner;
const urlImg_banner = img_banner && pb.getFileUrl(props, img_banner, { thumb: '400x400' });

</script>

<template>
    <RouterLink :to="'/projets/' + page_name">
        <article class="interactive relative">
            <img class="-mb-1" :src="urlImg0" :alt="name + 'cover'">
            <div
                class="absolute bottom-[5%] left-[4%] uppercase text-sm md:text-[35px] font-bold text-secondary-white mix-blend-difference">
                <div>{{ work_type }}</div>
                <div class="flex -mt-2">
                    <h2>{{ name }}</h2>
                    <span>, {{ type }}</span>
                </div>
            </div>
        </article>
    </RouterLink>
    <div class="mask-project flex flex-col items-center justify-center relative w-full h-full"
        :style="{ backgroundImage: 'url(' + urlImg0 + ')' }">
        <div class="scrollable-content md:min-h-[140px] bg-main-black bg-opacity-30 text-lg md:text-xl uppercase ">
            <div v-for="i in 25" class="flex items-center">
                <h3 aria-hidden>{{ name }}</h3>
                <img :src="urlImg_loop" alt="">
            </div>
        </div>
    </div>

</template>