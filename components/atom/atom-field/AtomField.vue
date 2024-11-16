<template>
    <label class="block w-full group relative text-white transition-all duration-300">
        <input
            v-model="model"
            ref="input"
            v-bind="$attrs"
            :placeholder="placeholder"
            :type="type"
            :name="name"
            :inputmode="inputmode"
            :required="required"
            :disabled="disabled"
            :readonly="readonly"
            :class="inputPaddingByIcon"
            class="peer h-12 w-full rounded-full shadow-field hover:shadow-fieldHover transition-all border-2 py-2 text-16/128 outline-none duration-300 border-gold-50 placeholder-gold-600 hover:border-gold-400 focus:border-gold-500 bg-transparent" />
        <span
            v-if="label"
            :class="[
                    labelPaddingByIcon,
                    model || model === 0
                        ? 'top-1 text-8/144'
                        : 'top-1/2 -translate-y-1/2 active:top-1 active:translate-y-0 active:text-8/144 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-8/144',
                ]"
            class="absolute select-none transition-all text-gold-50 duration-300">
                {{ label }}
            </span>
        <button
            v-if="icon && animateIcon"
            :type="buttonType"
            :class="[
                hasClickFunction ? 'group-hover:text-gold-300' : 'cursor-text',
                iconPosition === 'left' ? 'left-0 justify-end' : 'right-0',
            ]"
            class="absolute top-1/2 flex text-gold-50 h-12 w-10 -translate-y-1/2 items-center rounded-20 outline-none outline-transparent transition-all duration-300"
            @click="handleIconClick">
            <AtomIcon
                :name="icon"
                class="size-6" />
        </button>
    </label>
</template>

<script setup lang="ts">

import type {AtomIconType} from "~/components/atom/atom-icon/atom-icon.types";
import {type ButtonTypes, DefaultInputPropsType} from "~/components/atom/atom-field/atom-field.types";
import {debounce} from "~/composables/debounce";
import AtomIcon from "~/components/atom/atom-icon/AtomIcon.vue";

const model = defineModel({
    type: [String, Number, null] as PropType<string | number | null>,
    default: null,
})

const props = defineProps({
    ...DefaultInputPropsType,
    label: {
        /*
         * Текст лейбла
         */
        type: String as PropType<string>,
        default: '',
    },
    comment: {
        type: String as PropType<string>,
        default: null,
    },
    iconPosition: {
        type: String as PropType<'left' | 'right'>,
        default: 'left',
    },
    icon: {
        type: String as PropType<AtomIconType>,
        default: null,
    },
    placeholder: {
        type: String as PropType<string>,
        default: '',
    },
    onIconClick: {
        type: [Function, null],
        default: null,
    },
    buttonType: {
        type: String as PropType<ButtonTypes>,
        default: 'button',
    }
})

const animateIcon: Ref<boolean> = ref(true)

const inputPaddingByIcon: ComputedRef<string> = computed(() => {
    if (!props.icon) return 'px-4'
    
    return props.iconPosition === 'left' ? 'pl-12 pr-4' : 'pl-8 pr-12'
})

const labelPaddingByIcon: ComputedRef<string> = computed(() => {
    if (props.icon && props.iconPosition === 'left') {
        return 'left-12'
    } else {
        return 'left-8'
    }
})

const hasClickFunction: ComputedRef<boolean> = computed(() => {
    return props.icon && (!!props.onIconClick || props.buttonType === 'submit')
})

const handleIconClick: void = debounce(() => {
    if (hasClickFunction.value && props.onIconClick) {
        props.onIconClick()
    }
}, 500)
</script>
