"use strict";
//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
function week_day(days) {
    const weeks = Math.floor(days / 7);
    const remaining_day = days % 7;
    console.log(`${weeks} weeks and ${remaining_day} days`);
}
week_day(34);
