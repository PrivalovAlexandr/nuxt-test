<template>
    <main>
        <Transition name="fade" mode="out-in">
            <div v-if="!isPageLoaded">
                <BaseLoader />
            </div>
            <div v-else-if="!starships.length">
                <AtomHeading level="1" class="text-center">
                    Starships not found
                </AtomHeading>
            </div>
            <div class="space-y-14" v-else>
                <AtomHeading level="1" class="text-center">Starships in StarWars university</AtomHeading>
                <StarshipsList :starships="starships"/>
                <BasePagination class="mx-auto" :count="count" v-model="currentPage"/>
            </div>
        </Transition>
    </main>
</template>

<script setup lang="ts">
import AtomHeading from "~/components/atom/atom-heading/AtomHeading.vue";
import StarshipsList from "~/components/composite/starships-list/StarshipsList.vue";
import Starship from "~/services/starship";
import BasePagination from "~/components/base/base-pagination/BasePagination.vue";
import {useRoute} from "#app";
import type {IStarship} from "~/types/items";
import BaseLoader from "~/components/base/base-loader/BaseLoader.vue";

const route = useRoute();

const count: Ref<number> = ref(0)
const currentPage: Ref<number> = ref(Number(route.query.page) || 1)
const starships: Ref<IStarship[]> = ref([])
const isPageLoaded: Ref<boolean> = ref(false)

getPageData()

watch([currentPage, () => route.query.q], updatePageData, {
    immediate: true,
})

function updatePageData(): void {
    setTimeout(() => {
        isPageLoaded.value = false;
        getPageData();
    })
}

async function getPageData(): void {
    const query: string = String(route.query.q || '')
    const { data } = await Starship.getAll(currentPage.value, query);
    
    if (data.value) {
        count.value = data.value.count
        starships.value = data.value.results
        
        setTimeout(() => isPageLoaded.value = true, 250)
    }
}
</script>
