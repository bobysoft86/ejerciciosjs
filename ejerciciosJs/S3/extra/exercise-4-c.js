const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  
  
  for (const valor of countries) {

      let myDiv = document.createElement("div");
      document.body.appendChild(myDiv);
      let myText = document.createElement("h4");
      myDiv.appendChild(myText);
      myText.textContent = valor.title;
      let myImg = document.createElement("img");
      myDiv.appendChild(myImg);
      myImg.setAttribute("src", valor.imgUrl);
      
    let btn1 = document.createElement('button');
    myDiv.appendChild(btn1);
    btn1.innerText = "borrar imagen";
    btn1.setAttribute("id", "btn1");
    btn1.addEventListener('click', () => destruirUltimo(myDiv));

    }
    
    
    const destruirUltimo = (ultimo) => {
        let bloquesdiv = document.querySelectorAll("div");
       // let ultimo = bloquesdiv.length;
       ultimo.remove()
       console.log(ultimo); 
       // bloquesdiv[ultimo - 1].remove();
        // console.log(bloquesdiv.length);
    };

   
 
    
    // let buttonDestroy = document.querySelector("button");
    
    // buttonDestroy.onclick = destruirUltimo;
  
  
  //version anterior sin funcion arrow 
  // buttonDestroy.onclick = function() {
  
  //   let bloquesdiv = document.querySelectorAll('div')
  //     let ultimo = bloquesdiv.length;
  //     bloquesdiv[ultimo - 1].remove();
  //     console.log(bloquesdiv.length);
  
  //   }
  //   console.log();
  