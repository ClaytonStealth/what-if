const prompt = require('prompt-sync')({sigint: true});
let earthWeight = Number(prompt("What is your Earth Weight? "));
let venusWeight = (earthWeight * 0.78)
let marsWeight = (earthWeight * 0.39)
let jupiterWeight = (earthWeight * 2.65)
let saturnWeight = (earthWeight * 1.17)
let uranusWeight = (earthWeight * 1.05)
let neptuneWeight = (earthWeight * 1.23)
let planet = (prompt("What planet do you want to know your calculated weight for? "));
if (planet === "venus") {  
    console.log("Your Earth Weight calculated on this planets gravity is: " + venusWeight);
} else if (planet === "mars") {
    console.log("Your Earth Weight calculated on this planets gravity is: " + marsWeight)
} else if (planet === "jupiter") {
    console.log("Your Earth Weight calculated on this planets gravity is: " + jupiterWeight)
} else if (planet === "saturn") {
    console.log("Your Earth Weight calculated on this planets gravity is: " + saturnWeight)
}else if (planet === "uranus") {
    console.log("Your Earth Weight calculated on this planets gravity is: " + uranusWeight)
}else if (planet === "neptune") {
    console.log("Your Earth Weight calculated on this planets gravity is: " + neptuneWeight)
}else {
    console.log ("not a planet");
}
