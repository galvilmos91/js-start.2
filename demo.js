const form = document.querySelector('#user-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email'); 
const roleInput = document.querySelector('#role');
const message = document.querySelector('.message');
const userList = document.querySelector('#user-form');

form.addEventListener('submit', onSubmit);

function onSubmit(ev) {
    ev.preventDefault();

const li = document.createElement('li');
li.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value}`));

userList.appendChild(li);
}