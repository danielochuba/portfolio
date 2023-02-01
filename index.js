const enableModal = document.querySelector('#menu');
const body = document.querySelector('body');
const extBtn = document.getElementById('exit-btn');
const modal = document.querySelector('#modal');
const modalLinks = document.querySelectorAll('.modal-nav-link');
const disableModal = document.getElementsByClassName('modal');

enableModal.addEventListener('click',() => {
 
    modal.classList.remove('display-none');
    body.classList.add('none-scroll');
       
});