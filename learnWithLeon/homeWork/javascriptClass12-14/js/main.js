// // Carousel
// 
// function carousel() {
//   let rotations = 1;
//   while (rotations <= 10) {
//     console.log("while loopsi " + rotations);
//     rotations++;
//   }
// }
// carousel()
// 
// function carFor() {
//   let p = prompt("How many loops?");
//   for (let i = 1;i<=p;i++) {
//     console.log("for loop " + i);
//     }
// }
// carFor()
// 
// // Parity
// function parity(){
// let prmpt = prompt("how many numbers to check if odd or even?")
// for (let i = 1; i <= prmpt; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }
// }
// parity()
// 
// // Input validation
// 
// function inptVal() {
//   let num = 555;
//   while (num < 50 || num > 100) {
//     num = prompt("Pick a number");
//   }
// }
// inptVal()
// 
// // Multiplication table
// 
// function mltiTable() {
//   let num = null
//   while (num < 2 || num >9) {
//     num = prompt("Choose a number to get multiplication table.");
//   }
//   for (let i = 1;i<=12;i++) {
//     console.log(i * num);
// 
//   }
// 
// }
// mltiTable()
// 
// // Neither yes nor no
// 
// 
// function yesNo() {
//  let exit = false 
//  while (exit == false) {
//    inpt = prompt("enter a word");
//    console.log(inpt)
//    if (inpt == "yes" || inpt == "no") {
//      exit = true;
//    }
//  }
// 
// }
// yesNo()

// FizzBuzz

function fizzBuzz() {
  for (let i = 1;i<=100;i++) {
    if (i%3 == 0 && i%5 == 0) {
      console.log("fizzbuzz");
    } else if (i%3 == 0){
      console.log("fizz");
    } else if (i%5 == 0) {
      console.log("buzz")
    } else {
      console.log(i)
    }
  }

}
fizzBuzz()
