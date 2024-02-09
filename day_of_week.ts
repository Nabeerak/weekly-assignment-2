//Develop a program that determines the day of the week.
// Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.

function day_of_week(day: number){
    if (day === 1) {
        return "Monday";
    } else if (day === 2) {
        return "Tuesday";
    } else if (day === 3) {
        return "Wednesday";
    } else if (day === 4) {
        return "Thursday";
    } else if (day === 5) {
        return "Friday";
    } else if (day === 6) {
        return "Saturda";
    } else if (day === 7) {
        return "Sunday";
    } else {
        return "Invalid entry";
    }
}
console.log("the day of the week is:",day_of_week(3))
