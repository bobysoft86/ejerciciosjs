// // numeros= [1, 2, 3, 4, 5];

// // const result = numeros.map((num)=> num * 4);

// // console.log (result);


// const vengadores = [  { nombre: "Tony", apellidos: "Stark" },  { nombre: "Steve", apellidos: "Rogers" },  { nombre: "Bruce", apellidos: "Banner" },  { nombre: "Natasha", apellidos: "Romanoff" },  { nombre: "Thor", apellidos: "Odinson" },  { nombre: "Clint", apellidos: "Barton" },];


// const result = vengadores.map({nombre, apellidos})=> `${nombre} ${apellidos} ${i}`;

// // const result = vengadores.map((persona)=> `${persona.nombre} ${persona.apellidos}`);


// console.log (result);



// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const mult3 = numbers.filter((num) => num % 3 == 0); 

// console.log(mult3);

const personas = [ 
     {nombre:"Cristian", edad:25, sexo:"M"},  {nombre:"Ana", edad:20, sexo:"F"},  {nombre:"Fernando", edad:15, sexo:"M"},  {nombre:"Alejandra", edad:11, sexo:"F"},];


     let mayor = personas.find((dato) => dato.sexo == "F" )

     console.log(mayor);