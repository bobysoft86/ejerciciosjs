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

const checkInputs = (name,critic,defense,avatar,vitality,damage)=>{
    let newCharacter = [];
    newCharacter = [...newCharacter,
        {name: name ,
        critic: critic,
        defense : defense,
        avatar : avatar,
        vitality: vitality,
        damage: damage
    }]
console.log(newCharacter);
}

const createCharacter = () =>{
   let newCharacter = []
   
    const position = document.querySelector(".c-newCharacter");
    const inputName = document.createElement("input")
    inputName.setAttribute("placeholder", "NAME")
    inputName.setAttribute("type", "text")
    position.appendChild(inputName);

    const inputAvatar = document.createElement("input")
    inputAvatar.setAttribute("placeholder", "URL IMAGE")
    inputAvatar.setAttribute("type", "url")
    position.appendChild(inputAvatar);

    const inputCritic = document.createElement("input")
    inputCritic.setAttribute("placeholder", "CRITIC HIT")
    inputCritic.setAttribute("type", "number")
    position.appendChild(inputCritic);
    
    const inputDefense = document.createElement("input")
    inputDefense.setAttribute("placeholder", "DEFENSE")
    inputDefense.setAttribute("type", "number")
    position.appendChild(inputDefense);

    const inputVitality = document.createElement("input")
    inputVitality.setAttribute("placeholder", "VITALITY")
    inputVitality.setAttribute("type", "number")
    position.appendChild(inputVitality);

    const inputDamage = document.createElement("input")
    inputDamage.setAttribute("placeholder", "DAMAGE")
    inputDamage.setAttribute("type", "string")
    position.appendChild(inputDamage);

    const createButton = document.createElement("button")
    createButton.innerText = "CREATE PLAYER"
    createButton.addEventListener("click", function(){
        
      checkInputs(inputName.value,inputCritic.value,inputDefense.value,inputAvatar.value,inputVitality.value,inputDamage.value);

        fetch(`http://localhost:3000/characters`, {
  method: "POST",
  body: JSON.stringify({
    name:  inputName.value, 
    critic: parseInt (inputCritic.value, 10) ,
    defense : parseInt (inputDefense.value, 10) ,
    avatar : inputAvatar.value,
    vitality: parseInt (inputVitality.value, 10) ,
    damage: [inputDamage.value],
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});


    })

    position.appendChild(createButton);




    

}

const init = async () => {
  let wrapCharacters = document.querySelector(".c-characters");
  let characters = await getCharacters();
  printcharacters(characters, wrapCharacters);
  createCharacter();
};
init();
