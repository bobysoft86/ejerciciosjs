let myDivPlanets = document.querySelector('[data-function="planets"]');
let searchButton = document.querySelector('[data-function="search"]');
let myDivCharacters = document.querySelector('[data-function="characters"]');

searchButton.style.display = "flex";
searchButton.style.flexDirection = "row";
searchButton.style.justifyContent = "space-evenly";

myDivPlanets.style.flexDirection = "row";
myDivPlanets.style.justifyContent = "space-evenly";
myDivCharacters.style.justifyContent = "space-evenly";

const getPlanets = async () => {
  let response = await fetch(`http://localhost:3000/planets`);
  let resJson = await response.json();
  return resJson;
};
const getCharacters = async (id) => {
  let response = await fetch(`http://localhost:3000/characters?idPlanet=${id}`);
  let resJson = await response.json();
  return resJson;
};

const printImages = async (data) => {
  for (const planet of data) {
    let myPlanetImg = document.createElement("img");

    myPlanetImg.setAttribute("src", planet.image);
    myPlanetImg.style.width = "300px";
    myPlanetImg.addEventListener("click", async () => {
      let characters = await getCharacters(planet.id);
      myDivCharacters.innerHTML = "";
      for (const character of characters) {
        let myDivCharacter = document.createElement("div");
        myDivCharacter.setAttribute("class", character.name);
        myDivCharacter.style.display = "flex";
        myDivCharacter.style.flexDirection = "column";
        myDivCharacter.style.alignItems = "center";
        let myImgCharacter = document.createElement("img");
        let myPcharacter = document.createElement("p");
        myPcharacter.innerText = character.name;
        myImgCharacter.setAttribute("src", character.avatar);
        myImgCharacter.style.height = "300px";
        myDivCharacters.appendChild(myDivCharacter);
        myDivCharacter.appendChild(myImgCharacter);
        myDivCharacter.appendChild(myPcharacter);
        myImgCharacter.addEventListener("click", function () {
          let myDescription = document.createElement("p");
          myDescription.innerText = character.description;
          myPcharacter.appendChild(myDescription);
          console.log("soy el click");
          myImgCharacter.addEventListener("click", function () {
            myPcharacter.remove(myDescription);
          });
        });
      }
    });
    myDivPlanets.appendChild(myPlanetImg);
  }
};

const search = () => {
  const input = document.createElement("input");
  const buton = document.createElement("button");

  buton.innerText = "SEARCH";
  searchButton.appendChild(input);
  searchButton.appendChild(buton);

  input.addEventListener("input", function () {
    const elementos = myDivCharacters.querySelectorAll("div");

    for (const nombre of elementos) {
      if (!nombre.classList.value.includes(input.value)) {
        nombre.style.opacity = 0;
      }
      if (nombre.classList.value.includes(input.value)) {
        nombre.style.opacity = 1;
      }

      console.log(nombre.classList.value.includes(input.value));

      console.log(input.value);
    }
  });
};

const init = async () => {
  let planets = await getPlanets();
  search();
  printImages(planets);
};
init();
