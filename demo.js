const form = document.querySelector('#user-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email'); 
const roleInput = document.querySelector('#role');
const message = document.querySelector('.message');
const userList = document.querySelector('#user-form');

form.addEventListener('submit', onSubmit);

function onSubmit(ev) {
    ev.preventDefault();

    if (nameInput.value === '') {
        
        message.classList.add('error');
        message.innerHTML = 'Helytelen felhasználónév! Süss egy csokis sütit!';
        setTimeout(() => {
            message.classList.remove('error');
            message.innerHTML = '';
        } , 3000);
        
        }

    else if(emailInput.value === '' || !emailInput.value.includes('@')){
        message.classList.add('error');
        message.innerHTML = 'Hibás email';
        setTimeout(() => {
            message.classList.remove('error');
            message.innerHTML = '';
        } , 3000);
    }

    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value} ${roleInput.value}`));

        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = ''; 
       
    }
}
/* function clearError() {
    setTimeout(() => {
            message.classList.remove('error');
            message.innerHTML = '';
            }, 3000)
} */

    /* if(nameInput.value === '') {
    alert('üres név mező');
    }
    else if(emailInput.value === '' || !emailInput.value.includes('@')) 
        
    alert('hibás email cím');
    
{    message.classList.add('error');
     message.innerHTML = 'Hibás adatok';
     }

    else {
        const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value}`));

    userList.appendChild(li);

    nameInput.value = '';
    emailInput.value = ''; 
    }; */