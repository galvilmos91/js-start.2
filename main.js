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
button.addEventListener('mousedown', eventRunner);
button.addEventListener('dblclick', eventRunner); 
button.addEventListener('click', eventRunner); 

function eventRunner(ev) {
    ev.preventDefault();
    console.log('ESEMÉNY: ${ev.type}');
}

button.addEventListener('mouseover', (ev) => {
    //console.log(ev.target);
    ev.target.style.background = 'green';
    ev.target.style.color = 'white';

});

button.addEventListener('mouseout', (ev) => {
    //console.log(ev.target);
    ev.target.style.background = 'red';
    ev.target.style.color = 'yellow';

});

/* button.addEventListener('mousemove', (ev) => {
    //console.log(ev.target);
    //console.log('X: ${ev.offsetX} Y: ${ev.offsetY}');
    console.log(ev.offsetX, ev.offsetY);

}); */

button.addEventListener('click', (ev) => {
    document.squerySelector('#user-form').style.background = 'red';
});

//console.log(button);











