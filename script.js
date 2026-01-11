const menu = document.querySelector('.mobile-menu');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
});
