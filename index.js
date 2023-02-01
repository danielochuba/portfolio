const enableModal = document.querySelector('#menu');
const body = document.querySelector('body');
const extBtn = document.getElementById('exit-btn');
const modal = document.querySelector('#modal');
const modalLinks = document.querySelector('.modal-nav-link');

enableModal.addEventListener('click', () => {
  modal.classList.remove('display-none');
  body.classList.add('none-scroll');
});

extBtn.addEventListener('click', () => {
  modal.classList.add('display-none');
  body.classList.remove('none-scroll');
});

for (let i = 0; i < modalLinks.length; i += 1) {
  modalLinks[i].addEventListener('click', () => {
    modal.classList.add('display-none');
    body.classList.remove('none-scroll');
    body.classList.add('scroll');
  });
}
