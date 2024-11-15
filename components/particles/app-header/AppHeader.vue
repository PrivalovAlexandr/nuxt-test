<template>
    <header class="fixed top-5 w-full z-20">
        <div class="container w-full max-w-screen-md items-center flex pl-10 pr-5 py-2 bg-white/10 transition-all duration-500 backdrop-blur-sm rounded-full ">
            <NuxtLink to="/" title="main page" class="hover:scale-110 text-neutral-100 hover:text-gold-400 transition-all duration-300">
                <AtomLogo class="size-16"/>
            </NuxtLink>
            <form action="/" autocomplete="off" class="ml-20 w-full">
                <AtomField icon="search" name="q" icon-position="right" button-type="submit" label="Search"/>
            </form>
        </div>
    </header>
</template>

<script setup lang="ts">

import AtomLogo from "~/components/atom/atom-logo/AtomLogo.vue";
import AtomField from "~/components/atom/atom-field/AtomField.vue";
</script>
