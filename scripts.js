const inputField = document.getElementById('input-item')
const listItems = document.getElementById('todo-list')

function addItem() {
    if (inputField.value === '') {
        alert('Please add something to the list')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputField.value;
        listItems.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '&#10006;';
        li.appendChild(span);
    }
    saveData();
    inputField.value = '';
}

listItems.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI'){
        saveData();
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', listItems.innerHTML);
}
function getData() {
    listItems.innerHTML = localStorage.getItem('data');
}
getData();