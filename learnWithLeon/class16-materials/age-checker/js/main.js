//Create a conditonal that checks their age
let age = 14
//If under 16, tell them they can not drive
if (age < 16) {
  alert("You can not drive");
//If under 18, tell them they can't hate from outside the club, because they can't even get in
} else if (age < 18) {
  alert("You can't hate from outside the club, because you can't even git in");
//If under 21, tell them they can not drink
} else if (age < 21) {
  alert("You can not drink");
//If under 25, tell them they can not rent cars affordably
} else if (age < 25) {
  alert("You can not rent cars affordably");
//If under 30, tell them they can not rent fancy cars affordably
} else if (age < 30) {
  alert("You can not rent fancy cars affordably");
//If under over 30, tell them there is nothing left to look forward too
} else if (age < 30 || age > 30) {
  alert("There is 100 devs to look forward to")
}


//--- Harder
//On click of the h1
//let h1clicked = document.querySelector('h1').addEventListener('click')
//Take the value from the input
//if (h1clicked == true) {
//  inputVal = document.querySelector('#danceDanceRevolution').value
//Place the result of the conditional in the paragraph
//  document.querySelector('p').innerText =+ inputVal
//}

