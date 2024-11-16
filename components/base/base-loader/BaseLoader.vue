<template>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="flex w-full items-center justify-center">
            <div
                class="animate-loaderMain before:animate-loaderInternal after:animate-loaderExternal after:border-10 relative mb-15 aspect-[1] w-[50px] rounded-[50%] border-8 border-transparent border-r-gold-400 before:absolute before:-inset-10 before:rounded-[50%] before:border-8 before:border-inherit after:absolute after:-inset-6 after:rounded-[50%] after:border-8 after:border-inherit"></div>
        </div>
        <AtomHeading level="1" class="text-center mt-20">
            Loading...
        </AtomHeading>
    </div>
</template>

<script setup lang="ts">
import AtomHeading from "~/components/atom/atom-heading/AtomHeading.vue";
</script>
