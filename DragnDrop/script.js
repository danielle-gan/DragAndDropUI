
let draggedBlock;

function dragStart(event) {
  draggedBlock = event.target;
  event.dataTransfer.setData('text/plain', null);
}

function allowDrop(event) {
  event.preventDefault();
  if (!event.target.classList.contains('drag-over')) {
    event.target.classList.add('drag-over');
  }
}

function removeDragOver(event) {
  event.target.classList.remove('drag-over');
}

function drop(event) {
  event.preventDefault();
  event.target.classList.remove('drag-over');
  if (event.target.classList.contains('lane')) {
    event.target.appendChild(draggedBlock);
  } else if (event.target.classList.contains('card')) {
    event.target.parentNode.insertBefore(draggedBlock, event.target);
  }
}