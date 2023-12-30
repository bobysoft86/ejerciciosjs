const imgXUrl = "./public/exercise-4/x.png";
const imgSkullUrl = "./public/exercise-4/skull.png";
const imgChestUrl = "./public/exercise-4/chest.png";
const attempts = document.querySelector('[data-function="attempts"]');

const initGame = () => {
  let columnas = columnsData();
  let filas = rowsData();
  let tresourePositionX = Math.floor(Math.random() * columnas);
  let tresourePositionY = Math.floor(Math.random() * filas);

  createResetButton();
  createMap(columnas, filas, tresourePositionX, tresourePositionY);
};
const columnsData = () => {
  let columns = prompt(`introduce aqui el numero de columnas`, `numero`);
  return columns;
};
const rowsData = () => {
  let rows = prompt(`introduce aqui el numero de filas`, `numero`);
  return rows;
};

const createMap = (x, y, tX, tY) => {
  let contadorclicks = 0;
  for (let j = 0; j < y; j++) {
    let starty = document.querySelector('[data-function="board"]');
    let myDiv = document.createElement("div");
    let myImg = document.createElement("img");
    myImg.setAttribute("src", imgXUrl);
    starty.appendChild(myDiv);
    myDiv.appendChild(myImg);
    myImg.addEventListener("click", function () {
      contadorclicks++;
      attempts.innerHTML = contadorclicks;
      console.log(attempts);
      myImg.setAttribute("src", imgSkullUrl);
    });

    for (let i = 0; i < x - 1; i++) {
      let myImg = document.createElement("img");
      myImg.setAttribute("src", imgXUrl);
      myDiv.appendChild(myImg);
      if ((i == tX) & (j == tY)) {
        myImg.addEventListener("click", function () {
          contadorclicks++;
          attempts.innerHTML = contadorclicks;
          myImg.setAttribute("src", imgChestUrl);
        });
      } else {
        myImg.addEventListener("click", function () {
          contadorclicks++;
          attempts.innerHTML = contadorclicks;
          myImg.setAttribute("src", imgSkullUrl);
        });
      }
    }
  }
};

const createResetButton = () => {
  let buttonReset = document.createElement("button");
  buttonReset.innerText = "RELOAD MAP";
  attempts.appendChild(buttonReset);
  const reload = buttonReset.addEventListener("click", function () {
    location.reload();
  });
};

initGame();
