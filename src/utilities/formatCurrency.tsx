const CurrencyFormat = new Intl.NumberFormat(undefined, {
    currency: "USD", style: "currency"
})

export function formatCurrency(number: number) {
    return CurrencyFormat.format(number)
}