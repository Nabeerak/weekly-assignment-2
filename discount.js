"use strict";
// Write a program that calculates the discount for a product based on its price. 
//If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
function calculate_discount(price) {
    if (price > 100) {
        var discount = (price * 0.1);
        console.log(`u have got 10% discount, the price is now ${discount} dollars off`);
    }
    else {
        var discount = (price * 0.05);
        console.log(`u have got 5% discount, the price is now ${discount} dollars off`);
    }
}
calculate_discount(100);
