<template>
    <div class="space-y-10 max-w-screen-md mx-auto">
        <BaseStarshipCard
            v-for="starship in starships"
            :key="starship.name"
            :starship="starship"
        />
    </div>
</template>

<script setup lang="ts">
import BaseStarshipCard from "~/components/base/base-starship-card/BaseStarshipCard.vue";
import type {IStarship} from "~/types/items";

defineProps({
    starships: {
        type: Array as PropType<IStarship[]>,
        default: () => []
    }
})
</script>
