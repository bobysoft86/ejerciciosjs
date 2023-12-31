let myDivPlanets = document.querySelector('[data-function="planets"]')
let myDivCharacters = document.querySelector('[data-function="characters"]')

myDivPlanets.style.flexDirection = "row";
myDivPlanets.style.justifyContent = "space-evenly"
myDivCharacters.style.justifyContent = "space-evenly"


const getPlanets = async() =>{
    let response = await fetch(`http://localhost:3000/planets`);
    let resJson = await response.json();
    return resJson;

}
const getCharacters = async(id) =>{
    let response = await fetch(`http://localhost:3000/characters?idPlanet=${id}`);
    let resJson = await response.json();
    return resJson;

}

const printImages = async(data) =>{
    for (const planet of data) {
        let myPlanetImg= document.createElement("img")
        console.log(planet.id);

         myPlanetImg.setAttribute("src", planet.image)
         myPlanetImg.style.width = "300px"
         myPlanetImg.addEventListener("click", async ()=> {
            let characters = await getCharacters(planet.id);
            myDivCharacters.innerHTML = "";
            for (const character of characters) {
                let myDivCharacter = document.createElement("div")
                myDivCharacter.style.display = "flex";
                myDivCharacter.style.flexDirection = "column";
                myDivCharacter.style.alignItems = "center";
                let myImgCharacter = document.createElement("img")
                let myPcharacter = document.createElement("p")
                myPcharacter.innerText = character.name;
                myImgCharacter.setAttribute("src", character.avatar)
                myImgCharacter.style.height = "300px"

                myDivCharacters.appendChild(myDivCharacter);
                myDivCharacter.appendChild(myImgCharacter)
                myDivCharacter.appendChild(myPcharacter)
                console.log(character.avatar);
            }
         })
        myDivPlanets.appendChild(myPlanetImg);

        
    }
    
    // console.log(data)
}



const init = async() =>{
    let planets = await getPlanets();

    printImages(planets);

}
init();

