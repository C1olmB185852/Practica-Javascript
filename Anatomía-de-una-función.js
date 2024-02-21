function calculateDiscountedPrice (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const originalPrice = 100 
const discountPercentage = 15
const finalPRICE = calculateDiscountedPrice(originalPrice, discountPercentage)

console.log('Original price $' + originalPrice);
console.log('Discount: ' + discountPercentage + '%');
console.log('Price With discount: $' + finalPRICE);