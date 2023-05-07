// Translate border-left-width to borderLeftWidth

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// Examples
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
/*
function camelize(str) {
  //let rett = ""
  //splitted = str.split("-")
  str.split("-").forEach((element,index) => index == 0 ? rett = element : rett += (element[0].toUpperCase()+element.substring(1)))
  return rett
}
console.log(camelize("background-color-one-two-seven"))
*/

//-------------------------------------------------------
// Filter range
/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:
*/

/*
function filterRange(arr, a, b) {
  //arr.forEach(element => (element < a || element > b) ? console.log(element+` less then ${a} or greater than ${b}`) : console.log(element+` inbetween ${a} and ${b}`))
  //let newArr = arr.map(element => (element < a || element > b) ? element : null )
  let newArr = []
  arr.forEach((element) => (element < a || element > b) ? null : newArr.push(element) )
  return newArr
}
console.log(filterRange([5,7,8,6,43,2],6,20))
*/
/*
function filterRange(arr, a, b) {
  let newArr = arr.filter(element => element >= a && element <= b)
  return newArr
}
console.log(filterRange([5,7,8,6,43,2],6,20))
*/
//-------------------------------------------------------
// Filter range "in place"

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and 
// removes from it all values except those that are between a and b. The test
// is: a ≤ arr[i] ≤ b.

//The function should only modify the array. It should not return anything.
/*
let arr = [5,3,8,1];

function filterRangeInPlace(arr, a, b) {
  newArr = arr.filter(element => element>=a && element<=b)
  arr.splice(0,arr.length,newArr)
}

filterRangeInPlace(arr, 1, 4)
alert(arr);
*/
//-------------------------------------------------------
// Sort in decreasing order
/*
let arr = [5, 2, 1, -10, 8];

decOrder = arr.sort().reverse()
console.log(decOrder)
*/
//-------------------------------------------------------
// Copy and sort array
/*
We have an array of strings arr. We’d like to have a sorted copy of it, but 
//keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.
*/
