
let miP = document.createElement('p')

miP.innerText= "'Voy en medio!'"
let position = document.querySelectorAll('div')

document.body.insertBefore(miP, position[1])

console.log(position[0])