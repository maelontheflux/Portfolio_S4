<script setup lang="ts">

</script>

<template>
    <div class="smooth-scroll bg-main-black text-secondary-white p-6 sm:p-20">
        <div class="font-medium md:text-center text-base sm:text-[40px]">
            <h1>Let’s connect and creating together !</h1>
            <p class="mt-2 md:mt-5 sm:mb-4">Contact me and tell me about your project</p>
        </div>

        <form class="grid justify-center sm:text-base max-md:py-10 md:p-10">
            <ul class="">
                <label for="ydata">Your Data</label>
                <div id="ydata" class="grid gap-5 sm:grid-cols-2 sm:gap-20 mt-2 sm:mt-4">
                    <li class="grid">
                        <input id="name" name="name" type="text" class="input__contact" placeholder="Name*" required>
                    </li>
                    <li class="grid">
                        <input id="email" name="email" type="text" class="input__contact" placeholder="Email*" required>
                    </li>
                </div>
                <li class="grid">
                    <label for="type" class="mb-4 sm:mb-5 mt-8 sm:mt-12">Your are interested in</label>
                    <ul id="type" class="flex flex-wrap gap-4 sm:gap-10">
                        <li class="list__input">
                            <input type="checkbox" id="interest1" name="interest" value="option1" class="input__contact--checkbox">
                            <label for="interest1" class="label__contact">UX/UI Design</label>
                        </li>
                        <li class="list__input">
                            <input type="checkbox" id="interest2" name="interest" value="option2" class="input__contact--checkbox">
                            <label for="interest2" class="label__contact">Brand Identities</label>
                        </li>
                        <li class="list__input">
                            <input type="checkbox" id="interest3" name="interest" value="option3" class="input__contact--checkbox">
                            <label for="interest3" class="label__contact">Website creation</label>
                        </li>
                        <li class="list__input">
                            <input type="checkbox" id="interest4" name="interest" value="option4" class="input__contact--checkbox">
                            <label for="interest4" class="label__contact">Album Cover</label>
                        </li>
                        <li class="list__input">
                            <input type="checkbox" id="interest5" name="interest" value="option5" class="input__contact--checkbox">
                            <label for="interest5" class="label__contact">Youtube/Twitch Thumbnail</label>
                        </li>
                    </ul>
                </li>
                <li class="grid">
                    <label for="project" class="mb-2 sm:mb-4 mt-8 sm:mt-12">Your project is</label>
                    <input id="project" name="project" type="text" class="input__contact" placeholder="Project details" required>
                </li>
            </ul>
            <button type="submit" class="md:max-w-[20%] mx-auto mt-10 sm:mt-14">Submit Message</button>
        </form>
    </div>
</template>