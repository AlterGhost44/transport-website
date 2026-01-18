const menu = document.querySelector('.mobile-menu');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
});

const closeBtn = document.getElementById('closeForm');
const openBtn = document.getElementById('openForm');
const formContainer = document.getElementById('form-section');

openBtn.addEventListener('click', () => {formContainer.classList.replace('form_isHidden', 'form_isActive');});
closeBtn.addEventListener('click', () => {formContainer.classList.replace('form_isActive', 'form_isHidden');});
