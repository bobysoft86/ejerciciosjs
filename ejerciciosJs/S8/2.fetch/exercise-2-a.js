const boton = document.querySelector('button');
const info = document.querySelector('input')
const baseUrl = 'https://api.nationalize.io?name=';




const direccion = info.addEventListener("input", (event) => {
    
    const result = event.target.value
    console.log(result);
    return event.target.value;
} )

console.log(direccion)



const getApi = async () => {
    let response = await fetch(baseUrl + direccion);
    let resJson = await response.json();
    console.log(resJson);
}

boton.onclick = getApi



