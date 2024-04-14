export const formatPrice = (price: number) => {
    const formattedPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    })
    return formattedPrice.format(price);
}