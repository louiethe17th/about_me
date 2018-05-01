'use strict';

// Ask for the users name
var userName = prompt("What is your name?");

// Greet the user by name in an alert
alert('Hello, ' + userName + ', its nice to meet you.');

// Log that to the console
console.log('The user said their name is ' + userName);

// Ask the first guessing game question 
var answer1 = prompt('Do you think I have any siblings?').toLowerCase();

// User guesses "yes/no" or "Y/N"
// tell user if they are wrong or right
if (answer1 === 'yes' || answer1 === 'y') {
    //right answer
    alert('You got it right!' + userName);
    console.log('The user got the correct answer. (yes)');
} else {
    //wrong answer
    alert('You are wrong, sorry.');
    console.log('The user got the wrong answer. (no)');

} 


// next question 