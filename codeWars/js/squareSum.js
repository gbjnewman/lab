// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
// 
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// 
// For example, for [1, 2, 2] it should return 9 because 1 squared +2 squared +2 squared = 9

// My solution
function squareSum(numbers){
  let summed =0
  for (i=0;i<numbers.length;i++){
    summed = summed + (numbers[i]*numbers[i]);
  }
  return summed
}

