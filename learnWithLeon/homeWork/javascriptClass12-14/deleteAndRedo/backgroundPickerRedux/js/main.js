document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('yellow').onclick = partyYellow

function partyPurple() {

  document.querySelector('body').style.backgroundColor = 'pink'
}

function partyGreen() {

  document.querySelector('body').style.backgroundColor = 'green'
}

function partyBlue() {

  document.querySelector('body').style.backgroundColor = 'blue'
}

function partyYellow() {

  document.querySelector('body').style.backgroundColor = 'yellow'
}
