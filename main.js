//


const form = document.getElementById('user-form');
const h1 = document.getElementsByTagName('h1');
const classname = document.getElementsByClassName('item');

document.querySelector('h1');
//console.log(document.querySelector('h1')); 

const ul = document.querySelector('.items');

ul.remove();

//ul.firstElementChild.remove();

/* ul.lastElementChild.textContent = 'Megváltozott';

ul.children[1].innerHTML = '<h1>hello</h1>'; */

const button = document.querySelector('#user-form input.button');

button.style.background = 'green';  
button.style.color = 'biege';  

const newDiv = document.createElement('div');

newDiv.className = 'newDivClass';
newDiv.classList.add('newDivClass2');
newDiv.classList.remove('newDivClass2');
newDiv.id = 'newDivId';
newDiv.setAttribute('title', 'New Div Title');

const ndText = document.createTextNode('Hello Világ');
newDiv.appendChild(ndText);

const container = document.querySelector('body .container');
container.insertBefore(newDiv, form);

newDiv.style.color = '#ff0';

newDiv.remove();

// EVENTS

button.addEventListener('mouseup', eventRunner);

function eventRunner(ev) {
    console.log('ESEMÉNY: ${ev.type}');
}


console.log(container);











