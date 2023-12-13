let position = document.querySelectorAll(".fn-insert-here");

for (let i = 0; i < position.length; i++) {
  let miP = document.createElement("p");
  miP.innerText = "Voy dentro!";
  position[i].appendChild(miP);
}

console.log(position);
