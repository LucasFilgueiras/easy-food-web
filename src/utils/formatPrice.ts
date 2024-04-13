export const formatPrice = (price: number) => {
    const formattedPrice = "R$" + price?.toString() + ",00";
    return formattedPrice;
}