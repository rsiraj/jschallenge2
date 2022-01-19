// VERY EASY: Write a function named min that takes two arguments and returns their minimum.

function min(a,b) {
    if (a>b) {
        return b;
    }
    else {
        return a;
    }
}


// EASY: Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."

let students = [["Emmanuel","Harold","Martin"],["Massey","Nucamendi","Lazore"],["19","21","20"]];
console.log(`Hello my name is ${students [0][1]} ${students [1][1]}. I am ${students [2][1]} years old!`);

// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).
function mediumFunction() {
    let selectedNumber = Number(prompt(`Enter a number from 1-12:`));
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    if (selectedNumber < 1 || selectedNumber > 12) {
        console.log(`Please enter a number from 1-12:`);
    }
    else {
        for (let i=0; i <= selectedNumber; i++) {
            switch (selectedNumber) {
                case i:
                    selectedNumber = months[i-1]
                break;
            }
            console.log(`You chose the month of ${selectedNumber}`);
        }
    }
}

/* HARD: Given the information below for Tom and Jerry. 

Tom - height:  9in   mass: 8 g
Jerry - height: 10in mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:

    BMI = mass / height ^2 = mass / (height * height)

Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false). */

let tomHeight = 9;
let tomMass = 8;
let jerryHeight = 10;
let jerryMass = 45;

function bmi (height, mass) {
    return (mass/(height * height));
}

if (bmi(tomHeight, tomMass) > bmi(jerryHeight, jerryMass)){
    let higherBMI = true;
    console.log(`Is Tom's BMI higher than Jerry's? ${higherBMI}`)
}
else {
    let higherBMI = false;
    console.log(`Is Tom's BMI higher than Jerry's? ${higherBMI}`)
}