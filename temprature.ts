// - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
const celsius: number = 34
const fahrenheit: number = 45


function celsius_to_fahrenheit(celsius:number):number{
    return (celsius * 9/5) + 32;
}

function fahrenheit_to_celsius(fahrenheit:number):number {
    return (fahrenheit - 32) * 5/9;
}


console.log(`celsius:${celsius} to fahrenheit: ${celsius_to_fahrenheit(celsius)}`)
console.log(`fahrenheit:${fahrenheit} to celsius: ${fahrenheit_to_celsius(fahrenheit)}`)
