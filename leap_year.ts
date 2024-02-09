//Write a program that checks if the given year is leap year or not.

let year: number = 2024;

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){

    console.log("it's a leap year")
}else{
    console.log("not a leap year")
}


