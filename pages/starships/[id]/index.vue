<template>
    <main>
        <div>
            <NuxtLink to="/" class="font-starJedi uppercase flex items-center text-44/100 group/button">
                <AtomIcon
                    name="chevron-left"
                    class="size-8 group-hover/button:-translate-x-2 group-hover/button:text-gold-400 transition-all duration-300"/>
                <span class="ml-2 group-hover/button:text-gold-400 transition-all duration-300">Back</span>
            </NuxtLink>
        </div>
        <div>
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
    </main>
</template>

<script setup lang="ts">
import {formatNumber} from "~/utils/formatNumber";
import AtomIcon from "~/components/atom/atom-icon/AtomIcon.vue";

const starship = ref({
    "name": "CR90 corvette",
    "model": "CR90 corvette",
    "manufacturer": "Corellian Engineering Corporation",
    "cost_in_credits": "3500000",
    "length": "150",
    "max_atmosphering_speed": "950",
    "crew": "30-165",
    "passengers": "600",
    "cargo_capacity": "3000000",
    "consumables": "1 year",
    "hyperdrive_rating": "2.0",
    "MGLT": "60",
    "starship_class": "corvette",
    "pilots": [],
    "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
    ],
    "created": "2014-12-10T14:20:33.369000Z",
    "edited": "2014-12-20T21:23:49.867000Z",
    "url": "https://swapi.dev/api/starships/2/"
},)
</script>
