var add = document.getElementById('addElem');
add.addEventListener('click', addElementItem, false);
function addElementItem() {
    var list = document.getElementById('list');
    var liElements = document.getElementsByTagName('li');
    var liLength = liElements.length;
    var newElement = document.createElement('li');
    newElement.innerHTML='item ' + liLength;
    list.appendChild(newElement);
} 