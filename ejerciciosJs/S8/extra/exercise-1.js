const getCharacters = async () => {

    let response = await fetch('https://digi-api.com/api/v1/digimon');
    let resJson = await response.json();
    console.log(resJson.content.lenght);


for(let i = 0; i < resJson.content.length;i++){

    let myDiv = document.createElement('div');
    let myImg = document.createElement('img');
    let myP = document.createElement('p');
    myImg.setAttribute("src",resJson.content[i].image)
    myP.innerText = resJson.content[i].name;
    
    
    document.body.appendChild(myDiv)
    myDiv.appendChild(myP)
    myDiv.appendChild(myImg)
}


}


document.body.style.display = 'flex';
document.body.style.flexDirection = "row";
document.body.style.flexWrap = "wrap";




console.log()





getCharacters();

