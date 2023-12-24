const getCharacters = async () => {

    let response = await fetch('http://localhost:3000/diary');
    let resJson = await response.json();
    console.log(resJson);
    //fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));

    let myP = document.createElement('p');
    myP.innerText = resJson[0].id;
    document.body.appendChild(myP);


}
getCharacters();
console.log("hola");