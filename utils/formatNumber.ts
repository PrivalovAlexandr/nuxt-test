export function formatNumber(number: string | number): string {
    const rawString = String(number).replaceAll(',', '')
    return Number(rawString).toLocaleString('ru-RU').replaceAll(' ', '&nbsp;');
}
