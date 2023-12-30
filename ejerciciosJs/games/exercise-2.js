let posiciones = document.querySelectorAll(".b-square");
let puntuaciondiv = document.querySelector(`[data-function*="score"]`);
let tiempoDiv = document.querySelector(`[data-function*="time-left"]`);
const diggletimg = document.createElement("img");
diggletimg.setAttribute("src", "./public/exercise-2/mole.png");
diggletimg.setAttribute("class", "diggletimg");
let puntuacionStart = 0;

const sumarpunto = () => {
  puntuaciondiv.textContent = puntuacionStart++;
};
diggletimg.addEventListener("click", sumarpunto);

const moveDigglet = () => {
  let numero = Math.floor(Math.random() * posiciones.length);
  posiciones[numero].appendChild(diggletimg);
};

const crono = () => {
  tiempo = tiempoDiv.innerText - 1;
  tiempoDiv.innerText = tiempo;
  console.log(tiempo);
  if (tiempo == 0) {
    tiempoDiv.innerText = 30;

    alert(puntuaciondiv.innerText);
  }
};

setInterval(moveDigglet, 700);
setInterval(crono, 1000);

console.log(tiempoDiv.innerText);
