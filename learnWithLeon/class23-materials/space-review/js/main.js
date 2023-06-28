//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numArr = [1,2,3,4]
alert(numArr.reduce(function reducer(acc,i){
  return acc +i
},0));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let sqrArr = numArr.map(i => i * i);
console.log(sqrArr);

//Create a function that takes string
//Print the reverse of that string to the console
let str = "rotor";
let rstr = str.split('').reverse().join('');
console.log(rstr);

//Create a function that takes in a string
//Alert if the string is a palindrome or not
alert(str==rstr ? "is palindrone" : "is not palindrome");
