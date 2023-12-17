const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const result = streamers.filter((x) => x.gameMorePlayed == "League of Legends").filter((x) => {
  if (x.age > 35) {
    x.gameMorePlayed = x.gameMorePlayed.toLocaleUpperCase();
  }
  return x;
});

console.log(result);
