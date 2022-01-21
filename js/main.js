const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const password2Input = document.querySelector('#password2');
const emailInput = document.querySelector('#email');
const allInputs = document.querySelectorAll('input')
const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');
const closeBtn = document.querySelector('.close');
const popup = document.querySelector('.popup');


const clearInputs = (e) => {
    e.preventDefault();
    for(let i = 0; i < allInputs.length; i++){
        allInputs[i].value = ''
    }
}


clearBtn.addEventListener('click',clearInputs)


