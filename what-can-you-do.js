const prompt = require('prompt-sync')({sigint: true});

let num1 = Number(prompt("What is your age? "));

if (num1 < 16) {  
    console.log("You can't Drive");
} else if (num1 <= 17) {
    console.log("You can drive but not vote")
} else if (num1 <= 24) {
    console.log("You can vote but not rent a car")
} else {
    console.log ("You can pretty much do anything");
}