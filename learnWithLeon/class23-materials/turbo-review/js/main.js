// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sent = "this is a sentance";
/*if (sent[sent.length-1]=="?") {
  alert("is question");
}*/
alert(sent.endsWith('?')?"is a question":"not a question");


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let mult_words="yo, there is devs. like jr. devs and snr devs";
console.log(mult_words.replaceAll("jr. dev", "software engineer"));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps() {
  let rando = Math.floor(Math.random() * 3);
  if (rando ==1) {
    return "rock";
  } else if (rando == 2) {
    return "paper";
  } else {
    return "scissors"
  }
}
//console.log(rps())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function play_rps(playerChoice) {
  const choices = [
    "rock",
    "paper",
    "scissors"
  ]
  if (choices.includes(playerChoice)===false) {
    console.log("Not a valid choice");
  }
  let botChoise = rps();
  if (playerChoice === botChoise) {
    console.log("draw");
  } else if ( (playerChoice === "rock" && botChoise === "scissors") ||
    (playerChoice === "scissors" && botChoise === "paper") ||
    (playerChoice === "paper" && botChoise === "rock") ) {
    console.log("you win");
  } else {
    console.log("you lose");
  }
}
//play_rps("rock");

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playMany(choiceArray) {
  for (let i=0; i<choiceArray.length;i++) {
    play_rps(choiceArray[i]);
  }
}
const chArr = ['rock', 'paper', 'scissors','rock', 'paper', 'scissors','rock', 'paper', 'scissors']
playMany(chArr);
