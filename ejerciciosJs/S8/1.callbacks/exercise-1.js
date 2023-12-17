const numbersList = [];

function sum(a, b) {
  return (a + b);
}

function substract(a, b) {
  return (a - b);
}

function father(a, b, fun) {
  const result = fun(a,b);
   numbersList.push(result);

}


father(6,8,substract);
console.log(numbersList);

// seria con proteccion de erroes 
//{
//   if (funcion == sum) {
//     return numbersList.push(sum(a, b));
//   } else if (funcion == substract) {
//     return numbersList.push(substract(a, b));
//   } else if (!funcion) {
//     return "te falta la funcion";
//   } else if (!Number.isInteger(a) || !Number.isInteger(b)) {
//     return "solo numeros";
//   } else {
//     return " te falta algun elemento fenomeno";
//   }
// }

console.log(father(50, 20));
