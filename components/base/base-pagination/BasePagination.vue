<template>
    <nav
        aria-label="Пагинация"
        class="relative flex items-center justify-center space-x-4">
        <NuxtLink
            :to="getPrevLink"
            :rel="hasPreviousPage ? 'prev' : null"
            :aria-current="null"
            :class="
                hasPreviousPage
                    ? 'hover:text-gold-500'
                    : 'pointer-events-none text-neutral-400'
            "
            class="flex items-center justify-center rounded-10 p-2 transition-all duration-300"
            @click.prevent="onClickPage(currentPageModel - 1)">
            <AtomIcon
                name="chevron-left"
                class="size-7" />
        </NuxtLink>
        <ul class="flex items-center space-x-2">
            <li
                v-for="(page, index) of displayedPages"
                :key="`${page}-${index}`">
                <NuxtLink
                    v-if="typeof page === 'number'"
                    :to="getLink(page)"
                    :aria-current="currentPageModel === page ? true : null"
                    :aria-label="`Страница ${page}`"
                    :class="
                        Number(currentPageModel) === page
                            ? 'before:size-10 before:bg-gold-400'
                            : 'before:bg-gold-400'
                    "
                    class="relative flex select-none items-center justify-center rounded-bl-10 rounded-tr-10 px-4 py-2 transition-all duration-300 before:absolute before:left-1/2 before:top-1/2 before:z-30 before:size-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:opacity-30 before:transition-all before:duration-500 hover:before:size-10"
                    @click.prevent="onClickPage(page)">
                    {{ page }}
                </NuxtLink>
                <span
                    v-else
                    class="pointer-events-none flex items-center justify-center px-4 py-2">
                    {{ page }}
                </span>
            </li>
        </ul>
        <NuxtLink
            :to="getNextLink"
            :rel="hasNextPage ? 'next' : null"
            :aria-current="null"
            :class="
                hasNextPage
                    ? 'hover:text-gold-500'
                    : 'pointer-events-none text-neutral-400'
            "
            class="flex items-center justify-center rounded-10 p-2 transition-all duration-150"
            @click.prevent="onClickPage(currentPageModel + 1)">
            <AtomIcon
                name="chevron-right"
                class="size-7" />
        </NuxtLink>
    </nav>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import AtomIcon from '~/components/atom/atom-icon/AtomIcon.vue'

const route = useRoute()
const PAGE_KEY: string = 'page'

const currentPageModel = defineModel({
    type: Number as PropType<number>,
    required: true,
})

const props = defineProps({
    count: {
        type: Number as PropType<number>,
        required: true,
    },
    /**
     * Максимальное количество отображаемых кнопок (минимальное кол-во 5, только нечетное кол-во)
     */
    max: {
        type: Number as PropType<number>,
        default: 7,
    },
    /**
     * Разделитель, который выводится если кнопок больше props.max
     */
    divider: {
        type: String as PropType<string>,
        default: '...',
    },
})

const PER_PAGE = 10

const totalPages: ComputedRef<number> = computed(() => {
    return Math.floor(props.count / PER_PAGE) + 1
})


const hasPreviousPage: ComputedRef<boolean> = computed(
    () => currentPageModel.value > 1
)
const hasNextPage: ComputedRef<boolean> = computed(
    () => currentPageModel.value < totalPages.value
)

const getPrevLink: ComputedRef<string | undefined> = computed(() => {
    return hasPreviousPage.value
        ? `${urlWithoutPage.value}${PAGE_KEY}=${currentPageModel.value - 1}`
        : undefined
})

const getNextLink: ComputedRef<string | undefined> = computed(() => {
    return hasNextPage.value
        ? `${urlWithoutPage.value}${PAGE_KEY}=${currentPageModel.value + 1}`
        : undefined
})

const urlWithoutPage: ComputedRef<string> = computed(() => {
    let url = route.path
    const queries = route.query
    if (Object.keys(queries)) {
        url += '?'
    }
    Object.keys(queries).forEach((query) => {
        if (query !== PAGE_KEY) {
            url += query + '=' + queries[query] + '&'
        }
    })
    return url
})

const displayedPages: ComputedRef<(string | number)[]> = computed(() => {
    const result: Array<number | string> = []
    // result example [1, '...', 3, '...', 12]

    const absoluteMaxElements: number = Math.max(props.max, 5)
    const maxPaginationElements =
        absoluteMaxElements % 2 === 0
            ? absoluteMaxElements - 1
            : absoluteMaxElements
    const paginationItems = Math.min(
        totalPages.value,
        maxPaginationElements
    )

    const canBeWrapped = totalPages.value > absoluteMaxElements
    const elementsBetweenDividers: number = Math.floor(
        (Math.min(absoluteMaxElements, totalPages.value) - 5) / 2
    )

    const elementsAfter = totalPages.value - currentPageModel.value
    const middleElement = (paginationItems + 1) / 2
    
    if (!canBeWrapped) {
        for (let page = 1; page <= totalPages.value; page++) {
            result.push(page)
        }

        return result
    }

    if (currentPageModel.value <= middleElement) {
        // before middle element

        for (let page = 1; page <= paginationItems - 2; page++) {
            result.push(page)
        }

        result.push(props.divider, totalPages.value)

        return result
    } else if (elementsAfter <= elementsBetweenDividers + 2) {
        // close to right border

        result.push(1, props.divider)
        let elementsLeft = paginationItems - 3

        while (elementsLeft >= 0) {
            result.push(totalPages.value - elementsLeft)
            elementsLeft--
        }

        return result
    } else {
        // on or after middle element

        const totalMiddleElements = elementsBetweenDividers * 2 + 1
        const firstMiddleElement =
            currentPageModel.value - elementsBetweenDividers
        let middleElementsAdded = 0

        result.push(1, props.divider)

        while (middleElementsAdded < totalMiddleElements) {
            result.push(firstMiddleElement + middleElementsAdded)
            middleElementsAdded++
        }

        result.push(props.divider, totalPages.value)
        return result
    }
})

function getLink(page: number): string | undefined {
    return currentPageModel.value !== page
        ? `${urlWithoutPage.value}${PAGE_KEY}=${page}`
        : undefined
}

function onClickPage(page: number | string): void {
    currentPageModel.value = Number(page)

    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
</script>
