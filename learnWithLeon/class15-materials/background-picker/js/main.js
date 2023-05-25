document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('yellow').onclick = partyYellow
document.getElementById('white').onclick = partyWhite
function partyWhite() {
  document.querySelector('body').style.backgroundColor = 'rgba(255,255,255,1)'
}

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
}

function partyYellow() {
  document.querySelector('body').style.backgroundColor = 'rgba(255,255,0,1)'
}