'use strict';

// Ask for the users name
var userName = prompt("What is your name?");
var correctAnswers = 0;
var incorrectAnswers = 0;

// Greet the user by name in an alert
alert('Hello, ' + userName + ', its nice to meet you.');

// Log that to the console
console.log('The user said their name is ' + userName);

// Creating variables for first question
var questionOne = ('Do you think I have any siblings?')
var answer1 = prompt(questionOne).toLowerCase();

// User guesses "yes/no" or "Y/N"
// tell user if they are wrong or right

// Function for first question in guessing game
function firstQuestion() {
    if (answer1 === 'yes' || answer1 === 'y') {
        //right answer
        alert('You got it right! ' + userName);
        console.log('Q: ' + questionOne +  ' The user got the correct answer. (yes)');
        correctAnswers ++;
    } else {
        //wrong answer
        alert('You are wrong, sorry.');
        console.log('Q: ' + questionOne + ' The user got the wrong answer. (no)');
        incorrectAnswers ++;
    } 
}

// Asks first question
firstQuestion();

// Creating variables for second question
var attempts = 1;
var chances = 4;
var questionTwo = ('How many siblings do you think I have? You have 4 chances');

// Create function for second question
function secondQuestion() {

    while( answer2 !== '7' && chances > 0 ) {
        var answer2 = prompt(questionTwo).toLowerCase();
        // var attempts = 1;
    
        //user guesses yes or no
        if (chances <= 0 ) {
            alert('Sorry, youre out of chances. the Answer was 7.');
        }
        if (answer2 === '7' ) {
            //right answer
            //attempts ++;
            alert('Yup! I am one of 8, ' + userName + '. And it only took you ' + attempts + ' guess!');
            console.log('Q: ' + questionTwo +  ' The user got the correct answer. (7)');
            correctAnswers ++;
        } else if (answer2 < 7 ) {
            //wrong answer
            chances --;
            alert('Nope. its more than that. You have ' + chances + ' chances left.');
            console.log('Q: ' + questionTwo + ' The user got the wrong answer. ' + answer2);
            attempts ++;
            incorrectAnswers ++;
        } else  if(answer2 > 7) {
            chances --;
            alert('Nope, less than that. You have ' + chances + ' chances left.');
            console.log('Q: ' + questionTwo + ' The user got the wrong answer. ' + answer2);
            attempts ++;
            incorrectAnswers ++;
        }  //if (chances <= 0 ) {
           // alert('Sorry, youre out of chances. the Answer was 7.');
        //}
            
    }
}

// Asks second question
secondQuestion();

// Create variables for question 3
var questionThree = ('Do I like spaghetti?')
var answer3 = prompt(questionThree).toLowerCase();

function thirdQuestion(){
    //User guesses yes or no
    if (answer3 === 'yes' || answer3 === 'y') {
        //right answer
        alert('Ew, gross, heck no.');
        console.log('Q: ' + questionThree + ' The user got the wrong answer. (yes)');
        incorrectAnswers ++;
    } else {
        //wrong answer
        alert('DING DING DING! One of the few people on earth.');
        console.log('Q: ' + questionThree +  ' The user got the correct answer. (no)');
        correctAnswers ++;
    }
}

// Asks third question
thirdQuestion();

// Create variables for fourth question
var questionFour = ('Can I ride a unicycle?');
var answer4 = prompt(questionFour).toLowerCase();

function fourthQuestion(){
    if (answer4 === 'yes' || answer4 === 'y') {
        //right answer
        alert('Heck yes I can. All the cool kids are doin it, trust me.');
        console.log('Q: ' + questionFour +  ' The user got the correct answer. (yes)');
        correctAnswers ++;
    } else {
        //wrong answer
        alert('wrong. Do I look like a pleb to you, ' + userName + '?');
        console.log('Q: ' + questionFour + ' The user got the wrong answer. (no)');
        incorrectAnswers ++;
    }
}

// Asks fourth question
fourthQuestion();

// Creating variables for fifth question
var questionFive = ('Am I an Absinthe connoisseur?')
var answer5 = prompt(questionFive).toLowerCase();

function fifthQuestion(){
    if (answer5 === 'yes' || answer5 === 'y') {
        //right answer
        alert('Yup, Im fancy AF.');
        console.log('Q: ' + questionFive +  ' The user got the correct answer. (yes)');
        correctAnswers ++;
    } else {
        //wrong answer
        alert('sorry, wrongggggggg');
        console.log('Q: ' + questionFive + ' The user got the wrong answer. (no)');
        incorrectAnswers ++;
    }
}

fifthQuestion();

var userInput = false
var carTries = 6;

function sixthQuestion(){
    while (userInput = true && carTries > 0 ){
      var questionSix = prompt('What is one of my favorite brands of cars?').toLowerCase();
        var cars = ['volkswagen', 'land rover', 'volvo', 'jaguar', 'porsche' ];
        
        for(var i = 0; i < cars.length; i++){
            if (questionSix === cars[i]) {
                console.log('Q: ' + questionSix +  ' The user got the correct answer. (yes)');
                userInput = false;
                carTries = 0;
                alert('You got it. Im really into cars from europe.')
    
                
            } else if (userInput = true && carTries > 6){
                console.log('Q: ' + questionSeven + ' The user got the wrong answer. (no)');
                alert('Nope, dont like those.');
    
            }
            
        }
        carTries--;
    }
}

sixthQuestion();

var questionSeven = ('Do I like beer?')
var answer7 = prompt(questionSeven).toLowerCase();

function seventhQuestion(){
    if (answer7 === 'yes' || answer5 === 'y') {
        //right answer
        alert('Yup, Im fancy AF.');
        console.log('Q: ' + questionSeven +  ' The user got the correct answer. (yes)');
        correctAnswers ++;
    } else {
        //wrong answer
        alert('sorry, wrongggggggg');
        console.log('Q: ' + questionSeven + ' The user got the wrong answer. (no)');
        incorrectAnswers ++;
    }
}

seventhQuestion();

alert(' Did you have fun answering questuons about me? I hope so! You got ' + correctAnswers + ' right and ' + incorrectAnswers + ' wrong!');

