<script setup lang="ts">
import { ref } from 'vue';
import { pb } from '@/backend';
import type { ProjetsResponse } from '@/pocketbase-types';

const props: ProjetsResponse = defineProps<ProjetsResponse>();

const img_hero = props.image_hero;
const image1_1 = props.image1_1;
const image1_2 = props.image1_2;
const image1_3 = props.image1_3;
const image1_4 = props.image1_4;
const image1_5 = props.image1_5;
const image2_1 = props.image2_1;
const image2_2 = props.image2_2;
const image2_3 = props.image2_3;
const image2_4 = props.image2_4;
const image2_5 = props.image2_5;
const image2_6 = props.image2_6;

const urlImg_hero = pb.getFileUrl(props, img_hero, { thumb: '400x400' });
const urlImg1_1 = pb.getFileUrl(props, image1_1, { thumb: '400x400' });
const urlImg1_2 = pb.getFileUrl(props, image1_2, { thumb: '400x400' });
const urlImg1_3 = pb.getFileUrl(props, image1_3, { thumb: '400x400' });
const urlImg1_4 = pb.getFileUrl(props, image1_4, { thumb: '400x400' });
const urlImg1_5 = pb.getFileUrl(props, image1_5, { thumb: '400x400' });
const urlImg2_1 = pb.getFileUrl(props, image2_1, { thumb: '400x400' });
const urlImg2_2 = pb.getFileUrl(props, image2_2, { thumb: '400x400' });
const urlImg2_3 = pb.getFileUrl(props, image2_3, { thumb: '400x400' });
const urlImg2_4 = pb.getFileUrl(props, image2_4, { thumb: '400x400' });
const urlImg2_5 = pb.getFileUrl(props, image2_5, { thumb: '400x400' });
const urlImg2_6 = pb.getFileUrl(props, image2_6, { thumb: '400x400' });

// Gestionnaire d'événements pour le survol
function handleMouseEnter(index: number) {
    for (let i = 1; i <= 6; i++) {
        if (i !== index) {
            document.getElementById(`img${i}`)?.classList.add('animate-hover');
        }
    }
}
function handleMouseLeave() {
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`img${i}`)?.classList.remove('animate-hover');
    }
}
// //
</script>
<template>
    <div class="">
        <img :src="urlImg_hero" alt="">
        <div class="px-14">
            <div class="text-center sm:text-xl">{{ props.name }}</div>
            <div class="text-end">
                <div>{{ props.type }}</div>
                <div>{{ props.categorie }}</div>
                <div>{{ props.date }}</div>
            </div>
            <div>{{ props.description1 }}</div>
            <div class="text-end">{{ props.description2 }}</div>
            <div class="flex">
                <img id="img1" class="animate--anim opacity-100 z-40 shadow-xl" :src="urlImg1_1" alt=""
                    @mouseenter="handleMouseEnter(1)" @mouseleave="handleMouseLeave">
                <img id="img2" class="animate--anim opacity-100 z-30 -ml-[60%] shadow-xl" :src="urlImg1_2" alt=""
                    @mouseenter="handleMouseEnter(2)" @mouseleave="handleMouseLeave">
                <img id="img3" class="animate--anim opacity-100 z-20 -ml-[60%] shadow-xl" :src="urlImg1_3" alt=""
                    @mouseenter="handleMouseEnter(3)" @mouseleave="handleMouseLeave">
                <img id="img4" class="animate--anim opacity-100 z-10 -ml-[60%] shadow-xl" :src="urlImg1_4" alt=""
                    @mouseenter="handleMouseEnter(4)" @mouseleave="handleMouseLeave">
                <img id="img5" class="animate--anim opacity-100 -ml-[50%] shadow-xl" :src="urlImg1_5" alt=""
                    @mouseenter="handleMouseEnter(5)" @mouseleave="handleMouseLeave">
            </div>
            <div>{{ description3 }}</div>
            <div class="flex text-end">
                <img class="z-50 shadow-xl" :src="urlImg2_1" alt="">
                <img class="z-40 shadow-xl" :src="urlImg2_2" alt="">
                <img class="z-30 shadow-xl" :src="urlImg2_3" alt="">
                <img class="z-20 shadow-xl" :src="urlImg2_4" alt="">
                <img class="z-10 shadow-xl" :src="urlImg2_5" alt="">
                <img class="shadow-xl" :src="urlImg2_6" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-hover {
    opacity: 0;
    
}
.animate--anim {
    transition: opacity 1s ease;
}
</style>