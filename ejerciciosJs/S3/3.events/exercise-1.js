let mydiv = document.createElement('div')

document.body.appendChild(mydiv)

const button = document.createElement('button'); 

button.type = 'button'; 
button.innerText = 'Click'; 
mydiv.appendChild(button); 

button.onclick = function(){
    console.log(button)

}

mydiv.setAttribute("id", "btnToClick")
