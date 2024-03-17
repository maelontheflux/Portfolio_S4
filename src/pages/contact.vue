<script setup lang="ts">
import { ref } from 'vue';
import pocketbase from 'pocketbase';

// Valeurs des champs du formulaire
const name = ref('');
const email = ref('');
const interests = ref([]);
const project = ref('');

// Fonction pour envoyer l'e-mail
async function sendEmail() {
    // Vérifiez si tous les champs requis sont remplis
    if (!name.value || !email.value || !interests.value.length || !project.value) {
        alert('Please fill in all required fields.');
        return;
    }

    try {
        // Envoie des données du formulaire au serveur
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                interests: interests.value,
                project: project.value
            })
        });

        if (response.ok) {
            alert('Your message has been sent successfully!');
        } else {
            throw new Error('Failed to send email');
        }
    } catch (error) {
        console.error('Error sending email:', error);
        // alert('An error occurred while sending your message. Please try again later.');
    }
}

// Fonction pour réinitialiser les champs du formulaire après l'envoi
// function resetForm() {
//   name.value = '';
//   email.value = '';
//   interests.value = [];
//   project.value = '';
// }
</script>

<template>
    <div class="bg-main-black text-secondary-white p-6 sm:p-20">
        <div class="font-medium md:text-center text-base sm:text-[40px]">
            <h1>Let’s connect and creating together !</h1>
            <p class="mt-2 md:mt-5 sm:mb-4">Contact me and tell me about your project</p>
        </div>

        <form onsubmit="sendEmail(); reset()" class="grid justify-center sm:text-base max-md:py-10 md:p-10">
            <ul class="">
                <label for="ydata">Your Data</label>
                <div id="ydata" class="grid gap-5 sm:grid-cols-2 sm:gap-20 mt-2 sm:mt-4">
                    <li class="grid">
                        <input v-model="name" id="name" name="name" type="text" class="input__contact"
                            placeholder="Name*" required>
                    </li>
                    <li class="grid">
                        <input v-model="email" id="email" name="email" type="text" class="input__contact"
                            placeholder="Email*" required>
                    </li>
                </div>
                <li class="grid">
                    <label for="type" class="mb-4 sm:mb-5 mt-8 sm:mt-12">Your are interested in</label>
                    <ul id="type" class="flex flex-wrap gap-4 sm:gap-10">
                        <li class="list__input"
                            v-for="interest in ['UX/UI Design', 'Brand Identities', 'Website creation', 'Album Cover', 'Youtube/Twitch Thumbnail']"
                            :key="interest">
                            <input type="checkbox" :id="interest" v-model="interests" :value="interest"
                                class="input__contact--checkbox">
                            <label :for="interest" class="label__contact">{{ interest }}</label>
                        </li>
                    </ul>
                </li>
                <li class="grid">
                    <label for="project" class="mb-2 sm:mb-4 mt-8 sm:mt-12">Your project is</label>
                    <input v-model="project" id="project" name="project" type="text" class="input__contact"
                        placeholder="Project details" required>
                </li>
            </ul>
            <button type="submit" class="lg:max-w-[20%] mx-auto mt-10 sm:mt-14">Submit Message</button>
        </form>
    </div>
</template>