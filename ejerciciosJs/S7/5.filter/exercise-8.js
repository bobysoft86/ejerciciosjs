const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
  ];
  
  let action = document.querySelector("input");
  
  
  
  const busqueda = () => {
        
    result = streamers.filter((x) => x.name.includes(action.value))

    console.log(result);
    }


let soyboton = document.querySelector("button");
soyboton.onclick = busqueda;

