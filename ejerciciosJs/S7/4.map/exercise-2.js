
const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

let start = users.map((user) => !user.name.includes("A") ? user.name : "Anacleto");


console.log(start);
