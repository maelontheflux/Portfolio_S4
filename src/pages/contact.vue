<script setup lang="ts">

</script>

<template>
    <div class="bg-main-black text-secondary-white p-6 sm:p-20">
        <div class="font-medium md:text-center text-base sm:text-[40px]">
            <h1>Let’s connect and creating together !</h1>
            <p class="mt-2 md:mt-5 sm:mb-4">Contact me and tell me about your project</p>
        </div>

        <form class="grid justify-center sm:text-base max-md:py-10 md:p-10">
            <ul class="">
                <label for="ydata">Your Data</label>
                <div id="ydata" class="grid gap-5 sm:grid-cols-2 sm:gap-20 mt-2 sm:mt-4">
                    <li class="grid">
                        <input name="name" type="text" class="input__contact" placeholder="Name*">
                    </li>
                    <li class="grid">
                        <input name="email" type="text" class="input__contact" placeholder="Email*">
                    </li>
                </div>
                <li class="grid">
                    <label for="type" class="mb-4 sm:mb-5 mt-8 sm:mt-12">Your are interested in</label>
                    <ul id="type" class="flex flex-wrap gap-4 sm:gap-10">
                        <li class="list__input">
                            <input type="checkbox" id="interest1" name="" value="option1" class="input__contact--checkbox">
                            <label for="interest1" class="label__contact">UX/UI Design</label>
                        </li>
                        <li class="list__input">
                            <input type="checkbox" id="interest2" name="" value="option2" class="input__contact--checkbox">
                            <label for="interest2" class="label__contact">Brand Identities</label>
                        </li>
                        <li class="list__input">
                            <input type="checkbox" id="interest3" name="" value="option3" class="input__contact--checkbox">
                            <label for="interest3" class="label__contact">Website creation</label>
                        </li>
                        <li class="list__input">
                            <input type="checkbox" id="interest4" name="" value="option4" class="input__contact--checkbox">
                            <label for="interest4" class="label__contact">Album Cover</label>
                        </li>
                        <li class="list__input">
                            <input type="checkbox" id="interest5" name="" value="option5" class="input__contact--checkbox">
                            <label for="interest5" class="label__contact">Youtube/Twitch Thumbnail</label>
                        </li>
                    </ul>
                </li>
                <li class="grid">
                    <label for="project" class="mb-2 sm:mb-4 mt-8 sm:mt-12">Your project is</label>
                    <input id="project" name="project" type="text" class="input__contact" placeholder="Project details">
                </li>
            </ul>
            <button type="submit" class="md:max-w-[20%] mx-auto mt-10 sm:mt-14">Submit Message</button>
        </form>
    </div>
</template>

<style scoped>
.input__contact {
    background: none;
    color: #edeae6;
    border-bottom: 2px solid #edeae6;
    opacity: 0.6;
    outline: none;
}
.input__contact:focus {
    opacity: 1;
}
.list__input {
    position: relative;
}
.label__contact {
    font-weight: 500;
    cursor: pointer;
}
.list__input input[type="checkbox"] {
    position: absolute;
    opacity: 0;
}
.list__input input[type="checkbox"] + .label__contact::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #edeae6;
    opacity: 0.5;
    margin-top: 2px;
}
.list__input input[type="checkbox"]:checked + .label__contact::after {
    opacity: 1;
}
</style>