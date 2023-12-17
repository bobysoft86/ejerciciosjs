const getCharacters = async () => {

    let response = await fetch('https://rickandmortyapi.com/api/character');
    let resJson = await response.json();
    console.log(resJson);
    //fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}

getCharacters();