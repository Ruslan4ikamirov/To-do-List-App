const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addButton = document.querySelector('button');

addButton.addEventListener('click', () => {
    if (inputBox.value !== '') {
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        listContainer.appendChild(li);
        saveData();
    }
    inputBox.value = '';
});

listContainer.addEventListener('click', (element) => {
    if (element.target.tagName === 'SPAN') {
        element.target.parentElement.remove();
        saveData();
    }
    if (element.target.tagName === 'LI') {
        element.target.classList.toggle('checked');
        saveData();
    }
});

showTask();

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

console.log(listContainer.textContent);
