"use strict";
function divisible(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("Divisible by both 3 and 5");
    }
    else if (num % 3 == 0) {
        console.log("Divisible by 3");
    }
    else if (num % 5 == 0) {
        console.log("Divisible by 5");
    }
    else {
        console.log("Not divisible by either 3 or 5");
    }
}
divisible(45);
