"use strict";
// - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
const celsius = 34;
const fahrenheit = 45;
function celsius_to_fahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function fahrenheit_to_celsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(`celsius:${celsius} to fahrenheit: ${celsius_to_fahrenheit(celsius)}`);
console.log(`fahrenheit:${fahrenheit} to celsius: ${fahrenheit_to_celsius(fahrenheit)}`);
