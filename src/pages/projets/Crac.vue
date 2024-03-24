<script setup lang="ts">
import { pb, ProjectCrac } from '@/backend';
import { shuffle } from '@/animation'

import icon_Photoshop from '@/components/icons/icon_Photoshop.vue';
import icon_Illustrator from '@/components/icons/icon_Illustrator.vue';
import icon_Lightroom from '@/components/icons/icon_Lightroom.vue';
import icon_Figma from '@/components/icons/icon_Figma.vue';
import icon_InDesign from '@/components/icons/icon_InDesign.vue';

const props = defineProps<{
    id: string
}>();
const projet = await ProjectCrac(props.id);

const img_hero = projet.image_hero;
const image1_1 = projet.image1_1;
const image1_2 = projet.image1_2;
const image1_3 = projet.image1_3;
const image1_4 = projet.image1_4;
const image1_5 = projet.image1_5;
const image2_1 = projet.image2_1;
const image2_2 = projet.image2_2;
const image2_3 = projet.image2_3;
const image2_4 = projet.image2_4;
const image2_5 = projet.image2_5;
const image2_6 = projet.image2_6;
const image3_1 = projet.image3_1;
const image3_2 = projet.image3_2;
const image3_3 = projet.image3_3;

const urlImg_hero = pb.getFileUrl(projet, img_hero ?? '', { thumb: '400x400' });
const urlImg1_1 = pb.getFileUrl(projet, image1_1 ?? '', { thumb: '400x400' });
const urlImg1_2 = pb.getFileUrl(projet, image1_2 ?? '', { thumb: '400x400' });
const urlImg1_3 = pb.getFileUrl(projet, image1_3 ?? '', { thumb: '400x400' });
const urlImg1_4 = pb.getFileUrl(projet, image1_4 ?? '', { thumb: '400x400' });
const urlImg1_5 = pb.getFileUrl(projet, image1_5 ?? '', { thumb: '400x400' });
const urlImg2_1 = pb.getFileUrl(projet, image2_1 ?? '', { thumb: '400x400' });
const urlImg2_2 = pb.getFileUrl(projet, image2_2 ?? '', { thumb: '400x400' });
const urlImg2_3 = pb.getFileUrl(projet, image2_3 ?? '', { thumb: '400x400' });
const urlImg2_4 = pb.getFileUrl(projet, image2_4 ?? '', { thumb: '400x400' });
const urlImg2_5 = pb.getFileUrl(projet, image2_5 ?? '', { thumb: '400x400' });
const urlImg2_6 = pb.getFileUrl(projet, image2_6 ?? '', { thumb: '400x400' });
const urlImg3_1 = pb.getFileUrl(projet, image3_1 ?? '', { thumb: '400x400' });
const urlImg3_2 = pb.getFileUrl(projet, image3_2 ?? '', { thumb: '400x400' });
const urlImg3_3 = pb.getFileUrl(projet, image3_3 ?? '', { thumb: '400x400' });

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
        document.getElementById(`img--thd${i}`)?.classList.remove('animate-hover');
    }
}
function handleMouseEnterScd(index: number) {
    for (let i = 1; i <= 6; i++) {
        if (i !== index) {
            document.getElementById(`img--scd${i}`)?.classList.add('animate-hover');
        }
    }
}
function handleMouseEnterThd(index: number) {
    for (let i = 1; i <= 3; i++) {
        if (i !== index) {
            document.getElementById(`img--thd${i}`)?.classList.add('animate-hover');
        }
    }
}
// //
</script>
<template>
    <div class="project__page">
        <img class="" :src="urlImg_hero" alt="Image d'illustration principal du projet">
        <div class="px-4 py-5 sm:px-14 sm:py-14">
            <div class="text-center font-bold text-[30px] sm:text-[75px]"
                @mouseenter="shuffle($event.target as HTMLElement)">{{ projet.name }}</div>
            <div class="text-end mt-10 sm:mt-20">
                <div class="">{{ projet.type }}</div>
                <div class="-mt-1">{{ projet.categorie }}</div>
                <div class="-mt-1">{{ projet.date }}</div>
            </div>
            <div class="max-w-[1120px] mt-14 sm:mt-24">{{ projet.description1 }}</div>
            <div class="flex justify-end">
                <div class="text-end max-w-[610px] mt-14 sm:mt-40">{{ projet.description2 }}</div>
            </div>
            <div class="flex mt-14 sm:mt-24 w-[80%] lg:w-[60%]">
                <img id="img1" class="animate--anim opacity-100 z-40" :src="urlImg1_1" alt="Image du projet"
                    @mouseenter="handleMouseEnter(1)" @mouseleave="handleMouseLeave">
                <img id="img2" class="animate--anim opacity-100 z-30 -ml-[92%]" :src="urlImg1_2" alt="Image du projet"
                    @mouseenter="handleMouseEnter(2)" @mouseleave="handleMouseLeave">
                <img id="img3" class="animate--anim opacity-100 z-20 -ml-[92%]" :src="urlImg1_3" alt="Image du projet"
                    @mouseenter="handleMouseEnter(3)" @mouseleave="handleMouseLeave">
                <img id="img4" class="animate--anim opacity-100 z-10 -ml-[92%]" :src="urlImg1_4" alt="Image du projet"
                    @mouseenter="handleMouseEnter(4)" @mouseleave="handleMouseLeave">
                <img id="img5" class="animate--anim opacity-100 -ml-[92%]" :src="urlImg1_5" alt="Image du projet"
                    @mouseenter="handleMouseEnter(5)" @mouseleave="handleMouseLeave">
            </div>
            <div class="flex justify-end">
                <div class="text-end max-w-[1000px] mt-14 sm:mt-40">{{ projet.description3 }}</div>
            </div>
            <div class="flex mt-16 sm:mt-36 w-[80%] lg:w-[58%]">
                <img id="img--scd1" class="animate--anim opacity-100 z-40" :src="urlImg2_1" alt="Image du projet"
                    @mouseenter="handleMouseEnterScd(1)" @mouseleave="handleMouseLeave">
                <img id="img--scd2" class="animate--anim opacity-100 z-30 -ml-[90%]" :src="urlImg2_2"
                    alt="Image du projet" @mouseenter="handleMouseEnterScd(2)" @mouseleave="handleMouseLeave">
                <img id="img--scd3" class="animate--anim opacity-100 z-20 -ml-[90%]" :src="urlImg2_3"
                    alt="Image du projet" @mouseenter="handleMouseEnterScd(3)" @mouseleave="handleMouseLeave">
            </div>
            <div class="flex justify-end">
                <div class="text-end max-w-[800px] mt-14 sm:mt-40">{{ projet.description4 }}</div>
            </div>
            <div class="flex mt-16 sm:mt-36 mb-16 w-[80%] lg:w-[58%]">
                <img id="img--thd1" class="animate--anim opacity-100 z-40" :src="urlImg3_1" alt="Image du projet"
                    @mouseenter="handleMouseEnterThd(1)" @mouseleave="handleMouseLeave">
                <img id="img--thd2" class="animate--anim opacity-100 z-30 -ml-[90%]" :src="urlImg3_2"
                    alt="Image du projet" @mouseenter="handleMouseEnterThd(2)" @mouseleave="handleMouseLeave">
                <img id="img--thd3" class="animate--anim opacity-100 z-20 -ml-[90%]" :src="urlImg3_3"
                    alt="Image du projet" @mouseenter="handleMouseEnterThd(3)" @mouseleave="handleMouseLeave">
            </div>
            <div class="text-center md:mt-32">
                <h2 class="text-lg sm:text-[60px] font-normal">Skills Used</h2>
                <ul class="flex justify-center gap-2 sm:gap-6 w-4/6 max-w-[380px] mx-auto mt-2 sm:mt-10">
                    <li class="max-w-[60px] sm-max-w-[80px]"><icon_Photoshop class="w-full"/></li>
                    <li class="max-w-[60px] sm-max-w-[80px]"><icon_InDesign class="w-full"/></li>
                    <li class="max-w-[60px] sm-max-w-[80px]"><icon_Lightroom class="w-full"/></li>
                    <li class="max-w-[60px] sm-max-w-[80px]"><icon_Illustrator class="w-full"/></li>
                    <li class="max-w-[60px] sm-max-w-[80px]"><icon_Figma class="w-full"/></li>
                </ul>
            </div>
        </div>
    </div>
</template>