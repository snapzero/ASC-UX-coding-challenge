const signin = document.querySelector('#signin');
const success = document.querySelector('#success');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input')
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
const links = document.querySelector('a');

/*************************************************************
Setup validation checks
*************************************************************/ 

function inputChecker() {
  // Loop through inputs to set up event listeners
  for(let input of inputs) {
    // Check validity on submit
    input.addEventListener('invalid', () => {
      input.parentNode.classList.add('error');
    }, false);
    
    // Check validity onblur
    input.addEventListener('blur', () => {
      if (input.checkValidity()) input.parentNode.classList.remove('error');
    })
  }
}

inputChecker();

/*************************************************************
Set up additional event listeners
*************************************************************/ 

// password toggle
togglePassword.addEventListener('click', (event) => togglePasswordHandler(event));
togglePassword.addEventListener('keydown', (event) => togglePasswordHandler(event));

// checkbox toggle
// checkbox.addEventListener('keydown', (event) => toggleCheckboxHandler(event));

// prevent form submit and fake successful login
form.addEventListener('submit', (event) => {
  event.preventDefault();
  window.location.assign('../ASC-UX-coding-challenge/signed-in.html')
});

// prevent default link behavior
links.addEventListener('click', (event) => {
  event.preventDefault();
});

/*************************************************************
Keyboard spacebar accessibilty password toggle
*************************************************************/

function checkEvent(event) {
  // in this case use space bar for toggle
  const targetKeyCode = event.keyCode === 32;
  const hasKeyCode = event.keyCode && targetKeyCode
  const isClickEvent = event.type === 'click'
  // return boolean based on event
  return isClickEvent || hasKeyCode  
}

function togglePasswordHandler(event) {
  if (checkEvent(event)) {
    // toggle the type attribute to show value
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the icon
    event.target.classList.toggle('toggled');
  }
}