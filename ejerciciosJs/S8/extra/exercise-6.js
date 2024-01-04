let chfight = [];

const shuffle =(array)=> {
  array.sort(() => Math.random() - 0.5)
  return array
}
const checkFight = () => {
  if (chfight.length === 2) {
    let arena = document.querySelector('[data-function="arena"]');
    let buttonFight = document.createElement("button");
    buttonFight.innerText = "FIGHT";
    arena.appendChild(buttonFight);
    buttonFight.addEventListener("click", function () {
      combat(chfight);
    });

    alert("PRESS FIGHT BUTTON");
  }
  if (chfight.length > 2) {
    chfight = [];
  }
};

const combat = (chfight) => {
  let erase = document.querySelector(".c-characters");
  
  shuffle(chfight);

  let player1 = chfight[0];
  let player2 = chfight[1];

  erase.remove();
  printcharacters(chfight, document.querySelector('[data-function="arena"]'));

  while (player1.vitality > 0 || player2.vitality > 0) {
    let attackp1 = hit(player1.damage, player1.critic);
    let attackp2 = hit(player2.damage, player2.critic);
 
    let myPcombat = document.createElement("p")
    player1.vitality -= attackp2;
    player2.vitality -= attackp1;
    console.log(player1.vitality);
    console.log(player2.vitality);

       myPcombat.innerText = 
        `atack p1 ${attackp1} atack p2 ${attackp2}
        vitality p1  ${player1.vitality} vitality p2  ${player2.vitality}`
        document.querySelector('[data-function="arena"]').appendChild(myPcombat);

    if (player1.vitality <= 0) {
      myPcombat.innerText = `${player1.name} loses`
      document.querySelector('[data-function="arena"]').appendChild(myPcombat);

      console.log(`${player1.name} loses`);
      break;
    }
    if (player2.vitality <= 0) {
       myPcombat.innerText = `${player2.name} loses`
       document.querySelector('[data-function="arena"]').appendChild(myPcombat);

       console.log(`${player2.name} loses`);
      break;
    }
  }
  let buttonreset = document.createElement("button")
  buttonreset.innerText = "Reset"
  document.querySelector('[data-function="arena"]').appendChild(buttonreset);
  buttonreset.addEventListener("click", function(){
    location.reload();
 })
};

const hit = (attackValues, critic) => {
  let result = 0;

  for (const tirada of attackValues) {
    let tiradas = obtenerNumeros(tirada)[0];
    let numeroCaras = obtenerNumeros(tirada)[1];

    for (let index = 0; index < tiradas; index++) {
      let dado = Math.floor(Math.random() * numeroCaras);
   console.log("soy dado" + dado)

      if (dado == critic) {
        dado = dado * 2;
        result = result + dado;
      }
      result = result + dado;
    }
  }
  return result;
  // console.log( attackValues)
};

const obtenerNumeros = (cadena) => {
  const numeros = cadena.match(/\d+/g);
  return numeros ? numeros.map(Number) : [];
};

const getCharacters = async () => {
  let response = await fetch(`http://localhost:3000/characters`);
  let resJson = await response.json();
  return resJson;
};

const printcharacters = (characters, position) => {
  for (const character of characters) {
    const myDIvCharacter = document.createElement("div");
    position.appendChild(myDIvCharacter);
    myDIvCharacter.addEventListener("click", function () {
      chfight = [...chfight, character];
      // console.log(chfight);
      checkFight();
    });
    const myImgCharacter = document.createElement("img");
    myImgCharacter.setAttribute("src", character.avatar);
    myDIvCharacter.appendChild(myImgCharacter);

    const myStatsCharacter = document.createElement("p");
    myStatsCharacter.innerText = `ATTACK: ${character.damage}
        DEFENSE: ${character.defense}Pt
        CRITIC: ${character.critic}Pt
        VITALITY: ${character.vitality}Pt`;
    myDIvCharacter.appendChild(myStatsCharacter);
  }
};

const init = async () => {
  let wrapCharacters = document.querySelector(".c-characters");
  let characters = await getCharacters();
  printcharacters(characters, wrapCharacters);
};
init();
