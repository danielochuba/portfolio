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