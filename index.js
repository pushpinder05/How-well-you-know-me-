var readlineSync = require('readline-sync');

var score = 0;

//Welcome user
var userName = readlineSync.question("What's your name? ");
console.log("\nWelcome " + userName + "! to How well do you know me Quiz!\n" + "Hope you will not disappoint me.\n")

//high scorers data
function highScorers() {
  console.log("\n1. Nikhil ---> score: 4");
  console.log("\n2. Rajat ---> score: 3")
}

//Function for comparing user's answer 
function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("Correct!")
        score++;
    } else {
        console.log("Wrong answer!")
    }
      console.log("Your score is: " + score);
      console.log("---------------------------------------------------------\n");
}

//questions
var questionOne = {
  question : "Where do I live?\n",
  answer : "Delhi"
}

var questionTwo = {
  question : "What is my favorite drink?\n",
  answer : "cold coffee"
}

var questionThree = {
  question : "Did I ever go to summer camp?\n",
  answer : "No"
}

var questionFour = {
  question : "What is my favorite series?\n",
  answer : "gotham"
}

var questionFive = {
  question : "Am I an Android or iPhone person?\n",
  answer : "android"
}

var questionSix = {
  question : "What is my favorite food?\n",
  answer : "cholle bhature"
}


//array of questions
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];


//loop for uninterrupted game
for( var i=0; i<questions.length ; i++) {
  if(score === 2) {
    console.log("YAY!!! You have reached LEVEL 1.\n" + "\n---------------------------------------------------------\n");
  }
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
}

console.log("We are out of Questions.\n" + "\nYour final score is : " + score + "\n\nIf your score is higher than below high scorers, then please send a screenshot to pushpinder.singh@duneshift.com and it will be updated.")

highScorers();
