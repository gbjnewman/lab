
/* Description:
https://www.codewars.com/kata/57f780909f7e8e3183000078
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */




// My function

function grow(x) {
  var output = 1;
  for (var i = 0; i < x.length; i++) {
    output = output * x[i];
  }
  return output
}
//redux
function grow(x){
  return x.reduce((acc, cVal) => acc * cVal,1)
}

/* My node test case
console.log(grow([1, 2, 3]))
*/




// top solutions from codewars
/* 
 
 const grow=x=> x.reduce((a,b) => a*b);

*/
