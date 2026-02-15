const menu = document.querySelector('.mobile-menu');
const burger = document.querySelector('.burger');

if (burger && menu) {
  burger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('active');
    burger.classList.toggle('active');
    burger.setAttribute('aria-expanded', isOpen);
  });
}

const closeBtn = document.getElementById('closeForm');
const openBtn = document.getElementById('openForm');
const formContainer = document.getElementById('form-section');

function openForm() {
  if (formContainer) {
    formContainer.classList.replace('form_isHidden', 'form_isActive');
    formContainer.setAttribute('aria-hidden', 'false');
    const firstInput = formContainer.querySelector('input:not([type="hidden"]), textarea, [tabindex]:not([tabindex="-1"])');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  }
}
function closeForm() {
  if (formContainer) {
    formContainer.classList.replace('form_isActive', 'form_isHidden');
    formContainer.setAttribute('aria-hidden', 'true');
  }
}

if (openBtn) openBtn.addEventListener('click', openForm);
if (closeBtn) closeBtn.addEventListener('click', closeForm);

const navOpenForm = document.getElementById('navOpenForm');
const navOpenFormDesktop = document.getElementById('navOpenFormDesktop');
if (navOpenForm) navOpenForm.addEventListener('click', (e) => { e.preventDefault(); if (menu) menu.classList.remove('active'); if (burger) burger.classList.remove('active'); openForm(); });
if (navOpenFormDesktop) navOpenFormDesktop.addEventListener('click', (e) => { e.preventDefault(); openForm(); });

const footerOpenForm = document.getElementById('footerOpenForm');
if (footerOpenForm) footerOpenForm.addEventListener('click', openForm);

if (window.location.hash === '#form-section' && formContainer) {
  openForm();
}
