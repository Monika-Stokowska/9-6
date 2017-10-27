document.body.button.addEventListener('click', addElementItem, false);
function addElementItem() {
    var navigation = document.getElementById('ul');
    var newElement = document.createElement('li');
    newElement.innerHTML='item 1';
    navigation.appendChild(newElement);
}