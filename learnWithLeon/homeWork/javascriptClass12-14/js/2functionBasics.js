//****    Function Basics    ****



// -----------------------------------------------------------
// Is "else" required?

// Both will work




// -----------------------------------------------------------
// Rewrite the checkAge function using "?" or "||"
//function checkAge(age) {
//    if (age > 18) {
//      return true;
//    } else {
//      return confirm('Did parents allow you?');
//    }
//}


function checkAge(age) {
  return (age > 18) || confirm("Did parents allow you?")

}

function checkAge2(age) {
  return (age>18) ? true : confirm("Did parents allow you?")

}




// -----------------------------------------------------------
// Function min(a,b)
// Write a function min(a,b) which returns the least of two numbers a and b.


function min(a,b) {
  return (a > b) ? alert(a) : alert(b)

}





/// -----------------------------------------------------------
// function pow(x,n) {
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.



function pow(x,n) {
  let retval = x
  for (i = 1; i < n; i++) {
    retval = retval * x
  }
  return alert(retval)
}
let x = prompt("X val?")
let n = prompt("N val?")
if (x < 1 || n < 1) {
  alert("x or n is less than 1");
}
pow(x,n)
