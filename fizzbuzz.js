const prompt = require('prompt-sync')({sigint: true});

let num1 = Number(prompt("Pick a number lets hope it works: "));
if(num1%3 == 0){
    console.log("fizz")
} if(num1%5 == 0){
    console.log("buzz")
} if(num1%15 == 0){
    console.log("fizzbuzz")
}