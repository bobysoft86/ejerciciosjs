let cardArray = [
  {
    id: 1,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 2,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 3,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 4,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 5,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 6,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
  {
    id: 7,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 8,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 9,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 10,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 11,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 12,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
];

let click1 = 0;
let click2 = 0;
let attemps = 0;
let score = 0;
let contenedorCartas = document.querySelector(".parent");
let intentos = document.querySelector(`[data-function*="attempts"]`);
let puntacion = document.querySelector(`[data-function*="score"]`);
let validaciones = [];

let printImages = () => {
  let parent = document.querySelector(".parent");
  cardArray.forEach((cartas) => {
    let myDiv = document.createElement("div");
    let myImg = document.createElement("img");

    parent.appendChild(myDiv);
    myDiv.appendChild(myImg);
    myDiv.setAttribute("id", cartas.id);
    myDiv.setAttribute("class", cartas.name);

    myDiv.addEventListener("click", function () {
      eventocarta(cartas);
    });

    myImg.setAttribute("src", cartas.img);
  });
};


const resetCache = () => {
  click1 = 0;
  click2 = 0;
};

const checkcarta = (carta) => {
  carta.forEach((imagenes) => {
    let validacion = document.createElement("img");
    validacion.setAttribute("src", "public/exercise-1/tick.svg");
    let img1 = imagenes.querySelector("img");
    imagenes.removeChild(img1);
    imagenes.appendChild(validacion);
    validaciones = [...validaciones, click1.name];
  });
};

let eventocarta = (cardName) => {
  click1 = cardName;

  if (validaciones.includes(click1.name)) {
    resetCache();
    console.log("ya validado");
  } else if (click1.id == click2.id) {
    intentos.textContent = ++attemps
    resetCache();
  } else if (click1.name == click2.name) {
    let validar = document.querySelectorAll(`.${click1.name}`);
    checkcarta(validar);

    intentos.textContent = ++attemps;
    puntacion.textContent = ++score;
    resetCache();
  }
  if (click1.id > 0 && click2.id > 0 && click1.name != click2.name) {
   
    intentos.textContent = ++attemps;
    resetCache();
  }
  console.log(`soy id 1  ${click1.id}`);
  console.log(`soy id 2  ${click2.id}`);
  console.log(validaciones);
  click2 = click1;
};

printImages();
