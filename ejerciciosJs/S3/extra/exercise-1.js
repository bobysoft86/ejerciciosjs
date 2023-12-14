const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];


let myUl = document.createElement('ul');

document.body.appendChild(myUl);

for (let index = 0; index < countries.length; index++) {

let myLi = document.createElement('li');
myLi.innerText = countries[index]
myUl.appendChild(myLi);



}