<script setup lang="ts">
import { pb } from '@/backend';
import type { ProjetsResponse } from '@/pocketbase-types';

const props: ProjetsResponse = defineProps<ProjetsResponse>();
const img0 = props.image_hero;
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '400x400' });

const img_loop = props.image_loop;
const urlImg_loop = img_loop && pb.getFileUrl(props, img_loop, { thumb: '400x400' });


</script>

<template>
    <RouterLink :to="'/projets/' + page_name">
        <article class="interactive relative">
            <img :src="urlImg0" :alt="name + 'cover'">
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
    <div class="max-h-[140px] w-full overflow-hidden relative">
        <div class="mask-project" :style="{ backgroundImage: 'url(' + urlImg0 + ')' }">

            <div class="scrollable-content">
                <div v-for="i in 7" class="flex items-center text-xl font-bold">
                    <div>{{ name }}</div>
                    <img :src="urlImg_loop" alt="">
                </div>
            </div>

        </div>
    </div>
    
</template>

<style scoped>
.mask-project {
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-position: center;
    transition: all 0.5s ease-in-out;
}

.mask-project:hover{
    background-color: #141414;
}

.scrollable-content {
    animation: scrollRightToLeft 10s linear infinite;
    display: flex;
    white-space: nowrap;
}

.scrollable-content>* {
    margin-right: 30%;
}

@keyframes scrollRightToLeft {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>