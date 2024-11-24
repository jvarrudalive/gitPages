// codigo do dark mode, não esquecer de oganizar a pasta do JS conforme a construção do codigo
let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let input = document.querySelector('input')
let menu = document.querySelector('menu')
trilho.addEventListener('click', () =>{
  trilho.classList.toggle('dark')
  body.classList.toggle('dark')
  input.classList.toggle('dark')
  menu.classList.toggle('dark')
})

// rotação das cores
let dm = document.querySelector('#dm')
let md = document.querySelector('.md')
dm.addEventListener("click", () =>{
  dm.classList.toggle('rotate')
  dm.style.transition = '.5s'
}) 
