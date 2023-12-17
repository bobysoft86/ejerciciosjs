const userAnwsers = [];



function confirmExample(description){
  return confirm(description);
}

function promptExample(description){
    return prompt(description);
}

function father(description, funcion){
   const result = (funcion(description))
   userAnwsers.push(result);

}
father("¿Te gusta este ejemplo?", confirmExample);
father("Ingresa tu nombre:", promptExample);

console.log(userAnswers);
  console.log(userAnwsers)
