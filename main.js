var hamburger = document.querySelector('.hamburguer')
var mobileNav = document.querySelector('.mobileOnly')
var botaoFechar = mobileNav.querySelector('.btClose')

hamburger.addEventListener('click', () => {
  mobileNav.style.display = "block"

  setTimeout(() => {
    mobileNav.querySelector('ul').classList.add("mostrar")
  }, 300)
})

botaoFechar.addEventListener('click', () => {

  mobileNav.querySelector('ul').classList.remove("mostrar")

  setTimeout(() => {
    mobileNav.style.display = "none"
  }, 300)

})