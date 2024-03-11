<script setup lang="ts">
import { pb } from '@/backend';
import type { NotesResponse } from '@/pocketbase-types';
import { allNotes } from '@/backend';

const listeNotes = await allNotes();
const props: NotesResponse = defineProps<NotesResponse>();
const img0 = props.image;
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '400x400' });

</script>

<template>
    <div class="p-5">
        <div class="sm:text-center">
            <h1>You are in the hideout, stay discreet!</h1>
            <p>My projects and personal networks are hidden here !</p>
        </div>

        <div class="flex gap-10 justify-center">
            <ul class="text-end">
                <li><a href="https://www.instagram.com/kimuraka.art/">Instagram</a></li>
                <li><a href="https://twitter.com/maelonthefluxv1">Twitter</a></li>
                <li><a href="https://soundcloud.com/maelspkcleclan">Soundcloud</a></li>
                <li><a href="https://letterboxd.com/maelontheflux/">Letterbox</a></li>
            </ul>
            <ul>
                <li><a href="https://apps.apple.com/us/app/airbuds-widget/id1638906106">Airbuds</a></li>
                <li><a href="https://open.spotify.com/user/x5k7sx0wzv6x9kiw6a6hei6pj?si=3558477d75ce4c72">Spotify</a></li>
                <li><a href="https://www.youtube.com/channel/UCgbEvwvvGhxDNu-iwyf2jJQ">Youtube</a></li>
                <li><a href="https://www.pinterest.fr/Kimurakaa/">Pinterest</a></li>
            </ul>
        </div>

        <div v-for="uneNotes in listeNotes" v-bind="{ ...uneNotes }">
            <img :src="urlImg0" alt="Image notes">
        </div>
    </div>
</template>