const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
let myUl = document.createElement("ul");

document.body.appendChild(myUl);

for (let index = 0; index < cars.length; index++) {
  let myLi = document.createElement("li");
  myLi.setAttribute("data-function", "printHere");
  myLi.innerText = cars[index];
  myUl.appendChild(myLi);
}
