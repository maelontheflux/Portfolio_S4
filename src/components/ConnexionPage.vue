<script setup lang="ts">
import { ref } from 'vue';
import { pb, currentUser } from '@/backend';

const email = "notes.secret@maelgrosjean.com";
const password = ref("");

const doLogin = async () => {
    try {
        const authData = await pb.collection('users')
            .authWithPassword(email, password.value);

        // after the above you can also access the auth data from the authStore
        // console.log(pb.authStore.isValid);
        // console.log(pb.authStore.token);
        // console.log(pb.authStore.model);
        currentUser.value = pb.authStore.model
    } catch (error) {
        (error as Error).message;
    }
}

// Variable etat du menu
const activeNotes = ref(true)
// Fonction pour ouvrir/fermer le menu
function toggleNotes() {
    activeNotes.value = !activeNotes.value;
    window.history.back();
}

// Variable etat help
const activeHelp = ref(false)
// Fonction pour ouvrir/fermer help
function toggleHelp() {
    activeHelp.value = !activeHelp.value;
}
</script>
<template>
    <div v-scroll-lock="activeNotes">
        <div class="" @click="toggleNotes" tabindex="0">
            <div class="cross-bar__parent sm:right-11">
                <div class="cross-bar"></div>
            </div>
        </div>

        <div class="flex justify-center items-center h-screen -mt-10">
            <form @submit.prevent="doLogin" class="grid">
                <label for="password" class="text-[40px]">Enter password</label>
                <div class="mt-10">
                    <input v-model="password" type="password" name="password" id="password" autocomplete="none"
                        placeholder="Here" required class="w-full input__contact input__note">
                    <div @click="toggleHelp" class="mt-2">
                        <span v-if="!activeHelp">Help ?</span>
                        <span v-else>"4 digits" & "*" on the site</span>
                    </div>
                </div>
                <button @click="doLogin" class="text-center text-base duration-300 mt-10">
                    Decline my identity
                </button>
            </form>
        </div>
    </div>
</template>
