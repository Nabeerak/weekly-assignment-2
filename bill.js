"use strict";
// Write a program that takes the number of units consumed by a user 
//if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
//Where the tax amount will be calculated by the amount of bill.
function bill(consumed_units) {
    let percent = 0;
    if (consumed_units > 500) {
        percent = 25;
    }
    else if (consumed_units > 200) {
        percent = 15;
    }
    else if (consumed_units > 100) {
        percent = 10;
    }
    const amount = (percent / 100) * consumed_units;
    return consumed_units + amount;
}
console.log(`Electricity bill for 300 units: $${bill(100)}`);
