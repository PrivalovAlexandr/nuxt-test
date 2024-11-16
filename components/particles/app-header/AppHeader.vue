<template>
    <header class="fixed top-5 w-full z-20">
        <div class="container w-full max-w-screen-md items-center flex pl-10 pr-5 py-2 bg-white/10 transition-all duration-500 backdrop-blur-sm rounded-full ">
            <NuxtLink to="/" title="main page" class="hover:scale-110 text-neutral-100 hover:text-gold-400 transition-all duration-300">
                <AtomLogo class="size-16"/>
            </NuxtLink>
            <div class="ml-20 w-full">
                <AtomField icon="search" v-model="searchValue" name="q" :on-icon-click="handleSubmit" button-type="button" icon-position="right" label="Search"/>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import AtomLogo from "~/components/atom/atom-logo/AtomLogo.vue";
import AtomField from "~/components/atom/atom-field/AtomField.vue";
import type {RouteLocation, Router} from "#vue-router";
import {useRoute} from "#app";

const route: RouteLocation = useRoute()
const router: Router = useRouter()
const searchValue: Ref<string> = ref(String(route.query?.q || ''))

function handleSubmit(): void {
    router.replace({
        query: {
            q: searchValue.value,
        },
    })
}
</script>
