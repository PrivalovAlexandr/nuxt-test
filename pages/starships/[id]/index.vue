<template>
    <main>
        <Transition name="fade" mode="out-in">
            <div v-if="!isPageLoaded">
                <BaseLoader />
            </div>
            <div v-else-if="isError">
                <AtomHeading level="1" class="text-center">
                    {{ errorMessage }}
                </AtomHeading>
            </div>
            <div v-else>
                    <NuxtLink to="/" title="main page" class="float-left font-starJedi uppercase flex items-center text-44/100 group/button">
                        <AtomIcon
                            name="chevron-left"
                            class="size-8 group-hover/button:-translate-x-2 group-hover/button:text-gold-400 transition-all duration-300"/>
                        <span class="ml-2 group-hover/button:text-gold-400 transition-all duration-300">Back</span>
                    </NuxtLink>
                <AtomHeading level="1" class="text-center">
                    {{ starship.name }}
                </AtomHeading>
                <div class="mt-10 w-full">
                    <table class="mx-auto">
                        <tbody class="divide-y-2 divide-gold-50">
                        <tr>
                            <td class="py-3">Model</td>
                            <td class="pl-8">{{ starship.model }}</td>
                        </tr>
                        <tr>
                            <td class="py-3">Manufacturer</td>
                            <td class="pl-8">{{ starship.manufacturer }}</td>
                        </tr>
                        <tr>
                            <td class="py-3">Length</td>
                            <td class="pl-8" v-html="formatNumber(starship.length) + ' m'"></td>
                        </tr>
                        <tr>
                            <td class="py-3">Hyperdrive rating</td>
                            <td class="pl-8">{{ starship.hyperdrive_rating }}</td>
                        </tr>
                        <tr>
                            <td class="py-3">MGLT</td>
                            <td class="pl-8">{{ starship.MGLT }}</td>
                        </tr>
                        <tr>
                            <td class="py-3">Cargo capacity</td>
                            <td class="pl-8" v-html="formatNumber(starship.cargo_capacity)"></td>
                        </tr>
                        </tbody>
                        <caption hidden>starship specifications</caption>
                    </table>
                </div>
            </div>
        </Transition>
    </main>
</template>

<script setup lang="ts">
import {formatNumber} from "~/utils/formatNumber";
import AtomIcon from "~/components/atom/atom-icon/AtomIcon.vue";
import type {RouteLocation} from "#vue-router";
import Starship from "~/services/starship";
import type {IStarship} from "~/types/items";
import AtomHeading from "~/components/atom/atom-heading/AtomHeading.vue";
import BaseLoader from "~/components/base/base-loader/BaseLoader.vue";

const route: RouteLocation = useRoute()

const isPageLoaded: Ref<boolean> = ref(false)
const starship: Ref<IStarship> = ref()

const isError: Ref<boolean> = ref(false)
const errorMessage: Ref<string> = ref('')

getPageData()

async function getPageData() {
    const { data, error } = await Starship.getById(Number(route.params.id))
    
    if (data.value) {
        starship.value = data.value
        
        setTimeout(() => isPageLoaded.value = true, 250)
    } else if (error.value) {
        isError.value = true
        errorMessage.value = 'Starship ' + error.value.data.detail
        setTimeout(() => isPageLoaded.value = true, 250)
    }
}
</script>
