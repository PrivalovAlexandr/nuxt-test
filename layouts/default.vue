<template>
    <div class="min-h-screen w-full bg-space bg-contain bg-repeat-round text-white font-futura">
        <AppHeader />
        <div class="py-40 container w-full">
            <slot/>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppHeader from "~/components/particles/app-header/AppHeader.vue";
</script>

<style>
body {
    background-color: black;
}
</style>
