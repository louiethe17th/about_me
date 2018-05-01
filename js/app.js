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
    alert('You got it right! ' + userName);
    console.log('The user got the correct answer. (yes)');
} else {
    //wrong answer
    alert('You are wrong, sorry.');
    console.log('The user got the wrong answer. (no)');

} 
//Ask the second question
var answer2 = prompt('Do you think I like beer?').toLowerCase();

//user guesses yes or no
if (answer2 === 'yes' || answer2 === 'y') {
    //right answer
    alert('Well obviously...');
    console.log('The user got the correct answer. (yes)');
} else {
    //wrong answer
    alert('What kind of person do you think I am?! You are wrong');
    console.log('The user got the wrong answer. (no)');
}

//Ask the third question
var answer3 = prompt('Do I like spaghetti?').toLowerCase();

//User guesses yes or no
if (answer3 === 'yes' || answer3 === 'y') {
    //right answer
    alert('Ew, gross, heck no.');
    console.log('The user got the wrong answer. (yes)');
} else {
    //wrong answer
    alert('DING DING DING! One of the few people on earth.');
    console.log('The user got the correct answer. (no)');
}

//ask the fourth question
var answer4 = prompt('Can I ride a unicycle?').toLowerCase();

if (answer4 === 'yes' || answer4 === 'y') {
    //right answer
    alert('Heck yes I can. All the cool kids are doin it, trust me.');
    console.log('The user got the correct answer. (yes)');
} else {
    //wrong answer
    alert('wrong. Do I look like a pleb to you, ' + userName + '?');
    console.log('The user got the wrong answer. (no)');
}

//Ask the 5th question
var answer5 = prompt('Am I an Absinthe connoisseur?').toLowerCase();

if (answer5 === 'yes' || answer5 === 'y') {
    //right answer
    alert('Yup, Im fancy AF.');
    console.log('The user got the correct answer. (yes)');
} else {
    //wrong answer
    alert('sorry, wrongggggggg');
    console.log('The user got the wrong answer. (no)');
}

