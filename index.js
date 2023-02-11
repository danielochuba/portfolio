const enableModal = document.querySelector('#menu');
const body = document.querySelector('body');
const extBtn = document.getElementById('exit-btn');
const modal = document.querySelector('#modal');
const element = document.getElementById('modal-nav');

enableModal.addEventListener('click', () => {
  modal.classList.remove('display-none');
  body.classList.add('none-scroll');
});

extBtn.addEventListener('click', () => {
  modal.classList.add('display-none');
  body.classList.remove('none-scroll');
});

element.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-nav-link')) {
    modal.classList.add('display-none');
    body.classList.remove('none-scroll');
  }
});


// ERROR MESSAGES //
const hasUpperCase = (str) => /[A-Z]/.test(str);
const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a correct email address format';
const EMAIL_INVALID_UPPERCASE = 'Please enter email address in lower case';

// FUNCTIONS TO HANDLE INITIAL VALIDATON //
function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('.field > small');
  msg.innerText = message;

  input.className = type ? 'success' : 'error';
  return type;
}
function showError(input, message) {
  return showMessage(input, message, false);
}
function showSuccess(input) {
  return showMessage(input, '', true);
}
function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

// FUNCTIONS TO HANDLE EMAIL VALIDATION //
function validateEmail(emailInput, requiredMsg, invalidMsg) {
  if (!hasValue(emailInput, requiredMsg)) {
    return false;
  }

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = emailInput.value.trim();
  if (!emailRegex.test(email)) {
    return showError(emailInput, invalidMsg);
  }
  return true;
}

// FUNCTION TO HANDLE FEEDBACK VALIDATION //
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (hasUpperCase(form.elements['email-input'].value.trim())) {
    showError(form.elements['email-input'], EMAIL_INVALID_UPPERCASE);
  } else {
    const nameValid = hasValue(form.elements['name-input'], NAME_REQUIRED);
    const emailValid = validateEmail(form.elements['email-input'], EMAIL_REQUIRED, EMAIL_INVALID);

    if (nameValid && emailValid) {
      form.submit();
      window.localStorage.setItem('data', JSON.stringify({ name: '', email: '', textArea: '' }));
    }
  }
});

// PRESERVE DATA IN BROWSER //

const emailInput = document.getElementById('email-input');
const nameInput = document.getElementById('name-input');
const areaInput = document.getElementById('more-text');

const localObject = { name: '', email: '', textArea: '' };

emailInput.addEventListener('change', (event) => {
  const emailValue = event.target.value.trim();
  localObject.email = emailValue;
  const previous = JSON.parse(localStorage.getItem('data'));
  localObject.name = previous?.name || '';
  localObject.textArea = previous?.textArea || '';
  localStorage.setItem('data', JSON.stringify(localObject));
});

nameInput.addEventListener('change', (event) => {
  const nameValue = event.target.value.trim();
  localObject.name = nameValue;
  const previous = JSON.parse(localStorage.getItem('data'));
  localObject.email = previous?.email || '';
  localObject.textArea = previous?.textArea || '';
  localStorage.setItem('data', JSON.stringify(localObject));
});

areaInput.addEventListener('change', (event) => {
  const areaValue = event.target.value.trim();
  localObject.textArea = areaValue;
  const previous = JSON.parse(localStorage.getItem('data'));
  areaInput.value = localObject.textArea;
  localObject.name = previous?.name || '';
  localObject.email = previous?.email || '';
  localStorage.setItem('data', JSON.stringify(localObject));
});

window.addEventListener('load', () => {
  const data = JSON.parse(localStorage.getItem('data'));

  nameInput.value = data?.name || '';
  emailInput.value = data?.email || '';
  areaInput.value = data?.textArea || '';
  areaInput.value = localObject.textArea;
});

