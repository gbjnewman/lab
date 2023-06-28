
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', draggend);
function dragStart() {
  this.classList.add('hold');
}
function draggend() {
  //this.className = 'fill';
  this.classList.remove('hold');
}


empties.forEach(e => {
  e.addEventListener('dragover', dragOver);
  e.addEventListener('dragenter', dragEnter);
  e.addEventListener('dragleave', dragLeave);
  e.addEventListener('drop', dragDrop);
});
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
  console.log('drap enter');
}
function dragLeave() {
  this.classList.remove('hovered');
}
function dragDrop() {
  console.log('dropped');
  this.classList.remove('hovered');
  this.append(fill);
}
