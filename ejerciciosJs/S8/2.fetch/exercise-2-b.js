const boton = document.querySelector('button');
const info = document.querySelector('input')
const baseUrl = 'https://api.nationalize.io?name=';


function creatP(text){

const myP = document.createElement('p');
myP.innerText = text;

document.body.appendChild(myP);

}





const getApi = async () => {
    let response = await fetch(baseUrl + info.value);
    let resJson = await response.json();
    console.log(resJson);

   for (let i =0 ; i < resJson.country.length; i++){
    creatP(`El nombre ${info.value} tiene un ${resJson.country[i].probability}  por ciento de ser ${resJson.country[i].country_id} y un ${resJson.country[i+1].probability}porciento de ser de ${resJson.country[i+1].country_id}. `)
    i++;
    }

    // creatP(`${direccion} + ${resJson.country[0].country_id}+${resJson.country[0].probability}`)
    // console.log(resJson.country.length)
    // creatP(`${direccion} + ${resJson.country[1].country_id}+${resJson.country[1].probability}`)
    // creatP(`${direccion} + ${resJson.country[2].country_id}+${resJson.country[2].probability}`)
    // creatP(`${direccion} + ${resJson.country[3].country_id}+${resJson.country[3].probability}`)
    // creatP(`${direccion} + ${resJson.country[4].country_id}+${resJson.country[4].probability}`)
}

boton.onclick = getApi



