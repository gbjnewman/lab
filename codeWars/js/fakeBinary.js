/*
https://www.codewars.com/kata/57eae65a4321032ce000002d
DESCRIPTION:
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x){
  let str = ''
  x.split('').forEach(element => {
    if (element < 5) {
      str  = str + '0'
    } else {
      str = str + '1'
    }
  })
  return str
}
