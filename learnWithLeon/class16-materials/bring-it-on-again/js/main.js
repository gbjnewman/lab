// *Variables*
// Declare a variable, assign it a value, and alert the value
let v = 3
alert(v)
// Create a variable, divide it by 10, and console log the value
let v2 =4
console.log(v2 = v2 /10)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function m3a(n1,n2,n3) {
  alert(n1*n2*n3)
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function na2s2(n1,n2,n3,n4) {
  console.log(n1+n2-n3-n4)
}
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function addSubDiv(n1,n2,n3) {
  if ((100+n1-n2)/n3>25) {
    console.log("WE HAVE A WINNER");
  }
}
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function (n) {
  for (let i =1;i<=n;i = i +3) {
    console.log(i);
  }
}
