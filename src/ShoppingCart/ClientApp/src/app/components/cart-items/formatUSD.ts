export function formatUSD(value: number, decimalPlaces?: number) {

    const fractionDigits = decimalPlaces || 0;

    return value.toLocaleString("en-US", {
        style: "currency", 
        currency: "USD",
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
    })
}