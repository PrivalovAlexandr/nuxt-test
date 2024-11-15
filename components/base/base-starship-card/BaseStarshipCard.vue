<template>
    <NuxtLink :title="starship.name" :to="starshipPage" class="block">
        <article class="relative px-8 py-6 border-2 shadow-card hover:shadow-cardHover border-gold-50 w-full rounded-8 transition-all duration-300">
            <AtomHeading level="2">{{ starship.name }}</AtomHeading>
            <div class="mt-10">
                <table>
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
                            <td class="py-3">Cargo capacity</td>
                            <td class="pl-8" v-html="formatNumber(starship.cargo_capacity)"></td>
                        </tr>
                    </tbody>
                    <caption hidden>starship specifications</caption>
                </table>
            </div>
            <span class="font-starJedi text-44/100 my-3 text-right block w-full" v-html="price"></span>
        </article>
    </NuxtLink>
</template>

<script setup lang="ts">
import type {IStarship} from "~/types/items";
import AtomHeading from "~/components/atom/atom-heading/AtomHeading.vue";
import {formatNumber} from "~/utils/formatNumber";

const props = defineProps({
    starship: {
        type: Object as PropType<IStarship>,
        required: true,
    }
})

const starshipPage: ComputedRef<string> = computed(() => {
    const urlBySlash = props.starship.url.split('/')
    const starshipID = urlBySlash[urlBySlash.length - 2]
    
    return `/starships/${starshipID}`
})

const price: ComputedRef<string> = computed(() => {
    return props.starship.cost_in_credits === 'unknown' ? '???' : formatNumber(props.starship.cost_in_credits) + ' ᖬ'
})
</script>
