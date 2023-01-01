const open = document.querySelector('.open')
const close = document.querySelector('.close')
const nav = document.querySelector('.ul')

const main = document.querySelector('body')
main.addEventListener('click', (e) => {
  if (e.target !== open && e.target !== close) {
    nav.style.opacity = '0'
    close.style.display = 'none'
    open.style.display = 'block'
  }
})

open.addEventListener('click', () => {
  open.style.display = 'none'
  close.style.display = 'block'
  nav.style.width = '50%'
  nav.style.opacity = '1'
})

close.addEventListener('click', (e) => {
  e.target.style.display = 'none'
  open.style.display = 'block'
  nav.style.width = '1%'
  nav.style.opacity = '0'
})
