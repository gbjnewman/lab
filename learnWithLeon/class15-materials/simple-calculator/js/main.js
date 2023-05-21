let total = 0

document.querySelector('#reset').addEventListener('click', reset)
document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#seven').addEventListener('click', seven)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#nine').addEventListener('click', nine)
document.querySelector('#zero').addEventListener('click', zero)


function reset() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function one() {
  total = total + 1
  document.querySelector('#placeToPutResult').innerText = total
}

function two() {
  total = total + 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function three() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerHTML = total
}

function four() {
  total = total + 4
  document.querySelector('#placeToPutResult').innerHTML = total
}
function five() {
  total = total + 5
  document.querySelector('#placeToPutResult').innerHTML = total
}
function six() {
  total = total + 6
  document.querySelector('#placeToPutResult').innerHTML = total
}
function seven() {
  total = total + 7
  document.querySelector('#placeToPutResult').innerHTML = total
}
function eight() {
  total = total + 8
  document.querySelector('#placeToPutResult').innerHTML = total
}
function nine() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}
function zero() {
  total = total + 0
  document.querySelector('#placeToPutResult').innerHTML = total
}
