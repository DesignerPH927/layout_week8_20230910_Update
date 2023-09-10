
const ham = document.querySelector('.ham')
const navMenu = document.querySelector('.navMenu')
const registerMenu = document.querySelector('.registerMenu')
ham.addEventListener('click', () => {
  ham.classList.toggle('close')
  navMenu.classList.toggle('showMobileMenu')
  registerMenu.classList.toggle('showMobileMenu')
})