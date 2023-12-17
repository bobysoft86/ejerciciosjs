const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

let action = document.querySelector("input");

 action.addEventListener("input", (event) => {
    const result = streamers.filter((nombre) => nombre.name.includes(event.target.value) )
    console.log(result);
});

// const result = streamers.filter((nombre) => nombre.name.includes(data) )
// console.log(data);