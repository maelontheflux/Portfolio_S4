<script setup lang="ts">
import { pb } from '@/backend';
import { shuffle } from '@/animation'

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
        document.getElementById(`img--scd${i}`)?.classList.remove('animate-hover');
    }
}
function handleMouseEnterScd(index: number) {
    for (let i = 1; i <= 6; i++) {
        if (i !== index) {
            document.getElementById(`img--scd${i}`)?.classList.add('animate-hover');
        }
    }
}
// //
</script>
<template>
    <div class="project__page">
        <img :src="urlImg_hero" alt="Image d'illustration principal du projet">
        <div class="px-4 sm:px-14">
            <div class="text-center font-bold sm:mt-14 sm:text-[75px]" @mouseenter="shuffle($event.target)">{{ props.name }}</div>
            <div class="text-end">
                <div class="">{{ props.type }}</div>
                <div class="-mt-1">{{ props.categorie }}</div>
                <div class="-mt-1">{{ props.date }}</div>
            </div>
            <div class="max-w-[1110px]">{{ props.description1 }}</div>
            <div class="text-end">{{ props.description2 }}</div>
            <div class="flex w-[70%] lg:w-[50%]">
                <img id="img1" class="animate--anim opacity-100 z-40 drop-shadow-2xl" :src="urlImg1_1" alt="Image du projet"
                    @mouseenter="handleMouseEnter(1)" @mouseleave="handleMouseLeave">
                <img id="img2" class="animate--anim opacity-100 z-30 -ml-[90%] drop-shadow-2xl" :src="urlImg1_2" alt="Image du projet"
                    @mouseenter="handleMouseEnter(2)" @mouseleave="handleMouseLeave">
                <img id="img3" class="animate--anim opacity-100 z-20 -ml-[90%] drop-shadow-2xl" :src="urlImg1_3" alt="Image du projet"
                    @mouseenter="handleMouseEnter(3)" @mouseleave="handleMouseLeave">
                <img id="img4" class="animate--anim opacity-100 z-10 -ml-[90%] drop-shadow-2xl" :src="urlImg1_4" alt="Image du projet"
                    @mouseenter="handleMouseEnter(4)" @mouseleave="handleMouseLeave">
                <img id="img5" class="animate--anim opacity-100 -ml-[90%] drop-shadow-2xl" :src="urlImg1_5" alt="Image du projet"
                    @mouseenter="handleMouseEnter(5)" @mouseleave="handleMouseLeave">
            </div>
            <div>{{ description3 }}</div>
            <div class="flex w-[60%] lg:w-[40%]">
                <img id="img--scd1" class="animate--anim opacity-100 z-50 drop-shadow-2xl" :src="urlImg2_1" alt="Image du projet"
                    @mouseenter="handleMouseEnterScd(1)" @mouseleave="handleMouseLeave">
                <img id="img--scd2" class="animate--anim opacity-100 z-40 -ml-[88%] drop-shadow-2xl" :src="urlImg2_2" alt="Image du projet"
                    @mouseenter="handleMouseEnterScd(2)" @mouseleave="handleMouseLeave">
                <img id="img--scd3" class="animate--anim opacity-100 z-30 -ml-[88%] drop-shadow-2xl" :src="urlImg2_3" alt="Image du projet"
                    @mouseenter="handleMouseEnterScd(3)" @mouseleave="handleMouseLeave">
                <img id="img--scd4" class="animate--anim opacity-100 z-20 -ml-[88%] drop-shadow-2xl" :src="urlImg2_4" alt="Image du projet"
                    @mouseenter="handleMouseEnterScd(4)" @mouseleave="handleMouseLeave">
                <img id="img--scd5" class="animate--anim opacity-100 z-10 -ml-[88%] drop-shadow-2xl" :src="urlImg2_5" alt="Image du projet"
                    @mouseenter="handleMouseEnterScd(5)" @mouseleave="handleMouseLeave">
                <img id="img--scd6" class="animate--anim opacity-100 -ml-[88%] drop-shadow-2xl" :src="urlImg2_6" alt="Image du projet"
                    @mouseenter="handleMouseEnterScd(6)" @mouseleave="handleMouseLeave">
            </div>
        </div>
    </div>
</template>