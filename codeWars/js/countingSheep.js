// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let arrShp = arrayOfSheep;
  let tally = 0
  arrShp.forEach(element => {if (element == true) {tally += 1}});
  return tally
}
