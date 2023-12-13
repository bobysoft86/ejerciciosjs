const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let mydiv = document.createElement('div');
let myul = document.createElement('ul')
document.body.appendChild(mydiv);
mydiv.appendChild(myul)
for (let index = 0; index < apps.length; index++) {

    let myli = document.createElement('li')
    myul.appendChild(myli)
    myli.textContent = apps[index]
}


