const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

let i = 0;
for (let valor of placesToTravel) {
  i++;
  for (const valores in valor) {
    if (valor.id == 11 || valor.id == 40) {
      //console.log(i);
      delete placesToTravel[i];
      //console.log(valor);
      placesToTravel.splice(i,1);
    }
    // console.log(placesToTravel.valores);
  }
}
console.log(placesToTravel);
