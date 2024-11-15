export const atomIconNameArray = [
    'search',
    'chevron-up',
    'chevron-down',
    'chevron-right',
    'chevron-left',
    'close',
] as const

export type AtomIconType = (typeof atomIconNameArray)[number]
