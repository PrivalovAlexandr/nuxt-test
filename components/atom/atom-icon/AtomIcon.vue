<template>
    <svg
        aria-hidden="true"
        width="24"
        height="24">
        <use :xlink:href="`/assets/svg/icon.svg#${name}`"></use>
    </svg>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import {atomIconNameArray, type AtomIconType} from "./atom-icon.types";


defineProps({
    name: {
        type: String as PropType<AtomIconType>,
        required: true,
        validator: (value: AtomIconType) => {
            return atomIconNameArray.includes(value)
        },
    },
})
</script>
