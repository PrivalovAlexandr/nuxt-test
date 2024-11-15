import type { PropType } from 'vue'

const ButtonTypesAsConst = [
    'submit',
    'reset',
    'button',
] as const

const InputmodeTypesAsConst = [
    'text',
    'numeric',
    'decimal',
    'tel',
    'email',
    'search',
    'url',
    'date',
] as const

const InputTypeTypesAsConst = [
    'text',
    'email',
    'search',
    'tel',
    'url',
    'password',
    'number',
    'date',
] as const

export type ButtonTypes = (typeof ButtonTypesAsConst)[number]
type InputmodeTypes = (typeof InputmodeTypesAsConst)[number]
type InputTypeTypes = (typeof InputTypeTypesAsConst)[number]

export const DefaultInputPropsType = {
    id: {
        type: String as PropType<string>,
        default: null,
    },
    name: {
        type: String as PropType<string>,
        default: null,
    },
    type: {
        type: String as PropType<InputTypeTypes>,
        default: 'text',
    },
    inputmode: {
        type: String as PropType<InputmodeTypes>,
        default: 'text',
    },
    required: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    readonly: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
}
