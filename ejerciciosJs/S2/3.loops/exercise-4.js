const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]

let cont = 0;
for(let value of toys){
    cont++;
    // console.log(cont)
    if (value?.name.includes("gato")){
        delete toys[cont-1];
        // console.log(cont);
    }
}
const result = toys.filter(item => item.length !== 0);

console.log(result);
