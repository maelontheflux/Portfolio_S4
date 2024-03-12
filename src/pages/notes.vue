<script setup lang="ts">
import { pb } from '@/backend';
import { allNotes } from '@/backend';

const listeNotes = await allNotes();

</script>

<template>
    <div class="p-5 bg-main-black text-secondary-white">
        <div class="md:text-center mt-5 md:mt-28">
            <h1 class="text-lg max-sm:leading-8 sm:text-[58px]">You are in the hideout, stay discreet!</h1>
            <p class="mt-4 text-base max-sm:leading-8 sm:text-[38px]">My projects and personal networks are hidden here!</p>
        </div>

        <div class="grid grid-cols-2 gap-10 sm:gap-20 text-base sm:text-[35px] mt-8 sm:mb-5">
            <ul class="text-end space-y-3 ">
                <li class="notes__social-link"><a href="https://www.instagram.com/kimuraka.art/">Instagram</a></li>
                <li class="notes__social-link"><a href="https://twitter.com/maelonthefluxv1">Twitter</a></li>
                <li class="notes__social-link"><a href="https://soundcloud.com/maelspkcleclan">Soundcloud</a></li>
                <li class="notes__social-link"><a href="https://letterboxd.com/maelontheflux/">Letterbox</a></li>
            </ul>
            <ul class="space-y-3 ">
                <li class="notes__social-link"><a href="https://apps.apple.com/us/app/airbuds-widget/id1638906106">Airbuds</a></li>
                <li class="notes__social-link"><a href="https://open.spotify.com/user/x5k7sx0wzv6x9kiw6a6hei6pj?si=3558477d75ce4c72">Spotify</a></li>
                <li class="notes__social-link"><a href="https://www.youtube.com/channel/UCgbEvwvvGhxDNu-iwyf2jJQ">Youtube</a></li>
                <li class="notes__social-link"><a href="https://www.pinterest.fr/Kimurakaa/">Pinterest</a></li>
            </ul>
        </div>

        <div class="notes__grille">
            <div v-for="uneNote in listeNotes" :v-key="uneNote.id" v-bind="{ ...uneNote }">
                <img :src="pb.getFileUrl(uneNote, uneNote.image)" :alt="uneNote.name + ' notes'">
            </div>
        </div>
    </div>
</template>