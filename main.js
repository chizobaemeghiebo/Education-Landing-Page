const open = document.querySelector('.open')
const close = document.querySelector('.close')
const nav = document.querySelector('.ul')
open.addEventListener('click', () => {
  open.style.display = 'none'
  close.style.display = 'block'
  nav.style.opacity = '1'
})
close.addEventListener('click', () => {
  close.style.display = 'none'
  open.style.display = 'block'
  nav.style.opacity = '0'
})
