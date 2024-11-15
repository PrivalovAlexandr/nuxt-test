<template>
    <component :is="component" class="font-starJedi" :class="fontSizeByLevel">
        <slot/>
    </component>
</template>

<script setup lang="ts">
import type {ConcreteComponent} from "vue";

const props = defineProps({
    level: {
        type: String as PropType<'1' | '2' | '3' | '4' | '5'>,
        required: true,
    }
})

const fontSizeByLevel: ComputedRef<string> = computed(() => {
    switch (props.level) {
        case '1': {
            return "text-44/100"
        }
        case '2': {
            return "text-28/128"
        }
        case '3': {
            return "text-24/132"
        }
        case '4': {
            return "text-20/140"
        }
        case '5': {
            return "text-20/120"
        }
        default: {
            return "text-32/136"
        }
    }
})

const component: ComputedRef<string | ConcreteComponent> = computed(() => {
    return `h${props.level}`
})
</script>
