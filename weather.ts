// Write a program that takes temperature and check it.
// If it is cold then suggest the user to wear warm clothes and so on according to the weather.


function weather(temperature: number){
    if (temperature < 10) {
        console.log("cold");
    } else if (temperature >= 10 && temperature < 20) {
        console.log("cool.");
    } else if (temperature >= 20 && temperature < 30) {
        console.log("warm");
    } else {
        console.log("hot");
    }
}
weather(11)