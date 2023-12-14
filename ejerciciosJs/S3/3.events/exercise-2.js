const texto = document.querySelector('input[type ="text"')

texto.addEventListener('focus', (event) => {
    console.log(event.target);
} )