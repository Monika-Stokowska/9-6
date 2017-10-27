document.body.button.addEventListener('click', addElementItem, false);
function addElementItem() {
    var list = document.getElementById('list');
    var add = document.getElementById('button');
    var newElement = document.createElement('li');
    newElement.innerHTML='item';
    list.appendChild(newElement);
} 